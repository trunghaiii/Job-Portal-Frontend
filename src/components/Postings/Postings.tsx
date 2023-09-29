import { Card, Pagination } from "antd";
import { CiLocationOn } from 'react-icons/ci';
import "./Postings.scss"
import { useEffect, useState } from "react";
import { getSearchJobsPagination } from "../../services/api";
import moment from "moment";


const Postings = () => {

    const [jobData, setJobData] = useState<any>([])

    const [current, setCurrent] = useState<number>(1)
    const [limit, setLimit] = useState<number>(3)
    const [total, setTotal] = useState<number>(0)

    const handlePagination = (page: number, pageSize: number) => {
        setCurrent(page)

    }

    const fetchAllJobs = async () => {

        // 1. call api

        let response = await getSearchJobsPagination(`current=${current}&limit=${limit}&populate=company`)
        if (response && response.statusCode === 200) {
            setTotal(response.data.meta.total)
            setJobData(response.data.result)
        }

    }
    useEffect(() => {
        fetchAllJobs()
    }, [current])


    return (
        <div className="posting-container">
            <div className="posting-card">
                {
                    jobData && jobData.length > 0
                    &&
                    jobData.map((job: any) => {
                        return (
                            <Card style={{ width: 400, height: 250, cursor: "pointer", border: "1px solid" }}>
                                <div className="posting-title">
                                    <img
                                        src={`http://localhost:9000/images/companylogos/${job.company.logo}`}
                                        width={60}
                                        height={60}
                                        alt="" />
                                    <h2>{job.name}</h2>
                                </div>
                                <div className="posting-detail">
                                    <div className="location">
                                        <p><CiLocationOn /></p>
                                        <p>{job.location}</p>
                                        <p style={{ margin: 0, marginLeft: "10px" }}>{job.salary} cad</p>
                                    </div>
                                    <p ><span style={{ fontWeight: "bold" }}>Posting Time:</span> {moment(job.updatedAt).format('DD-MM-YYYY HH:mm:ss')}</p>
                                </div>
                            </Card>

                        )
                    })
                }

            </div>
            <div className="pagination">
                <Pagination
                    onChange={(page: number, pageSize: number) => handlePagination(page, pageSize)}
                    current={current}
                    pageSize={limit}
                    total={total} />;
            </div>
        </div>
    )
}

export default Postings;