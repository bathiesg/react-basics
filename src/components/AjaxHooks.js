import React, { useState, useEffect } from 'react';

export default function AjaxHooks() {
    const [pokemons, setpokemons] = useState([]);

    useEffect(() => {
        //never use the userSelect call function as async function

        let getPokemonsData = async (url) => {
            const fetchResponse = await fetch(url);
            const responseJson = await fetchResponse.json();

            responseJson.results.forEach(async (el) => {
                const  resResults = await fetch(el.url);
                const resResultsJson = await resResults.json();
                let pokemon = {
                    id: resResultsJson.id,
                    name: resResultsJson.name,
                    avatar: resResultsJson.sprites.front_default
                }
                setpokemons((pokemons) => [...pokemons, pokemon])
            })
        }

        getPokemonsData('https://pokeapi.co/api/v2/pokemon')
       
    }, [])
    return(
        <>
            <h3>Componentes de peticiones asincronas Hooks</h3>
            {
            pokemons.length === 0 ? 'Loading...' : 
            pokemons.map(pokemon => 
                <Pokemons
                    key={pokemon.id}
                    name={pokemon.name}
                    avatar={pokemon.avatar}
                />
            )}
        </>
    )
}

function Pokemons({name, avatar}){
    return(
        <figure>            
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
}