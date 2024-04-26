import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = () => {
    const [mensajeAlerta, setMensajeAlerta] = useState('');
    const [tipoAlerta, setTipoAlerta] = useState('');

    const handleRegistroSubmit = (datosUsuario) => {
    
        console.log(datosUsuario);
        setMensajeAlerta('¡Registro exitoso!');
        setTipoAlerta('success');
    };

    return (
        <div>
            <SocialButton icon="ruta/al/icono.png" />
            <Formulario onSubmit={handleRegistroSubmit} />
            {mensajeAlerta && <Alert mensaje={mensajeAlerta} tipo={tipoAlerta} />}
        </div>
    );
};

export default Registro;
