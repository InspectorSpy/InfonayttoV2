/* eslint-disable no-unused-vars */
import React from 'react';
import ekaKrs from './images/Pohja1krsNumeroitu.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function EkakrsPohja() {

    return (
        <div className="EkakrsPohja">

            {/* H1 header joka on etusivulla kuvien päällä */}
            <h1 style={{marginLeft: "90px"}}>Ensimmäinen kerros</h1>
            
            {/* Ensimmäisen kerroksen pohjakuvan <img> */}
            <img alt="ekaKrs" className="ekaKrs" src={ekaKrs} />
        </div>
    );
};

export default EkakrsPohja;
