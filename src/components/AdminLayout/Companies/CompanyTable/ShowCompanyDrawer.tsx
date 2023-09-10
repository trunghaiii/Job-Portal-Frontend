
import { Badge, Descriptions, Drawer } from 'antd';
import moment from "moment"

interface IProps {
    openShowCompanyModal: boolean;
    setOpenShowCompanyModal: any;
    showCompanyData: any
}

const ShowCompanyDrawer = (props: IProps) => {

    const { openShowCompanyModal, setOpenShowCompanyModal, showCompanyData } = props
    const showDrawer = () => {
        setOpenShowCompanyModal(true);
    };

    const onClose = () => {
        setOpenShowCompanyModal(false);
    };

    console.log("showCompanyData", showCompanyData);


    return (
        <Drawer
            title="Company Detail"
            placement="right"
            onClose={onClose}
            open={openShowCompanyModal}
            width="80%"
        >
            <Descriptions title="User Info" column={2} bordered items={[
                {
                    key: '1',
                    label: 'Name',
                    children: showCompanyData.name,
                },
                {
                    key: '2',
                    label: 'Address',
                    children: showCompanyData.address,
                },
                {
                    key: '3',
                    label: 'Created At',
                    children: moment(showCompanyData.createdAt).format('DD-MM-YYYY HH:mm:ss')
                },
                {
                    key: '4',
                    label: 'Updated At',
                    children: moment(showCompanyData.updatedAt).format('DD-MM-YYYY HH:mm:ss'),
                },
                {
                    key: '10',
                    label: 'Description',
                    children: showCompanyData.description,
                },
            ]} />
        </Drawer>
    )
}

export default ShowCompanyDrawer;