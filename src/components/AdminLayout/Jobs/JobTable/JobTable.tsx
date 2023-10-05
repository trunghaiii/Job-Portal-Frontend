import { Button, Table } from "antd";
import type { ColumnsType, TableProps } from 'antd/es/table';
import { useState } from "react";

import ShowJobDrawer from "./ShowJobDrawer";
import UpdateJobModal from "./UpdateJobModal";

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
    const [openUpdateJobModal, setOpenUpdateJobModal] = useState<boolean>(false)

    const [updateJobData, setUpdateJobData] = useState<any>({})

    const [showJobData, setShowJobData] = useState<any>({})

    const { jobData, current, total, setCurrent } = props

    const columns: ColumnsType<DataType> = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (value, record, index) => {

                return (
                    <a onClick={() => handleJobDrawerClick(record)}>{record._id}</a>
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
                            onClick={() => handleUpdateClick(record)}
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

    const handleUpdateClick = (jobDetail: any) => {

        setUpdateJobData(jobDetail)
        setOpenUpdateJobModal(true)
    }

    const handleJobDrawerClick = (jobDetail: any) => {

        setShowJobData(jobDetail)
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
                showJobData={showJobData}
            />

            <UpdateJobModal
                openUpdateJobModal={openUpdateJobModal}
                setOpenUpdateJobModal={setOpenUpdateJobModal}
                updateJobData={updateJobData}
            />
        </div>
    )
}

export default JobTable