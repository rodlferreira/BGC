/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";

interface IProps {
    name: string;
    url: string;
}


export default function Header() {
    const [search, setSearch] = useState([]);
    const [ability, setAbility] = useState<IProps[]>([]);

    useEffect(() => { fetchCard() }, []);

    function fetchCard() {
        axios.get('https://pokeapi.co/api/v2/ability/').then(response => {
       setAbility(response.data.results);
        }
    ).catch (err => console.log(err))
        }
return (

    <div className="header">
        <h1>Desafio BGC</h1>
        <input type="text" />
        <div>
            <ul>
                {ability.map((item: IProps) => (
                    <h2 key={item.name}>{item.name}</h2>
                    ))}
            </ul>
        </div>
    </div>
);
}