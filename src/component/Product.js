import React, { Component } from "react";
import { Card,Row,Button,Typography} from "antd";
//import Text from 'antd/lib/typography/Text'

export default class Product extends Component {
        
  render() {
      const product = this.props.productDetail;
      const { Text } = Typography;
    return (
      <Card hoverable cover={<img src={product.image}/>}>
          <h4 style={{ height: '120px'}}> {product.name} </h4>
          <p style={{height:'250px', overflowY: 'scroll'}}> {product.description} </p>
          <Row>
              <Text code>{product.price}Baht</Text>              
              <Button onClick={()=>this.props.handleClickAddToCart(product)} >Add to cart</Button>
          </Row>
          
      </Card>
    );
  }
}
  