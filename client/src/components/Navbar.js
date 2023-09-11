import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

// Getting User From Local Storage
  const user = JSON.parse(localStorage.getItem("currentUser"))

// Removing User From Local Storage
  const logOut = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/login"
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">SheyRooms</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon " ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ marginRight: "8%" }}>
{/* If User is Available Ternary Operator is used */}
              {user ? (
                <>

                  <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle bg-dark" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                      </svg> {user.name}
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Bookings</a></li>
                      <li><a className="dropdown-item" href="#" onClick={logOut}>LogOut</a></li>

                    </ul>
                  </div>

                </>) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>


                </>)
              }

            </ul>

          </div>
        </div>
      </nav>





    </>
  )
}
