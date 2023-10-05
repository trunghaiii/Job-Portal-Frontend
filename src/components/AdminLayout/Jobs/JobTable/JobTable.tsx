import { Button, Popconfirm, Table, message } from "antd";
import type { ColumnsType, TableProps } from 'antd/es/table';
import { useState } from "react";

import ShowJobDrawer from "./ShowJobDrawer";
import UpdateJobModal from "./UpdateJobModal";

import { deleteJob } from "../../../../services/api";

interface DataType {
    _id: string;
    name: string;
}

interface IProps {
    jobData: any
    current: number
    total: number
    setCurrent: any
    fetchJobData: any
}

const JobTable = (props: IProps) => {

    const [openShowJobDrawer, setOpenShowJobDrawer] = useState<boolean>(false)
    const [openUpdateJobModal, setOpenUpdateJobModal] = useState<boolean>(false)

    const [updateJobData, setUpdateJobData] = useState<any>({})

    const [showJobData, setShowJobData] = useState<any>({})

    const { jobData, current, total, setCurrent, fetchJobData } = props

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
                        <Popconfirm
                            placement="top"
                            title="Are You Sure To Delete This Company?"
                            // description={description}
                            onConfirm={() => handleDeleteJob(record._id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button
                                size='small'
                                type="primary"
                                danger
                            >Delete</Button>

                        </Popconfirm>

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

    const handleDeleteJob = async (id: string) => {
        // 1. call api:

        const response = await deleteJob(id)


        // 2. respond to client
        if (response && response.statusCode === 200) {
            message.success({
                content: "Delete Job Successfully!",
                duration: 5
            })
            setCurrent(1)
            fetchJobData()

        } else {
            notification.error({
                message: response.message,
                duration: 5
            })
        }

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
                fetchJobData={fetchJobData}
            />
        </div>
    )
}

export default JobTable