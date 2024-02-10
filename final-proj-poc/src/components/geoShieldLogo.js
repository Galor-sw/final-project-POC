import React from 'react';
import logoImage from '../images/logo.jpeg'; // Import the logo image

const GeoShieldLogo = () => {
    return (
        <div className="flex flex-col justify-center items-center border-b border-gray-300 pb-5">
            <img src={logoImage} alt="GeoShield Logo" className="h-72 m-5" /> {/* Use the imported logoImage */}
        </div>
    );
};

export default GeoShieldLogo;
