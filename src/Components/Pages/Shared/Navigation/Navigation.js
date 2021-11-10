import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { logout, user } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
            <img
              style={{ width: "50%" }}
              src="http://magento2.templatemela.com/v19/MAG251/skin/frontend/templatemela/MAG100219_1/images/logo.png"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/dashboard">
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <span className="nav-link active text-dark">
                  <strong> {user.displayName}</strong>
                </span>
              </li>
              {user.email ? (
                <li className="nav-item">
                  <span onClick={logout} className="nav-link active">
                    Logout <i className="fas fa-sign-out-alt"></i>
                  </span>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Login <i className="fas fa-sign-in-alt"></i>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
