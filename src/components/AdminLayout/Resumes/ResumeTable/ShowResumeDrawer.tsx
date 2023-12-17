
import React, { useState } from 'react';
import { Button, Descriptions, Drawer } from 'antd';
import moment from 'moment';

interface IProps {
    openResumeDrawer: boolean
    setOpenResumeDrawer: any
    showResumeData: any
}

const ShowResumeDrawer = (props: IProps) => {

    const { openResumeDrawer, setOpenResumeDrawer, showResumeData } = props

    const onClose = () => {
        setOpenResumeDrawer(false);
    };


    return (
        <Drawer
            title="Basic Drawer"
            placement="right"
            onClose={onClose}
            open={openResumeDrawer}
            width="95%"
        >
            <Descriptions title="User Info" column={2} bordered items={[
                {
                    key: '1',
                    label: 'Email',
                    children: showResumeData.email,
                },
                {
                    key: '2',
                    label: 'Status',
                    children: showResumeData.status,
                },
                {
                    key: '3',
                    label: 'Job Title',
                    children: showResumeData.jobId?.name,
                },
                {
                    key: '4',
                    label: 'Company',
                    children: showResumeData.companyId?.name,
                },
                {
                    key: '5',
                    label: 'Created At',
                    children: moment(showResumeData.createdAt).format('DD-MM-YYYY HH:mm:ss')

                },
                {
                    key: '6',
                    label: 'Updated At',
                    children: moment(showResumeData.updatedAt).format('DD-MM-YYYY HH:mm:ss'),
                },
                {
                    key: '7',
                    label: 'Resume File Link',
                    children: <a href={`${import.meta.env.VITE_BACKEND_URL}/images/resumes/${showResumeData.url}`}>{showResumeData.url}</a>
                }
            ]} />
        </Drawer>
    )
}

export default ShowResumeDrawer