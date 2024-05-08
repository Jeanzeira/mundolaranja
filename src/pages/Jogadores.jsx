import React, { useState } from 'react';
import Nav from "../components/Nav"
import SearchBar from "../components/jogadores/SearchBar";
import JogContent from "../components/jogadores/JogContent"
import Footer from "../components/Footer"


const Jogadores = () => {
    return (
        <div className="min-h-screen bg-gray-950">
            <Nav />
            <JogContent />
        </div>
    )
}

export default Jogadores;
