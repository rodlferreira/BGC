/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";


export default function Header() {
    const [search, setSearch] = useState([]);
    const [ability, setAbility] = useState({});

    useEffect(() => {fetchCard()},[]);

function fetchCard(){
   axios.get('https://pokeapi.co/api/v2/ability/').then(response => {
       setAbility(response);
      console.log("response => ", ability)
    }
    ).catch(err => console.log(err))
}
        return (

        <div className="header">
            <h1>Desafio BGC</h1>
            <input type="text" />
            <div>
                <ul>

                </ul>
            </div>
        </div>
    );
}