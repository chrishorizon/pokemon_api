import React, { useState, useEffect} from 'react'

const Pokemon = () => {

    // Returns two variables inside of an array
    // first variable is the current state we are using (data)
    // second variable is the method we use to update our state (update data)
    const[ pokemon, setPokemon] = useState([]);

    // useEffect(() => {
    const getPoke = (e) => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
        .catch(err=> console.log(err))
    }
    // }, []);

    const clickHandler = () =>{
        console.log(pokemon)
    }

    return (
        <div>
            <button onClick={getPoke}>Fetch Pokemon</button>

            {pokemon.length > 0 && pokemon.map((pokemon, index) => {
                return( <div key={index}>{pokemon.name}</div>)
            })}
        </div>
    )
}

export default Pokemon
