import { Button } from "antd";



const TableHeader = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <h3>Company List:</h3>
            <Button type="primary">New User</Button>
        </div>
    )
}

export default TableHeader;