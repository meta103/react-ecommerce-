import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//Provider
//Consumer


class ProductProvider extends Component {
  state = {
    products: [],
    detail: detailProduct
  }

  componentDidMount = () => {
    this.setProducts();
  }

  //What?
  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    })
    this.setState({
      products: products
    });
  }

  handleDetail = () => {
    console.log("Hello from detail");

  }

  addToCart = () => {
    console.log("Hello from add to cart");
  }



  render() {
    return (
      <ProductContext.Provider value={{
        //Esto es desestructuracion que nos retorna todo lo que hay en el state:
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }