
import { useEffect, useState } from "react"
import { Button, Card, Form, Input, Pagination } from 'antd';
import { decrement, increment } from '../../../redux/slices/counterSlice'
import "./Home.scss"
import { getSearchCompaniesPagination } from "../../../services/api";
import CompanyDetailModal from "./CompanyDetail/CompanyDetailModal";

type FieldType = {
    searchString?: string;
};

const Home = () => {


    const { Meta } = Card;
    const [form] = Form.useForm();

    const [companyData, setCompanyData] = useState<any>([])

    const [openCompanyDetailModal, setOpenCompanyDetailModal] = useState<boolean>(false)

    const [current, setCurrent] = useState<number>(1)
    const [limit, setLimit] = useState<number>(4)
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

    const handleCompanyClick = (companyDetail: any) => {
        console.log('companyDetail', companyDetail);

        setOpenCompanyDetailModal(true)
    }

    const fetchAllCompanies = async () => {

        // 1. call api
        let response = await getSearchCompaniesPagination(`page=${current}&limit=${limit}&name=/${queryString}/i`)
        if (response && response.statusCode === 200) {
            setTotal(response.data.meta.total)
            setCompanyData(response.data.result)
        }

    }
    useEffect(() => {
        fetchAllCompanies()
    }, [current, queryString])

    return (
        <div className='home-container'>
            <div className="home-searching">
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
            <div className='company-card'>
                {
                    companyData && companyData.length > 0
                    &&

                    companyData.map((company: any) => {
                        //console.log(company);

                        return (
                            <Card
                                hoverable
                                style={{ width: 270, height: 350 }}
                                cover={<img
                                    alt="example"
                                    src={`${import.meta.env.VITE_BACKEND_URL}/images/companylogos/${company.logo}`}
                                    height={280}
                                />}
                                onClick={() => handleCompanyClick(company)}
                            >
                                <Meta style={{ textAlign: "center" }} title={`${company.name}`} />
                            </Card>
                        )
                    })
                }


            </div>
            <div className='pagination'>
                <Pagination
                    onChange={(page: number, pageSize: number) => handlePagination(page, pageSize)}
                    current={current}
                    pageSize={limit}
                    total={total} />;
            </div>

            <CompanyDetailModal
                openCompanyDetailModal={openCompanyDetailModal}
                setOpenCompanyDetailModal={setOpenCompanyDetailModal}
            />
        </div>
    )
}

export default Home;