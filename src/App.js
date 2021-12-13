import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListView from './Components/ListView';
import CreateForm from './Components/CreateForm';
import UpdateTodo from './Components/UpdateTodo';
function App() {
  return (
    <div className="App">
    <Header />
    <Router>
      <Routes>
        <Route exact path="/" element={<ListView />} />
        <Route exact path="/create" element={<CreateForm />} />
        <Route exact path="/update" element={<UpdateTodo />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
