import { Link } from "react-router-dom";

function Header(){
    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark"></nav>
            <ul className="nav">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link active">Home </Link>
                </li>
                <li className="nav-item">
                   <Link to={"/board/list"} className="nav-link active">Board List </Link>
                </li>
                <li className="nav-item">
                   <Link to={"/"} className="nav-link active">Home </Link>
                </li>
                <li className="nav-item">
                   <Link to={"/"} className="nav-link active">Home </Link>
                </li>
            </ul>


        </div>
    );


}


export default Header;