
import { useState } from "react"
import { Button } from "antd"
import NewJobModal from "./NewJobModal"



const TableHeader = () => {

    const [openNewJobModal, setOpenNewJobModal] = useState<boolean>(false)

    const handleNewJobClick = () => {
        setOpenNewJobModal(true)
    }
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
                onClick={() => handleNewJobClick()}
            >New Job</Button>
            <NewJobModal
                openNewJobModal={openNewJobModal}
                setOpenNewJobModal={setOpenNewJobModal}
            />
        </div>
    )
}

export default TableHeader