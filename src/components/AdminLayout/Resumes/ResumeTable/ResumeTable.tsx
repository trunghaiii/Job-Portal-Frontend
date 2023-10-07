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
}


const ResumeTable = (props: IProps) => {

    const { resumeData } = props

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

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };


    return (
        <div>
            <Table columns={columns} dataSource={resumeData} onChange={onChange} />
        </div>
    )
}

export default ResumeTable