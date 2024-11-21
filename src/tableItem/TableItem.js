export default function TableItem(props) {
  return (
    <>
      <tr>
        <td> {props.prop.id}</td>
        <td> {props.prop.name}</td>
        <td> {props.prop.email}</td>

        <button
          onClick={() => {
            props.onClickHandler(props.prop.id);
          }}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "1rem",
            fontSize: "1rem",
            cursor: "pointer",
            // borderRadius: "0rem",
          }}
        >
          Delete
        </button>
      </tr>
    </>
  );
}
