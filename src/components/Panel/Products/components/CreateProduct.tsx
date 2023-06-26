import { Button, Card, Form, Input } from "antd";
import { title } from "process";
import React, { useState } from "react";

const CreateProduct = () => {
  const [user, setUser] = useState<any>({
    brand: "",
    price: 0,
    image: "",
    quantity: 0,
    rating: 0,
    title: "",
    discount_price: 0,
    category: "",
    description: "",
  });

  const {
    brand,
    price,
    image,
    quantity,
    rating,
    title,
    discount_price,
    category,
    description,
  } = user;

  console.log("user:", user);
  return (
    <>
      <Card
        title={"Create your product"}
        extra={<Button type="primary">Upload</Button>}
        style={{ maxWidth: 900, margin: "auto" }}
      >
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
          <Form.Item label="Title" rules={[{ required: true }]}>
            <Input
              value={title}
              onChange={(e: any) => setUser({ ...user, title: e })}
              placeholder="Enter product's Title"
            />
          </Form.Item>
          <Form.Item label="Image" rules={[{ required: true }]}>
            <Input
              value={image}
              onChange={(e: any) => setUser({ ...user, image: e })}
              placeholder="Upload an image"
            />
          </Form.Item>
          <Form.Item label="Quantity" rules={[{ required: true }]}>
            <Input
              value={quantity}
              onChange={(e: any) => setUser({ ...user, quantity: e })}
              placeholder="Enter product's quantity"
            />
          </Form.Item>
          <Form.Item label="Price" rules={[{ required: true }]}>
            <Input
              value={price}
              onChange={(e: any) => setUser({ ...user, price: e })}
              placeholder="Enter product's Price"
            />
          </Form.Item>
          <Form.Item label="Discount Price" rules={[{ required: true }]}>
            <Input
              value={discount_price}
              onChange={(e: any) => setUser(e)}
              placeholder="Enter product's discount price"
            />
          </Form.Item>
          <Form.Item label="Category" rules={[{ required: true }]}>
            <Input
              value={category}
              onChange={(e: any) => setUser({ ...user, category: e })}
              placeholder="Enter product's category"
            />
          </Form.Item>
          <Form.Item label="Brand" rules={[{ required: true }]}>
            <Input
              value={brand}
              onChange={(e: any) => setUser({ ...user, brand: e })}
              placeholder="Enter product's brand"
            />
          </Form.Item>
          <Form.Item label="Description" rules={[{ required: true }]}>
            <Input
              value={description}
              onChange={(e: any) => setUser({ ...user, description: e })}
              placeholder="Enter product's description"
            />
          </Form.Item>
          <Form.Item label="Rating" rules={[{ required: true }]}>
            <Input
              value={rating}
              onChange={(e: any) => setUser({ ...user, rating: e })}
              placeholder="Enter product's rating"
            />
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default CreateProduct;
