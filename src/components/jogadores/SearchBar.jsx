import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value);
        onSearch(value); // Passa o valor de pesquisa para a função de busca
    };

    return (
        <div className='bg-gray-950'>
            <div className='bg-white input-wrapper w-90 rounded-t-xl h-10 px-4 flex items-center'>
                <FaSearch />
                <input 
                    type="text" 
                    placeholder='Digite o nome do jogador' 
                    value={input} 
                    onChange={(e) => handleChange(e.target.value)}
                    className="bg-transparent border-none h-full flex-grow text-lg ml-2 focus:outline-none" 
                />
            </div>
        </div>
    );
};

export default SearchBar;