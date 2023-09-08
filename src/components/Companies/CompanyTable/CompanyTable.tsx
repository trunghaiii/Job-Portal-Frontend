
import { useState } from "react"
import { Button, Table, TableProps } from 'antd';
import { ColumnsType } from 'antd/es/table';
import UpdateCompanyModal from "./UpdateCompanyModal";

interface IProps {
    companyData: any,
    current: number,
    pageSize: number,
    totalCompanies: number,
    setCurrent: any
}

interface IUpdateCompany {
    name: string,
    address: string,
    description: string
}

const CompanyTable = (props: IProps) => {

    const { companyData, current, pageSize, totalCompanies, setCurrent } = props

    const [openUpdateCompanyModal, setOpenUpdateCompanyModal] = useState<boolean>(false)
    const [updateCompanyData, setUpdateCompanyData] = useState<IUpdateCompany>({ name: "", address: "", description: "" })

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
                //console.log("record", record);

                return (
                    <div>
                        <Button
                            size='small'
                            type="primary"
                            style={{ marginRight: "5px" }}
                            onClick={() => handleUpdateCompany(record)}
                        >Update</Button>
                        <Button size='small' type="primary" danger>Delete</Button>
                    </div>
                )
            }

        }
    ];

    const handleUpdateCompany = async (companyData: IUpdateCompany) => {

        setOpenUpdateCompanyModal(true)
        setUpdateCompanyData(companyData)
        // console.log("companyData", companyData);

    }

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        // console.log(pagination);
        setCurrent(pagination.current)
    };

    return (
        <>
            <Table
                columns={columns}
                dataSource={companyData}
                onChange={onChange}
                pagination={
                    {
                        current: current,
                        total: totalCompanies,
                        pageSize: pageSize,
                    }
                }
            />
            <UpdateCompanyModal
                openUpdateCompanyModal={openUpdateCompanyModal}
                setOpenUpdateCompanyModal={setOpenUpdateCompanyModal}
                updateCompanyData={updateCompanyData}
            />
        </>

    )
}

export default CompanyTable;