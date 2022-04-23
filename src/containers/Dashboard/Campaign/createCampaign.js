import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  InputNumber,
  Upload,
  Typography,
} from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { InboxOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { createCampaign } from "../../../shared/actions/campaignAction";
const { RangePicker } = DatePicker;
const { Title } = Typography;

const CreateCampaign = () => {
  const [componentSize, setComponentSize] = useState("default");
  const [text, setText] = useState("");
  const [fileList, setFileList] = useState("");
  const dispatch = useDispatch();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const rangeConfig = {
    rules: [
      {
        type: "array",
        required: true,
        message: "Please select time!",
      },
    ],
  };
  const onFinish = (values) => {
    let startDate = new Date(values.rangeTimePicker[0]).toLocaleDateString();
    let endDate = new Date(values.rangeTimePicker[1]).toLocaleDateString();

    const data = new FormData();
    data.append("recfile", fileList);
    data.append("title", values.Name);
    data.append("description", text);
    data.append("address", values.Address);
    data.append("startDate", startDate);
    data.append("endDate", endDate);
    data.append("quantity", values.Quantity);
    data.append("position", values.Position);

    dispatch(createCampaign(data));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    console.log("text:", text);
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    const file = e.file;

    setFileList(file);
  };

  return (
    <div>
      <Title
        level={2}
        style={{ color: "rgb(64 169 255)", textAlign: "center" }}
      >
        Create Campaign
      </Title>
      <div>
        <Form
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="Name"
            label="Name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Image">
            <Form.Item
              name="dragger"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger
                name="recfile"
                listType="picture"
                maxCount={1}
                beforeUpload={() => false}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">Support for a single upload.</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
          <Form.Item name="rangeTimePicker" label="Date" {...rangeConfig}>
            <RangePicker showTime format="YYYY-MM-DD HH:mm" />
          </Form.Item>
          <Form.Item
            label="Position"
            name="Position"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Quantity"
            name="Quantity"
            rules={[{ required: true, message: "Please input your Quantity!" }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Address"
            name="Address"
            rules={[{ required: true, message: "Please input your Address!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="Description"
            rules={[
              { required: true, message: "Please input your Description!" },
            ]}
          >
            <CKEditor
              editor={ClassicEditor}
              data="<p>What is your description!</p>"
              onChange={(event, editor) => {
                const data = editor.getData();
                setText(data);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreateCampaign;
