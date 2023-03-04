import { Link } from "react-router-dom"


export const NavBar = () => {
    return <div>
    <Link to="/"> HOME </Link>
    <Link to="/profile"> PROFILE </Link>
    <Link to="/contact"> CONTACT </Link>
    <Link to="/learning"> LEARNING </Link>
  </div>
}