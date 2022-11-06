import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProduct = () => {
    const { data, viewDetail } = this.props;
    return data.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductItem item={item} viewDetail={viewDetail} />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="row">{this.renderProduct()}</div>
      </div>
    );
  }
}
