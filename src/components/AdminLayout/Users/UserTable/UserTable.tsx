

import { Button, Table } from "antd";
import type { ColumnsType, TableProps } from 'antd/es/table';


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
}

const UserTable = (props: IProps) => {

    const { userData, setCurrent, current, limit, total } = props

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
                        >Update</Button>
                        <Button size='small' type="primary" danger>Delete</Button>

                    </div>
                )
            }
        },
    ];

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
        </>
    )
}

export default UserTable