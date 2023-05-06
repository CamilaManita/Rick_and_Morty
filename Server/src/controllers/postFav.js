const {Favorite} = require('../DB_connection');

const postFav = async (req,res) => {
    const {name, origin, status, image, species, gender} = req.body;
    try {
        if(!name || !origin || !status || !image || !species || !gender){
            return res.status(401).send('Faltan datos')
        } else {
            const character = {
                id, name, origin, status, image, species, gender
            };
            await Favorite.create(character);
            const favorites = await Favorite.findAll();
            return res.status(200).json(favorites);
        }
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = {
    postFav
}