import React, { useState } from "react";
// import "./index.css";
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Input, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
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

  // submit data function
  function submitData() {
    const user_id = 123;
    navigate(`/panel/${user_id}/dashboard`);
  }
  return (
    <Card
      title={"Login "}
      style={{
        width: "60%",
        margin: "auto",
        boxShadow: "2px 2px 2px 2px gray",
      }}
    >
      <Space direction="vertical" style={{ width: "100%" }} size="middle">
        <Input
          status={usernameerr ? "error" : ""}
          placeholder="Enter a username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          onChange={(e) => {
            if (username.length === 0) {
              setError({ ...error, usernameerr: true });
            } else {
              setError({ ...error, usernameerr: false });
            }
            setUser({ ...user, username: e.target.value });
          }}
          onBlur={() => {
            if (username.length === 0) {
              setError({
                ...error,
                usernameerr: true,
              });
            } else {
              setError({
                ...error,
                usernameerr: false,
              });
            }
          }}
        />
        <Input.Password
          status={usernameerr ? "error" : ""}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="input password"
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
          onClick={() => {
            submitData();
          }}
        >
          Login
        </Button>
        <Typography.Text type="secondary">
          New to Us ?{" "}
          <Typography.Link onClick={() => navigate("/auth/signup")}>
            Register
          </Typography.Link>
        </Typography.Text>
      </Space>
    </Card>
  );
};
export default Login;
