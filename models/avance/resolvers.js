//import { resolvers } from './../../graphql/resolvers';
import { AvanceModel } from './avances.js';
const resolversAvance = {
    Query:{
        Avances:async(parent,args)=>{
            const avances=await AvanceModel.find();
            return avances;
        },

    },
    Mutation:{
        crearAvance:async(parent,args)=>{
            const avanceCreado= AvanceModel.create({
                fecha:args.fecha,
                descripcion:args.descripcion,
                proyecto:args.proyecto,
                creadoPor:args.creadoPor

            });
            return avanceCreado;
        },

    },
};
export {resolversAvance};