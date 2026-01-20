// -----------------------------------------------------------------------------
// GOOGLE APPS SCRIPT CODE - UNIFREUD BACKEND (ROBUST VERSION)
// Archivo: Code.gs (en el editor de scripts de su Google Sheet)
// -----------------------------------------------------------------------------

function doGet(e) {
    // 1. Configuración de Pestañas Permitidas
    const ALLOWED_TABS = [
        "Aplicacion Pruebas Psicometricas",
        "Clinica Psicoanalitica Lacaniana",
        "Psicopatologia Psicoanalitica",
        "Psicosomatica Psicoanalitica",
        "Tanatologia Clinica Psicoanalitica"
    ];

    try {
        // 2. Obtener el parámetro 'sheet'
        const sheetName = e.parameter.sheet;

        // Validamos que se envíe el parámetro, pero dejamos que la búsqueda fuzzy determine si existe la hoja.
        if (!sheetName) {
            return responseError("Falta el parámetro 'sheet'.");
        }

        // 3. Obtener la hoja (Búsqueda Fuzzy: Ignora acentos y mayúsculas)
        const ss = SpreadsheetApp.getActiveSpreadsheet();
        const sheets = ss.getSheets();
        let sheet = null;

        // Función Helper para normalizar (minúsculas, sin acentos, sin espacios extras)
        const normalize = (str) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        const targetName = normalize(sheetName);

        // Buscar la hoja que coincida
        for (let s of sheets) {
            if (normalize(s.getName()) === targetName) {
                sheet = s;
                break;
            }
        }

        if (!sheet) {
            // Fallback: Intenta también coincidencia parcial si es necesario, o error.
            // Listar nombres disponibles para debug
            const availableNames = sheets.map(s => s.getName()).join(", ");
            return responseError(`No se encontró la pestaña: '${sheetName}'. Pestañas disponibles: [${availableNames}]`);
        }

        // 4. Leer datos
        const data = sheet.getDataRange().getValues();

        if (data.length < 2) {
            return responseJSON([]); // Sin datos
        }

        const headers = data[0]; // Encabezados
        const rows = data.slice(1); // Datos

        // 5. Mapeo Inteligente (Busca por sinónimos)
        const formattedData = rows.map(row => {
            let item = {};

            // Intenta encontrar la columna con varios nombres posibles
            item.nombre = getValue(row, headers, ["Nombre", "Name", "Nombre completo", "Full Name"]);
            item.telefono = getValue(row, headers, ["Telefono", "Teléfono", "Celular", "Phone", "Mobile", "Whatsapp"]);
            item.email = getValue(row, headers, ["Correo", "Email", "E-mail", "Correo electrónico", "Mail"]);
            item.form_name = getValue(row, headers, ["Form_Name", "Formulario", "Form Name"]);
            item.fecha = getValue(row, headers, ["Fecha_Hora", "Fecha", "Date", "Timestamp", "Created at"]);
            item.estado = getValue(row, headers, ["Estado", "Status", "Etapa"]) || "Nuevo";

            item.source = sheetName;

            return item;
        });

        return responseJSON(formattedData);

    } catch (error) {
        return responseError("Error en servidor: " + error.toString());
    }
}

// Helper robusto para encontrar valores
function getValue(row, headers, candidates) {
    if (!Array.isArray(candidates)) candidates = [candidates];

    // Normalizar encabezados del sheet (trim + lowercase)
    const normalizedHeaders = headers.map(h => h.toString().trim().toLowerCase());

    for (let candidate of candidates) {
        const normalizedCandidate = candidate.toString().trim().toLowerCase();
        const index = normalizedHeaders.indexOf(normalizedCandidate);

        if (index !== -1) {
            return row[index];
        }
    }
    return ""; // No se encontró
}

function responseJSON(data) {
    return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

function responseError(message) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: message })).setMimeType(ContentService.MimeType.JSON);
}
