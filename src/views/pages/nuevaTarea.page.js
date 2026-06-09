import { layout } from "../layout.js";

function obtenerClaseError(campo, errores) {
    if (errores[campo]) {
        return "is-invalid";
    }

    return "";
}

function obtenerMensajeError(campo, errores) {
    if (errores[campo]) {
        return errores[campo];
    }

    return "";
}

function obtenerValor(campo, datos) {
    if (datos[campo]) {
        return datos[campo];
    }

    return "";
}

function obtenerSeleccionado(valorActual, valorOpcion) {
    if (valorActual === valorOpcion) {
        return "selected";
    }

    return "";
}

export function nuevaTareaPage(datos = {}, errores = {}) {
    return layout(
        "Nueva tarea",
        `
        <div class="card shadow-sm">
            <div class="card-header bg-primary text-white">
                <i class="bi bi-plus-circle"></i>
                Registrar nueva tarea
            </div>

            <div class="card-body">
                <form action="/tareas" method="POST">

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Titulo</label>

                            <input 
                                type="text" 
                                name="titulo" 
                                class="form-control ${obtenerClaseError("titulo", errores)}"
                                value="${obtenerValor("titulo", datos)}"
                            >

                            <div class="invalid-feedback">
                                ${obtenerMensajeError("titulo", errores)}
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Estado</label>

                            <select name="estado" class="form-select">
                                <option value="pendiente" ${obtenerSeleccionado(datos.estado, "pendiente")}>
                                    Pendiente
                                </option>

                                <option value="en progreso" ${obtenerSeleccionado(datos.estado, "en progreso")}>
                                    En progreso
                                </option>

                                <option value="completada" ${obtenerSeleccionado(datos.estado, "completada")}>
                                    Completada
                                </option>
                            </select>
                        </div>

                        <div class="col-md-12 mb-3">
                            <label class="form-label">Descripcion</label>

                            <textarea 
                                name="descripcion" 
                                class="form-control ${obtenerClaseError("descripcion", errores)}" 
                                rows="4"
                            >${obtenerValor("descripcion", datos)}</textarea>

                            <div class="invalid-feedback">
                                ${obtenerMensajeError("descripcion", errores)}
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label class="form-label">Prioridad</label>

                            <select name="prioridad" class="form-select">
                                <option value="baja" ${obtenerSeleccionado(datos.prioridad, "baja")}>
                                    Baja
                                </option>

                                <option value="media" ${obtenerSeleccionado(datos.prioridad, "media")}>
                                    Media
                                </option>

                                <option value="alta" ${obtenerSeleccionado(datos.prioridad, "alta")}>
                                    Alta
                                </option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">
                        <i class="bi bi-bookmark"></i>
                        Guardar
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