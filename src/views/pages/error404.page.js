import { layout } from "../layout.js";
export function error404Page() {
    return layout(
        "Página no encontrada",
        `
            <div class="alert alert-danger shadow-sm">
                <h1>404 - Página no encontrada</h1>
                <p>La ruta solicitada no existe.</p>
                <a href="/" class="btn btn-danger">Volver al inicio</a>
            </div>
        `
    );
}