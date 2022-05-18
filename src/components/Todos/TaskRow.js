import React from "react";

const TaskRow = ({task,index}) => {
    const {_id, title,description} = task
  return (
    <tr>
      <th scope="row">{index+1}</th>

      <td>{title}</td>
      <td>{description}</td>
      <td>
        <button className="btn btn-sm"> Delete </button>
      </td>
      <td>
        <button className="btn btn-sm"> Complete Task </button>
      </td>
    </tr>
  );
};

export default TaskRow;
