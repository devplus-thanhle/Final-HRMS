import React from "react";
import "./statistic.css";
import { Col, Row, Divider, Tag, Progress, Statistic } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts'

const pdata = [
    {
        name: 'MongoDb',
        student: 11,
        fees: 120
    },
    {
        name: 'Javascript',
        student: 15,
        fees: 12
    },
    {
        name: 'PHP',
        student: 5,
        fees: 10
    },
    {
        name: 'Java',
        student: 10,
        fees: 5
    },
    {
        name: 'C#',
        student: 9,
        fees: 4
    },
    {
        name: 'C++',
        student: 10,
        fees: 8
    },
];

const TopCard = ({ title, tagContent, tagColor, prefix }) => {
  return (
    <Col className="gutter-row" span={6}>
      <div
        className="whiteBox shadow"
        style={{ color: "#595959", fontSize: 13, height: "106px" }}
      >
        <div
          className="pad15 strong"
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <h3 style={{ color: "#22075e", marginBottom: 0 }}>{title}</h3>
        </div>
        <Divider style={{ padding: 0, margin: 0 }}></Divider>
        <div className="pad15">
          <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={11} style={{ textAlign: "left" }}>
              <div className="left">{prefix}</div>
            </Col>
            <Col className="gutter-row" span={2}>
              <Divider
                style={{ padding: "10px 0", justifyContent: "center" }}
                type="vertical"
              ></Divider>
            </Col>
            <Col
              className="gutter-row"
              span={11}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Tag
                color={tagColor}
                style={{ margin: "0 auto", justifyContent: "center" }}
              >
                {tagContent}
              </Tag>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

const PreviewState = ({ tag, color, value }) => {
  let colorCode = "#000";
  switch (color) {
    case "bleu":
      colorCode = "#1890ff";
      break;
    case "green":
      colorCode = "#95de64";
      break;
    case "red":
      colorCode = "#ff4d4f";
      break;
    case "orange":
      colorCode = "#ffa940";
      break;
    case "purple":
      colorCode = "#722ed1";
      break;
    case "grey":
      colorCode = "#595959";
      break;
    case "cyan":
      colorCode = "#13c2c2";
      break;
    case "brown":
      colorCode = "#614700";
      break;
    default:
      break;
  }
  return (
    <div style={{ color: "#595959", marginBottom: 5 }}>
      <div className="left alignLeft">{tag}</div>
      <div className="right alignRight">{value} %</div>
      <Progress
        percent={value}
        showInfo={false}
        strokeColor={{
          "0%": colorCode,
          "100%": colorCode,
        }}
      />
    </div>
  );
};

export default () => (
  <div className="site-card-wrapper">
    <Row gutter={[24, 24]}>
      <TopCard
        title={"Campaign"}
        tagColor={"cyan"}
        prefix={"This month"}
        tagContent={"3"}
      />
      <TopCard
        title={"Profile"}
        tagColor={"purple"}
        prefix={"This month"}
        tagContent={"30"}
      />
      <TopCard
        title={"Accepted"}
        tagColor={"green"}
        prefix={"This month"}
        tagContent={"15"}
      />
      <TopCard
        title={"Pending"}
        tagColor={"orange"}
        prefix={"This month"}
        tagContent={"10"}
      />
    </Row>
    <div className="space30"></div>
    <Row gutter={[24, 24]}>
      <Col className="gutter-row" span={18}>
        <div className="whiteBox shadow" style={{ height: "380px" }}>
          <Row className="pad10" gutter={[0, 0]}>
            <Col className="gutter-row" span={8}>
              <div className="pad15">
                <h3 style={{ color: "#22075e", marginBottom: 15 }}>
                  Stat column 1
                </h3>
                <PreviewState tag={"Received"} color={"purple"} value={5} />
                <PreviewState tag={"Accepted"} color={"green"} value={5} />
                <PreviewState tag={"Rejected"} color={"orange"} value={12} />
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              {" "}
              <div className="pad15">
                <h3 style={{ color: "#22075e", marginBottom: 15 }}>
                  Stat column 2
                </h3>
                <PreviewState tag={"Received"} color={"purple"} value={3} />
                <PreviewState tag={"Accepted"} color={"green"} value={5} />
                <PreviewState tag={"Rejected"} color={"orange"} value={12} />
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              {" "}
              <div className="pad15">
                <h3 style={{ color: "#22075e", marginBottom: 15 }}>
                  Stat column 3
                </h3>
                <PreviewState tag={"Received"} color={"purple"} value={3} />
                <PreviewState tag={"Accepted"} color={"green"} value={5} />
                <PreviewState tag={"Rejected"} color={"orange"} value={12} />
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="whiteBox shadow" style={{ height: "380px" }}>
          <div
            className="pad20"
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <h3 style={{ color: "#22075e", marginBottom: 30 }}>
              Application received
            </h3>
            <Progress type="dashboard" percent={50} width={148} />
            <p>Application compared to last month</p>
            <Divider />
            <Statistic
              title="Null title"
              value={50}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </div>
        </div>
      </Col>
    </Row>
    <div className="space30"></div>
  </div>
);
