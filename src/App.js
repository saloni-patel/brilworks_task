import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListView from "./Components/ListView";
import CreateForm from "./Components/CreateForm";
import UpdateTodo from "./Components/UpdateTodo";
function App() {
  const [updatebleTask, setUpdatebleTask] = useState(false);
  console.log(updatebleTask, "Tghis Isnhkj");
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<ListView setUpdatebleTask={setUpdatebleTask} />}
          />
          <Route exact path="/create" element={<CreateForm />} />
          {updatebleTask && (
            <Route
              exact
              path="/update"
              element={<UpdateTodo updatebleTask={updatebleTask} />}
            />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
