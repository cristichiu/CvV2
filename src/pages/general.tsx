import '../../setPublic/scss/general.scss'

import Home from "../components/home"
import GeneralNavBar from "../components/generalNavBar"
import ColorNavBar from '../components/colorNavBar'
import Abilitati from '../components/abilitati'
import Footer from '../components/footer'
import { useEffect } from 'react'
import Proiecte from '../components/proiecte'

const General = () => {
    useEffect(() => {
        const observer = new  IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add("loadingShow")
                } else {
                    entry.target.classList.remove("loadingShow")
                }
            })
        })
        const loadingHidden = document.querySelectorAll('.loadingHidden')
        loadingHidden.forEach((el) => observer.observe(el))
    }, [])
    return (<div className="generalContent">
    <GeneralNavBar /><ColorNavBar /><Footer />
    <Home />
    <Abilitati />
    <Proiecte />
    </div>)
}
export default General