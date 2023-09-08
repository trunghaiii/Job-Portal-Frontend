import { useState } from "react"
import { Button } from "antd";
import NewCompanyModal from "./NewCompanyModal";



const TableHeader = () => {

    const [openNewCompanyModal, setOpenNewCompanyModal] = useState<boolean>(false)

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <h3>Company List:</h3>
            <Button
                type="primary"
                onClick={() => setOpenNewCompanyModal(true)}
            >New User</Button>
            <NewCompanyModal
                openNewCompanyModal={openNewCompanyModal}
                setOpenNewCompanyModal={setOpenNewCompanyModal}
            />
        </div>

    )
}

export default TableHeader;