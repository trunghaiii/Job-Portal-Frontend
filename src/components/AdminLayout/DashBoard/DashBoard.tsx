
import CountUp from 'react-countup';
import { Col, Row, Statistic } from 'antd';

const formatter = (value: number) => <CountUp end={value} separator="," />;

const DashBoard = () => {
    return (
        <div>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Job Positions" value={112893} formatter={formatter} />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Users" value={112893} precision={2} formatter={formatter} />
                </Col>
            </Row>
        </div>
    )
}

export default DashBoard