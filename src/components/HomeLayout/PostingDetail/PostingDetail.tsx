import { Button, Divider, Tag } from "antd";
import { useSelector } from "react-redux";
import { CiLocationOn } from 'react-icons/ci';
import "./PostingDetail.scss"


const PostingDetail = () => {

    const jobData = useSelector((state) => state.job)

    //  console.log('jobData', jobData);

    return (
        <div className="posting-detail-container">
            <div className="header">
                <h1>Full Stack Developer</h1>
                <div className="company">
                    <img
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/companylogos/Plexxis-Logo-1695956294169.png`}
                        width={50}
                        height={50}
                        alt="" />
                    <h3>Plexxis Software</h3>
                </div>
                <Button type="primary">Apply Now</Button>
            </div>
            <Divider />
            <div className="side-info">
                <div className="skills">
                    <Tag style={{ fontSize: "15px" }} color="processing">React Js</Tag>
                    <Tag style={{ fontSize: "15px" }} color="processing">Node Js</Tag>
                    <Tag style={{ fontSize: "15px" }} color="processing">SQL</Tag>
                    <Tag style={{ fontSize: "15px" }} color="processing">No SQL</Tag>
                    <Tag style={{ fontSize: "15px" }} color="processing">REST API</Tag>
                    <Tag style={{ fontSize: "15px" }} color="processing">Heroku</Tag>
                </div>
                <div className="other-detail">
                    <p>100,000 CAD</p>
                    <p
                        style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <CiLocationOn /> <span>Ontario</span>
                    </p>
                    <p>Posting Time: 1/2/1999</p>
                </div>
            </div>
            <Divider />
            <div className="description">
                <h3>Description</h3>
                In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.

                Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of 'dolorem ipsum' ('pain itself').

                Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum,[2] as have many LaTeX packages,[3][4][5] web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI.[6]
            </div>
        </div>
    )
}

export default PostingDetail;