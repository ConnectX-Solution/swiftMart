import { Button, Card, Space, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const ViewOrder = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Card
        title={"Order Information:"}
        extra={
          <Button type="primary" onClick={() => navigate(-1)}>
            Back
          </Button>
        }
        style={{ maxWidth: 900, margin: "auto" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
          <Card title="Product Info">
            <Space size={"middle"} direction="vertical">
              <Typography.Text strong>product id: 3213215614</Typography.Text>
              <Typography.Text strong>product's brand: joya</Typography.Text>
            </Space>
          </Card>
          <Card title="Customer Info">
            <Space size={"middle"} direction="vertical">
              <Typography.Text strong> customer name: ejaz</Typography.Text>
              <Typography.Text strong>customer id: 35463565 </Typography.Text>
            </Space>
          </Card>
          <Card title="Shipping Info">
            <Space size={"middle"} direction="vertical">
              <Typography.Text strong>pincode: 5455289</Typography.Text>
              <Typography.Text strong>
                address: Lekhraj Market , sanjaygandhipuram , lucknow , U.P
              </Typography.Text>
            </Space>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default ViewOrder;
