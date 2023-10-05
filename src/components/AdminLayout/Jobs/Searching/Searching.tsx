import { Button, Form, Input } from "antd"
import "./Searching.scss"

type FieldType = {
    name?: string;
};

interface IProps {
    setSearchString: any
    setCurrent: any
}


const Searching = (props: IProps) => {

    const [form] = Form.useForm();

    const { setSearchString, setCurrent } = props

    const onFinish = (values: any) => {
        let nameString: string = ""
        if (values.name) nameString = values.name

        setSearchString(nameString)
        setCurrent(1)
    };

    return (
        <div className="searching-container">
            <div className="searching-input">
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
                    onClick={() => form.submit()}
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