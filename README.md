# Dashboard CapturaLeads

**Panel de Gestión de Leads para Clientes**

---

## 📋 Descripción

Este es el **Dashboard de CapturaLeads**, la aplicación web donde los clientes pueden gestionar todos los leads capturados a través de sus landing pages personalizadas. 

**Nota:** Este repositorio contiene el dashboard de gestión. Para la landing page de marketing de CapturaLeads, ver el repositorio `capturaleads.com`.

### Funcionalidades del Dashboard
- Visualización en tiempo real de leads capturados
- Analytics y métricas de conversión
- Gestión y exportación de datos
- Creación de nuevas landing pages
- Configuración de emails automáticos

---

## ✨ Características Principales

### 🎯 Captura de Leads
- **Landing pages personalizadas** con formularios optimizados
- **Diseño responsive** adaptado a todos los dispositivos
- **Formularios personalizables** según las necesidades del cliente
- **Links únicos** para cada campaña o producto

### 📊 Dashboard de Gestión
- **Visualización en tiempo real** de todos los leads capturados
- **Analytics y métricas** de conversión
- **Filtros y búsqueda avanzada** para gestión de datos
- **Exportación de datos** en múltiples formatos

### 📧 Automatización de Emails
- **Envío automático** de información al lead registrado
- **Templates personalizables** por cliente
- **Seguimiento de apertura** y engagement

### 🔐 Gestión de Datos
- **Base de datos segura** y organizada
- **Segmentación de leads** por campaña, fecha, origen
- **Historial completo** de interacciones

---

## 🏗️ Estructura del Proyecto

```
Workspace-capturaleads.com/
├── header-workspace.html              # Header completo del workspace
├── header-workspace-logged-out.html   # Header para usuarios sin sesión
├── header-workspace-logged-in.html    # Header para usuarios con sesión
├── footer-workspace.html              # Footer compacto del workspace
├── acceso-workspace-logged-out.html   # Acceso con login/registro (pestañas)
├── acceso-workspace-logged-in.html    # Acceso directo al workspace
├── sidebar-dashboard.html             # Sidebar de navegación
├── vista-leads.html                   # Vista principal de leads
└── README.md                          # Este archivo
```

**Nota:** Todos los archivos HTML son snippets independientes listos para usar en WordPress/Elementor.

## 📁 Componentes del Dashboard

### 🔐 Headers de Autenticación

#### `header-workspace-logged-out.html`
Header para usuarios **sin sesión iniciada**:
- Logo de CapturaLeads con icono 🎯
- Subtítulo "Gestión de Leads"
- Botón "Acceder a Workspace" con gradiente
- Diseño limpio y minimalista
- Responsive completo

#### `header-workspace-logged-in.html`
Header para usuarios **con sesión activa**:
- Logo de CapturaLeads con icono 🎯
- Subtítulo "Panel de Control"
- Botón "Dashboard" (acceso rápido al panel)
- Botón "Cerrar Sesión" (logout)
- Diseño responsive con iconos en móvil

#### `header-workspace.html`
Header completo con todas las opciones:
- Botones: Dashboard, Mis Leads, Ayuda, Salir
- Avatar de usuario
- Notificaciones
- Ideal para panel de cliente completo

### 🚪 Acceso al Workspace

#### `acceso-workspace-logged-out.html`
Sección de acceso para usuarios **sin sesión**:
- Dos tarjetas: Iniciar Sesión y Crear Cuenta
- Integración con shortcodes de WordPress:
  - `[user_registration_login]` - Formulario de login
  - `[user_registration_form id="28"]` - Formulario de registro
- Diseño con tarjetas elevadas y efectos hover
- Iconos distintivos para cada opción
- Responsive completo

#### `acceso-workspace-logged-in.html`
Sección de acceso para usuarios **con sesión activa**:
- Mensaje de bienvenida personalizado
- Botón principal "Ir a mi Workspace"
- Redirección a: `https://workspace.capturaleads.com/user/`
- Quick stats con 3 indicadores (Dashboard, Leads, Emails)
- Animaciones y efectos visuales
- Diseño centrado y atractivo

