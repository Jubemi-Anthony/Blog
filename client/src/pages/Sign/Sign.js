import {  useEffect } from "react";
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./Sign.css"
import {Link} from "react-router-dom";
import bloggingQuotes from "../../data/bloggingQuotes";



const display = bloggingQuotes[Math.floor(Math.random()*bloggingQuotes.length)];

const Sign = () => {
  const navigate = useNavigate();
  function handleCallback(response){
    var userObject = jwt_decode(response.credential);
    localStorage.setItem('user', JSON.stringify(userObject));
    navigate('/');
  }

  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id: "569726103771-narcfifo41kkb733c8nnnjhmmduh61j9.apps.googleusercontent.com",
      callback: handleCallback
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )
  },[])

  return (
    <div id="Sign">
      <section className="left">
        <div id="signInDiv"></div>
      </section>
      <section className="right">
        <Link to='/'><p className="logo">Ant Blogs</p></Link>
        <p className="display">{display}</p>
      </section>
    </div>
  )
}

export default Sign