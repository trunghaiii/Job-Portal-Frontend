
import { useEffect, useState } from "react"
import { Card, Pagination } from 'antd';
import { decrement, increment } from '../../redux/slices/counterSlice'
import "./Home.scss"
import { getSearchCompaniesPagination } from "../../services/api";

const Home = () => {


    const { Meta } = Card;

    const [companyData, setCompanyData] = useState<any>([])

    const [current, setCurrent] = useState<number>(1)
    const [limit, setLimit] = useState<number>(4)
    const [total, setTotal] = useState<number>(0)

    const handlePagination = (page: number, pageSize: number) => {
        setCurrent(page)

    }

    const fetchAllCompanies = async () => {

        // 1. call api
        let response = await getSearchCompaniesPagination(`page=${current}&limit=${limit}`)
        if (response && response.statusCode === 200) {
            setTotal(response.data.meta.total)
            setCompanyData(response.data.result)
        }

    }
    useEffect(() => {
        fetchAllCompanies()
    }, [current])

    //console.log("companyData", companyData);

    return (
        <div className='home-container'>
            <h3 className='home-title'>Companies</h3>
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
                                    src={`http://localhost:9000/images/companylogos/${company.logo}`}
                                    height={280}
                                />}
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
        </div>
    )
}

export default Home;