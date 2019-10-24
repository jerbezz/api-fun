import React, {useState, useEffect} from 'react';
import axios from 'axios'

const API = () => {
    const [starWars, setStarWars] = useState([])
    
    async function getStarWarsData() {
        const response = await axios.get('https://swapi.co/api/people/')
        setStarWars(response.data.results)
    }
    useEffect(() => {
        getStarWarsData()
    }, [])
    
    console.log(11111, starWars)

    const items = starWars.map((item) => {
        return (<li key={item.name}>{item.name}</li>);
      });

    const vehicles = starWars.map(v => {
        return (
            <div key={v.name}>
            <p>Name: {v.name}</p>
            <p>Birth Year: {v.birth_year}</p>
            </div>
            )})

    return (
        <div>
            Gonna Get Some StarWars Info
            {starWars.map((index) => (
            <div key={index.name}>Name: {index.name}</div>
          ))}
          {vehicles}
          {items}
        </div>
    );
};

export default API;