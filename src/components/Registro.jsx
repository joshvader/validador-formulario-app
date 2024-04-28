// import SocialButton from './SocialButton';
import Formulario from './Formulario';
import SocialButton from './SocialButton';

const Registro = () => {
    

    return (
        <>
            <h1 style={{ fontWeight: '700' }}>Crea una cuenta</h1>
            <div className='containerIcons my-3'>
                <SocialButton icon="fa-brands fa-facebook" />
                <SocialButton icon="fa-brands fa-github" />
                <SocialButton icon="fa-brands fa-linkedin-in" />
            </div>
            <p style={{ fontWeight: '700' }}>O usa tu email para registrarte</p>
            <Formulario/>
            {/* onSubmit={handleRegistroSubmit}  */}
        </>
    );
};

export default Registro;



