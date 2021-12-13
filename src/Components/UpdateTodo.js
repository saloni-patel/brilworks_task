import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo, updateTodo } from "../Action";

const UpdateTask = (props) => {
  console.log(props.task,'99')
  const updateData =null
  const [taskUpdate, setTaskUpdate] = useState({
    title: updateData.title,
    description: updateData.description,
    status: 'Change Status',
  });
  return (
    <>
      <div className="main-create">
        <div className="title">
          <div className="label">
            <h6>Title</h6>
          </div>
          <div className="input">
            <input type="text" />
          </div>

          <div className="description">
            <div className="label">
              <h6>Description</h6>
            </div>
            <div className="input">
              <input type="text" />
            </div>

            <div className="status">
              <div className="label">
                <h6>Status</h6>
              </div>
              <div className="input">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline"
                    id="dropdown-basic"
                  ></Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>ToDo</Dropdown.Item>
                    <Dropdown.Item>Done</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            <div className="create-button">
              <Link to="/">
                {/* <Button variant="dark" onClick={() => props.isOpen(false)}> */}
                <Button variant='success' disabled={!taskUpdate.status} onClick={() => props.updateTodo(updateData, taskUpdate)}>Update</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.todoReducer,
    task: state.todoReducer.task
  };
};

const mapDispatchtoProps = {
  addTodo,
  updateTodo,
};

export default connect(mapStateToProps, mapDispatchtoProps)(UpdateTask);
