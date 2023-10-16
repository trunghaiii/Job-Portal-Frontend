import { Button, Form, Input } from "antd";
import "./Searching.scss"
import { useState } from "react";


type FieldType = {
    companyName?: string;
};

interface IProps {
    setSearchString: any,
    setCurrent: any
    loadingSearch: boolean
    loadingReload: boolean
}

const Searching = (props: IProps) => {

    const [form] = Form.useForm();

    const { setSearchString, setCurrent, loadingSearch, loadingReload } = props

    const onFinish = (values: any) => {

        let nameString: string = ""
        if (values.companyName) nameString = values.companyName

        setSearchString(nameString)
        setCurrent(1)
    };

    const handleReload = () => {
        setSearchString("")
        setCurrent(1)
        form.resetFields()
    }

    return (
        <div className="search-container">
            <div className="search-bar">
                <Form
                    form={form}
                    name="basic"
                    // labelCol={{ span: 8 }}
                    // wrapperCol={{ span: 16 }}
                    // style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Company Name"
                        name="companyName"
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </div>
            <div className="btn-group">
                <Button
                    size='small'
                    type="primary"
                    style={{ marginRight: "5px" }}
                    onClick={() => form.submit()}
                    loading={loadingSearch}
                >Search</Button>
                <Button
                    size='small'
                    onClick={() => handleReload()}
                    loading={loadingReload}
                >Reload</Button>
            </div>
        </div>
    )

}

export default Searching;