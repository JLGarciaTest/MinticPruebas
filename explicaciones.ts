import conectarDB from "./db/db";
import {UserModel} from "./models/user";
import { Enum_EstadoInscripcion, Enum_rol, Enum_TipoObjetivo } from "./models/enums";
import { ProjectModel } from "./models/project";
import { InscripcionModel } from "./models/inscripcion";
import { AvanceModel } from "./models/avances";

//crear usuario
 const main = async()=>{
    //si utilizo .then y .cath pordría omitir el await
    await conectarDB();
  /*  UserModel.create({
        apellido:"Garsol",
        correo:"emmanuel@gmail.com",
        identificacion:"1109550526",
        nombre:"Emma",
        rol:Enum_rol.lider,
    })
    .then((u)=>{
        console.log("usuario creado",u);
        
    })
    .catch((e)=>{
        console.error("Error creando el usuario",e);
        
    });
}; */
//obtener los usuarios
//await UserModel.find().then((u)=>{
  //  console.log("usuarios",u);
  //  }).catch((e)=>{
 //       console.log("Error",e);
        
  //  })
/*
  await UserModel.findOneAndUpdate(
      {correo:'jlg@gmamil.com'},//filtro- lo que va a coincidir
      {
  nombre:'Emmanuelito'}).then((e)=>{
      console.log("actualizado",e);
      }).catch((err)=>{
          console.error("no se pudo actualizar",err);
          
      }) ;
     */
    //CREACION DE PROYECTOS...
    /*
      ProjectModel.create({
          nombre:"Proyecto 3",
          presupuesto:2200000,
          fechaInicio:Date.now(),
          fechaFin: new Date('2022/11/10'),
          lider:"61a2ec8aad09ad663fb43046",
          objetivos:[
              {descripcion:'Este es el objetivo general',tipo:Enum_TipoObjetivo.general},
            {descripcion:'Este es el objetivo especifico1',tipo:Enum_TipoObjetivo.especifico},
            {descripcion:'Este es el objetivo especifico2',tipo:Enum_TipoObjetivo.especifico}
        ]

      })
      UserModel.create({
        apellido:"GarQui",
        correo:"garciaqui@gmail.com",
        identificacion:"12345687",
        nombre:"Luis",
        rol:Enum_rol.estudiante,
    })
//CREAR INSCRIPCION
      InscripcionModel.create({
        proyecto:"61a56e6b381b20f99a11907d"  ,
        estudiante:"61a56e6b381b20f99a119081",
        fechaIngreso:Date.now(),
        fechaEgreso:new Date('2022/01/02'),
        estado:Enum_EstadoInscripcion.aceptada,

      })*/

      //CREAR AVANCE
      AvanceModel.create({
          proyecto:"61a56e6b381b20f99a11907d",
          descripcion:"Este es el primer avance del proyecto",
          fecha:Date.now(),
          creadorPor:"61a56e6b381b20f99a119081",
          observaciones:["Es la parte inicial del proyecto"," Se realiza la primera inscripción"],
      }) .then((u)=>{
        console.log("avance creado",u);
        
    })
    .catch((e)=>{
        console.error("Error creando el avance",e);
        
    });
      
      
 //     const proyecto = await ProjectModel.find({nombre:"Proeycto 3"}).populate("lider");//crea la relación y trae el lider del proyecto
 //    console.log("el proyecto es ",proyecto);
      

  };

main();