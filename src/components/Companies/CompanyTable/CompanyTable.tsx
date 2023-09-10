
import { useState } from "react"
import { Button, Popconfirm, Table, TableProps, message, notification } from 'antd';
import { ColumnsType } from 'antd/es/table';
import UpdateCompanyModal from "./UpdateCompanyModal";
import { deleteCompany } from "../../../services/api";

interface IProps {
    companyData: any,
    current: number,
    pageSize: number,
    totalCompanies: number,
    setCurrent: any,
    fetchCompanyData: any
}

interface IUpdateCompany {
    name: string,
    address: string,
    description: string
}

const CompanyTable = (props: IProps) => {

    const { companyData, current, pageSize, totalCompanies, setCurrent, fetchCompanyData } = props

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
                        <Popconfirm
                            placement="top"
                            title="Are You Sure To Delete This Company?"
                            // description={description}
                            onConfirm={() => handleDeleteCompany(record.id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button size='small' type="primary" danger>Delete</Button>
                        </Popconfirm>

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

    const handleDeleteCompany = async (id: string) => {

        console.log(id);
        // 1. call api:
        const response = await deleteCompany(id)

        // 2. respond to client
        if (response && response.statusCode === 200) {
            message.success({
                content: "Delete Company Successfully!",
                duration: 5
            })

            fetchCompanyData()

        } else {
            notification.error({
                message: response.message,
                duration: 5
            })
        }


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
                fetchCompanyData={fetchCompanyData}
            />
        </>

    )
}

export default CompanyTable;