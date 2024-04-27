import PropTypes from 'prop-types';

const Alert = ({ mensaje, tipo }) => {
    return (
        <div className={`alert ${tipo}`}>
            <p>{mensaje}</p>
        </div>
    );
};

Alert.propTypes = {
    mensaje: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired
};

export default Alert;
