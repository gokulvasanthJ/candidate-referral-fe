import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3009/api/candidates/search?status=${searchQuery}`);
      console.log('Search Results:', response.data);
      // You can add further code here to display the results or handle the search results.
    } catch (error) {
      console.error('Error searching candidates:', error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      {/* Toggle button */}
      <button
        data-mdb-collapse-init
        className="navbar-toggler"
        type="button"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Navbar brand */}
        <a className="navbar-brand mt-2 mt-lg-0" href="#">
          <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
            height="15"
            alt="MDB Logo"
            loading="lazy"
          />
        </a>

        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/refer">
              Referral Form
            </Link>
          </li>
        </ul>
      </div>

      {/* Right elements */}
      <div className="d-flex align-items-center">
        {/* Search Bar */}
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search by status"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Notifications */}
        <div className="dropdown">
          <a
            data-mdb-dropdown-init
            className="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            aria-expanded="false"
          >
            <i className="fas fa-bell"></i>
            <span className="badge rounded-pill badge-notification bg-danger">1</span>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="#">Some news</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Another news</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </div>

        {/* Avatar */}
        <div className="dropdown">
          <a
            data-mdb-dropdown-init
            className="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            aria-expanded="false"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              height="25"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <a className="dropdown-item" href="#">My profile</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Settings</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Right elements */}
    </nav>
  );
};

export default Navbar;
