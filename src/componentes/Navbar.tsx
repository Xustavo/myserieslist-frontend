import "./Navbar.css"

//icons
import { FaUserAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaBell } from "react-icons/fa";

//hooks
import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate()

    return(
        <div className="nav">
            <h1><button onClick={() => navigate("/")}>MySeriesList</button></h1>
            <div className="icons">
                <button><FaBell /></button>
                <button><IoMdMail /></button>
                <button onClick={() => navigate("/login")}><FaUserAlt /></button>
            </div>
        </div>
    )
}

export default Navbar