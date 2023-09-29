import { Button, Card, Form, Input, Pagination } from "antd";
import { CiLocationOn } from 'react-icons/ci';
import "./Postings.scss"
import { useEffect, useState } from "react";
import { getSearchJobsPagination } from "../../services/api";
import moment from "moment";


type FieldType = {
    searchString?: string;
};

const Postings = () => {

    const [form] = Form.useForm();

    const [jobData, setJobData] = useState<any>([])

    const [current, setCurrent] = useState<number>(1)
    const [limit, setLimit] = useState<number>(3)
    const [total, setTotal] = useState<number>(0)

    const [queryString, setQueryString] = useState<string>("")

    const handlePagination = (page: number, pageSize: number) => {
        setCurrent(page)

    }

    const handleSearch = (values: any) => {
        if (values.searchString === undefined) {
            setQueryString("")
        } else {
            setQueryString(values.searchString)
        }

        setCurrent(1)
    };

    const handleReload = () => {
        setQueryString("")
        setCurrent(1)
        form.resetFields()
    }

    const fetchAllJobs = async () => {

        // 1. call api

        let response = await getSearchJobsPagination(
            `current=${current}&limit=${limit}&name=/${queryString}/i&populate=company`
        )
        if (response && response.statusCode === 200) {
            setTotal(response.data.meta.total)
            setJobData(response.data.result)
        }

    }
    useEffect(() => {
        fetchAllJobs()
    }, [current, queryString])


    return (
        <div className="posting-container">
            <div className="posting-searching">
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 24 }}
                    onFinish={handleSearch}
                    autoComplete="off"
                >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                        <Form.Item<FieldType>
                            //label="Company Name"
                            name="searchString"
                            style={{ width: "60%" }}
                        >
                            <Input placeholder="Searching Name" />
                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Search
                            </Button>
                            <Button
                                style={{ marginLeft: "5px" }}
                                htmlType="submit"
                                onClick={() => handleReload()}
                            >
                                Reload
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
            <div className="posting-card">
                {
                    jobData && jobData.length > 0
                    &&
                    jobData.map((job: any) => {
                        return (
                            <Card style={{ width: 400, height: 250, cursor: "pointer", border: "1px solid" }}>
                                <div className="posting-title">
                                    <img
                                        src={`${import.meta.env.VITE_BACKEND_URL}/images/companylogos/${job.company.logo}`}
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