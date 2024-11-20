import { useState } from "react";
import Button from "../button/Button";
export default function Blog() {
  const [userName, setName] = useState("ali");
  let color = "red";
  
  const Handle = (e) => {
    setName(e.target.value);
  };


  const Handle2 = () => {
    alert("button clicked");
  };

  return (
    <>
      <input placeholder="enter your Name" type="text " onChange={Handle} />
      <h1>Name is :{userName} </h1>
      <h2>Name is :{userName} </h2>
      <h3>Name is :{userName} </h3>
      <h4>Name is :{userName} </h4>
      <h5>Name is :{userName} </h5>
      <h6>Name is :{userName} </h6>
      <Button data={"click me"} />
    </>
  );
}
