import { Button, Card, Descriptions } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CharacterInfoPage(props) {
  const { plan } = props;
  const [counter, setCounter] = useState();

  function fetchCounter() {
    axios.get(`http://localhost:3000/plans/${plan.id}`).then((response) => {
      setCounter(response.data.plan.likes);
    });
  }

  useEffect(() => {
    fetchCounter();
  }, []);

  function handleLike() {
    axios
      .post(`http://localhost:3000/plans/likes/${plan.id}`)
      .then((response) => {
        setCounter(response.data.plan.likes);
      });
    console.log("change here");
  }

  return (
    <div style={{ display: "flex", paddingBottom: "450px" }}>
      <Card cover={<img src={plan.img} />} style={{ justifyContent: "center" }}>
        <h1 style={{ textAlign: "center" }}>{plan.name}</h1>
      </Card>

      <div
        style={{
          marginLeft: "3%",
          marginRight: "3%",
        }}
      >
        <Card>
          <Descriptions
            style={{ backgroundColor: "#ffa5002e" }}
            layout="vertical"
            bordered
          >
            <Descriptions.Item
              labelStyle={{
                color: "orange",
                fontWeight: "bold",
                backgroundColor: "black",
              }}
              label="Character Information"
            >
              <p>{plan.description}</p>{" "}
            </Descriptions.Item>
            <Descriptions.Item
              labelStyle={{
                color: "orange",
                fontWeight: "bold",
                backgroundColor: "black",
              }}
              label="Likes"
            >
              <h1>{counter}</h1>
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </div>
    </div>
  );
}
