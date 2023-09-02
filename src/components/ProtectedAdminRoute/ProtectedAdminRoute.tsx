import { useSelector } from "react-redux"


const ProtectedAdminRoute = (props: any) => {

    const userAccount = useSelector((state: any) => state.user)

    console.log("jsdhfjdhh", userAccount);

    if (userAccount && userAccount.role === "ADMIN") {
        return (props.children)
    } else {
        return (<div>You are not Allow to access this page!</div>)
    }
}

export default ProtectedAdminRoute