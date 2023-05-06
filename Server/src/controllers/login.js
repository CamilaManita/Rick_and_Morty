const {user} = require('../DB_connection');
require('dotenv').config();
const DB_EMAIL = process.env.EMAIL;
const DB_PASSWORD = process.env.PASSWORD;

const login = async (req,res) => {
    const {email, password} = req.query;

    try {
        if( email && password ) {
            if(DB_PASSWORD === password && DB_EMAIL === email) return res.status(200).json({access:true});
            if(!email) res.status(404).send('Usuario no encontrado');
            if(DB_EMAIL === email && DB_PASSWORD !== password) return res.status(403).send('Contraseña incorrecta');
        }

        return res.status(400).send('Faltan datos');
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    login
}