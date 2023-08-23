
import { login } from '../../services/api';
import './Login.scss';
import { Card, Button, Form, Input } from 'antd';

const Login = () => {

    const onFinish = async (values: any) => {
        const loginInfo = await login(values.username, values.password)
        console.log(loginInfo);

        console.log('Success:', values);
    };

    return (
        <div className='login-container'>
            <Card className='login-card' bordered={false}>
                <h1>Login</h1>
                <Form
                    name="basic"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login