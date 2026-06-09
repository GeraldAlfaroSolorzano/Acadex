import { tareas } from "../data/tareas.data.js";

export function listarTareas(req, res) {
    const estado = req.query.estado;

    if (estado) {
        const tareasFiltradas = tareas.filter(tarea => tarea.estado === estado);
        return res.json(tareasFiltradas);
    }

    res.json(tareas);
}

export function verDetalleTarea(req, res) {
    const id = Number(req.params.id);
    const tarea = tareas.find(tarea => tarea.id === id);

    if (!tarea) {
        return res.json({ error: "Tarea no encontrada" });
    }

    res.json(tarea);
}

/*
export function mostrarFormularioNuevaTarea(req, res) {
    res.send(nuevaTareaPage());
}
*/

export function crearTarea(req, res) {
    const nuevaTarea = {
        id: tareas.length + 1,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        estado: req.body.estado,
        prioridad: req.body.prioridad
    };

    tareas.push(nuevaTarea);

    res.json({
        mensaje: "Tarea creada",
        tarea: nuevaTarea
    });
}

/*
export function mostrarFormularioEditarTarea(req, res) {
    const id = Number(req.params.id);
    const tarea = tareas.find(tarea => tarea.id === id);

    if (!tarea) {
        return res.status(404).send(error404Page());
    }

    res.send(editarTareaPage(tarea));
}
*/

export function actualizarTarea(req, res) {
    const id = Number(req.params.id);
    const tarea = tareas.find(tarea => tarea.id === id);

    if (!tarea) {
        return res.json({ error: "Tarea no encontrada" });
    }

    tarea.titulo = req.body.titulo;
    tarea.descripcion = req.body.descripcion;
    tarea.estado = req.body.estado;
    tarea.prioridad = req.body.prioridad;

    res.json({
        mensaje: "Tarea actualizada",
        tarea: tarea
    });
}

export function eliminarTarea(req, res) {
    const id = Number(req.params.id);
    const indice = tareas.findIndex(tarea => tarea.id === id);

    if (indice === -1) {
        return res.json({ error: "Tarea no encontrada" });
    }

    tareas.splice(indice, 1);

    res.json({ mensaje: "Tarea eliminada" });
}

export function mostrarResumen(req, res) {
    const resumen = {
        total: tareas.length,
        completadas: tareas.filter(tarea => tarea.estado === "completada").length,
        pendientes: tareas.filter(tarea => tarea.estado === "pendiente").length,
        en_progreso: tareas.filter(tarea => tarea.estado === "en progreso").length
    };

    res.json(resumen);
}