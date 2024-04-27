import { useState } from 'react';
// import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';
import SocialButton from './SocialButton';

const Registro = () => {
    const [mensajeAlerta, setMensajeAlerta] = useState('');
    const [tipoAlerta, setTipoAlerta] = useState('');

    const handleRegistroSubmit = (datosUsuario) => {

        console.log(datosUsuario);
        setMensajeAlerta('¡Registro exitoso!');
        setTipoAlerta('success');
    };

    return (
        <>
            <h1 style={{ fontWeight: '700' }}>Crea una cuenta</h1>
            <div className='containerIcons my-3'>
                <SocialButton icon="fa-brands fa-facebook" />
                <SocialButton icon="fa-brands fa-github" />
                <SocialButton icon="fa-brands fa-linkedin-in" />
            </div>
            <p style={{ fontWeight: '700' }}>O usa tu email para registrarte</p>
            <Formulario onSubmit={handleRegistroSubmit} />
            {mensajeAlerta && <Alert mensaje={mensajeAlerta} tipo={tipoAlerta} />}
        </>
    );
};

export default Registro;
