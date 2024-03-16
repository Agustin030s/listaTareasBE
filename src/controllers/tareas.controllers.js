import Tarea from "../database/models/tarea";

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
