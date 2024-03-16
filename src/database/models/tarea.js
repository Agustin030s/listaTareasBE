import mongoose, { Schema } from "mongoose";

const tareasSchema = new Schema({
  descripcion: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 700,
  },
});

const Tarea = mongoose.model("tarea", tareasSchema);

export default Tarea;
