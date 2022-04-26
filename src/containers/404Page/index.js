import { Button, Divider } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Divider>404 Page Not Found</Divider>
      <div
        style={{
          width: "100%",
          height: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://res.cloudinary.com/dp5ku4grg/image/upload/v1650879327/404_Error_Page_not_Found_with_people_connecting_a_plug-bro_q1xl9e.png"
          alt=""
          width="50%"
          height="70%"
        />
      </div>
      <Divider style={{ padding: 0, margin: 0 }}>
        <Button type="primary">
          <Link to="/dashboard">Go To Dashboard Page</Link>
        </Button>
      </Divider>
    </>
  );
};

export default NotFound;
