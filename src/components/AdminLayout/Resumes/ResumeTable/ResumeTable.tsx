import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface DataType {
    id: string;
    name: string;
    status: String;
    actions: any;
}


const ResumeTable = () => {

    const columns: ColumnsType<DataType> = [
        {
            title: 'ID',
            dataIndex: 'id',
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

    const data: DataType[] = [
        {
            id: '1',
            name: 'Full Stack Developer',
            status: "PENDDING",
            actions: "hh"

        },
        {
            id: '2',
            name: 'Full Stack Developer',
            status: "PENDDING",
            actions: "hh"

        }
    ];

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <div>
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    )
}

export default ResumeTable