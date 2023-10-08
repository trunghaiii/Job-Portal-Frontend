import React, { useState } from 'react';
import { Button, Form, Modal, Select } from 'antd';
const { Option } = Select;
type FieldType = {
    status?: string;
};

interface IProps {
    openStatusModal: boolean
    setOpenStatusModal: any
    resumeID: string
}

const ChangingStatusModal = (props: IProps) => {

    const { openStatusModal, setOpenStatusModal, resumeID } = props

    const [form] = Form.useForm();

    const handleChange = () => {
        form.submit()
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const handleOk = () => {
        setOpenStatusModal(false);
    };

    const handleCancel = () => {
        setOpenStatusModal(false);
    };

    console.log("resumeIDresumeID", resumeID);

    return (
        <Modal
            title="Status Changing"
            open={openStatusModal}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button
                    key="back"
                    onClick={handleCancel}
                >
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    onClick={() => handleChange()}
                >
                    Change Now
                </Button>
            ]}
        >
            <Form
                form={form}
                name="basic"
                // labelCol={{ span: 8 }}
                // wrapperCol={{ span: 16 }}
                // style={{ maxWidth: 600 }}
                onFinish={onFinish}

                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Status"
                    name="status"
                    rules={[{ required: true, message: 'Please input Status!' }]}
                >
                    <Select
                        placeholder="Select Status"
                        allowClear
                    >
                        <Option value="PENDING">PENDING</Option>
                        <Option value="APPROVED">APPROVED</Option>
                        <Option value="REJECTED">REJECTED</Option>
                    </Select>
                </Form.Item>


            </Form>
        </Modal>
    )
}

export default ChangingStatusModal