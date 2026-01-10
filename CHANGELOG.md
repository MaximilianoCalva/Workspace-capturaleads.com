# Workspace CapturaLeads - Changelog

## v2.2.0 - 10 de enero de 2026

### ✨ Nuevas Características
- **Sistema de pestañas**: Acceso workspace con tabs para alternar entre login y registro
- **Footer workspace**: Footer compacto con links legales y copyright
- **Vista de leads**: Dashboard completo con tabla, filtros, estadísticas y paginación
- **Sidebar optimizado**: Menú de navegación simplificado como snippet puro

### 🎨 Mejoras de Diseño
- **Headers ultra-compactos**: Reducción de altura de 60px a 40px (35% menos espacio)
- **Color sólido**: Eliminación de gradientes, uso exclusivo de #2966ff
- **Sin padding externo**: Todos los snippets sin espaciado para que Elementor controle el layout
- **Clases únicas**: Prefijos específicos para evitar conflictos CSS

### 🔧 Optimizaciones Técnicas
- **Snippets puros**: Eliminada estructura HTML completa (DOCTYPE, head, body, script)
- **CSS inline encapsulado**: Cada snippet con sus estilos aislados
- **Ancho 100%**: Adaptable al contenedor de Elementor
- **URLs actualizadas**: Migración de dashboard.capturaleads.com a workspace.capturaleads.com
- **Logout WordPress**: URL con nonce de seguridad para cerrar sesión

### 📦 Componentes Finales
1. `header-workspace-logged-out.html` - Header sin sesión (40px altura)
2. `header-workspace-logged-in.html` - Header con sesión (40px altura)
3. `footer-workspace.html` - Footer compacto
4. `acceso-workspace-logged-out.html` - Login/Registro con pestañas
5. `acceso-workspace-logged-in.html` - Acceso directo al workspace
6. `sidebar-dashboard.html` - Menú de navegación lateral
7. `vista-leads.html` - Dashboard de gestión de leads

### 🔄 Cambios de Nomenclatura
- "Dashboard" → "Workspace" en todos los textos y URLs
- Clases CSS con prefijos únicos:
  - `.capturaleads-header-logged-out`
  - `.capturaleads-header-logged-in-v2`
  - `.workspace-footer`
  - `.workspace-access-logged-out`
  - `.workspace-access-logged-in`
  - `.workspace-sidebar`
  - `.leads-dashboard-view`

### 🎯 Compatibilidad
- ✅ WordPress 5.0+
- ✅ Elementor 3.0+
- ✅ Responsive: Desktop, Tablet, Mobile
- ✅ Navegadores: Chrome, Firefox, Safari, Edge

### 📝 Notas de Uso
- Copiar HTML completo en widget HTML de Elementor
- No requiere CSS externo
- No requiere JavaScript externo (excepto acceso-workspace-logged-out.html para pestañas)
- Elementor maneja todo el espaciado y layout

---

## v2.1.0 - 9 de enero de 2026
- Headers de autenticación creados
- Integración con shortcodes WordPress
- Color de marca actualizado

## v2.0.0 - Enero 2026
- Lanzamiento inicial del workspace
- Componentes base creados
