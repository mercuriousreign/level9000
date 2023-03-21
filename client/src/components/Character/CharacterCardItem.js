import React from "react";
import { Card } from "antd";

export default function CharacterCardItem (props) {
  
  return (
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={props.img} />}
  >
    <Meta title={props.name} description={props.description} />
    </Card>
  )
}