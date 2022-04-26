import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Divider, Image, Row, Spin, Tag, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfile } from "../../../shared/actions/profileAction";
import SelectStatus from "./Components/selectStatus";

const DetailProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { profiles } = useSelector((state) => state);
  const { loading } = useSelector((state) => state.profiles);
  console.log(loading);
  useEffect(() => {
    dispatch(getProfile(id));
  }, [dispatch, id]);
  return (
    <>
      <Spin spinning={loading}>
        {profiles.profile && (
          <div>
            <Row>
              <Col span={24} style={{ background: "#fff1f0" }}>
                <Row>
                  <Col span={18}>
                    <div
                      style={{
                        background: "#fff1f0",
                        display: "flex",
                        margin: "20px",
                      }}
                    >
                      <div style={{ padding: "12px" }}>
                        {profiles.profile.avatar ? (
                          <Avatar
                            size={64}
                            src={
                              <Image
                                src={profiles.profile.avatar}
                                style={{ width: 64 }}
                              />
                            }
                          />
                        ) : (
                          <Avatar size={64} icon={<UserOutlined />} />
                        )}
                      </div>
                      <div style={{ padding: "12px" }}>
                        <Typography>
                          <b>{profiles.profile.fullname}</b>
                        </Typography>
                        <Typography>
                          <b>Email: </b>
                          {profiles.profile.email}
                        </Typography>
                        <Typography>
                          <b>Phone: </b>
                          {profiles.profile.phone}
                        </Typography>
                      </div>
                    </div>
                  </Col>
                  <Col span={6} style={{ background: "#fff1f0" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "20px",
                        height: "100%",
                        alignItems: "center",
                      }}
                    >
                      <SelectStatus record={profiles.profile} />
                      {/* <Dropdown
                      overlay={menu}
                      placement="bottomRight"
                      trigger={["click"]}
                    >
                      <Button type="primary">Status</Button>
                    </Dropdown>
                    <Button
                      type="primary"
                      style={{
                        marginRight: "10px",
                      }}
                      danger
                    >
                      Reject
                    </Button> */}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            {profiles.profile.campaignId && (
              <Row style={{ paddingTop: "20px" }}>
                <Col
                  span={10}
                  style={{ width: "100%", height: "70vh", overflowY: "scroll" }}
                >
                  <div>
                    <div>
                      <Typography.Title level={2} style={{ margin: 0 }}>
                        {profiles.profile.campaignId.title}
                      </Typography.Title>
                    </div>
                    <Divider />
                    <div>
                      <div>
                        Position:{" "}
                        <Tag color="green">
                          {profiles.profile.campaignId.position}
                        </Tag>
                      </div>
                      <div>
                        Quantity: {profiles.profile.campaignId.quantity}
                      </div>
                    </div>
                    <Divider>Description</Divider>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: profiles.profile.campaignId.description,
                      }}
                    ></div>
                  </div>
                </Col>
                <Col span={14}>
                  <iframe
                    src={profiles.profile.cv}
                    style={{ width: "100%", height: "70vh" }}
                    title="a"
                  ></iframe>
                </Col>
              </Row>
            )}
          </div>
        )}
      </Spin>
    </>
  );
};

export default DetailProfile;
