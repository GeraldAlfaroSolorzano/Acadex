import { layout } from "../layout.js";

export function editarTareaPage(tarea) {
    return layout(
        "Editar tarea",
        `
<div class="card shadow-sm">
    <div class="card-header bg-warning">
        Editar tarea
    </div>

    <div class="card-body">
        <form action="/tareas/${tarea.id}/editar" method="POST">
            <div class="mb-3">
                <label class="form-label">Titulo</label>
                <input
                    type="text"
                    name="titulo"
                    class="form-control"
                    value="${tarea.titulo}"
                >
            </div>

            <div class="mb-3">
                <label class="form-label">Descripcion</label>
                <textarea
                    name="descripcion"
                    class="form-control"
                    rows="4"
                >${tarea.descripcion}</textarea>
            </div>

            <div class="mb-3">
                <label class="form-label">Estado</label>
                <select name="estado" class="form-select">
                    <option value="pendiente" ${tarea.estado === "pendiente" ? "selected" : ""}>
                        Pendiente
                    </option>

                    <option value="en progreso" ${tarea.estado === "en progreso" ? "selected" : ""}>
                        En progreso
                    </option>

                    <option value="completada" ${tarea.estado === "completada" ? "selected" : ""}>
                        Completada
                    </option>
                </select>
            </div>

            <div class="mb-3">
                <label class="form-label">Prioridad</label>
                <select name="prioridad" class="form-select">
                    <option value="baja" ${tarea.prioridad === "baja" ? "selected" : ""}>
                        Baja
                    </option>

                    <option value="media" ${tarea.prioridad === "media" ? "selected" : ""}>
                        Media
                    </option>

                    <option value="alta" ${tarea.prioridad === "alta" ? "selected" : ""}>
                        Alta
                    </option>
                </select>
            </div>

            <button type="submit" class="btn btn-warning">
                Actualizar
            </button>

            <a href="/tareas" class="btn btn-secondary">
                Cancelar
            </a>
        </form>
    </div>
</div>
        `
    );
}