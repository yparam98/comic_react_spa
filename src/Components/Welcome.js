import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Welcome() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        axios.get(
            '/api/getPopularComics'
        ).then((response) => {
            setPopular(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div>
            <p>Welcome to the XKCD Comic Aggregator!</p>
            <br />
            <p>Click <a href="/comic">HERE</a> to view the current comic!</p>
            <br />
            <p>Or check out one of these trending comics:</p>
            <ul>
                {
                    popular != [] ? (
                        popular.map((val) => {
                            return <li><a href={"/comic/" + val[0]}>{val[0]}</a>: {val[1]} views</li>
                        })
                    ) : <p>Loading</p>
                }
            </ul>
        </div>
    )
}