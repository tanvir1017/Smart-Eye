import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { logout, user } = useAuth();
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/">
            <img
              style={{ width: "50%" }}
              src="http://magento2.templatemela.com/v19/MAG251/skin/frontend/templatemela/MAG100219_1/images/logo.png"
              alt=""
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link active" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/shop">
                  Shop
                </Link>
              </li>

              <li class="nav-item">
                <span class="nav-link active">{user.displayName}</span>
              </li>
              {user.diplayName ? (
                <li class="nav-item">
                  <Link class="nav-link active" to="/login">
                    Login <i class="fas fa-sign-in-alt"></i>
                  </Link>
                </li>
              ) : (
                <li class="nav-item">
                  <Link onClick={logout} class="nav-link active" to="/login">
                    Logout <i class="fas fa-sign-out-alt"></i>
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
