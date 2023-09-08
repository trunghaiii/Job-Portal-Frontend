
import React, { useState } from 'react';
import { Button, Modal, Checkbox, Form, Input } from 'antd';


interface IProps {
    openNewCompanyModal: boolean,
    setOpenNewCompanyModal: any
}

type FieldType = {
    companyName?: string;
    address?: string;
    description?: string;
};

const NewCompanyModal = (props: IProps) => {

    const [form] = Form.useForm();

    const { TextArea } = Input;

    const { openNewCompanyModal, setOpenNewCompanyModal } = props

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const handleCreateCompany = () => {
        form.submit()
        //setOpenNewCompanyModal(false);
    };

    const handleCancel = () => {
        setOpenNewCompanyModal(false);
    };

    return (
        <Modal
            width={"50%"}
            title="Create New Company"
            open={openNewCompanyModal}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={handleCreateCompany}>
                    Create
                </Button>
            ]}
        >

            <Form
                form={form}
                name="basic"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Company Name"
                    name="companyName"
                    rules={[{ required: true, message: 'Please input Company Name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Address"
                    name="address"
                    rules={[{ required: true, message: 'Please input Company Address!' }]}
                >
                    <TextArea />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input Company Description!' }]}
                >
                    <TextArea />
                </Form.Item>

            </Form>
        </Modal>
    )
}

export default NewCompanyModal;