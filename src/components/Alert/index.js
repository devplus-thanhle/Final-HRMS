import React from "react";
import { notification } from "antd";
import { useSelector } from "react-redux";

const Alert = () => {
  const { alert } = useSelector((state) => state);
  return (
    <>
      {alert.error &&
        notification["error"]({
          message: "Faild",
          description: alert.error,
        })}
      {alert.success &&
        notification["success"]({
          message: "Success",
          description: alert.success,
        })}
    </>
  );
};

export default Alert;
