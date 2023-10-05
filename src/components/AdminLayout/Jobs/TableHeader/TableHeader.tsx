
import { useState } from "react"
import { Button } from "antd"
import NewJobModal from "./NewJobModal"

interface IProps {
    fetchJobData: any
}

const TableHeader = (props: IProps) => {

    const { fetchJobData } = props

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
                fetchJobData={fetchJobData}
            />
        </div>
    )
}

export default TableHeader