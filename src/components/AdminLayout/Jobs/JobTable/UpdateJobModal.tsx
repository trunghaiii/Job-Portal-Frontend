import { useState } from "react"
import { Button, Form, Input, InputNumber, Modal, Select, message, notification } from "antd"
import TextArea from "antd/es/input/TextArea";
import { useEffect } from "react";
import { updateJob } from "../../../../services/api";


type FieldType = {
    _id?: string;
    name?: string;
    skills?: string;
    location?: string;
    salary?: number;
    quantity?: number;
    level?: string;
    company?: string;
    description?: string;
};

interface IProps {
    openUpdateJobModal: boolean
    setOpenUpdateJobModal: any
    updateJobData: any
    fetchJobData: any
}

const UpdateJobModal = (props: IProps) => {

    const [form] = Form.useForm();

    const { openUpdateJobModal, setOpenUpdateJobModal, updateJobData, fetchJobData } = props

    const [loadingUpdate, setLoadingUpdate] = useState<boolean>(false)

    const onFinish = async (values: any) => {

        // 0. call api:
        setLoadingUpdate(true)
        const response = await updateJob(values._id,
            {
                ...values,
                company: values.company?.value
            }
        )
        setLoadingUpdate(false)

        // 2. respond to client
        if (response && response.statusCode === 200) {
            message.success({
                content: "Update Job Successfully!",
                duration: 5
            })

            setOpenUpdateJobModal(false)
            fetchJobData()

        } else {
            notification.error({
                message: response.message,
                duration: 5
            })
        }

    }

    const handleSubmit = () => {
        form.submit()
    }

    const handleCancel = () => {
        setOpenUpdateJobModal(false);
    };

    useEffect(() => {
        form.setFieldsValue({
            ...updateJobData, company:
            {
                label: updateJobData.company?.name,
                value: updateJobData.company?._id
            }
        })
    }, [updateJobData])

    //console.log("updateJobData", updateJobData);

    return (
        <Modal
            width={"70%"}
            title="Update Job Detail"
            open={openUpdateJobModal}
            onCancel={handleCancel}
            footer={[
                <Button
                    key="back"
                    onClick={handleCancel}
                >
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    onClick={() => handleSubmit()}
                    loading={loadingUpdate}
                >
                    Update
                </Button>
            ]}
        >
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Form.Item<FieldType>
                        label="ID"
                        name="_id"
                        rules={[{ required: true, message: 'Please input Job Name!' }]}
                        hidden
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Job Title"
                        name="name"
                        rules={[{ required: true, message: 'Please input Job Name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Skills"
                        name="skills"
                        rules={[{ required: true, message: 'Please input skills' }]}
                    >
                        <Select
                            mode="multiple"
                            allowClear
                            style={{ width: '100%' }}
                            placeholder="Please select skills"
                            options={[
                                {
                                    label: "React JS",
                                    value: "React JS"
                                },
                                {
                                    label: "Node JS",
                                    value: "Node JS"
                                },
                                {
                                    label: "TypeScript",
                                    value: "TypeScript"
                                },
                                {
                                    label: "JavaScript",
                                    value: "JavaScript"
                                },
                                {
                                    label: "Angular JS",
                                    value: "Angular JS"
                                },
                                {
                                    label: "Nest JS",
                                    value: "Nest JS"
                                }

                            ]}
                        />
                    </Form.Item>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap"
                }}>
                    <Form.Item<FieldType>
                        label="Location"
                        name="location"
                        rules={[{ required: true, message: 'Please input Location!' }]}
                    >
                        <Select
                            showSearch
                            placeholder="Select a location"
                            optionFilterProp="children"
                            disabled
                            options={[
                                {
                                    value: 'Ontario',
                                    label: 'Ontario',
                                },
                                {
                                    value: 'British Columbia',
                                    label: 'British Columbia',
                                }
                            ]}
                        />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Salary"
                        name="salary"
                        rules={[{ required: true, message: 'Please input Salary!' }]}
                    >
                        <InputNumber />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Quantity"
                        name="quantity"
                        rules={[{ required: true, message: 'Please input Quantity!' }]}
                    >
                        <InputNumber />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Level"
                        name="level"
                        rules={[{ required: true, message: 'Please input Level!' }]}
                    >
                        <Select
                            showSearch
                            placeholder="Select a level"
                            optionFilterProp="children"
                            options={[
                                {
                                    value: 'Junior',
                                    label: 'Junior',
                                },
                                {
                                    value: 'Senior',
                                    label: 'Senior',
                                },
                                {
                                    value: 'Intern',
                                    label: 'Intern',
                                }
                            ]}
                        />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Company"
                        name="company"
                        rules={[{ required: true, message: 'Please input Company!' }]}
                    >
                        <Select
                            disabled
                            showSearch
                            placeholder="Select a level"
                            optionFilterProp="children"
                        //options={companyList}
                        />
                    </Form.Item>
                </div>

                <Form.Item<FieldType>
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input Description!' }]}
                >
                    <TextArea rows={4} />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default UpdateJobModal