import { useSelector } from "react-redux"
import NotAllowPage from "../NotAllowPage/NotAllowPage"


const ProtectedAdminRoute = (props: any) => {

    const userAccount = useSelector((state: any) => state.user)

    //console.log("jsdhfjdhh", userAccount);

    if (userAccount && userAccount.role === "ADMIN") {
        return (props.children)
    } else {
        return (<NotAllowPage />)
    }
}

export default ProtectedAdminRoute