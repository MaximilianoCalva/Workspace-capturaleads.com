// -----------------------------------------------------------------------------
// GOOGLE APPS SCRIPT CODE - CAPTURA LEADS BACKEND (FLEXIBLE)
// Archivo: Code.gs (en el editor de scripts de su Google Sheet)
// -----------------------------------------------------------------------------

function doGet(e) {
  try {
    // 1. Obtener el parámetro 'sheet' de la URL (ej: ?sheet=Captación SaaS)
    // Si no se especifica, usa una por defecto si quieres, o devuelve error.
    let sheetName = e.parameter.sheet;

    // Default si no se pasa nada (para compatibilidad con tu sistema actual si es necesario)
    if (!sheetName) {
      sheetName = "Captación SaaS";
    }

    // 2. Obtener la hoja
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(sheetName);

    if (!sheet) {
      return responseError("No se encontró la pestaña en el Sheet: " + sheetName);
    }

    // 3. Leer datos (DataRange toma todo lo que tenga datos, sin límite de filas)
    const data = sheet.getDataRange().getValues();

    if (data.length < 2) {
      // Si solo hay encabezados o está vacía
      return responseJSON([]);
    }

    const headers = data[0]; // Primera fila (Encabezados)
    const rows = data.slice(1); // El resto de filas (Datos)

    // 4. Mapeo Flexible (Detecta columnas comunes)
    const formattedData = rows.map(row => {
      let item = {};

      // Mapeo básico de columnas esperadas
      item.nombre = getValue(row, headers, "Nombre");
      item.telefono = getValue(row, headers, "Telefono");
      item.email = getValue(row, headers, "Correo");
      item.acepto = getValue(row, headers, "Acepto");
      item.form_name = getValue(row, headers, "Form_Name");
      item.fecha = getValue(row, headers, "Fecha_Hora");
      item.campana = getValue(row, headers, "Campaña");
      item.estado = getValue(row, headers, "Estado") || "Nuevo";

      // Metadatos útiles
      item.source = sheetName;

      return item;
    });

    // 5. Devolver JSON
    return responseJSON(formattedData);

  } catch (error) {
    return responseError(error.toString());
  }
}

// Helper para obtener valor buscando el header
function getValue(row, headers, headerName) {
  // Case insensitive search para robustez
  const index = headers.findIndex(h => h.toString().toLowerCase() === headerName.toLowerCase());

  if (index === -1) return "";
  return row[index];
}

// Helper para respuesta JSON exitosa
function responseJSON(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// Helper para respuesta de Error
function responseError(message) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "error", message: message }))
    .setMimeType(ContentService.MimeType.JSON);
}
