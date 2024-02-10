import React from 'react';
import GeoShieldLogo from './geoShieldLogo';
import SecurityIssuesData from './securityIssuesData';
import MatchingMessages from './matchingMessages';

const HomePage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="border border-gray-300 rounded w-full mx-10 my-10">
                <div className="m-10">
                    <GeoShieldLogo />
                    <SecurityIssuesData />
                    {/* <MatchingMessages /> */}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
