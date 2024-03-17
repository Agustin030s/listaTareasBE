import { Router } from "express";
import {
  crearTarea,
  editarTarea,
  listarTareas,
  obtenerTarea,
} from "../controllers/tareas.controllers.js";

const router = Router();

router.route("/tareas").post(crearTarea).get(listarTareas);
router.route("/tareas/:id").get(obtenerTarea).put(editarTarea);

export default router;
