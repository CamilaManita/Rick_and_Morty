import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards, reset } from "../../redux/actions";
import { useState } from "react";


const Favorites = ({myFavorites}) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);
    // const favorites = useSelector(state => state.myFavorites);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    const resetButton = () => {
        dispatch(reset())
    }

    return(
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">All Character</option>
            </select>
            <button onClick={resetButton}>Reset</button>
            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={fav.onClose}
                        />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);