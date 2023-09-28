import { Dropdown, Space, MenuProps, message, notification } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "./Header.scss"
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../../../services/api';
import { deleteUserData } from '../../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const userAccount = useSelector((state: any) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogOut = async () => {

        // 0. call api
        const logoutData = await Logout();

        if (logoutData && +logoutData.statusCode === 201) {
            // 1. delete access token in local storage:
            localStorage.removeItem("access_token")

            // 2. delete user data in redux
            dispatch(deleteUserData())

            // 3. redirect user to login page
            message.success({
                content: "Logout Successfully!",
                duration: 5
            })
            navigate("/login")
        } else {
            notification.error({
                message: logoutData.message,
                duration: 5
            })
        }

    }

    const items: MenuProps['items'] = [
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
            <div className='navigation-group'>
                <h3 onClick={() => navigate("/")}>JobPortal</h3>
                <p onClick={() => navigate("/")}>Main Page</p>
                <p>All Job Postings</p>
            </div>
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