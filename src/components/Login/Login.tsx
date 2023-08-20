
import './Login.scss';
import { Card } from 'antd';

const Login = () => {
    return (
        <div className='login-container'>
            <Card bordered={false} style={{ width: 500, backgroundColor: "#F5F6EE" }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    )
}

export default Login