
import Sequelize  from "sequelize";

import {db} from "../database/conexion.js";

const mascota = db.define("mascotas",{
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
    tipo:{
        type: Sequelize.STRING,
        allowNull: true
    },
    raza:{
        type: Sequelize.STRING,
        allowNull: true
    },
    edad:{
        type: Sequelize.INTEGER,
        allowNull:true
    },
    estado:{
        type: Sequelize.STRING,
        allowNull: true
    },
    foto:{
        type: Sequelize.STRING,
        allowNull: true
    },
    cualidades:{
        type: Sequelize.STRING,
        allowNull: true
    },
    detalles:{
        type: Sequelize.STRING,
        allowNull: true
    }
})



export {mascota}

