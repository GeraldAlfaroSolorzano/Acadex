import { layout } from "../layout.js";

function obtenerSeleccionado(valorActual, valorOpcion) {
    if (valorActual === valorOpcion) {
        return "selected";
    }

    return "";
}

export function editarTareaPage(tarea) {
    return layout(
        "Editar tarea",
        `
<div class="card shadow-sm">
    <div class="card-header bg-warning">
        <i class="bi bi-pencil-square"></i>
        Editar tarea
    </div>

    <div class="card-body">
        <form action="/tareas/${tarea.id}/editar" method="POST">

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label class="form-label">Titulo</label>

                    <input
                        type="text"
                        name="titulo"
                        class="form-control"
                        value="${tarea.titulo}"
                    >
                </div>

                <div class="col-md-6 mb-3">
                    <label class="form-label">Estado</label>

                    <select name="estado" class="form-select">
                        <option value="pendiente" ${obtenerSeleccionado(tarea.estado, "pendiente")}>
                            Pendiente
                        </option>

                        <option value="en progreso" ${obtenerSeleccionado(tarea.estado, "en progreso")}>
                            En progreso
                        </option>

                        <option value="completada" ${obtenerSeleccionado(tarea.estado, "completada")}>
                            Completada
                        </option>
                    </select>
                </div>

                <div class="col-md-12 mb-3">
                    <label class="form-label">Descripcion</label>

                    <textarea
                        name="descripcion"
                        class="form-control"
                        rows="4"
                    >${tarea.descripcion}</textarea>
                </div>

                <div class="col-md-6 mb-3">
                    <label class="form-label">Prioridad</label>

                    <select name="prioridad" class="form-select">
                        <option value="baja" ${obtenerSeleccionado(tarea.prioridad, "baja")}>
                            Baja
                        </option>

                        <option value="media" ${obtenerSeleccionado(tarea.prioridad, "media")}>
                            Media
                        </option>

                        <option value="alta" ${obtenerSeleccionado(tarea.prioridad, "alta")}>
                            Alta
                        </option>
                    </select>
                </div>
            </div>

            <button type="submit" class="btn btn-warning">
                <i class="bi bi-arrow-up-circle"></i>
                Actualizar
            </button>

            <a href="/tareas" class="btn btn-secondary">
                <i class="bi bi-x-circle"></i>
                Cancelar
            </a>
        </form>
    </div>
</div>
        `
    );
}