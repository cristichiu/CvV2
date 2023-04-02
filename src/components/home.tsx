import HomeBackground from "./homeBackground"
import HomePage1 from "../../setPublic/svg/homePages/page1"
import HomePage2 from "../../setPublic/svg/homePages/page2"
import HomePage3 from "../../setPublic/svg/homePages/page3"
import HomePage4 from "../../setPublic/svg/homePages/page4"
import HomePage5 from "../../setPublic/svg/homePages/page5"

import '../../setPublic/scss/home.scss'
import { useEffect, useState } from "react"
import anime from 'animejs/lib/anime.es.js';
import { FaDiscord } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'

const Home = () => {
    const maxPage: number = 5
    const [pages, setPages] = useState<number>(1);
    const [load, setLoad] = useState<boolean>(false);
    const [wait, setWait] = useState<boolean>(false);
    const [pagesAnimationArr, setPagesAnimationArr] = useState<Array<any>>([])

    class pagesAnimation {
        page : string
        constructor(page: string) {
            this.page = page
        }
        apear() {
            anime({
                targets: `.pages .${this.page} path`,
                translateX: 0,
                translateY: 0,
                opacity: 1,
                scale: 1,
                rotate: 0,
                delay: 500,
                duration: 2000,
                easing: 'easeInOutExpo'
            })
        }
        disapear() {
            anime({
                targets: `.pages .${this.page} path`,
                translateX: function() { return anime.random(-300, 300) + 50+'%' },
                translateY: function() { return anime.random(-300, 300) },
                opacity: 0,
                scale: function() { return Math.random() * .5 },
                rotate: function() { return anime.random(-360, 360) },
                duration: 2000,
                easing: 'easeInOutExpo'
            })
        }
        init() {
            anime({
                targets: `.pages .${this.page} path`,
                translateX: function() { return anime.random(-300, 300) + 50+'%' },
                translateY: function() { return anime.random(-300, 300) },
                opacity: 0,
                scale: function() { return Math.random() * .5 },
                rotate: function() { return anime.random(-360, 360) },
                duration: 0,
                easing: 'easeInOutExpo'
            })
        }
    }
    
    useEffect(() => {
        let pagesAnimationArrTemp: Array<any> = []
        for(let i=0; i<=maxPage; i++) pagesAnimationArrTemp.push(new pagesAnimation(`homePage${i}`))
        for(let i=0; i<pagesAnimationArrTemp.length; i++) { pagesAnimationArrTemp[i].init(); }
        setPagesAnimationArr(pagesAnimationArrTemp)
        setLoad(true)
        pagesAnimationArrTemp[pages].apear()
    }, [])
    useEffect(() => {
        if(pages == 1) { pagesAnimationArr[maxPage]?.disapear() } else { pagesAnimationArr[pages-1]?.disapear() }
        pagesAnimationArr[pages]?.apear()
    }, [pages])
    function pagesControler() {
        if(!wait) {
            if(pages < maxPage) { setPages(pages+1) } else { setPages(1) }
            setWait(true)
            setTimeout( async () => {
                setWait(false)
            }, 2000)
        }
    }
    function footerLinkClick(type: string) {
        const element: any = document.getElementsByClassName(type)[0]
        element.dataset.content = "Copiat"
        element.classList.add("active")
        setTimeout(async () => {
            element.dataset.content = type
            element.classList.remove("active")
        }, 5000)
    }
    return (<>
    <section id="acasa">
        <HomeBackground />
        <div className="generalHomeContainer">
            <div className="leftGeneralHomeContainer">
                <a className="footer-link" href="" data-content="Discord"><FaDiscord /></a>
                <a className="footer-link" href="" data-content="GitHub"><AiFillGithub /></a>
                <div className="footer-link Telefon" data-content="Telefon" onClick={() => footerLinkClick("Telefon")}><BsFillTelephoneFill /></div>
            </div>
            <div className="rightGeneralHomeContainer">
                <div className="topGeneralHomeContainer" onClick={pagesControler}>
                    <div className={`pages ${!load && 'invizible'}`}><HomePage1 /><HomePage2 /><HomePage3 /><HomePage4 /><HomePage5 /></div>
                    <div className="poza"></div>
                </div>
                <div className="bottomGeneralHomeContainer" onClick={pagesControler}>Mai multe informații →</div>
            </div>
        </div>
        <a className="arrowParrent" href="#abilitati">
            <div className="arrow"></div>
        </a>
    </section>
    </>)
}
export default Home