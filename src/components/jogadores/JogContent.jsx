import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import Cards from './Cards';

const JogContent = () => {
    const [repositories, setRepositories] = useState([]);
    const [filteredPlayers, setFilteredPlayers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.balldontlie.io/v1/players", {
                    headers: {
                        'Authorization': '944ec9cb-4987-4fc9-a948-dafe94def61b'
                    }
                });
                const json = await response.json();
                if (Array.isArray(json.data)) {
                    setRepositories(json.data);
                    setFilteredPlayers(json.data); // Inicialmente, mostra todos os jogadores
                } else {
                    console.error("Data returned is not an array");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleSearch = (value) => {
        const filteredResults = repositories.filter(player => 
            value &&
            player && 
            player.first_name && 
            player.first_name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredPlayers(filteredResults);
    };

    return (
        <div className="bg-gray-500 m-20 md:m-10 max-w-full rounded-xl">
            <SearchBar onSearch={handleSearch} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-1">
                {filteredPlayers.map(player => (
                    <Cards 
                        key={player.id} 
                        playerName={`${player.first_name} ${player.last_name}`} 
                        playerInfo={{
                            position: player.position,
                            height: player.height,
                            weight: player.weight,
                            jerseyNumber: player.jersey_number,
                            college: player.college,
                            country: player.country,
                            draftYear: player.draft_year,
                            draftRound: player.draft_round,
                            draftNumber: player.draft_number,
                            team: player.team
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default JogContent;
