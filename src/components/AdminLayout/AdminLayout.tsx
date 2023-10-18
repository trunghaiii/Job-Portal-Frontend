import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    DownOutlined
} from '@ant-design/icons';

import { MdOutlineDashboard } from 'react-icons/md';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { BiNews } from "react-icons/bi"
import { BsEnvelopePaper } from "react-icons/bs"

import { Layout, Menu, Button, theme, Dropdown, Space, MenuProps, message, notification } from 'antd';

const { Header, Sider, Content } = Layout;

import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../../services/api';
import { deleteUserData } from '../../redux/slices/userSlice';


const AdminLayout = () => {

    const userAccount = useSelector((state: any) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [collapsed, setCollapsed] = useState(false);


    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const items: MenuProps['items'] = [
        {
            label: (
                <a onClick={() => navigate("/")}>
                    Home page
                </a>
            ),
            key: '0',
        },
        {
            label: (
                <a onClick={() => navigate("/register")}>
                    Register
                </a>
            ),
            key: '1',
        },
        {
            label: (
                <a onClick={() => handleLogOut()}>
                    Log Out
                </a>
            ),
            key: '2',
        }
    ];

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
    return (
        <Layout style={{ height: "100%" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            // icon: <UserOutlined />,
                            label: 'ADMIN PAGE',
                        },
                        {
                            key: '2',
                            icon: <div onClick={() => navigate("/admin")}><MdOutlineDashboard /></div>,
                            label: <div onClick={() => navigate("/admin")}>Dash Board</div>,
                        },
                        {
                            key: '3',
                            icon: <div onClick={() => navigate("/admin/user")}><UserOutlined /></div>,
                            label: <div onClick={() => navigate("/admin/user")}>Users</div>,
                        },
                        {
                            key: '4',
                            icon: <div onClick={() => navigate("/admin/company")}><HiOutlineBuildingOffice2 /></div>,
                            label: <div onClick={() => navigate("/admin/company")}>Companies</div>,
                        },
                        {
                            key: '5',
                            icon: <div onClick={() => navigate("/admin/job")}><BiNews /></div>,
                            label: <div onClick={() => navigate("/admin/job")}>Jobs</div>,
                        },
                        {
                            key: '6',
                            icon: <div onClick={() => navigate("/admin/resume")}><BsEnvelopePaper /></div>,
                            label: <div onClick={() => navigate("/admin/resume")}>Resumes</div>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />

                    <Dropdown
                        menu={{ items }}
                    >
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

                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <div><Outlet /></div>
                </Content>
            </Layout>
        </Layout>


    )
}

export default AdminLayout