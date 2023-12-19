import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      productList: [
        {
          id: "1a",
          name: "Samsung",
          avatar: "😍",
        },
        {
          id: "2b",
          name: "Apple",
          avatar: "😎",
        },
        {
          id: "3c",
          name: "Huawei",
          avatar: "😭",
        }
      ],
    };
  }

  render() {
    const list = this.state.productList.map((product) => (
      <ProductItem product={product} key={product.id} />
    ));
    return (
      <div>
        <h1>Product List</h1>
        <div className="product-list">
          {list}
        </div>
      </div>
    );
  }
}
