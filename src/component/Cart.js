import React, { Component } from "react";
import { Table, Button } from "antd";


export class Cart extends Component {
  render() {
    const columns = [
        {
          title: "Name",
          dataIndex: "product.name"
        },
        {
          title: "Price",
          dataIndex: "product.price"
        },
        {
          title: "Jum nuan",
          dataIndex: "amount"
        },
        {
          title: "Action",
          dataIndex: "",
          render: (text, cartItem) => (
            <Button
              onClick={() => this.props.handleDeleteProductInCart(cartItem.uid)}
            >
              Delete
            </Button>
          )
        }
      ];
    return (
      <div>
        <Table columns={columns} dataSource={this.props.cart} bordered />
      </div>
    );
  }
}

export default Cart;
