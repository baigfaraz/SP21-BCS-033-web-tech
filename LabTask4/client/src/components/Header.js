import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Icon } from "@iconify/react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export default function Header() {
  return (
    <div>
      <header class="pb-6 bg-white lg:pb-0 pt-3">
        <div class="container">
          {/* <!-- lg+ --> */}
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Logo />
            <div
              class="collapse navbar-collapse justify-content-end mr-5"
              id="navbarNav"
            >
              <ul class="navbar-nav headerList">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Shop">
                    Shop
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/About">
                    About Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <Link class="nav-link" to="/Cart">
                <Icon
                  className="ml-2"
                  icon="solar:cart-line-duotone"
                  color="#114683"
                  fontSize={25}
                />
              </Link>
              <div style={{ marginLeft: "3rem" }}>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    style={{ cursor: "pointer" }}
                    
                  >
                    <Icon
                      icon="iconamoon:profile-circle"
                      color="#114683"
                      fontSize={25}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link className="link" to="/AdminLogin">Admin</Link>
                    </Dropdown.Item>
                    <Dropdown.Item >
                    <Link className="link" to="/Login">User</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </nav>

          
        </div>
      </header>
    </div>
  );
}
