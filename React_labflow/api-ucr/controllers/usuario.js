const Usuario = require('../models/usuario');

function holaMundo(req, res) {
    console.log('Hola mundo xd');
}

async function createUsuario(req, res) {
    const usuario = new Usuario({
        correo: req.body.correo,
        nombre: req.body.nombre,
        apellido1: req.body.apellido1,
        apellido2: req.body.apellido2,
        contrasenna: req.body.contrasenna,
        confirmacionC: req.body.confirmacionC
    });
    await usuario.save()
        .then((usuario) => {
            res.status(201).send(usuario);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
}

async function getUsuarios(req, res) {

    try{
        const usuarios = await Usuario.find().sort();
        if(!usuarios){
            res.status(404).send({message: 'No hay usuarios'});
        }
        else{
            res.status(200).send(usuarios);
        }
    }
    catch(err){
        res.status(500).send(err);
    }
}

async function getUsuariosFiltered(req, res){

}

module.exports = {
    holaMundo,
    createUsuario,
    getUsuarios,
    getUsuariosFiltered
}