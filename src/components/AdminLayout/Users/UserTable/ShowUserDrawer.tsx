
import { Drawer } from "antd"


interface IProps {
    openUserDrawer: boolean
    setOpenUserDrawer: any
}


const ShowUserDrawer = (props: IProps) => {

    const { openUserDrawer, setOpenUserDrawer } = props

    const onClose = () => {
        setOpenUserDrawer(false);
    };

    return (
        <Drawer
            title="Basic Drawer"
            placement="right"
            onClose={onClose}
            width="80%"
            open={openUserDrawer}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    )
}

export default ShowUserDrawer