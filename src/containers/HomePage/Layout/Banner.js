import React from 'react'
import { Layout } from 'antd'
const { Header} = Layout;


export default function Banner() {
  return (
    <div>
        <Layout>
        <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          background: 'while',
        }}
      >
        <div className="logo">
          <a href="http://localhost:3000/" className="logo-link">
            <img
              src="https://stunited.vn/wp-content/uploads/2019/09/stunited-e15650013362301.png"
              alt="logo"
            />
          </a>
        </div>
      </Header>
        </Layout>
    </div>
  )
}
