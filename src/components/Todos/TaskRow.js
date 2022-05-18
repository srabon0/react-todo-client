import React from "react";
import { toast } from "react-toastify";

const TaskRow = ({ task, index, refetch }) => {
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure ? you want to delete this task"
    );
    if (proceed) {
      const url = `https://still-falls-78959.herokuapp.com/delete/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization:`Bearer ${localStorage.getItem('accessToken')}`
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast("Task deleted");
            refetch();
          }else{
              toast.error("cant delete the task")
          }
        });
    }
  };

  const taskComplete=(id)=>{
      
    const url = `https://still-falls-78959.herokuapp.com/done/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization:`Bearer ${localStorage.getItem('accessToken')}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast("Task completed");
          refetch();
        }else{
            toast.error("Operation failed")
        }
      });
      
  }
  const { _id, title, description,status } = task;
  return (
    <tr className={status? "text-decoration-line-through text-success": "text-primary" }>
      <th scope="row">{index + 1}</th>

      <td>{title}</td>
      <td>{description}</td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-danger">
          {" "}
          Delete{" "}
        </button>
      </td>
      <td>
        <button onClick={()=>taskComplete(_id)} className="btn btn-sm btn-success"> Complete Task </button>
      </td>
    </tr>
  );
};

export default TaskRow;
