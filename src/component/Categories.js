import React, { Component } from "react";
import { Menu } from "antd";

export default class Categories extends Component {
  renderCategories(){
    return this.props.categories.map(category=>
      <Menu.Item key={category.id}>
      <span>{category.name}</span>
      </Menu.Item>
      )
  }
  
  render() {
    return (
      <div>
        <Menu selectedKeys={[this.props.selectedId.toString()]} onClick={(e)=>this.props.handleCategoriesIdFunc(e.key)}>
         {this.renderCategories()}
        </Menu>
      </div>
    );
  }
}
