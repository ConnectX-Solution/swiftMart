import { Card, Col, Row, Typography } from "antd";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div>
        <Card>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Card title="Product Details:" style={{ width: "80%" }}>
                <Typography.Text strong> Total products: 55</Typography.Text>
              </Card>
            </Col>
            <Col className="gutter-row" span={12}>
              <Card title="Order Details:" style={{ width: "80%" }}>
                <Typography.Text strong> Total orders: 55</Typography.Text>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
