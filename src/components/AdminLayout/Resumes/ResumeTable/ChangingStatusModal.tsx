import React, { useState } from 'react';
import { Button, Form, Modal, Select, message, notification } from 'antd';
import { changingStatus } from '../../../../services/api';
const { Option } = Select;
type FieldType = {
    status?: string;
};

interface IProps {
    openStatusModal: boolean
    setOpenStatusModal: any
    resumeID: string
    fetchResumeData: any
}

const ChangingStatusModal = (props: IProps) => {

    const { openStatusModal, setOpenStatusModal, resumeID, fetchResumeData } = props

    const [form] = Form.useForm();

    const [loadingChangeStatus, setLoadingChangeStatus] = useState<boolean>(false)

    const handleChange = () => {
        form.submit()
    }

    const onFinish = async (values: any) => {

        // 0. call api:
        setLoadingChangeStatus(true)
        const response = await changingStatus(resumeID, values.status)
        setLoadingChangeStatus(false)

        // 1. respond to client
        if (response && response.statusCode === 200) {
            message.success({
                content: "Change Status Successfully!",
                duration: 5
            })

            setOpenStatusModal(false)
            fetchResumeData()

        } else {
            notification.error({
                message: response.message,
                duration: 5
            })
        }

    };

    const handleOk = () => {
        setOpenStatusModal(false);
    };

    const handleCancel = () => {
        setOpenStatusModal(false);
    };


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
                    loading={loadingChangeStatus}
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