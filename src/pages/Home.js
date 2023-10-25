import React from 'react'
import Navbar from '../features/navbar/Navbar'
import { ProductList } from '../features/productList/produtList'
import LoginPage from './LoginPage'

const Home = () => {
  return (
    <>
    <Navbar>
        <ProductList></ProductList>
        {/* <LoginPage/> */}
    </Navbar>
    </>
  )
}

export default Home