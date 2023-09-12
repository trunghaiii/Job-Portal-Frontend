

import { Button, Table } from "antd";
import type { ColumnsType, TableProps } from 'antd/es/table';
import { useState } from "react";
import UpdateUserModal from "./UpdateUserModal";


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
    const [updateUserData, setUpdateUserData] = useState<any>({})

    const columns: ColumnsType<DataType> = [
        {
            title: 'ID',
            dataIndex: '_id',
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
                        <Button size='small' type="primary" danger>Delete</Button>

                    </div>
                )
            }
        },
    ];

    const handleUpdateUser = (userData: any) => {
        setUpdateUserData(userData)
        setOpenUpdateUserModal(true)
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
        </>
    )
}

export default UserTable