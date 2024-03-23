import { Router } from "express";
import {
  borrarTarea,
  crearTarea,
  editarTarea,
  listarTareas,
  obtenerTarea,
} from "../controllers/tareas.controllers.js";
import validacionTarea from "../helpers/resultadoValidacion.js";

const router = Router();

router.route("/tareas").post([validacionTarea], crearTarea).get(listarTareas);
router
  .route("/tareas/:id")
  .get(obtenerTarea)
  .put([validacionTarea], editarTarea)
  .delete(borrarTarea);

export default router;
