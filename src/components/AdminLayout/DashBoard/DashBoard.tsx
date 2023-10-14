
import CountUp from 'react-countup';
import { Col, Row, Statistic } from 'antd';
import { useEffect, useState } from 'react';
import { getDashBoardData } from '../../../services/api';

const formatter = (value: number) => <CountUp end={value} separator="," />;

const DashBoard = () => {

    const [dashboardData, setDashboardData] = useState<any>({})

    const fetchDashBoardData = async () => {
        const response = await getDashBoardData()

        if (response && response.statusCode === 200) {
            setDashboardData(response.data)
        }
    }
    useEffect(() => {
        fetchDashBoardData()
    }, [])

    return (
        <div>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic
                        title="Job Positions"
                        value={dashboardData.jobNumber}
                        formatter={formatter} />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Total Users"
                        value={dashboardData.userNumber}
                        precision={2}
                        formatter={formatter} />
                </Col>
            </Row>
        </div>
    )
}

export default DashBoard