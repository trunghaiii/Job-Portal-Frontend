import { Button, Table } from "antd";
import type { ColumnsType, TableProps } from 'antd/es/table';


interface DataType {
    _id: string;
    name: string;
}

interface IProps {
    jobData: any
}

const JobTable = (props: IProps) => {

    const { jobData } = props

    const columns: ColumnsType<DataType> = [
        {
            title: 'ID',
            dataIndex: '_id',
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


    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    console.log("jobData", jobData);

    return (
        <div>
            <Table
                columns={columns}
                dataSource={jobData} onChange={onChange} />
        </div>
    )
}

export default JobTable