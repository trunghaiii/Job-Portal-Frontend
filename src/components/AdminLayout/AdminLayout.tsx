import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

import { MdOutlineDashboard } from 'react-icons/md';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { BiNews } from "react-icons/bi"
import { BsEnvelopePaper } from "react-icons/bs"

import { Layout, Menu, Button, theme } from 'antd';

const { Header, Sider, Content } = Layout;

import { Outlet, useNavigate } from "react-router-dom"


const AdminLayout = () => {

    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const {
        token: { colorBgContainer },
    } = theme.useToken();


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
                <Header style={{ padding: 0, background: colorBgContainer }}>
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