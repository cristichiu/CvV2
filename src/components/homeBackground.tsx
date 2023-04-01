import { useEffect } from "react"

import '../../setPublic/scss/homeBackground.scss'

const HomeBackground = () => {
    useEffect(() => {
        const path: any = document.querySelectorAll('.homeBg path')
        for(let i=0; i<path.length; i++) {
            path[i].style.strokeDasharray = path[i].getTotalLength().toString()
            path[i].style.strokeDashoffset = path[i].getTotalLength().toString()
            path[i].style.setProperty("--delay", i*.1+'s')
        }
    }, [])
    return (<>
    <div className="homeBgContainer">
        <svg className="homeBg1 homeBg" viewBox="0 0 522 755" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-3.05176e-05 619C436 619 437 183 320 282C203 381 33 241 33 241C33 241 264 214 264 0"/>
            <path d="M-3.05176e-05 634C452.947 634 453.986 187.434 332.438 288.833C210.89 390.232 34.2827 246.84 34.2827 246.84C34.2827 246.84 274.261 219.186 274.261 0"/>
            <path d="M-3.05176e-05 649C469.892 649 470.969 191.869 344.875 295.667C218.78 399.465 35.5652 252.68 35.5652 252.68C35.5652 252.68 284.521 224.372 284.521 0"/>
            <path d="M-3.05176e-05 664C486.836 664 487.953 196.304 357.311 302.501C226.669 408.698 36.8477 258.52 36.8477 258.52C36.8477 258.52 294.782 229.557 294.782 0"/>
            <path d="M-3.05176e-05 679C503.781 679 504.937 200.738 369.748 309.334C234.559 417.93 38.1302 264.36 38.1302 264.36C38.1302 264.36 305.042 234.743 305.042 0"/>
            <path d="M-3.05176e-05 694C520.726 694 521.92 205.173 382.184 316.168C242.448 427.163 39.4128 270.2 39.4128 270.2C39.4128 270.2 315.302 239.929 315.302 0"/>
            <path d="M-3.05176e-05 709C537.671 709 538.904 209.607 394.621 323.001C250.338 436.396 40.6953 276.04 40.6953 276.04C40.6953 276.04 325.562 245.115 325.562 0"/>
            <path d="M-3.05176e-05 724C554.616 724 555.888 214.042 407.057 329.835C258.227 445.628 41.9778 281.88 41.9778 281.88C41.9778 281.88 335.822 250.3 335.822 0"/>
            <path d="M-3.05176e-05 739C571.561 739 572.872 218.476 419.494 336.669C266.117 454.861 43.2603 287.721 43.2603 287.721C43.2603 287.721 346.083 255.486 346.083 0"/>
            <path d="M-3.05176e-05 754C588.505 754 589.855 222.911 431.931 343.502C274.006 464.094 44.5429 293.561 44.5429 293.561C44.5429 293.561 356.343 260.672 356.343 0"/>
        </svg>
        <svg className="homeBg2 homeBg" viewBox="0 0 565 756" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M467.5 756C467.5 495 147.917 92.4997 243.959 322C340 551.5 563.96 270.5 563.96 270.5C563.96 270.5 306.5 214.5 306.5 0.5"/>
            <path d="M453.26 756C453.26 494.827 119.495 92.0606 219.798 321.713C320.102 551.365 554 270.179 554 270.179C554 270.179 285.115 214.142 285.115 0"/>
            <path d="M438.979 756C438.979 494.827 91.0317 92.0606 195.597 321.713C300.163 551.365 544 270.179 544 270.179C544 270.179 263.689 214.142 263.689 0"/>
            <path d="M424.698 756C424.698 494.827 62.5683 92.0606 171.396 321.713C280.224 551.365 534 270.179 534 270.179C534 270.179 242.264 214.142 242.264 0"/>
            <path d="M410.417 756C410.417 495.173 34.1049 92.9388 147.195 322.287C260.285 551.635 524 270.821 524 270.821C524 270.821 220.838 214.858 220.838 1"/>
            <path d="M396.137 756C396.137 494.827 5.64154 92.0606 122.994 321.713C240.346 551.365 514 270.179 514 270.179C514 270.179 199.412 214.142 199.412 0"/>
            <path d="M381.856 756C381.856 494.827 -22.8218 92.0606 98.7924 321.713C220.407 551.365 504 270.179 504 270.179C504 270.179 177.987 214.142 177.987 0"/>
            <path d="M367.575 756C367.575 494.827 -51.2852 92.0606 74.5912 321.713C200.468 551.365 494 270.179 494 270.179C494 270.179 156.561 214.142 156.561 0"/>
            <path d="M353.294 756C353.294 494.827 -79.7486 92.0606 50.39 321.713C180.529 551.365 484 270.179 484 270.179C484 270.179 135.135 214.142 135.135 0"/>
            <path d="M339.014 756C339.014 494.827 -108.212 92.0606 26.1888 321.713C160.59 551.365 474 270.179 474 270.179C474 270.179 113.71 214.142 113.71 0"/>
        </svg>    
    </div>
    </>)
}
export default HomeBackground