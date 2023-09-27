
import { Card } from 'antd';
import { decrement, increment } from '../../redux/slices/counterSlice'
import "./Home.scss"

const Home = () => {


    const { Meta } = Card;

    return (
        <div className='home-container'>
            <h3 className='home-title'>Companies</h3>
            <div className='company-card'>
                <Card
                    hoverable
                    style={{ width: 300, height: 350 }}
                    cover={<img
                        alt="example"
                        src="http://localhost:9000/images/companylogos/Plexxis-Logo-1695747169796.png"
                        height={280}
                    />}
                >
                    <Meta style={{ textAlign: "center" }} title="Plexxis Software" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 300, height: 350 }}
                    cover={<img
                        alt="example"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                        height={280}
                    />}
                >
                    <Meta style={{ textAlign: "center" }} title="Google" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 300, height: 350 }}
                    cover={<img
                        alt="example"
                        src="http://localhost:9000/images/companylogos/Plexxis-Logo-1695747169796.png"
                        height={280}
                    />}
                >
                    <Meta style={{ textAlign: "center" }} title="Plexxis Software" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 300, height: 350 }}
                    cover={<img
                        alt="example"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                        height={280}
                    />}
                >
                    <Meta style={{ textAlign: "center" }} title="Google" />
                </Card>
            </div>
        </div>
    )
}

export default Home;