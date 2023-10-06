
import { useEffect, useState } from "react"
import { Button, Modal, Form, Input, Select, InputNumber, message, notification } from "antd";
import type { SelectProps } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { createNewJob, getAllCompanies } from "../../../../services/api";

interface IProps {
    openNewJobModal: boolean
    setOpenNewJobModal: any
    fetchJobData: any
}

type FieldType = {
    name?: string;
    skills?: string;
    location?: string;
    salary?: number;
    quantity?: number;
    level?: string;
    company?: string;
    description?: string;
};

const NewJobModal = (props: IProps) => {

    const [form] = Form.useForm();

    const [companyList, setCompanyList] = useState<any>([])

    const { openNewJobModal, setOpenNewJobModal, fetchJobData } = props

    const handleCancel = () => {
        setOpenNewJobModal(false);
    };

    const onFinish = async (values: any) => {

        // 0. call api:
        const response = await createNewJob({ ...values, isActive: true })

        // 1. respond to client
        if (response && response.statusCode === 201) {
            message.success({
                content: "Create New Job Successfully!",
                duration: 5
            })
            setOpenNewJobModal(false)
            form.resetFields()
            fetchJobData()
        } else {
            notification.error({
                message: response.message,
                duration: 5
            })
        }

    };

    const handleSubmit = () => {
        form.submit()
    }

    const fetchCompaniesData = async () => {

        let buildingCompanyData = []

        // 0. call api
        const response = await getAllCompanies()

        // 1. build buildingCompanyData
        if (response && response.statusCode === 200) {
            response.data.result.map((comp: any) => {
                buildingCompanyData.push(
                    {
                        value: comp._id,
                        label: comp.name,
                    }
                )
            })
        }

        setCompanyList(buildingCompanyData)
    }

    useEffect(() => {
        fetchCompaniesData()
    }, [])


    return (
        <Modal
            width={"70%"}
            title="New Job"
            open={openNewJobModal}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    onClick={() => handleSubmit()}
                >
                    Create
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
                            options={[
                                {
                                    value: 'Ontario',
                                    label: 'Ontario',
                                },
                                {
                                    value: 'British Columbia',
                                    label: 'British Columbia',
                                },
                                {
                                    value: 'PEI',
                                    label: 'PEI',
                                },
                                {
                                    value: 'Alberta',
                                    label: 'Alberta',
                                },
                                {
                                    value: 'Manitoba',
                                    label: 'Manitoba',
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
                            showSearch
                            placeholder="Select a level"
                            optionFilterProp="children"
                            options={companyList}
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

export default NewJobModal;