
import { useEffect, useState } from "react"
import { getSearchJobsPagination } from "../../../services/api"

import JobTable from "./JobTable/JobTable"
import TableHeader from "./TableHeader/TableHeader"
import Searching from "./Searching/Searching"


const Jobs = () => {

    const [jobData, setJobData] = useState<any>([])

    const [current, setCurrent] = useState<number>(1)
    const [limit, setLimit] = useState<number>(3)
    const [total, setTotal] = useState<number>(0)

    const [loadingSearch, setLoadingSearch] = useState<boolean>(false)
    const [loadingReload, setLoadingReload] = useState<boolean>(false)

    const [searchString, setSearchString] = useState<string>("")


    const fetchJobData = async () => {

        // 0. build query string
        const queryString: string =
            `current=${current}&limit=${limit}&name=/${searchString}/i&populate=company`

        // 1. call api:
        setLoadingSearch(true)
        setLoadingReload(true)
        const response = await getSearchJobsPagination(queryString)
        setLoadingSearch(false)
        setLoadingReload(false)

        if (response && response.statusCode === 200) {
            setTotal(response.data.meta.total)
            setJobData(response.data.result)
        }

    }
    useEffect(() => {
        fetchJobData()
    }, [current, searchString])

    return (
        <div>
            <Searching
                setSearchString={setSearchString}
                setCurrent={setCurrent}
                loadingSearch={loadingSearch}
                loadingReload={loadingReload}
            />
            <TableHeader
                fetchJobData={fetchJobData}
            />
            <JobTable
                jobData={jobData}
                current={current}
                total={total}
                setCurrent={setCurrent}
                fetchJobData={fetchJobData}
            />
        </div>
    )
}

export default Jobs