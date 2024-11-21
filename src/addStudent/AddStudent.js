import { useState } from "react";
import * as yup from "yup";
export default function AddStudent(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  let schema = yup.object.shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    id: yup.number().required(),
  });
  async function AddHandler() {
    let data = {
      name: name,
      id: id,
      email: email,
    };
    try {
      let result = await schema.validate(data);
      props.onAddHandler(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      style={{
        backgroundColor: "darkblue",
        padding: ".4rem",
        display: "inline-block",
      }}
    >
      <input
        onChange={(e) => setId(e.target.value)}
        style={{ padding: ".4rem" }}
        type="text"
        placeholder="Enter your ID"
      ></input>
      <input
        onChange={(e) => setName(e.target.value)}
        style={{ padding: ".4rem" }}
        type="text "
        placeholder="Enter your name"
      ></input>
      <input
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: ".4rem" }}
        type="text "
        placeholder="Enter your Email"
      ></input>

      <br></br>
      <button
        onClick={AddHandler}
        style={{ padding: ".4rem", marginTop: ".5rem", fontWeight: "800" }}
      >
        AddStudent
      </button>
    </div>
  );
}
