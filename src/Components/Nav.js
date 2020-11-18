import React from 'react';

const Nav = () => {
  return (
    <>
      <ul className="nav">
        <li>
          <a className="navItem" href="#">
            About
          </a>
        </li>
        <li>
          <a className="navItem" href="#">
            Projects
          </a>
        </li>
        <li>
          <a className="navItem" href="#">
            Tech
          </a>
        </li>
        <li>
          <a className="navItem" href="#">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
