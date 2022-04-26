import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampaign } from "../../../shared/actions/campaignAction";
import { Table, Tag, Button, Divider, Space, Spin } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
    sorter: (a, b) => a.quantity - b.quantity,
  },
  {
    title: "Technology",
    dataIndex: "technology",
    key: "technology",
    render: (technology) =>
      technology.map((tech) => <Tag color="orange">{tech}</Tag>),
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
  const { search } = useLocation();
  const navigate = useNavigate();
  const { campaigns, count, loading } = useSelector((state) => state.campaigns);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const page = new URLSearchParams(search).get("page") || 1;
    setPage(Number(page));
  }, [search]);

  useEffect(() => {
    dispatch(getCampaign(page));
  }, [dispatch, page]);

  return (
    <>
      <Spin spinning={loading}>
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
          pagination={{
            pageSize: 5,
            total: count,
            current: page,
            onChange: (num) => {
              dispatch(getCampaign(num));
              navigate(`/dashboard/campaign/?page=${num}`);
            },
          }}
        ></Table>
      </Spin>
    </>
  );
};

export default Campaign;
