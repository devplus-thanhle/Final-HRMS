import React from "react";
import { Button, DatePicker, version } from "antd";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
      <Link to="/dashboard">aaaaa</Link>
      <img
        src="https://lh5.googleusercontent.com/0_1ok8HWI6-4SJOo6NnbFmRhT8spvX92EdPT-bK9iCjmCba6ymfkgfIJECgqspbQb8JNE-MaSVx1OPE=s220"
        alt="img"
        referrerPolicy="no-referrer"
      />
      <img
        src="http://drive.google.com/uc?export=view&id=1IQFJ9B_zTpfaJbBbUnerkuH1velJgQ0v"
        alt=""
        width="200px"
        height="200px"
      />
      <iframe
        src="https://drive.google.com/file/d/196-fASdU1JQpDUi8YQh2nP4TohQS2C8Y/preview"
        width="640"
        height="480"
        title="a"
      ></iframe>
      <iframe
        src="http://drive.google.com/uc?export=view&id=1WDvYVhSgKqxZWW_1Gm0kYPJCYG74Zn6p"
        width="640"
        height="480"
        title="a"
      ></iframe>
    </div>
  );
};

export default HomePage;
