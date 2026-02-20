import Profile from "./profile.jpg";
import "./nav.css"

const Nav = () => {
  return (
    <nav className="navbar">
      <div> <h2>THOTA HARSHAVARDHAN REDDY</h2></div>

       <div><ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul></div>

       
      <div> <img src={Profile} alt="Profile" className="profile-img" /></div>
    </nav>
  );
};

export default Nav;