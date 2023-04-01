import { AiFillGithub } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'

import '../../setPublic/scss/footer.scss'

const Footer = () => {
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
    <div className="footerContainer">
        <a className="footer-link" href="" data-content="Discord"><FaDiscord /></a>
        <a className="footer-link" href="" data-content="GitHub"><AiFillGithub /></a>
        <div className="footer-link Telefon" data-content="Telefon" onClick={() => footerLinkClick("Telefon")}><BsFillTelephoneFill /></div>
    </div>
    </>)
}

export default Footer