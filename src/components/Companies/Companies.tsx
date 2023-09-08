
import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface DataType {
    //key: React.Key;
    id: string;
    name: string;
    actions: string;
}

const Companies = () => {


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
                    <div>gghh</div>
                )
            }

        }
    ];

    const data: DataType[] = [
        {
            //  key: '1',
            id: 'hsdfhsdfhds',
            name: "Hai",
            actions: "dd"
        },
        {
            //  key: '1',
            id: 'hsdfhsdfhds',
            name: "Hai 2",
            actions: "dd"
        },
    ];

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                onChange={onChange}
                pagination={
                    {
                        current: 2,
                        total: 7,
                        pageSize: 3,
                    }
                }
            />
        </div>
    )
}

export default Companies