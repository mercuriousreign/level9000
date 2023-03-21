import React from "react";
import { Card , Button } from "antd";

export default function CharacterCardItem (props) {
  
  return (
    <div>
      <Card hoverable
    style={{
      width: 400,
    }}
    
    cover={<img src={props.img}></img>}
    
    >
      <h1>{props.name}</h1>
      <p>Muscle target : {props.muscle}</p>
      <p>{props.description}</p>
      <ul>
      <Button>Add to regiment</Button>
      <Button>Start this exercise</Button>
      </ul>
      </Card>
    </div>
  
  )
}