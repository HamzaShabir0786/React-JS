export default function TableItem(props) {
  return (
    <>
      <tr>
        <td> {props.prop.id}</td>
        <td> {props.prop.name}</td>
        <td> {props.prop.email}</td>
        <td> {props.prop.class} </td>
        <button
          onClick={() => {
            props.onClickHandler(props.prop.id);
          }}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "1rem",
            fontSize: "1rem",
            // borderRadius: "0rem",
          }}
        >
          click
        </button>
      </tr>
    </>
  );
}
