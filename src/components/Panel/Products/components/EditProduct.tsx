import { Button, Card, Form, Input } from "antd";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const EditProduct = () => {
  const {
    state: { pre_editdata },
  } = useLocation();
  // console.log("preeditdata:", pre_editdata);
  const {
    rest: {
      brand,
      discount_price,
      image,
      price,
      quantity,
      rating,
      title,
      category,
      description,
    },
  } = pre_editdata;

  const [user, setUser] = useState<any>({
    brand: brand,
    price: price,
    image: image,
    quantity: quantity,
    rating: rating,
    title: title,
    description: description,
    category: category,
    discount_price: discount_price,
  });

  console.log("user:", user);

  return (
    <>
      <Card
        title={"Edit Product:"}
        extra={<Button type="primary">Edit</Button>}
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
              placeholder="Enter product's Title"
              value={user.title}
              onChange={(e: any) => setUser({ ...user, title: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Image" rules={[{ required: true }]}>
            <Input
              placeholder="Upload an image"
              value={user.image}
              onChange={(e: any) => setUser({ ...user, image: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Quantity" rules={[{ required: true }]}>
            <Input
              onChange={(e: any) => setUser({ ...user, quantity: e })}
              value={user.quantity}
              placeholder="Enter product's quantity"
            />
          </Form.Item>
          <Form.Item label="Price" rules={[{ required: true }]}>
            <Input
              onChange={(e: any) => setUser({ ...user, price: e })}
              value={user.price}
              placeholder="Enter product's Price"
            />
          </Form.Item>
          <Form.Item label="Discount Price" rules={[{ required: true }]}>
            <Input
              onChange={(e: any) => setUser({ ...user, discount_price: e })}
              value={user.discount_price}
              placeholder="Enter product's discount price"
            />
          </Form.Item>
          <Form.Item label="Category" rules={[{ required: true }]}>
            <Input
              onChange={(e: any) => setUser({ ...user, category: e })}
              value={user.category}
              placeholder="Enter product's category"
            />
          </Form.Item>
          <Form.Item label="Brand" rules={[{ required: true }]}>
            <Input
              onChange={(e: any) => setUser({ ...user, brand: e })}
              value={user.brand}
              placeholder="Enter product's brand"
            />
          </Form.Item>
          <Form.Item label="Description" rules={[{ required: true }]}>
            <Input
              onChange={(e: any) => setUser({ ...user, description: e })}
              value={user.description}
              placeholder="Enter product's description"
            />
          </Form.Item>
          <Form.Item label="Rating" rules={[{ required: true }]}>
            <Input
              onChange={(e: any) => setUser({ ...user, rating: e })}
              value={user.rating}
              placeholder="Enter product's rating"
            />
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default EditProduct;
