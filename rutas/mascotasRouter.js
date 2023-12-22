import express from "express";
import { crear, getPets, buscarById, actualizar, eliminar } from "../controladores/mascotascontroles.js";


const routerMascotas = express.Router()

routerMascotas.get("/mostrar", (req,res)=>{
    getPets(req,res)
})

routerMascotas.post("/crear", (req,res)=>{
    crear(req,res)
})

routerMascotas.get("/buscar/:id_mascota", (req,res)=>{
    buscarById(req,res)
})

routerMascotas.put("/actualizar/:id_mascota", (req,res)=>{
    actualizar(req,res)
})

routerMascotas.delete("/eliminar/:id_mascota", (req,res)=>{
    eliminar(req,res)
})

<<<<<<< HEAD
export {routerMascotas}
=======
export {routerMascotas}
>>>>>>> ea01601fc66bb9ae57c4b92a4437412182e5cd58
