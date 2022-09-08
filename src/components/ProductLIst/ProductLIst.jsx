import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Avatar, List } from 'antd';
import {fetchProducts} from './../../store/actions'
import ProductForm from '../ProductForm/ProductForm';

function ProductLIst(props) {
    const dispatch = useDispatch()
    const products = useSelector((store) => store.products)
    const productsLoading = useSelector((store) => store.productsLoading)
    useEffect(() => {
      dispatch(fetchProducts())
    }, [])
    

  return (
    <div>
        <ProductForm />
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
                </List.Item>
            )}
        />
    </div>
  )
}

export default ProductLIst
