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
          status:"undone"
          
        }
        fetch("http://localhost:5000/addtask",{
          method:"POST",
          headers:{
            "content-type":"application/json"
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
      <div class="mb-3">
        <label class="form-label">Task Title</label>
        <input type="text" class="form-control" name="title" />
      </div>
      <div class="mb-3">
        <label class="form-label">Task Description</label>
        <textarea
          rows="3"
          name="description"
          type="text"
          class="form-control"
        />
      </div>

      <input type="submit" class="btn btn-primary"  value="Add task" />
        
      
    </form>
  );
};

export default Form;
