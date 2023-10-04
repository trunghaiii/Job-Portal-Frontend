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
}

const JobTable = (props: IProps) => {

    const [openShowJobDrawer, setOpenShowJobDrawer] = useState<boolean>(false)

    const { jobData } = props

    const columns: ColumnsType<DataType> = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (value, record, index) => {
                console.log('record', record);

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
    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <div>
            <Table
                columns={columns}
                dataSource={jobData} onChange={onChange} />

            <ShowJobDrawer
                openShowJobDrawer={openShowJobDrawer}
                setOpenShowJobDrawer={setOpenShowJobDrawer}
            />
        </div>
    )
}

export default JobTable