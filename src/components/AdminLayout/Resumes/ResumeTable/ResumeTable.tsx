import { Button, Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { useState } from 'react';

import ShowResumeDrawer from './ShowResumeDrawer';
import ChangingStatusModal from './ChangingStatusModal';

interface DataType {
    id: string;
    name: string;
    status: String;
    actions: any;
}

interface IProps {
    resumeData: any
    current: number
    total: number
    setCurrent: any
}


const ResumeTable = (props: IProps) => {

    const { resumeData, current, total, setCurrent } = props

    const [openResumeDrawer, setOpenResumeDrawer] = useState<boolean>(false)
    const [openStatusModal, setOpenStatusModal] = useState<boolean>(false)

    const [showResumeData, setShowResumeData] = useState<any>({})
    const [resumeID, setResumeID] = useState<string>("")

    const columns: ColumnsType<DataType> = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (value, record, index) => {

                return (
                    <div>
                        <a onClick={() => handleShowResumeClick(record)}>${record._id}</a>
                    </div>
                )
            }
        },
        {
            title: 'Job Title',
            dataIndex: 'name',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: (value, record, index) => {

                return (
                    <div>
                        <Button
                            type='primary'
                            size='small'
                            onClick={() => handleChangeStatusClick(record._id)}
                        >Change Status</Button>
                    </div>
                )
            }
        },
    ];

    const handleShowResumeClick = (resumeInfo: any) => {
        setShowResumeData(resumeInfo)
        setOpenResumeDrawer(true)
    }

    const handleChangeStatusClick = (id: string) => {
        setResumeID(id)
        setOpenStatusModal(true)
    }

    const onChange: TableProps<DataType>['onChange'] = (pagination) => {
        setCurrent(pagination.current)
    };


    return (
        <div>
            <Table
                columns={columns}
                dataSource={resumeData}
                onChange={onChange}
                pagination={{
                    total: total,
                    current: current,
                    pageSize: 3
                }}
            />
            <ShowResumeDrawer
                openResumeDrawer={openResumeDrawer}
                setOpenResumeDrawer={setOpenResumeDrawer}
                showResumeData={showResumeData}
            />
            <ChangingStatusModal
                openStatusModal={openStatusModal}
                setOpenStatusModal={setOpenStatusModal}
                resumeID={resumeID}
            />
        </div>
    )
}

export default ResumeTable