import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { addTodo, updateTodo, updateTask } from "../Action";

import { connect } from "react-redux";
const ListView = (props) => {
  const [updateTodo, setUpdateTodo] = useState({});
  console.log(updateTodo, "0");
  const datas = props.data;
  console.log(datas, "1");
  const todo = datas.filter((todos) => todos.status === "TODO");
  const in_progress = datas.filter((todos) => todos.status === "IN PROGRESS");
  const done = datas.filter((todos) => todos.status === "DONE");
const history = useNavigate()
  // console.log(datas)

  function handleUpdate(){
    props.updateTask(updateTodo)
  }
 

  return (
    <>
      <div>
      <Link to={{ pathname: "/update", aboutProps: { updateTodo } }}>
          <Button variant="success" className="update" onClick={handleUpdate}  disabled={!todo[0] && !in_progress[0]} style={{marginTop: "2rem"}}>
            Update
          </Button>&nbsp;
        </Link>
        <Link to="/create">
          <Button variant="success" className="create" style={{marginTop: "2rem"}}>
            Create
          </Button>
        </Link>
      </div>
      <br />
      <div className="list">
        <div className="todo">
          <h4 className="head-text">ToDo</h4>
          {todo.map((todos) => {
            return (
              <ListGroup key={todos.id}>
                <ListGroup.Item action onClick={() => setUpdateTodo(todos)}>{todos.title}</ListGroup.Item>
              </ListGroup>
            );
          })}
        </div>
        <div className="inProgress">
          <h4 className="head-text">In Progress</h4>
          {in_progress.map((todos) => {
            return (
              <ListGroup key={todos.id}>
                <ListGroup.Item action onClick={() => setUpdateTodo(todos)}>{todos.title}</ListGroup.Item>
              </ListGroup>
            );
          })}
        </div>
        <div className="done">
          <h2 className="head-text">Done</h2>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.todoReducer,
  };
};

const mapDispatchtoProps = {
  addTodo,
  updateTask,
};

export default connect(mapStateToProps, mapDispatchtoProps)(ListView);
