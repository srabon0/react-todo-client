import React from "react";

const TaskRow = ({task,index,refetch}) => {
    const handleDelete = (id)=>{
        const proceed = window.confirm("Are you sure ? you want to delete this task")
        if(proceed){
            const url = `http://localhost:5000/delete/${id}`
        fetch(url,{
            method:"DELETE",
            headers:{
                "content-type":"application/json",

            },

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            refetch()
            
        })
        }
    }
    const {_id, title,description} = task
  return (
    <tr>
      <th scope="row">{index+1}</th>

      <td>{title}</td>
      <td>{description}</td>
      <td>
        <button onClick={()=>handleDelete(_id)} className="btn btn-sm"> Delete </button>
      </td>
      <td>
        <button className="btn btn-sm"> Complete Task </button>
      </td>
    </tr>
  );
};

export default TaskRow;
