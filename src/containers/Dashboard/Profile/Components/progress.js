import { Progress } from "antd";

const ProgressProfile = ({ record }) => {
  switch (record) {
    case "new":
      return (
        <Progress
          type="circle"
          width={35}
          strokeWidth={15}
          strokeLinecap="square"
          showInfo={false}
          percent={0}
        />
      );
    case "test":
      return (
        <Progress
          type="circle"
          percent={30}
          width={35}
          strokeWidth={15}
          strokeLinecap="square"
          showInfo={false}
        />
      );
    case "interview":
      return (
        <Progress
          type="circle"
          percent={60}
          width={35}
          strokeWidth={15}
          strokeLinecap="square"
          showInfo={false}
        />
      );
    case "confirm":
      return (
        <Progress
          type="circle"
          percent={100}
          width={35}
          strokeWidth={15}
          strokeLinecap="square"
          status="success"
        />
      );
    case "reject":
      return (
        <Progress
          type="circle"
          percent={100}
          status="exception"
          width={35}
          strokeWidth={15}
          strokeLinecap="square"
          strokeColor="#ff0000"
        />
      );
    default:
      break;
  }
};

export default ProgressProfile;
