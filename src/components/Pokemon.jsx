import React, { useState, useEffect} from 'react'

const Pokemon = () => {

    const[ pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
        .catch(err=> console.log(err))
    }, []);

    const clickHandler = () =>{
        setPokemon({
            ...pokemon,
        })
        console.log(pokemon)
    }

    return (
        <div>
            <button onClick={clickHandler}>Fetch Pokemon</button>

            {pokemon.length > 0 && pokemon.map((pokemon, index) => {
                return( <div key={index}>{pokemon.name}</div>)
            })}
        </div>
    )
}

export default Pokemon
