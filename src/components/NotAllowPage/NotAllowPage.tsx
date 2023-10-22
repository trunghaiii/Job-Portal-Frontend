
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotAllowPage = () => {
    const navigate = useNavigate()
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, You are not allowed to visit this page!"
            extra={<Button
                type="primary"
                onClick={() => navigate("/")}
            >Back Home</Button>}
        />
    )
}

export default NotAllowPage