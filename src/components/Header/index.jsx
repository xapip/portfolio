import React from 'react'

import style from './header.module.scss'

export const Header = () => {
  return (
    <div className={style.wrapper}>
      <ul className={style.navList}>
        <li className={style.item}>Главная</li>
        <li className={style.item}>Обо мне</li>
        <li className={style.item}>Мои работы</li>
      </ul>
    </div>
  );
}
