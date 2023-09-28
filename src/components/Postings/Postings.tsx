import { Card, Pagination } from "antd";
import { CiLocationOn } from 'react-icons/ci';
import "./Postings.scss"


const Postings = () => {
    return (
        <div className="posting-container">
            <div className="posting-card">
                <Card style={{ width: 400, height: 250, cursor: "pointer", border: "1px solid" }}>
                    <div className="posting-title">
                        <img
                            src="http://localhost:9000/images/companylogos/Plexxis-Logo-1695747169796.png"
                            width={60}
                            height={60}
                            alt="" />
                        <h2>Software Engineer</h2>
                    </div>
                    <div className="posting-detail">
                        <div className="location">
                            <p><CiLocationOn /></p>
                            <p>Ontario</p>
                            <p style={{ margin: 0, marginLeft: "10px" }}>100,000 cad</p>
                        </div>
                        <p >Posting Time: 1/2/1999</p>
                    </div>
                </Card>
                <Card style={{ width: 400, height: 250, cursor: "pointer", border: "1px solid" }}>
                    <div className="posting-title">
                        <img
                            src="http://localhost:9000/images/companylogos/Plexxis-Logo-1695747169796.png"
                            width={60}
                            height={60}
                            alt="" />
                        <h2>Software Engineer</h2>
                    </div>
                    <div className="posting-detail">
                        <div className="location">
                            <p><CiLocationOn /></p>
                            <p>Ontario</p>
                            <p style={{ margin: 0, marginLeft: "10px" }}>100,000 cad</p>
                        </div>
                        <p >Posting Time: 1/2/1999</p>
                    </div>
                </Card>
                <Card style={{ width: 400, height: 250, cursor: "pointer", border: "1px solid" }}>
                    <div className="posting-title">
                        <img
                            src="http://localhost:9000/images/companylogos/Plexxis-Logo-1695747169796.png"
                            width={60}
                            height={60}
                            alt="" />
                        <h2>Software Engineer</h2>
                    </div>
                    <div className="posting-detail">
                        <div className="location">
                            <p><CiLocationOn /></p>
                            <p>Ontario</p>
                            <p style={{ margin: 0, marginLeft: "10px" }}>100,000 cad</p>
                        </div>
                        <p >Posting Time: 1/2/1999</p>
                    </div>
                </Card>
            </div>
            <div className="pagination">
                <Pagination defaultCurrent={1} total={50} />;
            </div>
        </div>
    )
}

export default Postings;