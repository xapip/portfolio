import React from "react";
import { NavLink } from "react-router-dom";

import { pages } from "../../data/pagesData";

import style from "./header.module.scss";

export const Header = () => {
  return (
    <nav className={style.wrapper}>
      <ul className={style.navList}>
        {pages.map((page) => (
          <li key={page.path}>
            <NavLink
              to={page.path}
              className={({ isActive }) =>
                isActive ? `${style.item} ${style.active}` : style.item
              }
            >
              {page.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
