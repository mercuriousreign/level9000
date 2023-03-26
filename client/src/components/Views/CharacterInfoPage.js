import { Button } from "antd"

export default function characterInfoPage (props) {
  const {plan} = props

  function handleLike(){
    


  }

  return (
    <div>
    <h1>{plan.name}</h1>
      <p>{plan.description}</p>
      <Button onClick={handleLike}>Like me!</Button>
      </div>
  )

}