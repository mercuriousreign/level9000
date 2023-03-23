// import React, { useState } from "react";
// import "./CardListItem.css";

// export default function CardListItem(props) {
//   const { name, img, exercise } = props;
//   console.log("excercise props here", exercise);
//   //console.log("props inside with decons", name, img);
//   //Props in here are id, name, description and also image
//   return (
//     <div>
//       <h2 className="">{name}</h2>
//       <h2 className="">{}</h2>
//       <img className="" src={img} />

//       <h3>{exercise[0].name}</h3>
//       <p>{exercise[0].instructions}</p>
//       <h3>{exercise[1].name}</h3>
//       <p>{exercise[1].instructions}</p>
//       <h3>{exercise[2].name}</h3>
//       <p>{exercise[2].instructions}</p>
//       <h3>{exercise[3].name}</h3>
//       <p>{exercise[3].instructions}</p>
//       <h3>{exercise[4].name}</h3>
//       <p>{exercise[4].instructions}</p>
//       <h3>{exercise[5].name}</h3>
//       <p>{exercise[5].instructions}</p>
//     </div>
//   );
// }

import React from "react";
import "./CardListItem.css";
import Button from "./Button";
// import { Collapse , Card as CardM } from "@mui/material";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { Collapse } from "antd";

export default function CardListItem(props) {
  const { user, setUser, id, name, img, exercise, onSelect, isSelected } = props;
  // console.log("exercise props here", exercise);

  const exerciseList = exercise.map((e, index) => (
    <div key={index}>
      <h3>{e.name}</h3>
      <p>{e.instructions}</p>
    </div>
  ));

  return (
    <div>
      <h2 className="">{name}</h2>
      <Collapse>
      <CollapsePanel header="Exercises">
      {exerciseList}
      <Button user={user} setUser={setUser} id={id} plan={name} selected={isSelected} onSelect={onSelect} />
      </CollapsePanel>
      </Collapse>
      
    </div>
  );
}
