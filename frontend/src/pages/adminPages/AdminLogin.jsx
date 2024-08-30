import React from "react";
import { Row, Col, Form, Input, Button, message } from "antd";
import axios from "axios";

const AdminLogin = () => {
  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/admin/login",
        values
      );
      if (response.status === 200) {
        message.success("Login successful!");
        window.sessionStorage.setItem("LoggedIn", true);
        window.sessionStorage.setItem("user", JSON.stringify(response.data));
        window.location.href = "/admin";
      } else {
        message.error("Login failed! Please check your credentials.");
      }
    } catch (error) {
      message.error("Login failed! Something went wrong!");
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: "100vh", padding: "0 20px" }}
    >
      <Col xs={24} sm={18} md={12} lg={8} xl={6}>
        <div
          style={{
            border: "1px solid #dadce0",
            borderRadius: "10px",
            padding: "30px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                color: "#3c4043",
                fontFamily: "Roboto, sans-serif",
                fontSize: "24px",
                fontWeight: 500,
              }}
            >
              (Admin) Sign in
            </span>
          </div>
          <Form
            name="login"
            layout="vertical"
            style={{ width: "100%" }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <a
            href="/"
            style={{ color: "#1a73e8", fontFamily: "Roboto, sans-serif" }}
          >
            Forgot password?
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default AdminLogin;
