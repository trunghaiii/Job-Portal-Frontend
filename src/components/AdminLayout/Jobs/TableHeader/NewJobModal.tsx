
import { useEffect, useState } from "react"
import { Button, Modal, Form, Input, Select, InputNumber } from "antd";
import type { SelectProps } from 'antd';
import TextArea from "antd/es/input/TextArea";

interface IProps {
    openNewJobModal: boolean
    setOpenNewJobModal: any
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

    const { openNewJobModal, setOpenNewJobModal } = props

    const handleCancel = () => {
        setOpenNewJobModal(false);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const handleSubmit = () => {
        form.submit()
    }

    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

    useEffect(() => {

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
                            onChange={handleChange}
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
                                    label: "Js",
                                    value: "Js"
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
                            options={[
                                {
                                    value: 'IBM-hsdfkjhdjsfhjhd',
                                    label: 'IBM',
                                },
                                {
                                    value: 'Amazon-bnjhfgjbfbfvjh',
                                    label: 'Amazon',
                                }
                            ]}
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