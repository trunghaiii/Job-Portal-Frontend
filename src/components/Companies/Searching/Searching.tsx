import { Button, Form, Input } from "antd";
import "./Searching.scss"


type FieldType = {
    companyName?: string;
};

const Searching = () => {

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

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
                >Search</Button>
                <Button size='small'>Reload</Button>
            </div>
        </div>
    )

}

export default Searching;