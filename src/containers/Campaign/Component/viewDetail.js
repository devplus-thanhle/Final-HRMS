import React from "react";
import { Breadcrumb, Button } from "antd";
export default function viewDetail() {
  return (
    <div className="containers" style={{display: 'flex'}}>
      <Breadcrumb
        style={{
          margin: "16px 0",
          width: "60%",
        }}
      >
        <Breadcrumb.Item>Thông Tin Tuyển Dụng</Breadcrumb.Item>
      </Breadcrumb>
      < div style={{marginRight: "0px"}}>
      <Button type="primary" danger >
        Primary
      </Button></div>
    </div>
  );
}
