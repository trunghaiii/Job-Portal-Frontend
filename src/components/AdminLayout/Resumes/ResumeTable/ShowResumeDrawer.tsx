
import React, { useState } from 'react';
import { Button, Descriptions, Drawer } from 'antd';

interface IProps {
    openResumeDrawer: boolean
    setOpenResumeDrawer: any
}

const ShowResumeDrawer = (props: IProps) => {

    const { openResumeDrawer, setOpenResumeDrawer } = props

    const onClose = () => {
        setOpenResumeDrawer(false);
    };
    return (
        <Drawer
            title="Basic Drawer"
            placement="right"
            onClose={onClose}
            open={openResumeDrawer}
            width="80%"
        >
            <Descriptions title="User Info" column={2} bordered items={[
                {
                    key: '1',
                    label: 'Email',
                    children: 'hai@gmail.com',
                },
                {
                    key: '2',
                    label: 'Status',
                    children: 'PENDING',
                },
                {
                    key: '3',
                    label: 'Job Title',
                    children: 'Engineer',
                },
                {
                    key: '4',
                    label: 'Company',
                    children: 'IBM',
                },
                {
                    key: '5',
                    label: 'Created At',
                    //children: moment(showCompanyData.createdAt).format('DD-MM-YYYY HH:mm:ss')
                    children: "ss"
                },
                {
                    key: '6',
                    label: 'Updated At',
                    // children: moment(showCompanyData.updatedAt).format('DD-MM-YYYY HH:mm:ss'),
                    children: "cc"
                },
                {
                    key: '7',
                    label: 'Resume File Link',
                    // children: moment(showCompanyData.updatedAt).format('DD-MM-YYYY HH:mm:ss'),
                    children: "cc"
                }
            ]} />
        </Drawer>
    )
}

export default ShowResumeDrawer