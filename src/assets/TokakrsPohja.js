/* eslint-disable no-unused-vars */
import React from 'react';
import tokaKrs from './images/Pohja2krs_väri.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function TokakrsPohja() {
    
    return (
        <div className="TokakrsPohja
">

            {/* H1 header joka on etusivulla kuvien päällä */}
            <h1 style={{marginLeft: "150px", marginBottom: "33px"}}>Toinen Kerros</h1>

            {/* Toisen kerroksen pohjakuvan <img> */}
            <img alt="tokaKrs" className="tokaKrs" src={tokaKrs} />
        </div>

    );
};

export default TokakrsPohja;
