import {
  FilterFilled,
  MoreOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Modal,
  Popconfirm,
  Popover,
  Row,
  Select,
  Space,
  Table,
} from "antd";
import Search from "antd/es/input/Search";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Order = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [isModalopen, setIsmodalopen] = useState<boolean>(false);
  const { uId } = useParams();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const popoverContent = () => {
    return (
      <>
        <Space direction="vertical">
          <Button
            type="primary"
            onClick={() =>
              navigate(`/panel/${uId}/order/vieworder`, {
                state: { path: "order/vieworder" },
              })
            }
          >
            View
          </Button>
          <Button type="primary" onClick={() => setIsmodalopen(true)}>
            update status
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
          {/* modal for update status  */}
          <Modal
            title="Update the status of Order:"
            open={isModalopen}
            okText="update"
            onOk={() => {
              console.log("okkkk..");
              setIsmodalopen(false);
            }}
            onCancel={() => {
              setIsmodalopen(false);
            }}
          >
            <div>
              <Card>
                <Select
                  defaultValue="done"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={[
                    { value: "failed", label: "failed" },
                    { value: "done", label: "done" },
                    { value: "pending", label: "pending" },
                    { value: "shipping", label: "shipping" },
                  ]}
                />
              </Card>
            </div>
          </Modal>
        </Space>
      </>
    );
  };

  const createPopover = () => {
    return (
      <>
        <Popover trigger={"hover"} content={popoverContent} placement="left">
          <Button icon={<MoreOutlined />} />
        </Popover>
      </>
    );
  };
  const columns: any = [
    {
      title: "Full Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Age",
      width: 100,
      dataIndex: "age",
      key: "age",
      fixed: "left",
    },
    {
      title: "Column 1",
      dataIndex: "address",
      key: "1",
      width: 150,
    },
    {
      title: "Column 2",
      dataIndex: "address",
      key: "2",
      width: 150,
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => createPopover(),
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  return (
    <>
      <Space size={4} direction="vertical">
        {/* produc search and filter  */}
        <Card>
          <Space direction="horizontal">
            <Search
              placeholder="Search by ProductId or product name"
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
              <Form layout="vertical" hideRequiredMark>
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
                      name="Email"
                      label="Name"
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
            pagination={false}
          />
        </Card>
      </Space>
    </>
  );
};

export default Order;
