import { solicitud } from "../modelos/adopcionmodelo.js";

//Crear un recurso

const crear = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).json({ tipo:"error", mensaje: "El nombre no puede estar vacio." })
        return;
    }
    if (!req.body.id_mascota) {
        res.status(400).json({ tipo:"error", mensaje: "El id de la mascota no puede estar vacio." })
        return;
    }
    const dataset = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        correo: req.body.correo,
        id_mascota: req.body.id_mascota,
        
    }

    //Usar Sequeliza para crear el recurso
    solicitud.create(dataset).then((resultado) => {
        res.status(200).json({tipo:"success", mensaje: "Registro creado correctamente"});
    }).catch(err => res.send({tipo:"error", mensaje: `Error al crear el registro ::: ${err} `}))
}

const getSolicitudes = async (req, res) => {
    try {
        const solicitudes = await solicitud.findAll();
        res.status(200).json(solicitudes);
    } catch (error) {
        res.status(500).json({ tipo:"error", mensaje: `Error al obtener las mascotas ::: ${error.message} `});
    }
};

export { crear, getSolicitudes};