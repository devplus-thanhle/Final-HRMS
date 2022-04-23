import React from "react";
import { Spin } from "antd";
import { useSelector } from "react-redux";

const Loading = () => {
  const { loading } = useSelector((state) => state.loading);
  return <>{loading && <Spin size="large" />}</>;
};

export default Loading;
