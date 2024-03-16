import { Router } from "express";
import {
  crearTarea,
  listarTareas,
  obtenerTarea,
} from "../controllers/tareas.controllers.js";

const router = Router();

router.route("/tareas").post(crearTarea).get(listarTareas);
router.route("/tareas/:id").get(obtenerTarea);

export default router;
