import React from 'react';
import login from '../../images/footer/BackpackStory.png';
import { ReactComponent as EmailSvg } from '../../svgs/email.svg';
import { ReactComponent as FacebookSvg } from '../../svgs/facebook.svg';
import { ReactComponent as GooglePlusSvg } from '../../svgs/google-plus-g.svg';
import { ReactComponent as LinkedinSvg } from '../../svgs/linkedin-in.svg';
import style from './style.module.scss';

function Login(): JSX.Element {
  return (
    <div id={style.login__bg__image}>
      <div id={style.login}>
        <aside>
          <figure>
            <a href="#">
              <img src={login} className={style.login__img} />
            </a>
          </figure>
          <form>
            <div className={style.access__social}>
              <div className={style.social__context1}  >
                <FacebookSvg / >
                <a href="https://www.facebook.com/" className={style.social__facebook}> 
                  Login with Facebook
                </a>
              </div>
              <div className={style.social__context2}>
                <GooglePlusSvg />
                <a href="https://www.google.com/" className={style.social__google}>
                  Login with Google
                </a>
              </div>
              <div className={style.social__context3}>
                <LinkedinSvg />
                <a href="https://www.linkedin.com/" className={style.social__linkedin}>
                  Login with Linkedin
                </a>
              </div>
              <div className={style.divider}>
                <span>Or</span>
              </div>
              <div className={style.form__group}>
                <label>Email</label>
                <input type="email" className={style.form__control} name="email"></input>
                <EmailSvg/>
              </div>
            </div>
          </form>
        </aside>
      </div>
    </div>
  );
}

export default Login;
