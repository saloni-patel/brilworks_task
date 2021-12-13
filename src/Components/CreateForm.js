import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addTodo } from "../Action";
import { connect } from "react-redux";

const CreateForm = (props) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    status: "Select",
    storyPoints: "0",
  });

  console.log(props.data);
  return (
    <>
      <div className="main-create">
        <div className="title">
          <div className="label">
            <h6>Title</h6>
          </div>
          <div className="input">
            <input
              type="text"
              value={todo.title}
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
          </div>

          <div className="description">
            <div className="label">
              <h6>Description</h6>
            </div>
            <div className="input">
              <input
                type="text"
                value={todo.description}
                onChange={(e) =>
                  setTodo({ ...todo, description: e.target.value })
                }
              />
            </div>

            <div className="status">
              <div className="label">
                <h6>Status</h6>
              </div>
              <div className="input">
                <Dropdown>
                  <Dropdown.Toggle variant="outline" id="dropdown-basic">
                    {todo.status}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={(e) => setTodo({ ...todo, status: "TODO" })}
                    >
                      ToDo
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={(e) =>
                        setTodo({ ...todo, status: "IN PROGRESS" })
                      }
                    >
                      In Progress
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="label">
              <h6>StoryPoint</h6>
            </div>
            <div className="input">
              <input
                type="number"
                value={todo.storyPoints}
                onChange={(e) =>
                  setTodo({ ...todo, storyPoints: e.target.value })
                }
              />
            </div>

            <div className="create-button">
              <Link to="/">
                <Button variant="success" onClick={() => props.addTodo(todo)}>
                  Create
                </Button>
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
  };
};

const mapDispatchtoProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchtoProps)(CreateForm);
