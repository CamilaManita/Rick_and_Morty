import { useState } from "react";
import validation from "../validation";
import style from './Form.module.css'

function Form({login}){
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })


    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <form onSubmit={handleSubmit} className={style.form}>
            <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png" alt="RickAndMortyLogo"/>
            
                <label htmlFor="email" className={style.label}>Email</label>
                <input name="email" type="email" className={style.inputs}
                placeholder="Ingrese su email" value={userData.email} onChange={handleChange}/>
                {errors.email && <p style={{color:'red'}}>{errors.email}</p>}


                <label htmlFor="password" className={style.label}>Password</label>
                <input name="password" type="password" className={style.inputs}
                placeholder="Ingrese su password" value={userData.password} onChange={handleChange}/>
                {errors.password && <p style={{color:'red'}}>{errors.password}</p>}

            <button type="submit" className={style.button}>Submit</button>
        </form>
    )
}

export default Form;