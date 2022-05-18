import React from 'react';
import Form from '../Form/Form'
import { useQuery } from 'react-query';
import Todos from '../Todos/Todos'
const Home = () => {
    const { isLoading, error, data:allTask,refetch } = useQuery('taskData', () =>
     fetch('http://localhost:5000/tasks').then(res =>
       res.json()
     )
   )
 
    return (
        <>
           <Form refetch={refetch}  ></Form>
           <Todos allTask={allTask} ></Todos>
        </>
    );
};

export default Home;