import { check } from "express-validator";
import resultadoValidacion from "./validacionTarea.js";

const validacionTarea = [
  check("descripcion")
    .notEmpty()
    .withMessage("La descripcion de la tarea es obligatoria")
    .isLength({ min: 4, max: 700 })
    .withMessage(
      "La descripcion de la tarea debe tener entre 4 y 700 caracteres"
    ),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionTarea;
