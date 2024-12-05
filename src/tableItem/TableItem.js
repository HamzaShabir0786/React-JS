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
          className="bg-pink-300 font-bold p-2 rounded-md hover:bg-pink-500"
        >
          Delete
        </button>
        <button className="bg-pink-300 font-bold p-2 rounded-md  hover:bg-pink-500">
          Update
        </button>
      </tr>
    </>
  );
}
