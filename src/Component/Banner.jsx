import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Banner.css';

function Banner() {
    const [state, setState] = useState([]);
    const randomNum = Math.floor(Math.random() * 20);

    useEffect(() => {
        async function fetchData(){
            const url = "https://api.themoviedb.org/3/discover/tv?api_key=08f3b1b71e34abfe2c008d99a51219e7&with_networks=213";
            const request = await axios.get(url);
            setState(request.data.results[randomNum]);
            return request;
        }
        fetchData();
    }, []);

    
    const shortenContents = (str, n) => {
        return str?.length > n ? str?.substr(0,n)+"..." : str;
    }

    return (
        <header className="banner-poster" style={{
            backgroundSize: "cover",
            backgroundImage: "url(https://image.tmdb.org/t/p/original" + state.backdrop_path + ")",
            backgroundPosition: "center center"
        }}>
            <div className="banner-content">
                <h1 className="banner-title">{state.name}</h1>
                <div>
                    <button className="banner-button">Play</button>
                    <button className="banner-button">MyList</button>
                </div>
                <h1 className="banner-description">{shortenContents(state.overview,200)}</h1>

            </div>
            <div className="banner-fadeend"></div>
        </header>   
    );
}

export default Banner;
