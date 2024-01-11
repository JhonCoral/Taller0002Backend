import express from "express";
import {crear, getSolicitudes} from "../controladores/solicitudescontrolador.js";

const routerSolicitudes = express.Router()

routerSolicitudes.get("/mostrar", (req,res)=>{
    getSolicitudes(req,res)
})

routerSolicitudes.post("/crear", (req,res)=>{
    crear(req,res)
})


export {routerSolicitudes}