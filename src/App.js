import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '1ac4ed8bf751.3220cb43464f4e353c2b';

const email = 'camilamanita@gmail.com';
const password = 'KeyP1234';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   function login(userData) {
      if(userData.password === password && userData.email === email){
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])

   function onSearch(id) {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then ((response) => response.data)
      .then(( data ) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id);
      setCharacters(charactersFiltered);
   }

   return (
      <div className='App' style={{padding: '25px'}}>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} />
         }

         <Routes>
               <Route path='/' element={<Form login={login}/>} />
               <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
               <Route path='/about' element={<About/>} />
               <Route path='/detail/:id' element={<Detail/>} />
               <Route path='/favorites' element={<Favorites/>} />
         </Routes>
      </div>
   );
}

export default App;
