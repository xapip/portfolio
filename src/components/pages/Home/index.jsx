import React from 'react'

import style from './home.module.scss'

function Home () {
  
  return (
      <div className={style.wrapper}>
        <div>
          <h1 className={style.title}>
            Привет
            <br />
            меня зовут Кобзев Александр
          </h1>
          <h2 className={style.subtitle}>я frontend-разработчик</h2>
          <p className={style.text}>
            добро пожаловать на мой сайт-портфолио :-)
          </p>
        </div>
        <div className={style.prompt}>прокрути вниз</div>
      </div>
  );
}

export default Home;