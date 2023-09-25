import Header from "./header";
import NaviMenu from "./naviMenu";
import './header.css'

function Headers() {
    return (
        <div className="header_title">
            <Header/>
            <NaviMenu/>
        </div>
    )
}

export default Headers;