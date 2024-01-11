import { mascota } from "../modelos/mascotasModelo.js"

//Crear un recurso

const crear = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).json({ tipo:"error", mensaje: "El nombre no puede estar vacio." })
        return
    }
    const dataset = {
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        raza: req.body.raza,
        edad: req.body.edad,
        estado: req.body.estado,
        foto: req.body.foto,
        cualidades: req.body.cualidades,
        detalles: req.body.detalles,

    }

    //Usar Sequeliza para crear el recurso
    mascota.create(dataset).then((resultado) => {
        res.status(200).json({tipo:"success", mensaje: "Registro creado correctamente"});
    }).catch(err => res.send({ tipo:"error", mensaje: `Error al crear el registro ::: ${err} `}))
}

const getPets = async (req, res) => {
    try {
        const pets = await mascota.findAll();
        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({ tipo:"error", mensaje: `Error al obtener las mascotas ::: ${error.message} `});
    }
};


const buscarById = (req, res) => {
    const id=parseInt(req.params.id);
    if(!id){
        res.status(400).json({ tipo:"error", mensaje: `id es requerido`});
        return;
    }
        
    mascota.findByPk(id).then((r)=>{
        res.status(200).json(r);
    }).catch((e)=>{
        res.status(500).json({ tipo:"error", mensaje: `Error al obtener la mascota ::: ${e.message} `});
    });
};

const actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, tipo, raza, edad, estado, foto, cualidades, detalles } = req.body;
        
        if (!nombre && !tipo && !raza && !edad && !estado && !foto && !cualidades && !detalles) {
            res.status(400).json({ mensaje: "Los campos 'nombre' o 'edad' son requeridos para actualizar." });
            return;
        }
        const pet = await mascota.findByPk(id);
        if (!pet) {
            res.status(404).json({ mensaje: "Mascota no encontrada." });
            return;
        }
        await pet.update({ nombre, tipo, raza, edad, estado, foto, cualidades, detalles });
        res.status(200).json({ tipo:"success", mensaje: "Registro actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ tipo: "error", mensaje: `Error al actualizar la mascota: ${error.message}` });
    }
};

const eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await mascota.findByPk(id);
        if (!pet) {
            res.status(404).json({ mensaje: "Mascota no encontrada." });
            return;
        }
        await pet.destroy();
        res.status(200).json({ tipo:"success", mensaje: "Registro eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ tipo:"error", mensaje: `Error al eliminar la mascota: ${error.message}` });
    }
};

export { crear, getPets, buscarById, actualizar, eliminar };