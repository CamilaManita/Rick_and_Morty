const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validation = (userData) => {
    let errors = {};

    if(!regexEmail.test(userData.email)){
        errors.email = 'Debe ser un correo electrónico';
    }
    if(!userData.email) {
        errors.email = 'El campo no puede estar vacío';
    }
    if(!userData.email.length > 35){
        errors.email = 'El email no puede tener más de 35 caracteres';
    }
    if(!userData.password.match(/\d/)) {
        errors.password = 'La contraseña debe tener al menos un número';
    }
    if(userData.password.length < 6 && userData.password.length > 10){
        errors.password = 'La contraseña debe contener entre 6 y 10 caracteres';
    }
    return errors;
}

export default validation;