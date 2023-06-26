import React, { useState } from "react";
// import "./index.css";
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Input, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    passworderr: false,
    usernameerr: false,
  });
  const { passworderr, usernameerr } = error;
  const { username, password } = user;
  const navigate = useNavigate();
  return (
    <Card
      title={"Signup "}
      style={{
        width: "60%",
        margin: "auto",
        boxShadow: "2px 2px 2px 2px gray",
      }}
    >
      <Space direction="vertical" style={{ width: "100%" }} size="middle">
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Enter First Name"
        />
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Enter Last Name"
        />
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Enter Username"
        />
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Enter Email address"
        />
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Enter Mobile number"
        />
        <Input.Password
          status={usernameerr ? "error" : ""}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Enter Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          onBlur={() => {
            if (password.length === 0) {
              setError({
                ...error,
                passworderr: true,
              });
            } else {
              setError({
                ...error,
                passworderr: false,
              });
            }
          }}
          onChange={(e) => {
            if (password.length === 0) {
              setError({ ...error, passworderr: true });
            } else {
              setError({ ...error, passworderr: false });
            }
            setUser({ ...user, password: e.target.value });
          }}
        />
        <Button
          type="link"
          style={{
            width: "100%",
            textAlign: "right",
          }}
          onClick={() => {}}
        >
          Forgot Password ?
        </Button>
        <Button
          type="primary"
          style={{
            width: "100%",
          }}
          onClick={() => {}}
        >
          Signup
        </Button>
        <Typography.Text type="secondary">
          Already a User ?{" "}
          <Typography.Link onClick={() => navigate("/auth/login")}>
            {" "}
            Login{" "}
          </Typography.Link>
        </Typography.Text>
      </Space>
    </Card>
  );
};
export default Signup;
