import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieList.css';

function MovieList(props) {
    const [state, setState] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(props.url);
            setState(request.data.results);
            return request;
        }
        fetchData();
    }, []);
    
    
    const listMovies = state.map(list => {
        return(
            <img key={list.id} id={list.id} className="poster" src={"https://image.tmdb.org/t/p/w500"+list.poster_path}></img>
        );
      });

    return (
        <div>
            <div>
                <h3 className="list-title">{props.title}</h3>
            </div>
            <div className="list-poster">
                {listMovies}
            </div>
            
        </div>
    );
} 

export default MovieList;
