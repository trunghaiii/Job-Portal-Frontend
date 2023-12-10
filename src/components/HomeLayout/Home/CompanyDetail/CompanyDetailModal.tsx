import { Modal } from "antd";
import "./CompanyDetailModal.scss"

interface IProps {
    openCompanyDetailModal: boolean
    setOpenCompanyDetailModal: any
    companyDetailData: any
}

const CompanyDetailModal = (props: IProps) => {

    const { openCompanyDetailModal, setOpenCompanyDetailModal, companyDetailData } = props

    const handleOk = () => {
        setOpenCompanyDetailModal(false);
    };

    const handleCancel = () => {
        setOpenCompanyDetailModal(false);
    };

    console.log('companyDetailData', companyDetailData);

    return (
        <Modal
            title="Company Information"
            open={openCompanyDetailModal}
            onOk={handleOk}
            onCancel={handleCancel}>
            <div className="company-detail-container">
                <div className="title-group">
                    <img
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/companylogos/${companyDetailData.logo}`}
                        alt="company-logo"
                        height={70}
                        width={70}
                    />
                    <h3>{companyDetailData.name}</h3>
                </div>
                <div className="detail-group">
                    <h4>({companyDetailData.address})</h4>
                    <p>{companyDetailData.description}</p>
                </div>
            </div>
        </Modal>
    )
}

export default CompanyDetailModal