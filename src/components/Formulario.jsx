import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Formulario = ({ onSubmit }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmContrasena, setConfirmContrasena] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (camposCompletos()) {
            if (emailIsValid() && contrasenasCoinciden()) {
                onSubmit({ nombre, email, contrasena });
            } else {
                alert('Por favor, revisa los campos del formulario.');
            }
        } else {
            alert('Por favor completa todos los campos.');
        }
    };

    const camposCompletos = () => {
        return nombre.trim() !== '' && email.trim() !== '' && contrasena.trim() !== '' && confirmContrasena.trim() !== '';
    };

    const emailIsValid = () => {
       
        return true;
    };

    const contrasenasCoinciden = () => {
        return contrasena === confirmContrasena;
    };

    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <div className='form-group mb-3'>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className='form-group mb-3'>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='form-group mb-3'>
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                />
            </div>
            <div className='form-group mb-3'>
                <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    value={confirmContrasena}
                    onChange={(e) => setConfirmContrasena(e.target.value)}
                />
            </div>
            <button className='btn btn-success' type="submit">Registrarse</button>
        </form>
    );
};

Formulario.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default Formulario;

