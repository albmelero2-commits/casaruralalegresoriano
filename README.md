# Web para casa rural (GitHub Pages + Google Docs)

Web estática, gratuita y adaptable a móviles. Incluye un enlace al documento Google Docs indicado y lo muestra en la página. No necesita servidor ni base de datos.

## 1. Personalizar

Edita `config.js` para cambiar el nombre, el subtítulo y el identificador de Google Docs. El nombre y el subtítulo no se actualizan desde Google Docs: son textos de la web que se cambian en `config.js`.

## 2. Permisos del documento (IMPORTANTE)

En Google Docs > Compartir:
- Para que cualquier visitante vea el documento, en "Acceso general" selecciona **Cualquier persona con el enlace** y el permiso **Lector**. Esto puede exponer datos personales, por lo que revisa primero su contenido.
- Para que determinadas personas puedan modificarlo, añádelas individualmente con permiso **Editor**. Deben iniciar sesión con su cuenta Google.
- No selecciones "Cualquier persona con el enlace: Editor" si no quieres que cualquier visitante pueda alterar su contenido.

Google Docs puede bloquear la vista si la cuenta no tiene permisos. Hay un enlace para abrirlo en una pestaña nueva. Google Docs guarda los cambios automáticamente; las personas que consulten el documento pueden pulsar **Actualizar vista**.

## 3. Publicar en GitHub Pages

1. Crea un repositorio nuevo en github.com, por ejemplo `casa-rural`.
2. Sube a la raíz los archivos `index.html`, `styles.css`, `config.js` y `script.js`.
3. En el repositorio entra en **Settings > Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`; guarda los cambios.
5. Tu web tendrá una URL similar a `https://TUUSUARIO.github.io/casa-rural/`.

El repositorio público es visible para cualquiera; no subas información privada ni credenciales.

## 4. ¿Qué puede editarse sin tocar GitHub?

- **El documento**: el contenido compartido se edita en Google Docs por las personas con permiso de Editor.
- **La web (colores, encabezado, estructura, etc.)**: para cambiarla hay que modificar los archivos de GitHub.

Esta solución no proporciona un panel de edición de toda la web ni sincroniza automáticamente las secciones de presentación con el documento. Para una web más completa (fichas, fotos, tarifas, calendario, reservas) con administración desde el navegador, es necesario añadir un CMS o un servicio externo.

## Seguridad

No introduzcas claves de acceso en los archivos. Google Docs administra los permisos y el historial de cambios. El hecho de que la web sea pública no concede permisos de edición del documento.
