import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return (
      <div>
        <div className="card text-left" style={{ width: 350 }}>
          <img
            style={{ width: "150px" }}
            className="card-img-top"
            src={this.props.dataProductItem.image}
            alt={this.props.dataProductItem.image}
          />
          <div className="card-body">
            <h4 className="card-title">{this.props.dataProductItem.name}</h4>
            <p className="card-text">{this.props.dataProductItem.price}</p>
            <button className="btn btn-dark text-white w3-button w3-black">
              {" "}
              Add to card<i class="fa fa-cart-arrow-down"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
