import { Schema,model } from "mongoose";
import { ProjectModel } from "./project";
import { UserModel } from "./user";

interface Avance{
    proyecto:Schema.Types.ObjectId,
    fecha:Date,
    descripcion: string,
    observaciones:[string],
    creadorPor: Schema.Types.ObjectId,
}

const avanceSchema = new Schema<Avance>({
    fecha:{
        type:Date,
        required:true,
    },
    descripcion:{
        type:String,
        required:true,
    },
    observaciones:[
        {
        type:String,
        }
    ],
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:ProjectModel,
        required:true,
    },
    creadorPor:{
        type:Schema.Types.ObjectId,
        ref:UserModel,
        required:true,
    }       ,

});

const AvanceModel=model('Avance',avanceSchema);

export{AvanceModel};
