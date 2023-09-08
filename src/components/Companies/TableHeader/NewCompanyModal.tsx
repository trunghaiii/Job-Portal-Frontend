
import React, { useState } from 'react';
import { Button, Modal } from 'antd';


interface IProps {
    openNewCompanyModal: boolean,
    setOpenNewCompanyModal: any
}

const NewCompanyModal = (props: IProps) => {

    const { openNewCompanyModal, setOpenNewCompanyModal } = props

    const handleOk = () => {
        setOpenNewCompanyModal(false);
    };

    const handleCancel = () => {
        setOpenNewCompanyModal(false);
    };

    return (
        <Modal
            width={"50%"}
            title="Create New Company"
            open={openNewCompanyModal}
            onOk={handleOk}
            onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default NewCompanyModal;