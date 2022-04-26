import React, { useEffect } from "react";
import { Table, Tag, Space, Button, Card } from "antd";
import { getCampaign } from "../../../shared/actions/campaignAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const { Meta } = Card;
const columns = [
  {
    title: "Name",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Technology",
    dataIndex: "technology",
    key: "technology",
    render: (text) => <Tag color="blue">{text}</Tag>,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    sorter: (a, b) => a.limit - b.limit,
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
    render: (text) => <Tag color="blue">{text}</Tag>,
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
    title: "",
    dataIndex: "action",
    key: "action",
    render: (record) => (
      <React.Fragment>
        <Space>
          <Button type="primary" danger>
            <Link to={`/campaign/ApplyCV`}>
              <span>Apply</span>
            </Link>
          </Button>
        </Space>
      </React.Fragment>
    ),
  },
];

export default function Campaign() {
  const dispatch = useDispatch();
  const { campaigns } = useSelector((state) => state.campaigns);
  console.log("campaigns", campaigns);
  useEffect(() => {
    dispatch(getCampaign());
  }, [dispatch]);
  return (
    <div>
      <Table columns={columns} dataSource={campaigns} />
    </div>
  );
}
