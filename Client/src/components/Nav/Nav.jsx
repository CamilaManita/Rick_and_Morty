import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch }) => {
    return (
        <nav className={style.nav}>

            <button className={style.btns}>
                <Link to={'/'} className={style.links}>Log out</Link>
            </button>
            
            <button className={style.btns}>
            <Link to={'about'} className={style.links}>About</Link>
            </button>
            
            <button className={style.btns}>
            <Link to={'home'} className={style.links}>Home</Link>
            </button>

            <button className={style.btns}>
            <Link to={'favorites'} className={style.links}>Favorites</Link>
            </button>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;