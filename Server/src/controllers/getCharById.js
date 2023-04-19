const axios = require('axios');

function getCharById(res, id){
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(result => result.data)
    .then(data => {
        let char = {
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species
        }
        res.writeHead(200, {'Content-type':'application/json'}).end(JSON.stringify(char))
    })
    .catch(err => 
        res.writeHead(500, {'Content-type': 'text/plain'}).end(`El personaje con id:${id} no fue encontrado`)
    )
}

module.exports = {
    getCharById
};