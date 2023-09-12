import { Modal, Button, Form, Input, Select, InputNumber } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

interface IProps {
    openNewUserModal: boolean
    setOpenNewUserModal: any
}

const NewUserModal = (props: IProps) => {

    const [companyData, setCompanyData] = useState<any>(["hai", "trung", "Tran"])

    const { openNewUserModal, setOpenNewUserModal } = props

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const handleCreateUser = () => {
        form.submit()
        setOpenNewUserModal(false);
    };

    const handleCancel = () => {
        setOpenNewUserModal(false);
    };
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
                <Button key="submit" type="primary" onClick={handleCreateUser}>
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
                            {companyData.map((com: string) => {
                                return (
                                    <Select.Option value={com}>{com}</Select.Option>
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