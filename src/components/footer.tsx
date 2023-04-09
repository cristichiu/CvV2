import { AiFillGithub } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'

import '../../setPublic/scss/footer.scss'

const Footer = () => {
    function footerLinkClick(type: string) {
        navigator.clipboard.writeText("060699738")
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
        <a className="footer-link" target='contact' href="https://discordapp.com/users/530059275754799116" data-content="Discord"><FaDiscord /></a>
        <a className="footer-link" target='contact' href="https://github.com/cristichiu" data-content="GitHub"><AiFillGithub /></a>
        <div className="footer-link Telefon" data-content="Telefon" onClick={() => footerLinkClick("Telefon")}><BsFillTelephoneFill /></div>
    </div>
    </>)
}

export default Footer