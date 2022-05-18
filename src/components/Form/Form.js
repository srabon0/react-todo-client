import React from "react";
import { toast } from 'react-toastify';
const Form = ({refetch}) => {
    const handleAddTask = (event)=>{
        event.preventDefault()
        const title = event.target.title.value
        const description = event.target.description.value
        const task = {
          title:title,
          description:description,
          email:"srabonemam4@gmail.com",
         
          
        }
        fetch("https://still-falls-78959.herokuapp.com/addtask",{
          method:"POST",
          headers:{
            "content-type":"application/json",
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
          },
          body:JSON.stringify(task)
  
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            toast.success("Task Added Successfull")
            event.target.reset()
            refetch()
            
            

          }else{
            toast.error("Operation Failed")
          }
         
        })
        

    }

  return (
    <form onSubmit={handleAddTask}>
      <div className="mb-3">
        <label className="form-label">Task Title</label>
        <input type="text" className="form-control" name="title" />
      </div>
      <div className="mb-3">
        <label className="form-label">Task Description</label>
        <textarea
          rows="3"
          name="description"
          type="text"
          className="form-control"
        />
      </div>

      <input type="submit" className="btn btn-primary"  value="Add task" />
        
      
    </form>
  );
};

export default Form;
