import { Outlet } from "react-router-dom";
import "./HomeLayout.scss"
import Header from "./Header/Header";

const HomeLayout = () => {

    return (
        <div className="home-layout-container">
            <div className="header-bar">
                <Header />
            </div>
            <div className="content"><Outlet /></div>
            <div className="footer">Footer</div>
        </div>
    )
}

export default HomeLayout;