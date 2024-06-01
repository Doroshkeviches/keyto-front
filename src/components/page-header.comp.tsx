import React, { FC } from "react";
import { Link, NavLink } from "react-router-dom";

const PageHeaderComp: FC = () => {
  return (
    <header>
      <Link to='/'> <img src="" alt="" />aa</Link>
      <ul>
        <li><NavLink to="/users">users</NavLink></li>
        <li><NavLink to="/users/new">user new</NavLink></li>
        <li><NavLink to="/users/1">user 1</NavLink></li>
      </ul>
    </header>
  );
};

export default PageHeaderComp;