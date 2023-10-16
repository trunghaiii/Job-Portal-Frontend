
import { Button, Checkbox, Form, Input, InputNumber, Select } from 'antd';



type FieldType = {
    name?: string;
    email?: string;
    password?: string;
    address?: string;
    age?: number;
    gender?: string;
};

const Register = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
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