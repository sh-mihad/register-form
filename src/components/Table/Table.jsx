import { useDispatch, useSelector } from "react-redux";
import { allCheckedAction } from "../../features/formData/formDataSlice";
import TableItem from "./TableItem";

const Table = ({ setEditMode }) => {
  const formData = useSelector((state) => state.formData.initData);
  const dispatch = useDispatch();
  // console.log(formData);

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
  };

  const cellStyle = {
    border: "1px solid #ccc",
    padding: "8px",
  };

  return (
    <div className="mt-5">
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}>
              <input
                type="checkbox"
                checked={
                  formData?.length > 0 &&
                  formData.every((e) => {
                    return e.isSelected;
                  })
                }
                onChange={(e) => dispatch(allCheckedAction(e.target.checked))}
              />
            </th>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Email</th>
            <th style={cellStyle}>Password</th>
            <th style={cellStyle}>Phone</th>
            <th style={cellStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formData?.map((tItem) => (
            <TableItem tItem={tItem} key={tItem.id} setEditMode={setEditMode} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
