
import { useState, useEffect } from "react"
import { Badge, Descriptions, Drawer } from "antd"
import moment from "moment"

interface IProps {
    openShowJobDrawer: boolean
    setOpenShowJobDrawer: any
    showJobData: any
}
const ShowJobDrawer = (props: IProps) => {

    const { openShowJobDrawer, setOpenShowJobDrawer, showJobData } = props
    const [skillDataString, setSkillDataString] = useState<string>("")

    const onClose = () => {
        setOpenShowJobDrawer(false);
    };

    const buildingSkillDataString = () => {
        if (showJobData.skills) {
            setSkillDataString(showJobData.skills.join(" , "))
        }
    }
    useEffect(() => {
        buildingSkillDataString()
    }, [showJobData.skills])

    return (
        <div>
            <Drawer
                title="Basic Drawer"
                placement="right"
                onClose={onClose}
                open={openShowJobDrawer}
                width="80%"
            >
                <Descriptions
                    title="User Info"
                    column={2}
                    bordered
                    items={[
                        {
                            key: '1',
                            label: 'Job Titile',
                            children: `${showJobData.name}`,
                        },
                        {
                            key: '2',
                            label: 'Location',
                            children: `${showJobData.location}`,
                        },
                        {
                            key: '3',
                            label: 'Salary',
                            children: `${showJobData.salary} CAD`,
                        },
                        {
                            key: '4',
                            label: 'Level',
                            children: `${showJobData.level}`,
                        },
                        {
                            key: '5',
                            label: 'Skills',
                            children: `${skillDataString}`,
                            span: 2,
                        },
                        {
                            key: '6',
                            label: 'Status',
                            children: <Badge status="processing" text="Running" />,
                            span: 3,
                        },
                        {
                            key: '7',
                            label: 'Posting Time',
                            children: moment(showJobData.updatedAt).format('DD-MM-YYYY HH:mm:ss'),
                        },
                        {
                            key: '8',
                            label: 'Company',
                            children: `${showJobData.company?.name}`,
                        },
                        {
                            key: '10',
                            label: 'Description',
                            children: `${showJobData.description}`
                            // children: (
                            //     <>
                            //         Data disk type: MongoDB
                            //         <br />
                            //         Database version: 3.4
                            //         <br />
                            //         Package: dds.mongo.mid
                            //         <br />
                            //         Storage space: 10 GB
                            //         <br />
                            //         Replication factor: 3
                            //         <br />
                            //         Region: East China 1
                            //         <br />
                            //     </>
                            // ),
                        },
                    ]} />
            </Drawer>
        </div>

    )
}

export default ShowJobDrawer