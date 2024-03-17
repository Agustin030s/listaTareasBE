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

export const editarTarea = async (req, res) => {
  try {
    const id = req.params.id;
    const tareaAEditar = await Tarea.findById(id);

    if (!tareaAEditar)
      res.status(404).json({
        mensaje: "No se encontro la tarea a editar",
      });

    await Tarea.findByIdAndUpdate(id, req.body);
    res.status(200).json({
      mensaje: "La tarea fue editada con exito",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un erro al editar la tarea",
    });
  }
};

export const borrarTarea = async (req, res) => {
  try {
    const id = req.params.id;
    const tareaABorrar = await Tarea.findById(id);

    if (!tareaABorrar)
      res.status(404).json({
        mensaje: "No se encontro la tarea a borrar",
      });

    await Tarea.findByIdAndDelete(id);
    res.status(200).json({
      mensaje: "La tarea fue eliminada correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error al eliminar la tarea",
    });
  }
};
