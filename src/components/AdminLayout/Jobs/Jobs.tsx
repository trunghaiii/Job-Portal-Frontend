
import { useEffect, useState } from "react"
import JobTable from "./JobTable/JobTable"
import { getSearchJobsPagination } from "../../../services/api"


const Jobs = () => {

    const [jobData, setJobData] = useState<any>([])

    const [current, setCurrent] = useState<number>(1)
    const [limit, setLimit] = useState<number>(3)
    const [total, setTotal] = useState<number>(0)


    const fetchJobData = async () => {
        // 0. call api:
        const response = await getSearchJobsPagination(`current=${current}&limit=${limit}&populate=company`)

        if (response && response.statusCode === 200) {
            setTotal(response.data.meta.total)
            setJobData(response.data.result)
        }

    }
    useEffect(() => {
        fetchJobData()
    }, [current])

    return (
        <div>
            <JobTable
                jobData={jobData}
                current={current}
                total={total}
                setCurrent={setCurrent}
            />
        </div>
    )
}

export default Jobs