import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    const navigate = useNavigate();
    return ( 
        <div className="sidebar-container">
            <h2 >Sidebar</h2>
            <div className="sidebar-item" onClick={() => navigate("/show-student")}>Show Students</div>
            <div className="sidebar-item" onClick={() => navigate("/update-student")}>Update Student</div>
            <div className="sidebar-item" onClick={() => navigate("/add-student")}>Add Student</div>
            <div className="sidebar-item" onClick={() => navigate("/delete-student")}>Delete Student</div>
        </div>
     );
}

export default Sidebar;