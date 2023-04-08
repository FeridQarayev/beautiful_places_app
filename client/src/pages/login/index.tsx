import React from 'react';
import login from '../../images/footer/BackpackStory.png';
import style from './style.module.scss';

function Login(): JSX.Element {
  return <div id={style.login__bg__image}>
    <div id={style.login}>
       <aside>
        <figure>
          <a href="Home">
          <img src={login} className={style.footer__left__img} />
          </a>
        </figure>
       </aside>
    </div>
  </div>;
}

export default Login;
