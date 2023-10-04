import { Button, Table } from "antd";
import type { ColumnsType, TableProps } from 'antd/es/table';
import ShowJobDrawer from "./ShowJobDrawer";
import { useState } from "react";

interface DataType {
    _id: string;
    name: string;
}

interface IProps {
    jobData: any
    current: number
    total: number
    setCurrent: any
}

const JobTable = (props: IProps) => {

    const [openShowJobDrawer, setOpenShowJobDrawer] = useState<boolean>(false)

    const { jobData, current, total, setCurrent } = props

    const columns: ColumnsType<DataType> = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (value, record, index) => {

                return (
                    <a onClick={() => handleJobDrawerClick()}>{record._id}</a>
                )
            }
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Actions',
            dataIndex: 'action',
            render: (value, record, index) => {
                return (
                    <div>
                        <Button
                            size='small'
                            type="primary"
                            style={{ marginRight: "5px" }}
                        >Update</Button>
                        <Button
                            size='small'
                            type="primary"
                            danger
                        >Delete</Button>
                    </div>
                )
            }
        },
    ];

    const handleJobDrawerClick = () => {
        setOpenShowJobDrawer(true)
    }
    const onChange: TableProps<DataType>['onChange'] = (pagination) => {
        setCurrent(pagination.current)
    };

    return (
        <div>
            <Table
                columns={columns}
                dataSource={jobData} onChange={onChange}
                pagination={{
                    current: current,
                    total: total,
                    pageSize: 3
                }}
            />

            <ShowJobDrawer
                openShowJobDrawer={openShowJobDrawer}
                setOpenShowJobDrawer={setOpenShowJobDrawer}
            />
        </div>
    )
}

export default JobTable