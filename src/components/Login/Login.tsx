
import { useDispatch } from 'react-redux';
import { GetRefreshTokenAccount, login } from '../../services/api';
import './Login.scss';
import { Card, Button, Form, Input, message, notification } from 'antd';
import { useNavigate } from "react-router-dom";
import { saveUserData } from '../../redux/slices/userSlice';
import { useState } from 'react';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [loadingLogin, setLoadingLogin] = useState<boolean>(false)

    // handle the login process:
    const onFinish = async (values: any) => {

        // 0. call api
        setLoadingLogin(true)
        const loginInfo = await login(values.username, values.password)
        setLoadingLogin(false)
        //console.log("inforrr", loginInfo);


        // 1. make response

        if (loginInfo.statusCode === 201) {

            // 1.1. set access token in local storage
            localStorage.setItem("access_token", loginInfo?.data?.access_token)

            // 1.2. save user data to redux
            dispatch(saveUserData(loginInfo?.data?.user))

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
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loadingLogin}
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login