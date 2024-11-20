import { useState } from "react";

export default function AddStudent(props) {
  const [names, setNames] = useState();
  const [email, setEmail] = useState();
  const [RollNo, setRollNo] = useState();
  const onClickHandler = () => {
    console.log("Name: ", names);
    console.log("Email: ", email);
    console.log("Roll No: ", RollNo);
    let data = {
      name: names,
      email: email,
      rollNo: RollNo,
    };
  };
  props.onClickHandler(data);

  return (
    <div
      style={{ backgroundColor: "darkblue", color: "white", padding: "1rem" }}
    >
      <h1> Heloo I am here</h1>
      <input
        onChange={(e) => setNames(e.target.value)}
        type="text"
        placeholder="Enter your name"
      ></input>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter your Email"
      ></input>
      <input
        onChange={(e) => setRollNo(e.target.value)}
        type="text"
        placeholder="Enter your RollNO"
      ></input>

      <button
        onClick={onClickHandler}
        style={{ backgroundColor: "darkgreen", color: "white" }}
      >
        Submit
      </button>
    </div>
  );
}
