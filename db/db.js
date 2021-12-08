import mongoose from 'mongoose';

const conectarDB=async()=>{
return await mongoose.connect(
    //la ruta puede ir aqui, pero mejor en el archivo env
    //'mongodb+srv://UserAdmin:Mintics123@cluster0.6ecjl.mongodb.net/GestionProyectos?retryWrites=true&w=majority'
    process.env.DATABASE_URL

   ).then(()=>{
       console.log('Conexión exitosa');
   })
   .catch((e)=>{
       console.error('Error conectando',e);
   });
};

export default conectarDB;