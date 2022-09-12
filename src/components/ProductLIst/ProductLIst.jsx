import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';

import { Avatar, List, Button, Modal, Form} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import {fetchProducts, setEditProduct, SetModalType, togglingModal} from './../../store/actions'
import { ProductForm } from '../ProductForm/ProductForm';
import { deleteProduct } from './../../store/actions';


export const ProductLIst = (props) => {
    const dispatch = useDispatch()
    const products = useSelector((store) => store.products)
    const productsLoading = useSelector((store) => store.productsLoading)
    const isModalOpen = useSelector((store) => store.isModalOpen)
    const editingProduct = useSelector((store) => store.EditingProduct)
    const modalType = useSelector((store) => store.isModalToEdit)
    const [form] = Form.useForm()
    
    useEffect(() => {
      dispatch(fetchProducts())
    }, [])
    
    const deleteProd = (id) => {
      dispatch(deleteProduct(id))
      console.log('delete item', id)
    }
    const showModal = () => {
      dispatch(togglingModal(true))
    }
    const closeModal = () => {
      dispatch(togglingModal(false))
      dispatch(setEditProduct(null))
      form.resetFields()
    }
    const openEditPanel = (item) => {
      dispatch(SetModalType('Edit existing product'))
      dispatch(setEditProduct(item))
      showModal(true)
    }
    
  return (
    <div>
        <Modal
          open={isModalOpen}
          title={modalTypeg}
          footer={false}
          onCancel={closeModal}
          getContainer={false}
        >
          <ProductForm form={form}/>
        </Modal>
        <Button type='primary' onClick={showModal} shape='round'>Open form</Button>
        <h1>product List</h1>
        <List
            loading={productsLoading}
            itemLayout="horizontal"
            dataSource={products}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="item.image" />}
                        title={<a href="https://ant.design">{item.name}</a>}
                        description={<div>{item.price}</div>}
                    />
                    <Button onClick={() => openEditPanel(item)} type="primary" shape="round" icon={<EditOutlined />} ></Button>
                    <Button onClick={() => deleteProd(item.id)} type="primary" shape="round" icon={<DeleteOutlined />} ></Button>
                </List.Item>
            )}
        />
    </div>
  )
}

