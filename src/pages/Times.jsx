import React, { useState } from 'react';
import Nav from "../components/Nav"
import JogContent from "../components/times/TimContent"


const Jogadores = () => {
    return (
        <div className="min-h-screen bg-gray-950">
            <Nav />
            <JogContent />
        </div>
    )
}

export default Jogadores;
