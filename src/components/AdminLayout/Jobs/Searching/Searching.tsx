import { Button, Form, Input } from "antd"
import "./Searching.scss"

type FieldType = {
    name?: string;
};


const Searching = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    return (
        <div className="searching-container">
            <div className="searching-input">
                <Form
                    name="basic"
                    // labelCol={{ span: 8 }}
                    // wrapperCol={{ span: 16 }}
                    // style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Job Name"
                        name="name"
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </div>
            <div className="searching-btn-group">
                <Button
                    size='small'
                    type="primary"
                    style={{ marginRight: "5px" }}
                // onClick={() => form.submit()}
                >Search</Button>
                <Button
                    size='small'
                // onClick={() => handleReload()}
                >Reload</Button>
            </div>
        </div>
    )
}

export default Searching