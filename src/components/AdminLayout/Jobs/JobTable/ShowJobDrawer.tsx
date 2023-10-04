
import { useState } from "react"
import { Drawer } from "antd"

interface IProps {
    openShowJobDrawer: boolean
    setOpenShowJobDrawer: any
}
const ShowJobDrawer = (props: IProps) => {

    const { openShowJobDrawer, setOpenShowJobDrawer } = props

    const onClose = () => {
        setOpenShowJobDrawer(false);
    };
    return (
        <div>
            <Drawer
                title="Basic Drawer"
                placement="right"
                onClose={onClose}
                open={openShowJobDrawer}
                width="80%"
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>

    )
}

export default ShowJobDrawer