### 📊 Componentes de Visualización

#### `footer-workspace.html`
Footer compacto para el workspace:
- Logo de CapturaLeads con icono 🎯
- Links rápidos: Ayuda, Términos, Privacidad, Contacto
- Copyright © 2026
- Diseño minimalista y responsive
- Color sólido #2966ff (sin gradientes)

#### `sidebar-dashboard.html`
- Navegación lateral del dashboard
- Menú de opciones principales
- Diseño con gradiente de marca

#### `vista-leads.html`
- Vista principal de gestión de leads
- Tabla de datos con filtros
- Estadísticas y métricas

---

## 🎨 Diseño y Branding

### Colores Principales
- **Primario:** `#2966ff` (Azul brillante)
- **Secundario:** `#764ba2` (Morado)
- **Gradiente:** `linear-gradient(135deg, #2966ff 0%, #764ba2 100%)`
- **Acento:** `#ffd700` (Dorado)

### Tipografía
- **Fuente principal:** Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Pesos:** 400 (regular), 600 (semi-bold), 700 (bold)

---

## 💼 Caso de Uso: IDEMAB - Diplomado Respiring

### Componentes Implementados
1. **Snippet de Información del Diplomado**
   - Detalles completos del programa
   - Precios y modalidades
   - Call-to-action para registro

2. **Email Informativo**
   - Confirmación de registro
   - Información detallada del diplomado
   - Próximos pasos

3. **Snippet de Video + Formulario**
   - Video promocional del diplomado
   - Formulario de captura integrado
   - Diseño optimizado para conversión

### Flujo de Trabajo
1. **Lead accede** al link personalizado
2. **Visualiza** información del diplomado y video
3. **Se registra** mediante el formulario
4. **Recibe** email automático con información
5. **Empresa visualiza** el lead en el dashboard
6. **Gestión** y seguimiento del prospecto

---

## 🚀 Beneficios para Clientes

- ✅ **Profesionalismo:** Landing pages de alta calidad
- ✅ **Automatización:** Ahorro de tiempo en gestión manual
- ✅ **Organización:** Todos los leads en un solo lugar
- ✅ **Analytics:** Datos para tomar mejores decisiones
- ✅ **Escalabilidad:** Crece con tu negocio
- ✅ **Soporte:** Asistencia técnica incluida

---

## 📞 Contacto

- **Email:** contacto@capturaleads.com
- **Teléfono:** +52 33 1234 5678
- **Horario:** Lun - Vie: 9am - 6pm (GMT-6)

---

## 📄 Licencia

© 2026 CapturaLeads. Todos los derechos reservados.

---

## 🔄 Versión

**v2.2.0** - 10 de enero de 2026

### ✨ Nuevas Características
- Sistema de pestañas en acceso workspace (login/registro)
- Footer compacto del workspace
- Vista de leads completa con tabla y estadísticas
- Sidebar de navegación optimizado

### 🎨 Mejoras de Diseño
- Headers ultra-compactos (40px altura, ahorro de 35% espacio)
- Color sólido #2966ff (sin gradientes)
- Todos los snippets sin padding externo
- Clases CSS únicas para evitar conflictos

### 🔧 Optimizaciones Técnicas
- Todos los archivos convertidos a snippets puros
- Sin estructura HTML (DOCTYPE, head, body)
- CSS inline encapsulado
- Ancho 100% adaptable a Elementor
- URLs actualizadas a workspace.capturaleads.com
- URL de logout con WordPress nonce

### 📦 Componentes Incluidos
- ✅ 2 Headers (logged-in, logged-out)
- ✅ 1 Footer compacto
- ✅ 2 Páginas de acceso (logged-in, logged-out con pestañas)
- ✅ 1 Sidebar de navegación
- ✅ 1 Vista de leads completa

### 🎯 Listo para Producción
- Diseño 100% responsive
- Compatible con WordPress/Elementor
- Sin conflictos de estilos
- Optimizado para performance
