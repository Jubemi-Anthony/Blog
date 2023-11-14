import { Routes, Route } from "react-router-dom"
import Blog from "./pages/Blog/Blog";
import Sign from "./pages/Sign/Sign";
import Create from "./pages/Admin/Create";
import Post from "./pages/Post/Post";
import Edit from "./pages/Admin/Edit";

import './App.css';
import Footer from "./components/Footer";

function App() {
  // const url = "https://blog-server-ym1z.onrender.com";
  const url = "http://127.0.0.1:5000"
   // Function to generate a new ID
   const generateNewId = () => {
    const universal = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const id = [];
    for (let i = 0; i < 20; i++) {
      id.push(universal[Math.floor(Math.random() * universal.length)]);
    }
    return id.join("");
  };
  return (
    <div id="APP">
      <Routes>
        <Route path="/" element= {<Blog url={url}/>}/>
        <Route path="Sign" element= {<Sign/>}/>
        <Route path="Edit" element= {<Edit url={url}/>}/>
        <Route path={`Post/:id`} element= {<Post url={url} generateNewId={generateNewId}/>}/>
        <Route path="admin0-create0" element= {<Create url={url} generateNewId={generateNewId}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
