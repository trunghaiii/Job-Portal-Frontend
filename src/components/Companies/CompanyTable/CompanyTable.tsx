
import { Button, Table, TableProps } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface IProps {
    companyData: any,
    current: number,
    pageSize: number
}

const CompanyTable = (props: IProps) => {

    const { companyData, current, pageSize } = props

    const columns: ColumnsType<DataType> = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',

        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: (value, record, index) => {
                console.log("record", record);

                return (
                    <div>
                        <Button size='small' type="primary" style={{ marginRight: "5px" }}>Update</Button>
                        <Button size='small' type="primary" danger>Delete</Button>
                    </div>
                )
            }

        }
    ];

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <Table
            columns={columns}
            dataSource={companyData}
            onChange={onChange}
            pagination={
                {
                    current: current,
                    total: 7,
                    pageSize: pageSize,
                }
            }
        />
    )
}

export default CompanyTable;