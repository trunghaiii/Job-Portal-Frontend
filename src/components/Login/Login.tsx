
import './Login.scss';
import { Card } from 'antd';

const Login = () => {
    return (
        <div className='login-container'>
            <Card bordered={false} style={{ width: 400, height: "60%" }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    )
}

export default Login