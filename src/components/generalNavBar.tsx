import "../../setPublic/scss/generalNavBar.scss"

import { SlMenu } from 'react-icons/sl'
import { TfiClose } from 'react-icons/tfi'
import { useEffect } from "react"

const GeneralNavBar = () => {
    function click() {
        const generalNavBar = document.getElementsByClassName("generalNavBar")[0]
        generalNavBar.classList.toggle("active")
    }
    useEffect(() => {
        if(window.innerWidth > 800) document.getElementsByClassName("generalNavBar")[0].classList.add("active")
    }, [])
    return (<>
    <nav className="generalNavBar">
        <div className="nav-linkContainer">
            <a className="nav-link active" href="#acasa">Acasă</a>
            <a className="nav-link" href="#abilitati">Abilitați</a>
            <a className="nav-link" href="#proiecte">Proiecte</a>
            <a className="nav-link" href="#test">Despre</a>
            <a className="nav-link" href="#test">Contactează-mă</a>
        </div>
        <div className="buttonContainer" onClick={click}><SlMenu className="button open" /><TfiClose className="button close" /></div>
    </nav>
    </>)
}

export default GeneralNavBar