import React, { useState } from 'react';

const Cards = ({ teamName, teamInfo }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <section className={`w-70 m-10 bg-white text-gray-700 rounded-lg shadow-md p-5 flex flex-col items-center justify-between transition duration-300 ease-in-out transform hover:scale-105 ${expanded ? 'h-auto' : 'h-30'}`} onClick={toggleExpand}>
            <h3>{teamName}</h3> {/* Adicione isso para mostrar o nome do time */}
            {expanded && (
                <div>
                    <p>Conferência: {teamInfo.conference}</p>
                    <p>Divisão: {teamInfo.division}</p>
                    <p>Cidade: {teamInfo.city}</p>
                    <p>Nome: {teamInfo.name}</p>
                    <p>Abreviação: {teamInfo.abbreviation}</p>
                </div>
            )}
        </section>
    );
};

export default Cards;
