(() => {
  const config = window.CASA_RURAL || {};
  const id = String(config.googleDocId || '').trim();
  const nombre = String(config.nombre || 'Nuestra casa rural');
  const subtitulo = String(config.subtitulo || 'Consulta la información compartida.');
  document.title = `${nombre} | Información compartida`;
  document.querySelector('#marca').textContent = nombre;
  document.querySelector('#titulo-principal').textContent = nombre;
  document.querySelector('#pie-nombre').textContent = nombre;
  document.querySelector('#subtitulo').textContent = subtitulo;
  document.querySelector('#anio').textContent = new Date().getFullYear();

  if (!/^[A-Za-z0-9_-]{15,}$/.test(id)) {
    document.querySelector('.document-frame').innerHTML = '<p class="error">Configura un ID de Google Docs válido en config.js.</p>';
    return;
  }
  const base = `https://docs.google.com/document/d/${encodeURIComponent(id)}`;
  const editUrl = `${base}/edit`;
  const previewUrl = `${base}/preview`;
  const frame = document.querySelector('#documento-iframe');
  const refresh = () => {
    // Recargar la vista sin cambiar la URL pública ni acceder a datos privados.
    frame.src = 'about:blank';
    requestAnimationFrame(() => { frame.src = previewUrl; });
  };
  frame.src = previewUrl;
  ['#enlace-editar-cabecera', '#enlace-editar-hero', '#enlace-abrir'].forEach(selector => {
    const el = document.querySelector(selector);
    el.href = editUrl;
  });
  document.querySelector('#actualizar').addEventListener('click', refresh);
})();
