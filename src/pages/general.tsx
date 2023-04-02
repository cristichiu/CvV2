import '../../setPublic/scss/general.scss'

import Home from "../components/home"
import GeneralNavBar from "../components/generalNavBar"
import ColorNavBar from '../components/colorNavBar'
import Abilitati from '../components/abilitati'

const General = () => {
    return (<div className="generalContainer">
    <GeneralNavBar />
    <ColorNavBar />
    <Home />
    <Abilitati />
    </div>)
}
export default General