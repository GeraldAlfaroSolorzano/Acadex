import { layout } from "../layout.js";
export function homePage(appName, appVersion) {
    return layout(
        "Inicio",
        ` 
            <div class="p-5 mb-4 bg-white rounded-3 shadow-sm"> 
                <h1 class="display-5 fw-bold">${appName}</h1> 
                <p class="fs-5"> Aplicación web para administrar tareas académicas utilizando Node.js, Express y Bootstrap. </p> 
                <p class="text-muted">Versión: ${appVersion}</p>
                <a href="/tareas" class="btn btn-primary"><i class="bi bi-search"> Ver tareas</i></a> 
                <a href="/tareas/nueva" class="btn btn-outline-primary"><i class="bi bi-card-checklist"> Crear tarea</i></a> 
            </div> 
        `
    );
}