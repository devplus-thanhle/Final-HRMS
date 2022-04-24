import {
  Button,
  Divider,
  Table,
  Avatar,
  Image,
  Modal,
  DatePicker,
  TimePicker,
  Input,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProfiles } from "../../../shared/actions/profileAction";
import { Select } from "antd";
const { Option } = Select;

const Profile = () => {
  const dispatch = useDispatch();
  const { profiles } = useSelector((state) => state.profiles);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState({});
  const [value, setValue] = useState("");
  const [reject, setReject] = useState(false);
  const [valueReject, setValueReject] = useState("");
  console.log(data);

  useEffect(() => {
    switch (value) {
      case "NEW":
        console.log("NEW");
        break;
      case "INTERVIEW":
        setIsModalVisible(true);
        break;
      case "REJECT":
        setIsModalVisible(true);
        break;
      default:
        break;
    }
  }, [value]);

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => (
        <Avatar src={<Image src={avatar} style={{ width: 32 }} />} />
      ),
    },
    {
      title: "Name Campaign",
      dataIndex: "campaignId",
      key: "fullname",
      render: (record) => <React.Fragment>{record.title}</React.Fragment>,
    },
    {
      title: "Name",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Status",
      key: "status",
      render: (record) => (
        <Select
          value={record.status}
          onChange={(e) => {
            setData({ id: record._id });
            setValue(e);
          }}
        >
          <Option value="NEW">NEW</Option>
          <Option value="TEST">TEST</Option>
          <Option value="INTERVIEW">
            <span onClick={showModal}>INTERVIEW</span>
          </Option>
          <Option value="CONFIRM">CONFIRM</Option>
          <Option value="REJECT">
            <span onClick={showModalReject}>REJECT</span>
          </Option>
          {/* <Option value="CONSIDER">CONSIDER</Option> */}
        </Select>
      ),
    },
    {
      key: "action",
      render: (record) => (
        <Button type="primary">
          <Link to={`/dashboard/profile/${record._id}`}>
            <span>Profile</span>
          </Link>
        </Button>
      ),
    },
  ];

  const showModal = () => {
    setReject(false);
    setIsModalVisible(true);
  };
  const showModalReject = () => {
    setIsModalVisible(true);
    setReject(true);
  };

  const handleOk = () => {
    // setIsModalVisible(false);
    console.log({ data, date, time });
  };
  const handleReject = () => {
    // setIsModalVisible(false);
    console.log({ valueReject });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);

  return (
    <>
      <Divider>
        <Button style={{ textAlign: "left" }} type="primary">
          <Link to="/dashboard/campaign/create">Add Profile</Link>
        </Button>
      </Divider>

      <Table
        columns={columns}
        dataSource={profiles}
        size={"middle"}
        scroll={{ x: "700px" }}
      ></Table>

      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={reject ? handleReject : handleOk}
        onCancel={handleCancel}
      >
        {reject ? (
          <Input
            placeholder="Reject Reason"
            onChange={(e) => setValueReject(e.target.value)}
          />
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
      </Modal>
    </>
  );
};

export default Profile;
