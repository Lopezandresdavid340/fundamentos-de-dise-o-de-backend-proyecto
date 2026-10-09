import { Link } from 'react-router-dom';
import { LayoutGrid, LogOut } from 'Lucide-react';
import { useAuth } from '../hooks/useAuth';


export default function Navbar() {
    const {user, logout } =useAuth();

    return (
        <nav className="navbar">
            <Link to="/equipos" className="brand">
                <LayoutGrid size={22} />
                LAB CRUD
            </Link>

            <div className="nav-right">
            <span>
            {user?.nombre} . <strong>{user?.rol}</strong>
            </span>
            <button> className="</button>
          </div>
        </nav>
    );
}