import { data } from "../mydata/data";
import TableItem from "../tableItem/TableItem";
export default function Home() {
  const onClickHandler = (id) => {
    alert(`ID number is ${id}`);
  };
  return (
    <div>
      <h1> Student Data </h1>
      <table
        border={9}
        cellPadding={14}
        cellSpacing={2}
        style={{ textAlign: "center", fontFamily: "sans-serif" }}
      >
        <tr>
          <th>Name</th>
          <th>Roll Number</th>
          <th>Email</th>
          <th colSpan={2}>class</th>
        </tr>

        {data.map((item) => {
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
