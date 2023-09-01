import { Outlet } from "react-router-dom"


const AdminLayout = () => {
    return (
        <div>
            <div>admin header</div>
            <div><Outlet /></div>
            <div>admin footer</div>
        </div>
    )
}

export default AdminLayout