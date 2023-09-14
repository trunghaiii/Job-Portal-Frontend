import { useState } from "react"
import { Button } from "antd";
import NewCompanyModal from "./NewCompanyModal";

interface IProps {
    fetchCompanyData: any
}


const TableHeader = (props: IProps) => {

    const { fetchCompanyData } = props

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
            >New Company</Button>
            <NewCompanyModal
                openNewCompanyModal={openNewCompanyModal}
                setOpenNewCompanyModal={setOpenNewCompanyModal}
                fetchCompanyData={fetchCompanyData}
            />
        </div>

    )
}

export default TableHeader;