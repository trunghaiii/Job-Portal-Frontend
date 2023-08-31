import { Dropdown, Space, MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "./Header.scss"
import { useSelector } from 'react-redux';

const Header = () => {

    const userAccount = useSelector((state: any) => state.user)

    const handleLogOut = () => {
        alert("hh")
    }

    const items: MenuProps['items'] = [
        {
            label: (
                <a >
                    Account Info
                </a>
            ),
            key: '0',
        },
        {
            label: (
                <a onClick={() => handleLogOut()}>
                    Log Out
                </a>
            ),
            key: '1',
        }
    ];

    return (
        <div className='header-container'>
            <h3>JobPortal</h3>
            <div className="account-group">
                <Dropdown menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            {userAccount.name
                                ?
                                userAccount.name
                                :
                                "Account"
                            }
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </div>

    )
}

export default Header;