
import Sequelize  from "sequelize";

import {db} from "../database/conexion.js";

<<<<<<< HEAD
const mascotas = db.define("mascotas",{
    id :{
=======
const mascota = db.define("patitas",{
    id_mascota:{
>>>>>>> ea01601fc66bb9ae57c4b92a4437412182e5cd58
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: true
    },
    edad:{
        type: Sequelize.INTEGER,
        allowNull:true
    },
    tipo:{
        type: Sequelize.STRING,
        allowNull: true
    }
})


<<<<<<< HEAD

export {mascotas}

=======

export {mascota}

>>>>>>> ea01601fc66bb9ae57c4b92a4437412182e5cd58
