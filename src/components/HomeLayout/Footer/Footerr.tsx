
import { Layout } from 'antd';
const { Footer } = Layout;

const Footerr = () => {
    return (
        <div>
            <Footer style={{
                textAlign: 'center',
                position: 'fixed',
                left: '0',
                bottom: '0',
                width: '100%',
                marginTop: '5px'

            }}>JobPortal ©2023 Created by Haii Tran</Footer>
        </div>
    )
}

export default Footerr;