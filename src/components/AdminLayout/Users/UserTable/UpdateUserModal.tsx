import { Button, Form, Input, InputNumber, Modal, Select, message, notification } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useEffect, useState } from "react"
import { getAllCompanies, updateUser } from "../../../../services/api"

interface IProps {
    openUpdateUserModal: boolean
    setOpenUpdateUserModal: any
    updateUserData: any
    fetchUserData: any
}

const UpdateUserModal = (props: IProps) => {

    const [companyData, setCompanyData] = useState<any>(["hai", "trung", "Tran"])

    const { openUpdateUserModal, setOpenUpdateUserModal, updateUserData, fetchUserData } = props

    const [form] = Form.useForm();

    const onFinish = async (values: any) => {

        const { id, username, age, gender, role, address } = values

        // 1. call api:
        const response = await updateUser(id, username, age, gender, address, role)

        // 2. respond to client
        if (response && response.statusCode === 200) {
            message.success({
                content: "Update User Successfully!",
                duration: 5
            })

            fetchUserData()
            setOpenUpdateUserModal(false)

        } else {
            notification.error({
                message: response.message,
                duration: 5
            })
        }

    }

    const handleUpdateUser = () => {
        form.submit()
    }

    const handleCancel = () => {
        setOpenUpdateUserModal(false);
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

        if (Object.keys(updateUserData).length !== 0) {

            form.setFieldsValue({
                id: updateUserData._id,
                username: updateUserData.name,
                email: updateUserData.email,
                address: updateUserData.address,
                age: updateUserData.age,
                gender: updateUserData.gender,
                role: updateUserData.role,
                company: updateUserData.company.name
            })
        }
        fetchCompanyData()

    }, [updateUserData])

    return (
        <Modal
            width="50%"
            title="Create a New User"
            open={openUpdateUserModal}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={handleUpdateUser}>
                    Update
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
                        hidden
                        label="ID"
                        name="id"
                        rules={[{ required: true, message: 'Please input ID!' }]}
                    >
                        <Input />
                    </Form.Item>
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
                        <Input disabled />
                    </Form.Item>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Form.Item

                        label="Password"
                        name="password"
                    >
                        <Input.Password disabled />
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
                        <Select disabled>
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

export default UpdateUserModal