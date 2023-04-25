import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./action-types";
import axios from 'axios';

// return { type: ADD_FAV, payload: character }
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const {data} = await axios.post(endpoint, character)
            
            if(!data.length) throw Error('No hay favoritos')

            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const removeFav = (id) => {
    // return { type: REMOVE_FAV, payload: id }
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            const {data} = await axios.delete(endpoint)
            
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender};
};

export const orderCards = (order) => { //será: A: ascendente o D: descendente
    return {type: ORDER, payload: order}
};

export const reset = () => {
    return {type: RESET};
};