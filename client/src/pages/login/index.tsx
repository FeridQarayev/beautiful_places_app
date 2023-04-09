import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
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
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
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
                      <a href="https://www.google.com/"  className={style.social__google}>
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
                      <label htmlFor="email">Email</label>
                      <Field type="email" name="email" className={style.form__control} />
                      <EmailSvg />
                      <ErrorMessage name="email" component="div" className={style.error} />
                    </div>
                    <div className={style.form__group}>
                      <label htmlFor="password">Password</label>
                      <Field type="password" name="password" className={style.form__control} />
                      <LockSvg />
                      <button type="button" role="button" className={style.toggle__button}>
                        Show
                      </button>
                      <ErrorMessage name="password" component="div" className={style.error} />
                    </div>
                  </div>
                  <div className={style.clearfix__left}>
                    <div className={style.clearfix__left__checkboxes}>
                      <label className={style.clearfix__left__checkboxes__check}>
                        <Field type="checkbox" name="rememberMe" />
                        Remember me
                        <span className={style.clearfix__left__checkboxes__checkmark}></span>
                      </label>
                    </div>
                    <div className={style.clearfix__right}>
                      <a id="forgot" href="#">
                        Forget Password?
                      </a>
                    </div>
                    <button type="submit" className={style.login__button} disabled={isSubmitting}>
                      Login
                    </button>
                    <div className={style.new__login}>
                      New to Login?
                      <strong className={style.sign}>
                        <a href="#"> Sign up!</a>
                      </strong>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </form>
          <div className={style.copy}>© Panagea</div>
        </aside>
      </div>
    </div>
  );
}

export default Login;
