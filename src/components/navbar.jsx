import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <>
            <div className="nav-links-container">
                <Link className="nav-link" to="/">
                    Presupuesto
                </Link>
                <Link className="nav-link" to="/tareas">
                    Tareas
                </Link>
            </div>
        </>
    )
}

export default NavBar