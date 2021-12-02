import { Schema,model } from "mongoose";
import {Enum_EstadoUsuario, Enum_rol} from './enums';

interface User{
    //Estos tipos son de typescript por eso el string es con minuscula
    correo:string,
    identificacion:string,
    nombre:string,
    apellido:string,
    rol:Enum_rol,
    estado:Enum_EstadoUsuario,
    
}

const userSchema=new Schema<User>({
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
        enum:Enum_rol,
    },
    estado:{
        type:String,
        enum:Enum_EstadoUsuario,
        default:Enum_EstadoUsuario.pendiente,

    },
});

const UserModel=model("User",userSchema);// un tercer parametro para poner el nombre que deseemos al modelo

export  {UserModel};