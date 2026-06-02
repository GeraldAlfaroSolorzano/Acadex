export function layout(titulo, contenido) {
    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${titulo}</title>

      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      >
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
    </head>

    <body class="bg-light">

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div class="container">
          <a class="navbar-brand" href="/"><i class="bi bi-list-task"> Plataforma de Tareas</i></a>

          <div class="navbar-nav">
            <a class="nav-link" href="/"><i class="bi bi-house-fill"> Inicio</i></a>
            <a class="nav-link" href="/tareas"><i class="bi bi-list-task"> Tareas</i></a>
            <a class="nav-link" href="/tareas/nueva"><i class="bi bi-plus"> Nueva tarea</i></a>
          </div>
        </div>
      </nav>

      <main class="container">
        ${contenido}
      </main>

      <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js">
      </script>
    </body>
    </html>
  `;
}