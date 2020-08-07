import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    const [show, handleshow] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if(window.scrollY>200){
                handleshow(true);
            }else{
                handleshow(false)
            }
          });
        return () => {
            window.removeEventListener('scroll');
        };
    },[]);

    return (
        <div className={show ? "header-background-scroll header-background" : "header-background"} >
            <img className="logo-netflix" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"/>
            <img className="logo-netflix" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
        </div>
            
        
    );
}

export default Header;
