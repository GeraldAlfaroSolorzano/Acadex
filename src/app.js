import "dotenv/config";
import express from "express";

import tareasRoutes from "./routes/tareas.routes.js";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import { homePage } from "./views/pages/home.page.js";
import { error404Page } from "./views/pages/error404.page.js";
import { mostrarResumen } from "./controllers/tareas.controller.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

app.get("/", (req, res) => {
    res.send(
        homePage(
            process.env.APP_NAME,
            process.env.APP_VERSION
        )
    );
});

app.get("/resumen", mostrarResumen);

app.use("/tareas", tareasRoutes);

app.use((req, res) => {
    res.status(404).send(error404Page());
});

app.listen(PORT, () => {
    console.log(`${process.env.APP_NAME} ejecutandose en http://localhost:${PORT}`);
});