
import { useState } from "react"
import { Button } from "antd"
import "./TableHeader.scss"
import NewUserModal from "./NewUserModal"


const TableHeader = () => {

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
            />
        </div>
    )
}

export default TableHeader