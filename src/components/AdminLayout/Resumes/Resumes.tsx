import { useState, useEffect } from "react"

import ResumeTable from "./ResumeTable/ResumeTable";
import { getSearchResumePagination } from "../../../services/api";
import Searching from "./Searching/Searching";


const Resumes = () => {

    const [current, setCurrent] = useState<number>(1)
    const [limit, setLimit] = useState<number>(3)
    const [total, setTotal] = useState<number>(0)

    const [queryString, setQueryString] = useState<string>("")

    const [resumeData, setResumeData] = useState<any>([])

    const fetchResumeData = async () => {

        // 0. call api
        const response = await
            getSearchResumePagination(`current=${current}&limit=${limit}&status=/${queryString}/i&populate=companyId,jobId`)

        // 1. build resume data
        const buildingResumeData: any = []
        if (response && response.statusCode === 200) {
            response.data.result.map((resume: any) => {
                buildingResumeData.push(
                    {
                        ...resume,
                        name: resume?.jobId?.name
                    }
                )
            })

            setTotal(response.data?.meta?.total)
            setResumeData(buildingResumeData)
        }



    }

    useEffect(() => {
        fetchResumeData()
    }, [current, queryString])


    return (
        <div>
            <Searching
                setQueryString={setQueryString}
                setCurrent={setCurrent}
            />
            <ResumeTable
                resumeData={resumeData}
                current={current}
                total={total}
                setCurrent={setCurrent}
                fetchResumeData={fetchResumeData}
            />
        </div>
    )
}

export default Resumes;