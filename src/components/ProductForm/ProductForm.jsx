import React from 'react'
import { Button, Form, Input} from 'antd';
import { createProduct } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

export const ProductForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm()
  
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(createProduct(values))
    form.resetFields()
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input Product Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input Product Price!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};