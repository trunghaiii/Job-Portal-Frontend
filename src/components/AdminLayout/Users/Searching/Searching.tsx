
import { Button, Form, Input } from "antd";
import "./Searching.scss"
import { useState } from "react";

type FieldType = {
    name?: string;
};

interface IProps {
    setNameSearchString: any
    setCurrent: any
}

const Searching = (props: IProps) => {

    const { setNameSearchString, setCurrent } = props

    const [loadingSearch, setLoadingSearch] = useState<boolean>(false)

    const [form] = Form.useForm();

    const onFinish = (values: any) => {

        let searchString: string = ""
        if (values.name !== undefined) searchString = values.name

        setLoadingSearch(true)
        setCurrent(1)
        setNameSearchString(searchString)
        setLoadingSearch(false)
    };

    const handleSearch = () => {
        form.submit()
    }

    const handleReload = () => {
        setCurrent(1)
        setNameSearchString("")
        form.resetFields()
    }

    return (
        <div className="searching-container">
            <Form
                form={form}
                name="basic"
                style={{ width: "50%" }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="User Name"
                    name="name"
                >
                    <Input />
                </Form.Item>

            </Form>

            <div className="btn-group">
                <Button
                    loading={loadingSearch}
                    size="small"
                    type="primary"
                    style={{ marginRight: "5px" }}
                    onClick={() => handleSearch()}
                >Search</Button>
                <Button
                    size="small"
                    onClick={() => handleReload()}
                >Reload</Button>
            </div>
        </div>
    )
}

export default Searching;