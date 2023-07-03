import { Button, Card, Form, Input } from "antd";
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

  const formData = [
    {
      label: "Title",
      value: title,
      placeHolder: "Enter Product's Title",
      key: `title`,
    },
    {
      label: "Image",
      value: image,
      placeHolder: "Upload an Image",
      key: `image`,
    },
    {
      label: "Quantity",
      value: quantity,
      placeHolder: "Enter Product's Quantity",
      key: `quantity`,
    },
    {
      label: "Price",
      value: price,
      placeHolder: "Enter Product's Price",
      key: `price`,
    },
    {
      label: "Discount Price",
      value: discount_price,
      placeHolder: "Enter Product's Discount Price",
      key: `discount_price`,
    },
    {
      label: "Category",
      value: category,
      placeHolder: "Enter Product's Category",
      key: `category`,
    },
    {
      label: "Brand",
      value: brand,
      placeHolder: "Enter Product's Brand",
      key: `brand`,
    },
    {
      label: "Description",
      value: description,
      placeHolder: "Enter Product's Description",
      key: `description`,
    },
    {
      label: "Rating",
      value: rating,
      placeHolder: "Enter Product's Rating",
      key: `rating`,
    },
  ];

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
          {formData.map((dataItem: any, index: number) => {
            return (
              <Form.Item
                label={dataItem.label}
                rules={[{ required: true }]}
                key={index}
              >
                <Input
                  value={dataItem.value}
                  onChange={(e: any) =>
                    setUser({ ...user, [dataItem.key]: e.target.value })
                  }
                  placeholder={dataItem.placeHolder}
                />
              </Form.Item>
            );
          })}

          {/* <Form.Item label="Title" rules={[{ required: true }]}>
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
          </Form.Item> */}
        </Form>
      </Card>
    </>
  );
};

export default CreateProduct;
