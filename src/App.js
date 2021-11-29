import "./App.css";
import PostsContainer from "./components/Blog/PostsContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<PostsContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
