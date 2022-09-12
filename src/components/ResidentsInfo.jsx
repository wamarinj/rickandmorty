import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ResidentInfo = ({ characterUrl }) => {

    const [character, setCharacter] = useState({})

    console.log(characterUrl)

    useEffect(() => {
        axios.get(characterUrl)
            .then(res => {
                console.log(res)
                setCharacter(res.data)
            })
    }, [])
    return (
        <div className="characterCard">
                <img class="card-img" src={character.image} />
            <div className="characterBio">
                <h1>Name   :   {character.name}</h1>
                <h1>Status: {character.status}</h1>
                <h1>Specie: {character.species}</h1>
                {/* <h1>{character.episode?.lenght}</h1> */}
                
            </div>
        </div>
    );
};

export default ResidentInfo;