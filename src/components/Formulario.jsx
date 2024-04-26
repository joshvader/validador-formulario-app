import React, { useState } from 'react';

const Formulario = ({ onSubmit }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmContrasena, setConfirmContrasena] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailIsValid() && contrasenasCoinciden()) {
            onSubmit({ nombre, email, contrasena });
        } else {
            alert('Por favor, revisa los campos del formulario.');
        }
    };

    const emailIsValid = () => {
     
        return true;
    };

    const contrasenasCoinciden = () => {
        return contrasena === confirmContrasena;
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confirmar contraseña"
                value={confirmContrasena}
                onChange={(e) => setConfirmContrasena(e.target.value)}
            />
            <button type="submit">Registrarse</button>
        </form>
    );
};

export default Formulario;
