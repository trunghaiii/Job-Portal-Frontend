
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
    const [totalCompanies, setTotalCompanies] = useState<number>(0)

    const [searchString, setSearchString] = useState<string>("")

    const fetchCompanyData = async () => {
        // 1. build query string
        const queryString: string =
            `page=${current}&limit=${pageSize}&name=/${searchString}/i`

        // 2. call api
        const response = await getSearchCompaniesPagination(queryString)

        // 3. build companyData:
        const buildingCompanyData: any = []
        if (response && response.statusCode === 200) {
            setTotalCompanies(response?.data?.meta?.total)
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
    }, [current, searchString])


    return (
        <div>
            <Searching
                setSearchString={setSearchString}
                setCurrent={setCurrent}
            />
            <TableHeader
                fetchCompanyData={fetchCompanyData}
            />
            <CompanyTable
                companyData={companyData}
                current={current}
                pageSize={pageSize}
                totalCompanies={totalCompanies}
                setCurrent={setCurrent}
            />
        </div>
    )
}

export default Companies