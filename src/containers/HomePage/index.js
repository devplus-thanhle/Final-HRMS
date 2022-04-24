import React from "react";
import "./HomePage.css";
import { Layout } from "antd";
import Banner from "./Layout/Banner";
import HeroBanner from "./Layout/HeroBanner";
const { Content, Footer } = Layout;

const HomePage = () => {
  return (
    <Layout>
      <Banner/>
      <HeroBanner/>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          marginTop: 64,
        }}
      >
       
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 380,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default HomePage;
