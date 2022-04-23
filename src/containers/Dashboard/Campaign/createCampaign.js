import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const CreateCampaign = () => {
  return (
    <div>
      <Title
        level={2}
        style={{ color: "rgb(64 169 255)", textAlign: "center" }}
      >
        Create Campaign
      </Title>
    </div>
  );
};

export default CreateCampaign;
