import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Strip.css';

export default function ComicStrip(props) {
    const [MAX, setMAX] = useState(0);
    const [issue, setIssue] = useState(props.match.params.num);
    const [comic, setComic] = useState(null);

    useEffect(() => {
        console.log("useEffect");

        axios.get(
            '/api/getXKCD'
        ).then((response) => {
            setMAX(response.data.num);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        console.log("useEffect issue");

        axios.get('/api/getXKCD', {
            params: {
                num: (issue == 0 ? null : issue)
            }
        }).then((response) => {
            // setMAX(response.data.num);
            setComic(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [issue]);

    return (
        <div>
            {
                ((comic != null) && (MAX != 0)) ? (
                    <div id="reader">
                        <div id="taskbar">
                            <button onClick={() => setIssue(comic.num - 1)} disabled={comic.num == 1}>Previous</button>
                            <button onClick={() => setIssue(Math.floor(Math.random() * MAX) + 1)}>Random</button>
                            <button onClick={() => setIssue(comic.num + 1)} disabled={comic.num == MAX}>Next</button>
                        </div>
                        <div id="strip">
                            <div>
                                <p id="metadata_text"><strong>{comic.num}</strong>: {comic.title}</p>
                                <img id="metadata_text" src={comic.link} />
                                <p id="metadata_text">{comic.date}</p>
                                <p id="metadata_text">{comic.views} views</p>
                            </div>
                        </div>
                    </div>
                ) : <p>Loading</p>
            }
        </div>

    )
}