
import React, { useEffect, useState } from 'react';
import CompanyTable from './CompanyTable/CompanyTable';
import TableHeader from './TableHeader/TableHeader';
import Searching from './Searching/Searching';
import { getSearchCompaniesPagination } from '../../services/api';

interface DataType {
    //key: React.Key;
    id: string;
    name: string;
    actions: string;
}

const Companies = () => {

    const [companyData, setCompanyData] = useState<any>([])
    // const [queryString, setQueryString] = useState<string>("")
    const [current, setCurrent] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(3)
    // const companyData: DataType[] = [
    //     {
    //         //  key: '1',
    //         id: 'hsdfhsdfhds',
    //         name: "Hai",
    //         actions: "dd"
    //     },
    //     {
    //         //  key: '1',
    //         id: 'hsdfhsdfhds',
    //         name: "Hai 2",
    //         actions: "dd"
    //     },
    // ];
    const fetchCompanyData = async () => {
        // 1. build query string
        const queryString: string = `page=${current}&limit=${pageSize}`

        // 2. call api
        const response = await getSearchCompaniesPagination(queryString)

        // 3. build companyData:
        const buildingCompanyData: any = []
        if (response && response.statusCode === 200) {
            response.data.result.map((company: object) => {
                buildingCompanyData.push({
                    id: company._id,
                    name: company.name

                })
            })
        }
        // 4. set companyData state:
        setCompanyData(buildingCompanyData)

    }
    useEffect(() => {
        fetchCompanyData()
    }, [])


    return (
        <div>
            <Searching />
            <TableHeader />
            <CompanyTable
                companyData={companyData}
                current={current}
                pageSize={pageSize}
            />
        </div>
    )
}

export default Companies