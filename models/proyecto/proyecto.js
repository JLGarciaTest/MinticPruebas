//import { Schema,model } from "mongoose";
//import {Enum_EstadoProyecto} from "../enum/enums.js";
//import {Enum_FaseProyecto} from "../enum/enums.js";
//import {Enum_TipoObjetivo} from "../enum/enums.js";
import {UserModel} from "../usuario/usuario.js";
import mongoose from "mongoose";
const {Schema,model} = mongoose;


/* 


interface Proyecto {
    nombre:string,
    presupuesto:number,
    fechaInicio:Date,
    fechaFin:Date,
    estado:Enum_EstadoProyecto,
    fase:Enum_FaseProyecto,
    lider:Schema.Types.ObjectId,
    objetivos: [{
        descripcion:String,
        tipo:Enum_TipoObjetivo,
    }],

} */

//const projectSchema= new Schema<Proyecto>({
    const projectSchema= new Schema({
    nombre:{
        type:String,
        required:true,
    },
    presupuesto:{
        type:Number,
        required:true,
    },
    fechaInicio:{
        type:Date,
        required:true,
    },
    fechaFin:{
        type:Date,
        required:true,
    },
    estado:{
        type:String,
        //enum:Enum_EstadoProyecto,
        enum:["ACTIVO","INACTIVO"],
        //default:Enum_EstadoProyecto.inactivo,
        default:"INACTIVO",
    },
    fase:{
        type:String,
        //enum:Enum_FaseProyecto,
        enum:["INCIADO","DESARROLLO","TERMINADO","NULO"],
        //default:Enum_FaseProyecto.nula,
        default:"NULO",
    },
    lider:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:UserModel,
    },
    objetivos:[
        {
            descripcion:{
                type:String,
                required:true,
            },
            tipo:{
                type:String,
                //enum:Enum_TipoObjetivo,
                enum:["GENERAL","ESPECIFICO"],
                required:true,
            },


       },
    ],
    },
    {
        toJSON:{virtuals:true},
        toObject:{virtuals:true},
    });

    projectSchema.virtual("avances",{
        ref:"Avance",
        localField:"_id",
        foreignField:"proyecto",
    },);
    projectSchema.virtual("inscripciones",{
        ref:"Inscripciones",
        localField:"_id",
        foreignField:"proyecto",
    },);
const ProjectModel=model('Proyecto',projectSchema,'ColeccionProyectos')//con este nombre coleccionproyectos lo crea en mongo

export {ProjectModel}