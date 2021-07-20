import React, { useEffect, useState } from 'react';
import "./Nav.css"

function Nav() {

    const [show, setShow] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                setShow(true)
            } else {
                setShow(false)
            }
        });

        return()=>{
            window.removeEventListener('scroll');
        };
    },[]);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__logo">
                <img className="nav__logo" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"/>
            </div>
            <div >
                <img className="nav__avatar" src="http://cdn.onlinewebfonts.com/svg/img_568656.png"/>
            </div>
        </div>
    )
}

export default Nav
