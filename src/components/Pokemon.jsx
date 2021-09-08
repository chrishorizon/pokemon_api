import React, { useState, useEffect} from 'react'
import axios from 'axios'

const Pokemon = () => {

    // Returns two variables inside of an array
    // first variable is the current state we are using (data)
    // second variable is the method we use to update our state (update data)
    const[ pokemon, setPokemon] = useState([]);
    // const[loading, setLoading] = useState(true);

    // useEffect(() => {
        const getPoke = (e) => {
        //     setLoading(true)
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => {
            // setLoading(false)
            setPokemon(response.data.results)})
        .catch(err=> console.log(err))
    }
    // }, []);

    // if (loading) return "Loading..."

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
