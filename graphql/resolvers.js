import { resolversProyecto } from "../models/proyecto/resolvers.js";
import { resolverUsuario } from "../models/usuario/resolver.js";
import { resolversAvance } from "../models/avance/resolvers.js";
import { resolverInscripciones } from "../models/inscripcion/resolvers.js";

export const resolvers=[resolverUsuario,resolversProyecto,resolversAvance, resolverInscripciones];