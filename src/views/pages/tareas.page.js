import { layout } from "../layout.js";

function obtenerBadgeEstado(estado) {
    if (estado === "pendiente") return "bg-danger";
    if (estado === "en progreso") return "bg-warning text-dark";
    if (estado === "completada") return "bg-success";
    return "bg-secondary";
}

function obtenerBadgePrioridad(prioridad) {
    if (prioridad === "alta") return "bg-danger";
    if (prioridad === "media") return "bg-warning text-dark";
    if (prioridad === "baja") return "bg-success";
    return "bg-secondary";
}

function obtenerAlertaMensaje(mensaje) {
    if (mensaje === "creada") {
        return `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <i class="bi bi-check-circle"></i>
                La tarea fue creada correctamente.

                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
    }

    if (mensaje === "actualizada") {
        return `
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <i class="bi bi-pencil-square"></i>
                La tarea fue actualizada correctamente.

                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
    }

    if (mensaje === "eliminada") {
        return `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <i class="bi bi-trash"></i>
                La tarea fue eliminada correctamente.

                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
    }

    return "";
}

export function tareasPage(tareas, mensaje = "") {
    let contenido = `
        ${obtenerAlertaMensaje(mensaje)}

        <div class="d-flex justify-content-between align-items-center mb-4">
            <h1>
                <i class="bi bi-list-task"></i>
                Lista de tareas
            </h1>

            <a href="/tareas/nueva" class="btn btn-primary">
                <i class="bi bi-plus-circle"></i>
                Nueva tarea
            </a>
        </div>

        <div class="card mb-4 shadow-sm">
            <div class="card-body">
                <form method="GET" action="/tareas" class="row g-3 align-items-end">
                    <div class="col-md-8">
                        <label class="form-label">Filtrar por estado</label>

                        <select name="estado" class="form-select">
                            <option value="">Todas</option>
                            <option value="pendiente">Pendiente</option>
                            <option value="en progreso">En progreso</option>
                            <option value="completada">Completada</option>
                        </select>
                    </div>

                    <div class="col-md-4">
                        <button type="submit" class="btn btn-outline-primary w-100">
                            <i class="bi bi-filter"></i>
                            Filtrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;

    if (tareas.length === 0) {
        contenido += `
            <div class="alert alert-info">
                <i class="bi bi-info-circle"></i>
                No hay tareas registradas.
            </div>
        `;

        return layout("Tareas", contenido);
    }

    contenido += `
        <div class="table-responsive">
            <table class="table table-striped table-hover table-bordered align-middle shadow-sm">
                <thead class="table-primary">
                    <tr>
                        <th>Titulo</th>
                        <th>Descripcion</th>
                        <th>Estado</th>
                        <th>Prioridad</th>
                        <th class="text-center">Acciones</th>
                    </tr>
                </thead>

                <tbody>
    `;

    tareas.forEach(tarea => {
        contenido += `
            <tr>
                <td>${tarea.titulo}</td>

                <td>${tarea.descripcion}</td>

                <td>
                    <span class="badge ${obtenerBadgeEstado(tarea.estado)}">
                        ${tarea.estado}
                    </span>
                </td>

                <td>
                    <span class="badge ${obtenerBadgePrioridad(tarea.prioridad)}">
                        ${tarea.prioridad}
                    </span>
                </td>

                <td class="text-center">
                    <a href="/tareas/${tarea.id}" class="btn btn-sm btn-outline-primary">
                        <i class="bi bi-eye"></i>
                    </a>

                    <a href="/tareas/${tarea.id}/editar" class="btn btn-sm btn-outline-warning">
                        <i class="bi bi-pencil"></i>
                    </a>

                    <form action="/tareas/${tarea.id}/eliminar" method="POST" class="d-inline">
                        <button type="submit" class="btn btn-sm btn-outline-danger">
                            <i class="bi bi-trash"></i>
                        </button>
                    </form>
            </tr>
        `;
    });

    contenido += `
                </tbody>
            </table>
        </div>
    `;

    return layout("Tareas", contenido);
}