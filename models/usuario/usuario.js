//import { Schema,model } from "mongoose";
import mongoose from "mongoose";
const {Schema,model} = mongoose;


//import {Enum_EstadoUsuario, Enum_rol} from '../enum/enums.js';

// interface User{
//     //Estos tipos son de typescript por eso el string es con minuscula
//     correo:string,
//     identificacion:string,
//     nombre:string,
//     apellido:string,
//     rol:Enum_rol,
//     estado:Enum_EstadoUsuario,
    
// }
const userSchema=new Schema({
//const userSchema=new Schema<User>({
    //Estos tipos son de mongoose  por eso String con mayuscula
    correo:{
        type:String,
        required:true,
        unique:true,
    },
    identificacion:{
        type: String,
        require:true,
        unique:true,
    },
    nombre:{
        type:String,
        required:true,
    },
    apellido:{
        type:String,
        required:true,
    },
    rol:{
        type:String,
        required:true,
        //enum:Enum_rol, //PARA TYPESCRIPT
        enum:["ESTUDIANTE","LIDER","ADMINISTRADOR"],
    },
    estado:{
        type:String,
        //enum:Enum_EstadoUsuario,
        enum:["PENDIENTE","AUTORIZADO","NO AUTORIZADO"],
        //default:Enum_EstadoUsuario.pendiente,
        default:"PENDIENTE",

    },
});

const UserModel=model("User",userSchema);// un tercer parametro para poner el nombre que deseemos al modelo

export  {UserModel};