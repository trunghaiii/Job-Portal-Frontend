
import { Button, Checkbox, Form, Input, InputNumber, Select, message, notification } from 'antd';
import { postRegisterUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';



type FieldType = {
    name?: string;
    email?: string;
    password?: string;
    address?: string;
    age?: number;
    gender?: string;
};

const Register = () => {

    const navigate = useNavigate();


    const onFinish = async (values: any) => {

        // 0. call api
        const response = await postRegisterUser(values)

        console.log('response', response);

        // 1. respond to client

        if (response.statusCode === 201) {

            message.success({
                content: "Register Successfully!",
                duration: 5
            })
            navigate("/login")
        } else {
            notification.error({
                message: response.message,
                duration: 5
            })
        }
    };

    return (
        <div className='register-container'>
            <h2 style={{ textAlign: "center" }}>Register New User</h2>
            <Form
                name="basic"
                labelCol={{ span: 24 }}
                // wrapperCol={{ span: 16 }}
                style={{
                    // maxWidth: 600,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    //width: "50%"
                }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input Name!' }]}
                    style={{ width: "50%" }}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input Email' }]}
                    style={{ width: "50%" }}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input Password' }]}
                    style={{ width: "50%" }}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Address"
                    name="address"
                    rules={[{ required: true, message: 'Please input Address' }]}
                    style={{ width: "50%" }}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Age"
                    name="age"
                    rules={[{ required: true, message: 'Please input Age' }]}
                    style={{ width: "50%" }}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Gender"
                    name="gender"
                    rules={[{ required: true, message: 'Please input Gender' }]}
                    style={{ width: "50%" }}
                >
                    <Select>
                        <Select.Option value="MALE">MALE</Select.Option>
                        <Select.Option value="FEMALE">FEMALE</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Register