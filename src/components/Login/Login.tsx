
import { GetRefreshTokenAccount, login } from '../../services/api';
import './Login.scss';
import { Card, Button, Form, Input, message, notification } from 'antd';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    // handle the login process:
    const onFinish = async (values: any) => {

        // 0. call api
        const loginInfo = await login(values.username, values.password)
        //console.log("inforrr", loginInfo);

        // 


        if (loginInfo.statusCode === 201) {
            message.success({
                content: "Login Successfully!",
                duration: 5
            })
            navigate("/")
        } else {
            notification.error({
                message: loginInfo.message,
                duration: 5
            })
        }

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