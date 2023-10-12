import { Modal } from "antd";


interface IProps {
    openCompanyDetailModal: boolean
    setOpenCompanyDetailModal: any
}

const CompanyDetailModal = (props: IProps) => {

    const { openCompanyDetailModal, setOpenCompanyDetailModal } = props

    const handleOk = () => {
        setOpenCompanyDetailModal(false);
    };

    const handleCancel = () => {
        setOpenCompanyDetailModal(false);
    };
    return (
        <Modal
            title="Basic Modal"
            open={openCompanyDetailModal}
            onOk={handleOk}
            onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default CompanyDetailModal