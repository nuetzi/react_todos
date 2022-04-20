import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import OneTodo from "./pages/OneTodo";
import NewTodo from "./pages/NewTodo";
import ErrorPage from "./pages/ErrorPage";
import EditTodo from './pages/EditTodo';

export default function App () {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> &nbsp; | &nbsp;
        <Link to="/new">New</Link>
      </nav>
      <br/>
      <h2>To-Do List</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewTodo/>} />
        <Route path="/:id" element={<OneTodo />} />
        <Route path="/:id/edit" element={<EditTodo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};