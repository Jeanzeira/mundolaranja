import React, { useState, useEffect } from 'react';
import SearchBar from "../times/SearchBar";
import Cards from './Cards';

const TimContent = () => {
    const [repositories, setRepositories] = useState([]);
    const [filteredTeams, setFilteredTeams] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.balldontlie.io/v1/teams", {
                    headers: {
                        'Authorization': '944ec9cb-4987-4fc9-a948-dafe94def61b'
                    }
                });
                const json = await response.json();
                if (Array.isArray(json.data)) {
                    setRepositories(json.data);
                    setFilteredTeams(json.data); // Inicialmente, mostra todos os jogadores
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
        const filteredResults = repositories.filter(team => 
            value &&
            team && 
            team.full_name && 
            team.full_name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredTeams(filteredResults);
    };

    return (
        <div className="bg-gray-500 m-20 md:m-10 max-w-full rounded-xl">
            <SearchBar onSearch={handleSearch} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-1">
                {filteredTeams.map(team => (
                    <Cards 
                    key={team.id} 
                    teamName={`${team.full_name}`} 
                    teamInfo={{
                        conference:team.conference,
                        division:team.division,
                        city:team.city,
                        name:team.name,
                        abbreviation:team.abbreviation
                    }}
                />
                ))}
            </div>
        </div>
    );
};

export default TimContent;
