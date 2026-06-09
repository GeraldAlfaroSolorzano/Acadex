import { layout } from "../layout.js";

export function resumenPage(tareas) {
    const totalTareas = tareas.length;

    const tareasPendientes = tareas.filter(tarea => tarea.estado === "pendiente").length;

    const tareasEnProgreso = tareas.filter(tarea => tarea.estado === "en progreso").length;

    const tareasCompletadas = tareas.filter(tarea => tarea.estado === "completada").length;

    const contenido = `
        <h1 class="mb-4">
            <i class="bi bi-bar-chart-fill"></i>
            Resumen de tareas
        </h1>

        <div class="row g-4">

            <div class="col-md-3">
                <div class="card text-bg-primary shadow-sm">
                    <div class="card-body text-center">
                        <i class="bi bi-list-task fs-1"></i>
                        <h5 class="card-title mt-2">Total de tareas</h5>
                        <p class="display-6">${totalTareas}</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card text-bg-danger shadow-sm">
                    <div class="card-body text-center">
                        <i class="bi bi-exclamation-circle fs-1"></i>
                        <h5 class="card-title mt-2">Pendientes</h5>
                        <p class="display-6">${tareasPendientes}</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card text-bg-warning shadow-sm">
                    <div class="card-body text-center">
                        <i class="bi bi-hourglass-split fs-1"></i>
                        <h5 class="card-title mt-2">En progreso</h5>
                        <p class="display-6">${tareasEnProgreso}</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card text-bg-success shadow-sm">
                    <div class="card-body text-center">
                        <i class="bi bi-check-circle fs-1"></i>
                        <h5 class="card-title mt-2">Completadas</h5>
                        <p class="display-6">${tareasCompletadas}</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="mt-4">
            <a href="/tareas" class="btn btn-secondary">
                <i class="bi bi-arrow-left-circle"></i>
                Volver a tareas
            </a>
        </div>
    `;

    return layout("Resumen", contenido);
}