
import { useEffect, useState } from "react"
import JobTable from "./JobTable/JobTable"
import { getSearchJobsPagination } from "../../../services/api"


const Jobs = () => {

    const [jobData, setJobData] = useState<any>([])

    const [current, setCurrent] = useState<number>(1)
    const [limit, setLimit] = useState<number>(3)


    const fetchJobData = async () => {
        // 0. call api:
        const response = await getSearchJobsPagination(`current=${current}&limit=${limit}&populate=company`)

        if (response && response.statusCode === 200) {
            setJobData(response.data.result)
        }

    }
    useEffect(() => {
        fetchJobData()
    }, [])

    return (
        <div>
            <JobTable
                jobData={jobData}
            />
        </div>
    )
}

export default Jobs