import { gql } from "apollo-server-express";
import { tipoProyecto } from "../models/proyecto/tipos.js";
import { tiposUsuario } from "../models/usuario/tipos.js";
import { tiposEnum } from "../models/enum/tipos.js";
import { tiposAvance } from "../models/avance/tipos.js";
import { tiposInscripcion } from "../models/inscripcion/tipos.js";

const tiposGlobales = gql`
scalar Date
`;
export const tipos=[tiposGlobales,tipoProyecto,tiposEnum,tiposUsuario,tiposAvance,tiposInscripcion];
