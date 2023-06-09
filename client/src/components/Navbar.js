import { Link } from "react-router-dom";

const Navbar = () => {
  const userJSON = localStorage.getItem('user');
  const user = JSON.parse(userJSON);
  
  // Check if user is undefined or null
  if (user === undefined || user === null) {
    localStorage.setItem('user', JSON.stringify({}));
  }
  
  return (
    <nav>
      <p className="logo">Ant Blogs</p>
      <div className="right">
        <div>
          <p>Home</p>
          <Link to="/"><p>Blogs</p></Link>
          <p>Saved</p>
        </div>
        {user && Object.keys(user).length !== 0 ? (
          <span className="profile">
            <p className="name">{user.given_name}</p>
            <img className="icon" src={user.picture} alt="profile" />
          </span>
        ) : (
          <Link to="/Sign">
            <p className="button">Sign In</p>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
