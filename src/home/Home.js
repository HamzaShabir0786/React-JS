// import { data } from "../mydata/data";
import TableItem from "../tableItem/TableItem";
import { useState } from "react";
import AddStudent from "../addStudent/AddStudent";
export default function Home() {
  const [studentsData, setStudentsData] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "xyz@example.com",
      rollNo: "234",
    },
    {
      id: 2,
      name: "ali",
      email: "ali@example.com",
      rollNo: "266",
    },
    {
      id: 3,
      name: "hamza",
      email: "hamza@example.com",
      rollNo: "238",
    },
  ]);
  const onClickHandler = (id) => {
    let newData = studentsData.filter((item) => item.id !== id);
    setStudentsData(newData);
  };
  const onAddHandler = (student) => {
    console.log("onAdd", student);
    setStudentsData([...studentsData, student]);
  };

  return (
    <div>
      <h1> Student Data </h1>
      <AddStudent onAddHandler={onAddHandler} />
      <table
        border={9}
        cellPadding={14}
        cellSpacing={2}
        style={{ textAlign: "center", fontFamily: "sans-serif" }}
      >
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Delete</th>
        </tr>

        {studentsData.map((item) => {
          return (
            <>
              <TableItem prop={item} onClickHandler={onClickHandler} />
            </>
          );
        })}
      </table>
    </div>
  );
}
