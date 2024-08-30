import React from "react";
import { Layout, Button } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SideNav = () => {
  return (
    <Sider
      width={100}
      style={{
        height: "70vh",
        position: "fixed",
        left: 0,
        top: "15vh",
        backgroundColor: "#d9f3ff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0 30px 30px 0",
        zIndex: 1000,
      }}
    >
      <Link to="/admin" style={{ fontSize: "12px", textDecoration: "none" }}>
        <Button
          type="text"
          style={{
            color: "#3d3d3d",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "30px",
            height: "65px",
            width: "100%",
          }}
          icon={<HomeOutlined style={{ fontSize: "24px", color: "#3d3d3d" }} />}
        >
          Home
        </Button>
      </Link>
      <Link to="/profile" style={{ fontSize: "12px", textDecoration: "none" }}>
        <Button
          type="text"
          style={{
            color: "#3d3d3d",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "30px",
            height: "65px",
            width: "100%",
          }}
          icon={<UserOutlined style={{ fontSize: "24px", color: "#3d3d3d" }} />}
        >
          Profile
        </Button>
      </Link>
      <Link
        to="/admin/siteSettings"
        style={{ fontSize: "12px", textDecoration: "none" }}
      >
        <Button
          type="text"
          style={{
            color: "#3d3d3d",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "30px",
            height: "65px",
            width: "100%",
          }}
          icon={
            <SettingOutlined style={{ fontSize: "24px", color: "#3d3d3d" }} />
          }
        >
          Settings
        </Button>
      </Link>
      <Link to="/about" style={{ fontSize: "12px", textDecoration: "none" }}>
        <Button
          type="text"
          style={{
            color: "#3d3d3d",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "30px",
            height: "65px",
            width: "100%",
          }}
          icon={
            <InfoCircleOutlined
              style={{ fontSize: "24px", color: "#3d3d3d" }}
            />
          }
        >
          About
        </Button>
      </Link>
    </Sider>
  );
};

export default SideNav;
