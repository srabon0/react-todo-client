import React from 'react';

const Form = () => {
    return (
        <form>
  <div class="mb-3">
    <label  class="form-label">Task Title</label>
    <input type="text" class="form-control" name="title" />
    
  </div>
  <div class="mb-3">
    <label  class="form-label">Task Description</label>
    <textarea rows="3" name="description" type="text" class="form-control"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    );
};

export default Form;