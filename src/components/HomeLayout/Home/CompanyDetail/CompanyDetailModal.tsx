import { Modal } from "antd";
import "./CompanyDetailModal.scss"

interface IProps {
    openCompanyDetailModal: boolean
    setOpenCompanyDetailModal: any
}

const CompanyDetailModal = (props: IProps) => {

    const { openCompanyDetailModal, setOpenCompanyDetailModal } = props

    const handleOk = () => {
        setOpenCompanyDetailModal(false);
    };

    const handleCancel = () => {
        setOpenCompanyDetailModal(false);
    };
    return (
        <Modal
            title="Company Information"
            open={openCompanyDetailModal}
            onOk={handleOk}
            onCancel={handleCancel}>
            <div className="company-detail-container">
                <div className="title-group">
                    <img
                        src="http://localhost:9000/images/companylogos/Plexxis-Logo-1695956294169.png"
                        alt="company-logo"
                        height={70}
                        width={70}
                    />
                    <h3>Plexxis Software</h3>
                </div>
                <div className="detail-group">
                    <h4>(14 Abacus Rd, Brampton, ON L6T 5B)</h4>
                    <p>Plexxis serves subcontractors who seek elite team cohesion and performance. Coupling cloud construction management software, on-premise and hosted solutions, we unite operations, estima</p>
                </div>
            </div>
        </Modal>
    )
}

export default CompanyDetailModal