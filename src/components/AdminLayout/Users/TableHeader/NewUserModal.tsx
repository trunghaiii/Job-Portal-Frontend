import { Modal, Button, Form, Input, Select, InputNumber, message, notification } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState, useEffect } from "react";
import { createUser, getAllCompanies } from "../../../../services/api";

interface IProps {
    openNewUserModal: boolean
    setOpenNewUserModal: any
    fetchUserData: any
}

const NewUserModal = (props: IProps) => {

    const [companyData, setCompanyData] = useState<any>(["hai", "trung", "Tran"])

    const [loadingCreate, setLoadingCreate] = useState<boolean>(false)

    const { openNewUserModal, setOpenNewUserModal, fetchUserData } = props

    const [form] = Form.useForm();

    const onFinish = async (values: any) => {

        const { username, email, password, age, gender, address, role, company } = values


        // 1. call api:
        setLoadingCreate(true)
        const response = await createUser(username, email, password, age, gender, address, role,
            company.split("-")[1], company.split("-")[0])
        setLoadingCreate(false)

        // 2. respond to client:
        if (response && response.statusCode === 201) {
            message.success({
                content: "Create New User Successfully!",
                duration: 5
            })
            setOpenNewUserModal(false)
            form.resetFields()
            fetchUserData()
        } else {
            notification.error({
                message: response.message,
                duration: 5
            })
        }
    };
    const handleCreateUser = () => {
        form.submit()
        setOpenNewUserModal(false);
    };

    const handleCancel = () => {
        setOpenNewUserModal(false);
    };

    const fetchCompanyData = async () => {

        // 1. call api:
        const response = await getAllCompanies()

        // 2. build companyData:
        let previewCompanyData: any = []
        if (response && response.statusCode === 200) {
            response.data.result.map((company: any) => {
                previewCompanyData.push({
                    id: company._id,
                    name: company.name
                })
            })
        }

        //console.log("previewCompanyData", previewCompanyData);
        setCompanyData(previewCompanyData)

    }

    useEffect(() => {
        fetchCompanyData()

    }, [])

    return (
        <Modal
            width="50%"
            title="Create a New User"
            open={openNewUserModal}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    onClick={handleCreateUser}
                    loading={loadingCreate}
                >
                    Create
                </Button>
            ]}
        >
            <Form
                form={form}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                layout="horizontal"
                onFinish={onFinish}
            >

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Form.Item
                        label="User Name"
                        name="username"
                        rules={[{ required: true, message: 'Please input username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input Email!' }]}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Please input Address!' }]}
                    >
                        <TextArea />
                    </Form.Item>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Form.Item
                        label="Age"
                        name="age"
                        rules={[{ required: true, message: 'Please input Age!' }]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        label="Gender"
                        name="gender"
                        rules={[{ required: true, message: 'Please input Gender!' }]}
                    >
                        <Select>
                            <Select.Option value="MALE">MALE</Select.Option>
                            <Select.Option value="FEMALE">FEMALE</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Role"
                        name="role"
                        rules={[{ required: true, message: 'Please input Role!' }]}
                    >
                        <Select>
                            <Select.Option value="ADMIN">ADMIN</Select.Option>
                            <Select.Option value="USER">USER</Select.Option>
                            <Select.Option value="HR">HR</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Company"
                        name="company"
                        rules={[{ required: true, message: 'Please input Company!' }]}
                    >
                        <Select>
                            {companyData.map((company: any) => {
                                return (
                                    <Select.Option
                                        value={`${company.name}-${company.id}`}>
                                        {company.name}
                                    </Select.Option>
                                )
                            })}

                            {/* <Select.Option value="dsf">dsf</Select.Option> */}
                        </Select>
                    </Form.Item>
                </div>

            </Form>
        </Modal>
    )
}

export default NewUserModal