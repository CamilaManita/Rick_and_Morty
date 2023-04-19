import style from './SearchBar.module.css'
import { useState } from "react";

function SearchBar({onSearch}){
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   }


   return(
      <div className={style.container}>
         <input type="search" onChange={handleChange} value={id} className={style.inputs}/>
         <button onClick={() => {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}

export default SearchBar;