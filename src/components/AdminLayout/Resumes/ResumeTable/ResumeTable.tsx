import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

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

    const columns: ColumnsType<DataType> = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (value, record, index) => {

                return (
                    <div>
                        <a >${record._id}</a>
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
        },
    ];

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
        </div>
    )
}

export default ResumeTable