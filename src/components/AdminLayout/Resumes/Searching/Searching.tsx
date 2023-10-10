import { Button, Form, Select } from "antd";
import "./Searching.scss"

type FieldType = {
    status?: string;
};

interface IProps {
    setQueryString: any
    setCurrent: any
}

const Searching = (props: IProps) => {

    const [form] = Form.useForm();

    const { setQueryString, setCurrent } = props

    const onFinish = (values: any) => {
        setQueryString(values.status)

    };

    const handleReload = () => {
        setQueryString("")
        setCurrent(1)
        form.resetFields()
    }

    return (
        <div className="searrch-container">
            <div className="searrch-bar">
                <Form
                    form={form}
                    name=""
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Status"
                        name="status"
                        rules={[{ required: true, message: 'select status' }]}
                    >
                        <Select>
                            <Select.Option value="PENDING">PENDING</Select.Option>
                            <Select.Option value="APPROVED">APPROVED</Select.Option>
                            <Select.Option value="REJECTED">REJECTED</Select.Option>
                        </Select>
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
                <Button
                    size='small'
                    onClick={() => handleReload()}
                >Reload</Button>
            </div>


        </div >
    )
}

export default Searching