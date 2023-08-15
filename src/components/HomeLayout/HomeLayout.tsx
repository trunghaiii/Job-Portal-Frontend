import { Outlet } from "react-router-dom";



const HomeLayout = () => {
    return (
        <div>
            <div>Header</div>
            <div><Outlet /></div>
            <div>Footer</div>
        </div>
    )
}

export default HomeLayout;