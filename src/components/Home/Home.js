import React from "react";
import Form from "../Form/Form";
import { useQuery } from "react-query";
import Todos from "../Todos/Todos";
const Home = () => {
  const {
    isLoading,
    error,
    data: allTask,
    refetch,
  } = useQuery("taskData", () =>
    fetch("https://still-falls-78959.herokuapp.com/tasks",{
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json())
  );
  if (isLoading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <Form refetch={refetch}></Form>
      <Todos allTask={allTask} refetch={refetch}></Todos>
    </>
  );
};

export default Home;
