import React from 'react';

import TaskRow from './TaskRow';

const Todos = ({allTask,refetch}) => {
  

  
    return (
        <div className='my-4'>
          <h1>Total: {allTask.length}</h1>
           <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Actions</th>
      <th scope="col">{"   "}</th>
    </tr>
  </thead>
  <tbody>
    {
      allTask.map((task,index)=><TaskRow refetch={refetch} index={index} key={task._id} task={task} ></TaskRow>)
    }
    
  </tbody>
</table> 
        </div>
    );
};

export default Todos;