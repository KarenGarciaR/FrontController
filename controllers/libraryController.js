const layout = (title, content) => `
<html>
<head>
  <title>${title}</title>
  <style>
    body { font-family: Arial; background: #f4f6f8; padding: 40px; }
    .card { background: white; padding: 25px; border-radius: 10px; max-width: 600px; margin: auto; }
    h1 { color: #2c3e50; }
    nav a { margin-right: 15px; text-decoration: none; color: #0066cc; font-weight: bold; }
    nav { margin-bottom: 20px; }
  </style>
</head>
<body>
  <div class="card">
    <nav>
      <a href="/?opcion=1">Inicio</a>
      <a href="/?opcion=2">Libros</a>
      <a href="/?opcion=3">Contacto</a>
    </nav>
    ${content}
  </div>
</body>
</html>
`;

exports.menu = (res) => {
  res.send(layout('Biblioteca', `<h1>Bienvenido</h1><p>Selecciona una opción del menú.</p>`));
};

exports.home = (res) => {
  res.send(layout('Inicio', `<h1>Sistema de Biblioteca</h1><p>Consulta tus libros disponibles fácilmente :D.</p>`));
};

exports.books = (res) => {
  res.send(layout('Libros', `
    <h1>Libros disponibles</h1>
    <ul>
      <li>Del pellejo de una pulga y otros versos para jugar</li>
      <li>Introducción a Ciencia de Datos</li>
      <li>La tienda de los deseos </li>
      <li>Respira </li>
    </ul>
  `));
};

exports.contact = (res) => {
  res.send(layout('Contacto', `<h1>Contacto</h1><p>Email: biblioteca@ejemplo.com</p><p>Número: 9811122345</p>`));
};