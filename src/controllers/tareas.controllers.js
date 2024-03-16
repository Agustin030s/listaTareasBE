import Tarea from "../database/models/tarea.js";

export const crearTarea = async (req, res) => {
  try {
    const tareaNueva = new Tarea(req.body);
    await tareaNueva.save();
    res.status(201).json({
      mensaje: "La tarea fue creada con exito",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      mensaje: "Ocurrio un error al crear la tarea",
    });
  }
};

export const listarTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      mensaje: "Ocurrio un error, no se pueden listar las tareas",
    });
  }
};

export const obtenerTarea = async (req, res) => {
  try {
    const id = req.params.id;
    const tareaBuscada = await Tarea.findById(id);
    res.status(200).json(tareaBuscada);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      mensaje: "No se encontro el producto buscado",
    });
  }
};
