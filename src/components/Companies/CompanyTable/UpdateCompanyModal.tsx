
import { useEffect } from "react"
import { Button, Form, Input, Modal, message, notification } from "antd";
import { UpdateCompany } from "../../../services/api";


interface IProps {
    openUpdateCompanyModal: boolean,
    setOpenUpdateCompanyModal: any,
    updateCompanyData: IUpdateCompany,
    fetchCompanyData: any
}

type FieldType = {
    id?: string;
    name?: string;
    address?: string;
    description?: string;
};


interface IUpdateCompany {
    name: string,
    address: string,
    description: string
}

const UpdateCompanyModal = (props: IProps) => {

    const { openUpdateCompanyModal, setOpenUpdateCompanyModal, updateCompanyData, fetchCompanyData } = props

    const { TextArea } = Input;
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {

        const { id, name, address, description } = values
        // 1. call api:
        const response = await UpdateCompany(id, name, address, description)

        // 2. respond to client
        if (response && response.statusCode === 200) {
            message.success({
                content: "Update Company Successfully!",
                duration: 5
            })

            fetchCompanyData()

        } else {
            notification.error({
                message: response.message,
                duration: 5
            })
        }

    }

    const handleUpdateCompany = () => {

        form.submit()
        setOpenUpdateCompanyModal(false)
    }

    const handleCancel = () => {
        setOpenUpdateCompanyModal(false);
    };

    useEffect(() => {
        form.setFieldsValue(updateCompanyData)
    }, [updateCompanyData])


    return (
        <Modal
            width={"50%"}
            title="Update Company"
            open={openUpdateCompanyModal}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={handleUpdateCompany}>
                    Update
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
                    label="ID"
                    name="id"
                    hidden
                    rules={[{ required: true, message: 'Please input ID!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Company Name"
                    name="name"
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

export default UpdateCompanyModal;