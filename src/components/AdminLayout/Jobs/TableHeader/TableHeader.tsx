import { Button } from "antd"



const TableHeader = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}
        >
            <h3>Job List: </h3>
            <Button
                type="primary"
            >New Job</Button>
        </div>
    )
}

export default TableHeader