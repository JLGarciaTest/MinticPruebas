
import { UserModel } from "./usuario.js";

const resolverUsuario ={
    Query:{
        Usuarios: async (parent,args)=>{
            const usuarios=await UserModel.find();
            return usuarios;
        },
        Usuario: async (parent,args)=>{
        const usuario=await UserModel.findOne({_id:args._id});
        return usuario;
        },
      
},
    Mutation:{
        crearUsuario:async (parent,args) => {
            const usuariocreado = await UserModel.create({
                nombre:args.nombre,
                apellido:args.apellido,
                identificacion:args.identificacion,
                correo:args.correo,
                rol:args.rol,
            });
            if(Object.keys(args).includes('estado')){
                usuariocreado.estado=args.estado;
            }
            return usuariocreado;
        },
        eliminarUsuario: async (parent,args) =>{
            const usuarioEliminado = await UserModel.findOneAndDelete({_id:args._id});
            return usuarioEliminado;
        },
        editarUsuario: async (parent,args)=>{
            const usuarioEditado = await UserModel.findOneAndUpdate(
                args._id,{
                    nombre:args.nombre,
                    apellido:args.apellido,
                    identificacion:args.identificacion,
                    correo:args.correo,
                    rol:args.rol,
                    estado:args.estado,
                });
            return usuarioEditado;
        },
        
    },
    };
    
export {resolverUsuario};