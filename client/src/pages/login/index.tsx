import React from 'react';
import login from '../../images/footer/BackpackStory.png';
import { ReactComponent as EmailSvg } from '../../svgs/email.svg';
import { ReactComponent as FacebookSvg } from '../../svgs/facebook-f.svg';
import { ReactComponent as GooglePlusSvg } from '../../svgs/google_google plus_google+_icon .svg';
import { ReactComponent as LinkedinSvg } from '../../svgs/linkedin-in.svg';
import { ReactComponent as LockSvg } from '../../svgs/lock.svg';
import style from './style.module.scss';

function Login(): JSX.Element {
  return (
    <div id={style.login__bg__image}>
      <div className={style.login__bg__image}></div>
      <div id={style.login}>
        <aside>
          <figure>
            <a href="#">
              <img src={login} className={style.login__img} />
            </a>
          </figure>
          <form>
            <div className={style.access__social}>
              <div className={style.social__context}>
                <FacebookSvg />
                <a href="https://www.facebook.com/" className={style.social__facebook}>
                  Login with Facebook
                </a>
              </div>
              <div className={style.social__context}>
                <div className={style.social__context__svg}>
                  <GooglePlusSvg />
                </div>
                <a href="https://www.google.com/" className={style.social__google}>
                  Login with Google
                </a>
              </div>
              <div className={style.social__context}>
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
                <EmailSvg />
              </div>
              <div className={style.form__group}>
                <label>Password</label>
                <input type="password" className={style.form__control} name="password"></input>
                <LockSvg />
                <button type="button" role="button" className={style.toggle__button}>
                  Show
                </button>
              </div>
            </div>
            <div className={style.clearfix__left}>
              <div className={style.clearfix__left__checkboxes}>
                <label className={style.clearfix__left__checkboxes__check}>
                  Remember me
                  <input type="checkbox" checked />
                  <span className={style.clearfix__left__checkboxes__checkmark}></span>
                </label>
              </div>
              <div className={style.clearfix__right}>
                <a id="forgot" href="#">
                  Forget Password?
                </a>
              </div>
              <a href="#" className={style.login__button}>
                Login
              </a>
              <div className={style.new__login}>
                New to Login?
                <strong className={style.sign}>
                  <a href="#"> Sign up!</a>
                </strong>
              </div>
            </div>
          </form>
          <div className={style.copy}>© Panagea</div>
        </aside>
      </div>
    </div>
  );
}

export default Login;
