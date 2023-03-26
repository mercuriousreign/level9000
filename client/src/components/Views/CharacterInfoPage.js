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
    <div>
      <Card cover={<img src={plan.img} />} style={{ justifyContent: "center" }}>
        <h1 style={{ textAlign: "center" }}>{plan.name}</h1>
      </Card>
      <div>
        <Descriptions title={plan.name} bordered>
          <Descriptions.Item label="Info">
            <p>{plan.description}</p>{" "}
          </Descriptions.Item>
          <Descriptions.Item label="Likes">
            <p>Likes : {counter}</p>
            <Button onClick={handleLike}>Like me!</Button>
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
}
