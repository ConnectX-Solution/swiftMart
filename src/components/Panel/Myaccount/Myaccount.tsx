import { Button, Card, Form, Input, Space, Typography } from "antd";
import React from "react";

const Myaccount = () => {
  return (
    <div>
      <Card
        title={"SETUP YOUR ACCOUNT:"}
        style={{ maxWidth: 900, margin: "auto" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
          <Card title="Basic Info">
            <Typography.Text strong>Name: MD EJAZ ALAM</Typography.Text>
            <br />
            <Typography.Text strong>
              Email: kingejaz143@gmail.com
            </Typography.Text>
          </Card>
          <Card title="Change Password:">
            <Form
              style={{
                maxWidth: 800,
                maxHeight: 500,
                overflow: "auto",
                margin: "auto",
              }}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="vertical"
            >
              <Form.Item
                label="Old Password"
                name="old_password"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter old password" />
              </Form.Item>
              <Form.Item
                label="New Password"
                name="new_password"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter new password" />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="confirm_password"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter confirm password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary">set new password</Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default Myaccount;
