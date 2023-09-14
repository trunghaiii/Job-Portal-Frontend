
import { Descriptions, Drawer } from "antd"
import moment from "moment"


interface IProps {
    openUserDrawer: boolean
    setOpenUserDrawer: any
    showUserData: any
}


const ShowUserDrawer = (props: IProps) => {

    const { openUserDrawer, setOpenUserDrawer, showUserData } = props

    const onClose = () => {
        setOpenUserDrawer(false);
    };


    return (
        <Drawer
            title="User Detail"
            placement="right"
            onClose={onClose}
            width="80%"
            open={openUserDrawer}>
            <Descriptions title="User Info" column={2} bordered items={[
                {
                    key: '1',
                    label: 'Name',
                    children: showUserData.name,
                },
                {
                    key: '2',
                    label: 'Email',
                    children: showUserData.email,
                },
                {
                    key: '3',
                    label: 'Age',
                    children: showUserData.age,
                },
                {
                    key: '4',
                    label: 'Gender',
                    children: showUserData.gender,
                },
                {
                    key: '5',
                    label: 'Role',
                    children: showUserData.role,
                },
                {
                    key: '6',
                    label: 'Address',
                    children: showUserData.address,
                },
                {
                    key: '7',
                    label: 'Created At',
                    children: moment(showUserData.createdAt).format('DD-MM-YYYY HH:mm:ss')
                },
                {
                    key: '8',
                    label: 'Updated At',
                    children: moment(showUserData.updatedAt).format('DD-MM-YYYY HH:mm:ss')
                },
                {
                    key: '10',
                    label: 'Company',
                    children: showUserData.company.name,
                },
            ]} />
        </Drawer>
    )
}

export default ShowUserDrawer