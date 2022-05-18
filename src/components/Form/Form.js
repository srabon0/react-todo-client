import React from "react";

const Form = () => {
    const handleAddTask = (event)=>{
        event.preventDefault()
        const title = event.target.title.value
        const description = event.target.description.value
        console.log(title,description);

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
