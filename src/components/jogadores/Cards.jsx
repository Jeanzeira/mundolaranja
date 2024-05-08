import React, { useState } from 'react';

const Cards = ({ playerName, playerInfo }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <section className={`w-70 m-10 bg-white text-gray-700 rounded-lg shadow-md p-5 flex flex-col items-center justify-between transition duration-300 ease-in-out transform hover:scale-105 ${expanded ? 'h-auto' : 'h-30'}`} onClick={toggleExpand}>
            <h3>{playerName}</h3>
            {expanded && (
                <div>
                    <p>Posição: {playerInfo.position}</p>
                    <p>Altura (ft): {playerInfo.height}</p>
                    <p>Peso (lb): {playerInfo.weight}</p>
                    <p>Número: {playerInfo.jerseyNumber}</p>
                    <p>Universidade: {playerInfo.college}</p>
                    <p>País: {playerInfo.country}</p>
                    <p>Ano do Draft: {playerInfo.draftYear}</p>
                    <p>Round do Draft: {playerInfo.draftRound}</p>
                    <p>Pick do Draft: {playerInfo.draftNumber}</p>
                    <p>Time: {playerInfo.team.name}</p>
                </div>
            )}
        </section>
    );
};

export default Cards;
