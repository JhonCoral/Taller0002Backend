
import Sequelize  from "sequelize";
import { mascota } from "./mascotasModelo.js";

import {db} from "../database/conexion.js";

const solicitud = db.define("solicitudes",{
    id :{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: true
    },
    telefono:{
        type: Sequelize.STRING,
        allowNull: true
    },
    correo:{
        type: Sequelize.STRING,
        allowNull: true
    },
    id_mascota:{
        type: Sequelize.INTEGER,
        allowNull:false    
    }
})

solicitud.belongsTo(mascota,{foreignKey:'id_mascota'});
export {solicitud}

