import { Outlet } from "react-router-dom";
import "./HomeLayout.scss"
import Header from "./Header/Header";
import Footerr from "./Footer/Footerr";

const HomeLayout = () => {

    return (
        <div className="home-layout-container">
            <div className="header-bar">
                <Header />
            </div>
            <div className="content"><Outlet /></div>
            <div className="footer">
                <Footerr />
            </div>
        </div>
    )
}

export default HomeLayout;