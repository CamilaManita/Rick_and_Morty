const http = require('http');
// const data = require('./utils/data');
const {getCharById} = require('./controllers/getCharById')

http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('/rickandmorty/character')){
        const id = req.url.split('/').at(-1)
        getCharById(res,id);
        
        // const characterFound = data.find((character) => character.id === +id)
        // return res
        // .writeHead(200, {"Content-type": "application/json"})
        // .end(JSON.stringify(characterFound))
    }
    else {
        res.end('Error 404 - Página no encontrada');
    }
})
.listen(3001);