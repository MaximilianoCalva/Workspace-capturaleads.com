// -----------------------------------------------------------------------------
// GOOGLE APPS SCRIPT CODE
// Archivo: Code.gs (en el editor de scripts de su Google Sheet)
// -----------------------------------------------------------------------------

function doGet(e) {
  // 1. Configuración
  const SHEET_TAB_NAME = "Captación SaaS"; // Nombre exacto de la pestaña

  try {
    // 2. Obtener la hoja
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_TAB_NAME);

    if (!sheet) {
      return responseError("No se encontró la pestaña: " + SHEET_TAB_NAME);
    }

    // 3. Leer datos
    const data = sheet.getDataRange().getValues();
    
    if (data.length < 2) {
      // Si solo hay encabezados o está vacía
      return responseJSON([]); 
    }

    const headers = data[0]; // Primera fila (Encabezados)
    const rows = data.slice(1); // El resto de filas (Datos)

    // 4. Mapeo de Columnas (Google Sheet -> JSON Key)
    // Ajusta las keys según como quieres recibirlas en el HTML
    const formattedData = rows.map(row => {
      let item = {};
      
      // Buscamos el índice de cada columna por nombre para ser más seguros
      // Si cambias el orden en el sheet, esto sigue funcionando
      
      item.nombre = getValue(row, headers, "Nombre");
      item.telefono = getValue(row, headers, "Telefono");
      item.email = getValue(row, headers, "Correo");
      item.acepto = getValue(row, headers, "Acepto");
      item.form_name = getValue(row, headers, "Form_Name");
      item.fecha = getValue(row, headers, "Fecha_Hora");
      item.campana = getValue(row, headers, "Campaña");
      item.estado = "Nuevo"; // Valor por defecto para el frontend si no existe en el sheet

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
  const index = headers.indexOf(headerName);
  if (index === -1) return ""; // Si no encuentra la columna devuelve vacío
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

// -----------------------------------------------------------------------------
// INSTRUCCIONES DE DESPLIEGUE:
// 1. Ir a Extensiones > Apps Script
// 2. Pegar este código.
// 3. Arriba a la derecha: "Implementar" > "Nueva implementación".
// 4. Tipo: "Aplicación web".
// 5. Descripción: "API LeadHub".
// 6. Ejecutar como: "Yo" (Tu usuario).
// 7. Quién tiene acceso: "Cualquier usuario" (Importante para que el HTML pueda leerlo).
// 8. Copiar la URL generada (Web App URL) y compartirla.
// -----------------------------------------------------------------------------
