import { Button, Divider, Tag } from "antd";
import { useSelector } from "react-redux";
import { CiLocationOn } from 'react-icons/ci';
import "./PostingDetail.scss"
import { useEffect, useState } from "react";
import { getJobDetail } from "../../../services/api";
import moment from "moment";
import ApplyModal from "./ApplyModal/ApplyModal";


const PostingDetail = () => {

    const jobData = useSelector((state) => state.job)


    const [jobDetail, setJobDetail] = useState<any>({})

    const [openApplyModal, setOpenApplyModal] = useState<boolean>(false)

    const fetchJobDetail = async () => {

        // call api:
        const response = await getJobDetail(jobData.jobID)

        if (response && response.statusCode === 200) {
            setJobDetail(response.data)
        }

    }

    const hanldeApply = () => {
        setOpenApplyModal(true)
    }

    useEffect(() => {

        fetchJobDetail()
    }, [])

    return (
        <div className="posting-detail-container">
            <div className="header">
                <h1>{jobDetail.name}</h1>
                <div className="company">
                    <img
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/companylogos/${jobDetail?.company?.logo}`}
                        width={50}
                        height={50}
                        alt="" />
                    <h3>{jobDetail?.company?.name}</h3>
                </div>
                <Button
                    type="primary"
                    onClick={() => hanldeApply()}
                >Apply Now</Button>
            </div>
            <Divider />
            <div className="side-info">
                <div className="skills">
                    {
                        jobDetail && jobDetail.skills
                        &&
                        jobDetail.skills.map((skill: any) => {
                            return (
                                <Tag style={{ fontSize: "15px" }} color="processing">{skill}</Tag>
                            )
                        })
                    }
                </div>
                <div className="other-detail">
                    <p>{jobDetail.salary} CAD</p>
                    <p
                        style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <CiLocationOn /> <span>{jobDetail.location}</span>
                    </p>
                    <p>Posting Time: {moment(jobDetail.updatedAt).format('DD-MM-YYYY HH:mm:ss')}</p>
                </div>
            </div>
            <Divider />
            <div className="description">
                <h3>Description</h3>
                {jobDetail.description}
            </div>

            <ApplyModal
                openApplyModal={openApplyModal}
                setOpenApplyModal={setOpenApplyModal}
            />
        </div >
    )
}

export default PostingDetail;