import { Routes, Route } from "react-router-dom"
import Blog from "./pages/Blog/Blog";
import Sign from "./pages/Sign/Sign";
import Create from "./pages/Admin/Create";
import Post from "./pages/Post/Post";
import { blogs } from "./data/blogs";

import './App.css';

function App() {
   // Function to generate a new ID
   const generateNewId = () => {
    const universal = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const id = [];
    for (let i = 0; i < 20; i++) {
      id.push(universal[Math.floor(Math.random() * universal.length)]);
    }
    return id.join("");
  };
  return (
    <div id="APP">
      <Routes>
        <Route path="/" element= {<Blog blogs={blogs}/>}/>
        <Route path="Sign" element= {<Sign/>}/>
        <Route path={`Post/:id`} element= {<Post generateNewId={generateNewId}/>}/>
        <Route path="admin0-create0" element= {<Create generateNewId={generateNewId}/>}/>
      </Routes>
    </div>
  );
}

export default App;
