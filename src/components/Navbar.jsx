// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="container-fluid">
      
        <div className="row">
          <div className="col-12">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container">
                <Link className="navbar-brand" to="/">Jr.Startup</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/course">Courses</Link>
                    </li>
                  </ul>
                  <form class="d-flex" role="search">
                    <Link className="nav-link btn btn-outline-primary" to="/login">Login</Link>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
