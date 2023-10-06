import { Button, Modal } from "antd";


interface IProps {
    openApplyModal: boolean
    setOpenApplyModal: any
}

const ApplyModal = (props: IProps) => {


    const { openApplyModal, setOpenApplyModal } = props

    const handleOk = () => {
        setOpenApplyModal(false);
    };

    const handleCancel = () => {
        setOpenApplyModal(false);
    };

    return (
        <Modal
            title="Job Application"
            open={openApplyModal}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary">
                    Apply
                </Button>
            ]}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default ApplyModal;