
import { useState } from "react"
import { Button } from "antd"
import "./TableHeader.scss"
import NewUserModal from "./NewUserModal"

interface IProps {
    fetchUserData: any
}

const TableHeader = (props: IProps) => {

    const { fetchUserData } = props

    const [openNewUserModal, setOpenNewUserModal] = useState<boolean>(false)
    return (
        <div className="table-header-container">
            <h3>User List</h3>
            <Button
                type="primary"
                onClick={() => setOpenNewUserModal(true)}
            >New User</Button>
            <NewUserModal
                openNewUserModal={openNewUserModal}
                setOpenNewUserModal={setOpenNewUserModal}
                fetchUserData={fetchUserData}
            />
        </div>
    )
}

export default TableHeader