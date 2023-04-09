import "../../setPublic/scss/generalNavBar.scss"

import { SlMenu } from 'react-icons/sl'
import { TfiClose } from 'react-icons/tfi'
import { useEffect } from "react"

const GeneralNavBar = () => {
    function click() {
        const generalNavBar = document.getElementsByClassName("generalNavBar")[0]
        generalNavBar.classList.toggle("active")
    }
    function contactMeCon() {
        const contactMeContainer: any = document.getElementById("contactMe")
        contactMeContainer.classList.add("active")
    } 
    function contactMeDis() {
        const contactMeContainer: any = document.getElementById("contactMe")
        contactMeContainer.classList.remove("active")
    }
    useEffect(() => {
        if(window.innerWidth > 800) document.getElementsByClassName("generalNavBar")[0].classList.add("active")
    }, [])
    return (<>
    <nav className="generalNavBar">
        <div className="nav-linkContainer">
            <a className="nav-link active" href="#acasa" onClick={contactMeDis}>Acasă</a>
            <a className="nav-link" href="#abilitati" onClick={contactMeDis}>Abilitați</a>
            <a className="nav-link" href="#proiecte" onClick={contactMeDis}>Proiecte</a>
            {/* <a className="nav-link" href="#test">Despre</a> */}
            <div className="nav-link" onClick={contactMeCon}>Contactează-mă</div>
        </div>
        <div className="buttonContainer" onClick={click}><SlMenu className="button open" /><TfiClose className="button close" /></div>
    </nav>
    </>)
}

export default GeneralNavBar