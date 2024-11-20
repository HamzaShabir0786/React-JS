export default function Button(props) {
  return (
    <button
      style={{
        backgroundColor: "black",
        width: "9rem",
        height: "3rem",
        color: "white",
        borderRadius: "20px",
        fontSize: "1.5rem",
        cursor: "pointer",
      }}
    >
      {props.data}
    </button>
  );
}
