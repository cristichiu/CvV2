import "../../setPublic/scss/colorNavBar.scss"

const ColorNavBar = () => {
    function click() {
        const generalNavBar = document.getElementsByClassName("colorNavBar")[0]
        generalNavBar.classList.toggle("active")
    }
    function colorPick(color: string) {
        const body = document.getElementsByTagName("body")[0]
        body.classList.remove(body.classList[0])
        body.classList.add(color)
        localStorage.setItem("theme", color)
    }
    return (<>
    <nav className="colorNavBar">
        <div className="nav-linkContainer">
            <div onClick={() => colorPick("light")}></div>
            <div onClick={() => colorPick("gray")}></div>
            <div onClick={() => colorPick("dark")}></div>
        </div>
        <div className="buttonContainer" onClick={click}></div>
    </nav>
    </>)
}

export default ColorNavBar