import {
  Button,
  Divider,
  Modal,
  DatePicker,
  TimePicker,
  Input,
  Typography,
  Space,
} from "antd";
import React, { useState } from "react";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { changeStatusSingle } from "../../../../shared/actions/profileAction";

const { Option } = Select;
const { Text } = Typography;
const { TextArea } = Input;

const SelectStatus = ({ record }) => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [idProfile, setIdProfile] = useState("");
  const [reject, setReject] = useState(false);
  const [valueReject, setValueReject] = useState("");
  const [status, setStatus] = useState("");
  const onChangeValue = async (e, id) => {
    setIdProfile(id);
    setStatus(e);
    switch (e) {
      case "new":
        console.log("new", record._id);
        await dispatch(changeStatusSingle({ id, e }));
        break;
      case "interview":
        console.log("interview", record._id);

        showModal();
        break;
      case "reject":
        console.log("reject", record._id);

        showModalReject();
        break;
      case "test":
        console.log("test", record._id);

        break;
      case "confirm":
        await dispatch(changeStatusSingle({ id, e }));
        break;
      default:
        break;
    }
  };

  const showModal = () => {
    setReject(false);
    setIsModalVisible(true);
  };
  const showModalReject = () => {
    setIsModalVisible(true);
    setReject(true);
  };
  const handleOk = () => {
    dispatch(changeStatusSingle({ id: idProfile, e: status, date, time }));
    setIsModalVisible(false);
  };

  const handleReject = () => {
    dispatch(changeStatusSingle({ id: idProfile, e: status, valueReject }));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Select
        value={record.status}
        onChange={(e) => {
          onChangeValue(e, record._id);
        }}
        style={{ width: 100, height: "fit-content" }}
      >
        <Option value="new">NEW</Option>
        <Option value="test">TEST</Option>
        <Option value="interview">INTERVIEW</Option>
        <Option value="confirm">CONFIRM</Option>
        <Option value="reject">REJECT</Option>
      </Select>
      <Modal
        title="Enter information"
        visible={isModalVisible}
        onOk={reject ? handleReject : handleOk}
        onCancel={handleCancel}
        footer={null}
        closeIcon={<span onClick={handleCancel}>X</span>}
      >
        {reject ? (
          <Space direction="vertical" style={{ width: "100%" }}>
            <Text>Reason:</Text>
            <TextArea
              placeholder="Reject Reason"
              onChange={(e) => setValueReject(e.target.value)}
            />
          </Space>
        ) : (
          <>
            <DatePicker onChange={(date, dateString) => setDate(dateString)} />
            <TimePicker
              format="HH:mm"
              onOk={(time) => {
                setTime(new Date(time).toLocaleTimeString());
              }}
            />
          </>
        )}
        <Divider />
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button
            disabled={valueReject || (date && time) ? false : true}
            onClick={reject ? handleReject : handleOk}
          >
            {valueReject || (date && time) ? "😃 OK!" : "😢 Value empty!"}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default SelectStatus;
