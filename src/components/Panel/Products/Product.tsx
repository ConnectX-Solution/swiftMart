import {
  Button,
  Card,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Popconfirm,
  Popover,
  Row,
  Select,
  Space,
} from "antd";
import React, { useState } from "react";
import { Table } from "antd";
import "./product.css";
import Search from "antd/es/input/Search";
import {
  FilterFilled,
  MoreOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Option } from "antd/es/mentions";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const { uId } = useParams();

  const popoverContent = (e: any) => {
    return (
      <>
        <Space direction="vertical">
          <Button
            type="primary"
            onClick={() => {
              const { ...rest } = e;
              navigate(`/panel/${uId}/product/editproduct`, {
                state: { path: "product/editproduct", pre_editdata: { rest } },
              });
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this product?"
            description="delete the product"
            placement="bottomRight"
            okText="delete"
            okType="danger"
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            onConfirm={() => console.log("yes....")}
            onCancel={() => console.log("no....")}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      </>
    );
  };

  const createPopover = (e: any) => {
    return (
      <>
        <Popover trigger={"hover"} content={popoverContent(e)} placement="left">
          <Button icon={<MoreOutlined />} />
        </Popover>
      </>
    );
  };
  const columns: any = [
    {
      title: "Title",
      width: 100,
      dataIndex: "title",
      key: "title",
      fixed: "left",
    },
    {
      title: "Image",
      width: 150,
      dataIndex: "image",
      key: "image",
      fixed: "left",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 100,
    },
    {
      title: "Discount Price",
      dataIndex: "discount_price",
      key: "discount_price",
      width: 100,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      width: 100,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      width: 100,
    },
    {
      title: "Qunatity",
      dataIndex: "quantity",
      key: "quantity",
      width: 100,
    },

    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (e: any) => createPopover(e),
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      title: `title ${i}`,
      image: `image ${i}`,
      price: `price ${i}`,
      discount_price: `discount_price ${i}`,
      brand: `brand ${i}`,
      rating: `rating ${i}`,
      quantity: `quantity ${i}`,
    });
  }
  return (
    <>
      <Space size={4} direction="vertical">
        {/* produc search and filter  */}
        <Card>
          <Space direction="horizontal">
            <Search
              placeholder="Search by Title or Brand"
              allowClear
              enterButton="Search"
              size="large"
              // onSearch={onSearch}
            />
            <Button type="primary" onClick={showDrawer} icon={<FilterFilled />}>
              More Filter
            </Button>
            {/* more filter drawer  */}
            <Drawer
              title="More filter"
              width={400}
              onClose={onClose}
              open={open}
              bodyStyle={{
                paddingBottom: 80,
              }}
              extra={
                <Space>
                  <Button onClick={onClose}>Reset</Button>
                  <Button onClick={onClose} type="primary">
                    Apply
                  </Button>
                </Space>
              }
            >
              <Form layout="vertical">
                <Row gutter={16}>
                  <Col>
                    <Form.Item
                      name="name"
                      label="Name"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input placeholder="Please enter user name" />
                    </Form.Item>
                    <Form.Item
                      name="Select steps"
                      label="Select steps"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Select placeholder="Please select steps">
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="Date"
                      label="Date"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <DatePicker.RangePicker
                        style={{
                          width: "100%",
                        }}
                        // getPopupContainer={(trigger) => trigger.parentElement}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Drawer>
            <Button
              type="primary"
              onClick={() =>
                navigate("/panel/123/product/createproduct", {
                  state: { path: "dashboard/createproduct" },
                })
              }
            >
              Create product
            </Button>
          </Space>
        </Card>

        {/* prouduct grid  */}
        <Card>
          <Table
            columns={columns}
            dataSource={data}
            scroll={{
              y: 400,
              x: 300,
            }}
          />
        </Card>
      </Space>
    </>
  );
};

export default Product;
