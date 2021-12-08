import { gql } from "apollo-server-express";

const tipoProyecto = gql`


type Proyecto {
    _id:ID!
    nombre:String!
    presupuesto:Float!
    fechaInicio: Date!
    fechaFin:Date!
    estado: Enum_EstadoProyecto!
    fase:Enum_FaseProyecto!
    lider: Usuario!
    objetivos:[Objetivo]
    avances:[Avance]
    inscripciones:[Inscripcion]
}
type Objetivo{
    descripcion:String!
    tipo:Enum_TipoObjetivo
}
input crearObjetivo{
    _id:ID!
    descripcion:String!
    tipo:Enum_TipoObjetivo
}

type Query {
    
    Proyectos:[Proyecto]
}
type Mutation{
  
    crearProyecto(
        _id:ID!
        nombre:String!
        presupuesto:Float!
        fechaInicio: Date!
        fechaFin:Date!
        estado: Enum_EstadoProyecto!
        fase:Enum_FaseProyecto!
        lider: String!
        objetivos:[crearObjetivo]

    ):Proyecto


}
`;
export {tipoProyecto};
