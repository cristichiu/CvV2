import "../../setPublic/scss/contactMe.scss"
import { useState } from "react"
import emailjs from '@emailjs/browser'

interface IGmailData {
    userName: string,
    userGmail: string,
    message: string
}
interface IGmailDataError {
    userName: boolean,
    userGmail: boolean,
    message: boolean
}

import { TfiClose } from 'react-icons/tfi'
import Loading from "./loading"

const ContactMe = () => {
    function contactMeDis() {
        const contactMeContainer: any = document.getElementById("contactMe")
        contactMeContainer.classList.remove("active")
    }
    const [copied, setCopied] = useState<boolean>(false);
    const phoneNumberClick = () => {
        navigator.clipboard.writeText("060699738")
        const item: any = document.getElementsByClassName("item-link-phone")[0]
        setCopied(true)
        if(!copied) { item.innerHTML += "<div class='green'> Copiat</div>" }
    }
    const [gmailData, setGmailData] = useState<IGmailData>({userName: '', userGmail: '', message: ''})
    const [gmailDataError, setGmailDataError] = useState<IGmailDataError>({userName: false, userGmail: false, message: false})
    const [request, setRequest] = useState<boolean>(false)
    const [sended, setSended] = useState<boolean>(false)
    const [errSended, setErrSended] = useState<boolean>(false)
    const sendGmail = () => {
        if(gmailData.userName == '') {
            setGmailDataError(old => ({...old, userName: true}))
            setTimeout( async () => {
                setGmailDataError(old => ({...old, userName: false}))
            }, 5000)
        } else { setGmailDataError(old => ({...old, userName: false})) }
        if(gmailData.userGmail == '') {
            setGmailDataError(old => ({...old, userGmail: true}))
            setTimeout( async () => {
                setGmailDataError(old => ({...old, userGmail: false}))
            }, 5000)
        } else { setGmailDataError(old => ({...old, userGmail: false})) }
        if(gmailData.message == '') {
            setGmailDataError(old => ({...old, message: true}))
            setTimeout( async () => {
                setGmailDataError(old => ({...old, message: false}))
            }, 5000)
        } else { setGmailDataError(old => ({...old, message: false})) }
        if(gmailData.message == '' || gmailData.userGmail == '' || gmailData.userName == '') return;
        setRequest(true)
        emailjs.send("service_lkunl42","template_yb681ck",{
            user_name: gmailData.userName,
            user_gmail: gmailData.userGmail,
            message: gmailData.message,
        }, "GT53uwJ9jGyC77J3Y").then(res => {
            console.log(res)
            setRequest(false)
            setSended(true)
            setGmailData({userName: '', userGmail: '', message: ''})
            setTimeout( async () => { setSended(false) }, 5000)
        }).catch(err => {
            console.log(err)
            setRequest(false)
            setErrSended(true)
            setTimeout( async () => { setErrSended(false) }, 5000)
        })
    }
    return (<>
    <div id="contactMe">
        <div className="contactMeBackDrop" onClick={contactMeDis}></div>
        <div className="content">
            <div className="generalContainer">
                <div className="itemGmail">
                    <input
                        className={gmailDataError.userName ? "inputError":"inputNormal"}
                        type="text"
                        placeholder="Numele tău*"
                        value={gmailData.userName} 
                        onChange={(event) => setGmailData({...gmailData, userName: event.target.value})} />
                    <input
                        className={gmailDataError.userGmail ? "inputError":"inputNormal"}
                        type="text"
                        placeholder="Gmail-ul tău*"
                        value={gmailData.userGmail}
                        onChange={(event) => setGmailData({...gmailData, userGmail: event.target.value})} />
                    <textarea
                        className={gmailDataError.message ? "inputError":"inputNormal"}
                        placeholder="Mesaj*"
                        value={gmailData.message}
                        onChange={(event) => setGmailData({...gmailData, message: event.target.value})} />
                    <div className="send" onClick={sendGmail}>Trimite</div>
                    {sended && <div className="green">Mesaj trimis cu succes!</div>}
                    {errSended && <div className="red">Nu am reușit să trimit acest mesaj</div>}
                    {request && <Loading />}
                </div>
                <div className="itemFooter">
                    <div className="items">
                        <div className="item-link">Instagram: <a href="https://www.instagram.com/cristichiu/" target="contact">cristichiu</a></div>
                        <div className="item-link">Gmail: <a href="mailto:grajdiancristian@gmail.com" target="contact">grajdiancristian@gmail.com</a></div>
                        <div className="item-link">GitHub: <a href="https://github.com/cristichiu" target="contact">cristichiu</a></div>
                        <div className="item-link item-link-phone" onClick={phoneNumberClick}>Telefon: <u>060699738</u></div>
                        <div className="item-link">Discord: <a href="https://discordapp.com/users/530059275754799116" target="contact">cristichiu#8554</a></div>
                    </div>
                </div>
                <div className="closebut" onClick={contactMeDis}><TfiClose className="button" /></div>
            </div>
        </div>
    </div>
    </>)
}

export default ContactMe