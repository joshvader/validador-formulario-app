import { useState } from 'react';
import Alert from './Alert';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmContrasena, setConfirmContrasena] = useState('');
    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);
    // const [mensajeAlerta, setMensajeAlerta] = useState('');
    // const [tipoAlerta, setTipoAlerta] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (nombre === '' || email === '' || contrasena === '' || confirmContrasena === '') {
            setError(true);

            return;
        } else if (contrasena != confirmContrasena) {
            setError2(true);
            return;
        }
        setError(false);
        setError2(false);
        setNombre('');
        setEmail('');
        setContrasena('');
        setConfirmContrasena('');
        Alert()
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
            <div className="mt-4" role="alert">
                {error ? <p>Por favor completa todos los campos</p> : null}
                {error2 ? <p>Las contraseñas no coinciden</p> : null}
            </div>
        </form>
    );
};



export default Formulario;

