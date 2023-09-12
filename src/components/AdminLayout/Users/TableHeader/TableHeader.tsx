

import { Button } from "antd"
import "./TableHeader.scss"


const TableHeader = () => {
    return (
        <div className="table-header-container">
            <h3>User List</h3>
            <Button type="primary">New User</Button>
        </div>
    )
}

export default TableHeader