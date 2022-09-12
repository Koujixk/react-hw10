import React, {useEffect} from 'react'
import { Button, Form, Input} from 'antd';
import { createProduct, putEditedProduct, setEditProduct, SetModalType } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

export const ProductForm = (props) => {
  const {form} = props
  const dispatch = useDispatch();
  const editingProduct = useSelector((store) => store.editingProduct)
  const modalType = useSelector((store) => store.isModalToEdit)
  
  const onFinish = (values) => {
    if(editingProduct){
      console.log('onfinishset', values)
      dispatch(putEditedProduct(editingProduct.id, values))
      dispatch(setEditProduct(null))

    }else{
      dispatch(createProduct(values))
    }
    form.resetFields()
    dispatch(SetModalType(false))
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (!editingProduct) return
    form.setFieldsValue(editingProduct)
    console.log('useEffect',)
  }, [form, editingProduct])
  

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