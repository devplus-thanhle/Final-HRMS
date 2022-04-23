import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampaign } from "../../../shared/actions/campaignAction";
import { Table, Tag, Button, Divider, Space } from "antd";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Name",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
    render: (text) => <Tag color="blue">{text}</Tag>,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    sorter: (a, b) => a.limit - b.limit,
  },
  {
    title: "Start Day",
    dataIndex: "startDate",
    key: "startDate",
    render: (record) => <React.Fragment>{record.slice(0, 10)}</React.Fragment>,
  },
  {
    title: "End Day",
    dataIndex: "endDate",
    key: "endDate",
    render: (record) => <React.Fragment>{record.slice(0, 10)}</React.Fragment>,
  },
  {
    title: "Status",
    dataIndex: "active",
    key: "active",
    render: (active) => (
      <React.Fragment>
        {active ? (
          <Tag color="blue">active</Tag>
        ) : (
          <Tag color="red">disable</Tag>
        )}
      </React.Fragment>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (record) => (
      <Space>
        <Button type="primary">
          <Link to={`/dashboard/campaign/${record._id}/profile`}>
            <span>Profile</span>
          </Link>
        </Button>
        <Divider type="vertical" />
        <Button type="danger">
          <Link to={`/dashboard/campaign/${record._id}/edit`}>
            <span>Edit</span>
          </Link>
        </Button>
      </Space>
    ),
  },
];

const Campaign = () => {
  const dispatch = useDispatch();
  const { campaigns } = useSelector((state) => state.campaigns);

  useEffect(() => {
    dispatch(getCampaign());
  }, [dispatch]);

  return (
    <>
      <Divider>
        <Button style={{ textAlign: "left" }} type="primary">
          <Link to="/dashboard/campaign/create">Create Campaign</Link>
        </Button>
      </Divider>

      <Table
        columns={columns}
        dataSource={campaigns}
        size={"middle"}
        scroll={{ x: "700px" }}
      ></Table>
    </>
  );
};

export default Campaign;
