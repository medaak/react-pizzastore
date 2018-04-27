import React, { Component } from "react";
import BtnProduct from "./BtnProduct.js"

export default class Product extends Component {
  render() {
    return (
      <li id={this.props.details.id}>
        <div className="media">
          <img
            className="d-flex mr-3 img-thumbnail"
            src={this.props.details.image.url}
            width={this.props.size}
            alt="Round pizza yummy"
          />
        <div className="media-body">
          <h5 className="mt-0 product_title">
            {this.props.details.title}
          </h5>
          <p>{this.props.details.description}</p>
          <p>{this.props.details.price} {this.props.details.currency}</p>
          <BtnProduct addToCard={this.props.addOrder} index={this.props.index}></BtnProduct>
        </div>
      </div>
    </li> 
          )
  }
}
