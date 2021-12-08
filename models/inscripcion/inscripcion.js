//import { Schema,model } from "mongoose";
//import { Enum_EstadoInscripcion } from "../enum/enums.js";
import { ProjectModel } from "../proyecto/proyecto.js";   
import { UserModel } from "../usuario/usuario.js";
import mongoose from "mongoose";

const {Schema,model} = mongoose;
/* interface Inscripcion{
    proyecto:Schema.Types.ObjectId,
    estudiante:Schema.Types.ObjectId,
    estado: Enum_EstadoInscripcion,
    fechaIngreso:Date,
    fechaEgreso:Date,
} */
//const inscripcionSchema = new Schema <Inscripcion>({
const inscripcionSchema = new Schema({
    estado:{
        type:String,
        //enum:Enum_EstadoInscripcion,
        enum: ["ACEPTADO","RECHAZADO","PENDIENTE"],
        default:"PENDIENTE",
        required:true,
    },
    fechaIngreso:{
        type:Date,
        required:false,
    },
    fechaEgreso:{
        type:Date,
        required:false,
    },
    proyecto:{
        type:Schema.Types.ObjectId,
        ref: ProjectModel,
        required:true,
    },
    estudiante:{
        type:Schema.Types.ObjectId,
        ref:UserModel,
        required:true,
    },
});

const InscripcionModel=model('Inscripciones',inscripcionSchema);//nombre que va en el virtualize
export {InscripcionModel};

