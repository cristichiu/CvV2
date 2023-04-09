import '../../setPublic/scss/general.scss'
import { useEffect, lazy, Suspense } from 'react'

// import Home from "../components/home"
// import GeneralNavBar from "../components/generalNavBar"
// import ColorNavBar from '../components/colorNavBar'
// import Abilitati from '../components/abilitati'
// import Footer from '../components/footer'
// import Proiecte from '../components/proiecte'
// import ContactMe from '../components/contactMe'
const Home = lazy(() => import('../components/home'))
const GeneralNavBar = lazy(() => import('../components/generalNavBar'))
const ColorNavBar = lazy(() => import('../components/colorNavBar'))
const Abilitati = lazy(() => import('../components/abilitati'))
const Footer = lazy(() => import('../components/footer'))
const Proiecte = lazy(() => import('../components/proiecte'))
const ContactMe = lazy(() => import('../components/contactMe'))

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
    return (<div id='general' className="generalContent">
    <GeneralNavBar /><ColorNavBar /><Footer /><ContactMe />
    <Home />
    <Abilitati />
    <Proiecte />
    </div>)
}
export default General