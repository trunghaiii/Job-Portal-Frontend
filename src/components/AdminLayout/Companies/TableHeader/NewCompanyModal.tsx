
import React, { useState } from 'react';
import { Button, Modal, Checkbox, Form, Input, message, notification, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { CreateCompany, uploadImage } from '../../../../services/api';


interface IProps {
    openNewCompanyModal: boolean,
    setOpenNewCompanyModal: any,
    fetchCompanyData: any
}

type FieldType = {
    companyName?: string;
    address?: string;
    description?: string;
};

const NewCompanyModal = (props: IProps) => {

    const [form] = Form.useForm();

    const { TextArea } = Input;

    const { openNewCompanyModal, setOpenNewCompanyModal, fetchCompanyData } = props

    const [loadingCreatBtn, setLoadingCreateBtn] = useState<boolean>(false)
    const onFinish = async (values: any) => {

        const { companyName, address, description, uploadFile } = values

        // 0. call upload image file api:
        setLoadingCreateBtn(true)
        const fileResponse = await uploadImage(uploadFile.file.originFileObj, 'companylogos')

        if (fileResponse && fileResponse.statusCode !== 201) {
            setLoadingCreateBtn(false)
            notification.error({
                message: fileResponse.message,
                duration: 5
            })
            return;
        }

        // 1. call createCompany api:
        let response = await CreateCompany(companyName, address, description, fileResponse.data);
        setLoadingCreateBtn(false)

        // 2. respond to client
        if (response && response.statusCode === 201) {
            message.success({
                content: "Create New Company Successfully!",
                duration: 5
            })
            setOpenNewCompanyModal(false)
            form.resetFields()
            fetchCompanyData()
        } else {
            notification.error({
                message: response.message,
                duration: 5
            })
        }
        // console.log('response:', response);
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
                <Button key="submit" type="primary" loading={loadingCreatBtn} onClick={handleCreateCompany}>
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
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Form.Item
                        label="Upload"
                        name="uploadFile"
                    >
                        <Upload
                            listType="picture-card"
                            maxCount={1}
                        >
                            <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </div>
                        </Upload>
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Please input Company Address!' }]}
                    >
                        <TextArea />
                    </Form.Item>
                </div>
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