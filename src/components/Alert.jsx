import React from 'react';

const Alert = ({ mensaje, tipo }) => {
    return (
        <div className={`alert ${tipo}`}>
            <p>{mensaje}</p>
        </div>
    );
};

export default Alert;
