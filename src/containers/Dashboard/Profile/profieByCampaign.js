import { Avatar, Button, Divider, Image, Spin, Table, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProfileByCampaign } from "../../../shared/actions/profileAction";
import SelectStatus from "./Components/selectStatus";

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
    render: (record) => <SelectStatus record={record} />,
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

const ProfieByCampaign = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { profiles } = useSelector((state) => state);
  const { loading } = useSelector((state) => state.profiles);

  useEffect(() => {
    dispatch(getProfileByCampaign(id));
  }, [dispatch, id]);

  return (
    <>
      <Spin spinning={loading}>
        {/* {profiles.profileByCampaign &&
          profiles.profileByCampaign.length !== 0 && (
            <Typography.Title level={3}>
              {profiles.profileByCampaign[0].title}
            </Typography.Title>
          )} */}
        <Typography.Title level={3}>{profiles.title}</Typography.Title>
        <Divider />

        <Table columns={columns} dataSource={profiles.profiles} />
      </Spin>
    </>
  );
};

export default ProfieByCampaign;
