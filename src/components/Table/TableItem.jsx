import { useDispatch } from "react-redux";
import {
  changePassword,
  checkedAction,
  removeData,
} from "../../features/formData/formDataSlice";

// eslint-disable-next-line react/prop-types
const TableItem = ({ tItem, setEditMode }) => {
  // console.log(tItem);
  const { id, fullName, email, password, phoneNumber, isSelected } =
    tItem || {};

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeData(id));
  };
  const cellStyle = {
    border: "1px solid #ccc",
    padding: "8px",
  };
  const buttonStyle = {
    cursor: "pointer",
    backgroundColor: "#f1f1f1",
    border: "1px solid #ccc",
    padding: "5px 10px",
    borderRadius: "4px",
  };
  return (
    <tr>
      <td style={cellStyle}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => dispatch(checkedAction(id))}
        />
      </td>
      <td style={cellStyle}>{fullName}</td>
      <td style={cellStyle}>{email}</td>
      <td style={cellStyle}>
        <input
          type="text"
          value={password}
          className="border"
          onChange={(e) =>
            dispatch(changePassword({ value: e.target.value, id }))
          }
          name=""
          id=""
        />
      </td>
      <td style={cellStyle}>{phoneNumber}</td>
      <td style={cellStyle}>
        <button
          style={buttonStyle}
          onClick={() => {
            setEditMode(tItem);
          }}
        >
          Edit
        </button>{" "}
        <button style={buttonStyle} onClick={() => handleDelete(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
