import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo, updateTodo } from "../Action";

const UpdateTask = (props, { updatebleTask }) => {
  console.log(props.updatebleTask, "SAAAAAA");
  const updateData = props.updatebleTask;
  const [taskUpdate, setTaskUpdate] = useState({
    title: updateData.title,
    description: updateData.description,
    status: "Change Status",
  });
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
              value={taskUpdate.title}
              onChange={(e) =>
                setTaskUpdate({ ...taskUpdate, title: e.target.value })
              }
            />
          </div>

          <div className="description">
            <div className="label">
              <h6>Description</h6>
            </div>
            <div className="input">
              <input
                type="text"
                value={taskUpdate.description}
                onChange={(e) =>
                  setTaskUpdate({ ...taskUpdate, description: e.target.value })
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
                    {taskUpdate.status}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={(e) =>
                        setTaskUpdate({ ...taskUpdate, status: "IN PROGRESS" })
                      }
                    >
                      In Progress
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={(e) =>
                        setTaskUpdate({ ...taskUpdate, status: "DONE" })
                      }
                    >
                      Done
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="input">
              <input
                type="number"
                value={taskUpdate.storyPoints}
                onChange={(e) =>
                  setTaskUpdate({ ...taskUpdate, storyPoints: e.target.value })
                }
              />
            </div>

            <div className="create-button">
              <Link to="/">
                {/* <Button variant="dark" onClick={() => props.isOpen(false)}> */}
                <Button
                  variant="success"
                  disabled={!taskUpdate.status}
                  onClick={() => props.updateTodo(updateData, taskUpdate)}
                >
                  Update
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
    task: state.todoReducer.task,
  };
};

const mapDispatchtoProps = {
  addTodo,
  updateTodo,
};

export default connect(mapStateToProps, mapDispatchtoProps)(UpdateTask);
