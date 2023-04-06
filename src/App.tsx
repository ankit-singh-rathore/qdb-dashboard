import "./App.css";
import "./style.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Dashboard from "./Components/Dashboard";
import BlogPost from "./Components/BlogPost";
import EditPost from "./Components/BlogPost/EditPost";

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
      <div className="page-flex">
        <Sidebar />
        
        <div className="main-wrapper">
          <Routes>
            <Route path="/" element= {<Dashboard />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="/editPost" element={<EditPost />} />
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
