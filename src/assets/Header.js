import React from "react";

function Header() {
    return (
        // Sivun header jossa Imatran logo istuu
        <header style={{ marginBottom: "2%", backgroundColor: "transparent", display: "fixed"}}>
            
            {/* Imatran logo */}
            <img
                src="./Imatra-logo.svg"
                style={{ paddingLeft: "10px", marginTop: "10px" }}
                width="314"
                height="60"
                alt="Imatra"
            />
        </header>
    );
}

export default Header;
