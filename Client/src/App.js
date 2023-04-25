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

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = '1ac4ed8bf751.3220cb43464f4e353c2b';

// const email = 'camilamanita@gmail.com';
// const password = 'KeyP1234';
const URL = 'http://localhost:3001/rickandmorty/login';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
            
         setAccess(access);
         access && navigate('/home');
      
      } catch (error) {
         console.log(error.message);
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate])

   const onSearch = async (id) => {
      // axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         };
         
      } catch (error) {
         alert('¡No hay personajes con este ID!'); 
      }
   };

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
