import { Button, Form, Input, Modal, Upload, message, notification } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { createResume, uploadImage } from "../../../../services/api";

interface IProps {
    openApplyModal: boolean
    setOpenApplyModal: any
    jobDetail: any
}

type FieldType = {
    resumeFile?: any;
};

const ApplyModal = (props: IProps) => {

    const [form] = Form.useForm();

    const { openApplyModal, setOpenApplyModal, jobDetail } = props

    const handleOk = () => {
        setOpenApplyModal(false);
    };

    const handleCancel = () => {
        setOpenApplyModal(false);
    };

    const handleApply = () => {
        form.submit()
    }

    const onFinish = async (values: any) => {

        const { resumeFile } = values

        // 0. call api to upload resume:
        const fileResponse = await uploadImage(resumeFile.file.originFileObj, 'resumes')

        if (fileResponse && fileResponse.statusCode !== 201) {

            notification.error({
                message: fileResponse.message,
                duration: 5
            })
            return;
        }

        // 1. call api to create new resume application

        const response = await createResume(
            {
                url: fileResponse.data,
                companyId: jobDetail.company?._id,
                jobId: jobDetail._id
            }
        )
        // 2. respond to client
        if (response && response.statusCode === 201) {
            message.success({
                content: "Apply Successfully!",
                duration: 5
            })
            setOpenApplyModal(false)
            form.resetFields()
        } else {
            notification.error({
                message: response.message,
                duration: 5
            })
        }
    };



    return (
        <Modal
            title="Job Application"
            open={openApplyModal}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={() => handleApply()}>
                    Apply
                </Button>
            ]}
        >
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >

                <Form.Item<FieldType>
                    label="Upload Your resume"
                    name="resumeFile"
                    rules={[{ required: true, message: 'Please upload resume file!' }]}

                >

                    <Upload
                        listType="picture-card"
                        maxCount={1}
                    >
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ApplyModal;