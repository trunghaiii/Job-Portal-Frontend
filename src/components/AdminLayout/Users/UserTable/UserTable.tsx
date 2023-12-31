

import { Button, Popconfirm, Table, message, notification } from "antd";
import type { ColumnsType, TableProps } from 'antd/es/table';
import { useState } from "react";
import UpdateUserModal from "./UpdateUserModal";
import { deleteUser } from "../../../../services/api";
import ShowUserDrawer from "./ShowUserDrawer";


interface DataType {
    _id: string;
    name: string;
}

interface IProps {
    userData: any
    setCurrent: any
    current: number
    limit: number
    total: number
    fetchUserData: any
}

const UserTable = (props: IProps) => {

    const { userData, setCurrent, current, limit, total, fetchUserData } = props

    const [openUpdateUserModal, setOpenUpdateUserModal] = useState<boolean>(false)
    const [openUserDrawer, setOpenUserDrawer] = useState<boolean>(false)
    const [updateUserData, setUpdateUserData] = useState<any>({})
    const [showUserData, setShowUserData] = useState<any>({
        name: "", email: "", age: "", gender: "", role: "",
        address: "", createdAt: "", updatedAt: "", company: { name: "" }
    })

    const [loadingDelete, setLoadingDelete] = useState<boolean>(false)

    const columns: ColumnsType<DataType> = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (value, record, index) => {
                return (
                    <a
                        onClick={() => handleShowUser(record)}
                    >{record._id}</a>
                )
            }
        },
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Actions',
            render: (value, record, index) => {

                return (
                    <div>
                        <Button
                            size='small'
                            type="primary"
                            style={{ marginRight: "5px" }}
                            onClick={() => handleUpdateUser(record)}
                        >Update</Button>
                        <Popconfirm
                            placement="top"
                            title="Are you sure to delete this user?"
                            onConfirm={() => handleDeleteUser(record._id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button loading={loadingDelete} size='small' type="primary" danger>Delete</Button>
                        </Popconfirm>

                    </div>
                )
            }
        },
    ];

    const handleUpdateUser = (userData: any) => {
        setUpdateUserData(userData)
        setOpenUpdateUserModal(true)
    }

    const handleDeleteUser = async (userID: string) => {

        // 1. call api
        setLoadingDelete(true)
        const response = await deleteUser(userID)
        setLoadingDelete(false)

        // 2. respond to client
        if (response && response.statusCode === 200) {
            message.success({
                content: "Delete User Successfully!",
                duration: 5
            })

            fetchUserData()

        } else {
            notification.error({
                message: response.message,
                duration: 5
            })
        }

    }

    const handleShowUser = (userData: any) => {

        setShowUserData(userData)
        setOpenUserDrawer(true)
    }

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        setCurrent(pagination.current)
        // console.log('params', pagination);
    };
    return (
        <>
            <Table
                columns={columns}
                dataSource={userData}
                onChange={onChange}
                pagination={{
                    total: total,
                    current: current,
                    pageSize: limit
                }}
            />
            <UpdateUserModal
                openUpdateUserModal={openUpdateUserModal}
                setOpenUpdateUserModal={setOpenUpdateUserModal}
                updateUserData={updateUserData}
                fetchUserData={fetchUserData}
            />
            <ShowUserDrawer
                openUserDrawer={openUserDrawer}
                setOpenUserDrawer={setOpenUserDrawer}
                showUserData={showUserData}
            />
        </>
    )
}

export default UserTable