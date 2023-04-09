import anime from 'animejs/lib/anime.es.js';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AbilitatiSVG from "../../setPublic/svg/abilitati"
import '../../setPublic/scss/abilitati.scss'

const Abilitati = () => {
    useEffect(() => {
        const path: any = document.querySelectorAll('.abilitatiSVG path')
        for(let i=0; i<path.length; i++) {
            path[i].style.strokeDasharray = path[i].getTotalLength().toString()
            path[i].style.strokeDashoffset = path[i].getTotalLength().toString()
            path[i].style.setProperty("--delay", i*.2+'s')
        }
    }, [])
    return (<>
    <section id='abilitati'>
        <div className="content loadingHidden">
            <div className="generalContainer">
                <div className="leftContainer">
                    <div className='ability'>
                        <div className='percente'>40%</div>
                        <svg className='circle' viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="150" cy="150" r="130"/>
                        </svg>
                        <div className='title'>Front End</div>
                    </div>
                    <div className='ability'>
                        <div className='percente'>20%</div>
                        <svg className='circle' viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="150" cy="150" r="130"/>
                        </svg>
                        <div className='title'>Back End</div>
                    </div>
                    <div className='ability'>
                        <div className='percente'>40%</div>
                        <svg className='circle' viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="150" cy="150" r="130"/>
                        </svg>
                        <div className='title'>Design</div>
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="scrollContainer">
                        <AbilitatiSVG />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>)
}

export default Abilitati