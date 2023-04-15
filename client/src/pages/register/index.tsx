import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import register from '../../images/register/Travel-agency-logo-design-template-on-transparent-background-PNG (1).png';
import { ReactComponent as EmailSvg } from '../../svgs/email.svg';
import { ReactComponent as LockSvg } from '../../svgs/lock.svg';
import { ReactComponent as UserSvg } from '../../svgs/user-regular.svg';
import style from './style.module.scss';

const RegisterSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Z][a-z]*([ ][A-Z][a-z]*)*$/, 'Invalid format! (For example:Jake)')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  lastName: Yup.string()
    .matches(/^[A-Z][a-z]*([ ][A-Z][a-z]*)*$/, 'Invalid format! (For example:Jackson)')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  confirmePassword: Yup.string().min(6, 'Confirme Password must be at least 6 characters').required('Required'),
});
const changeInputType = (e: React.MouseEvent<HTMLButtonElement>): void => {
  const passwordTag = e.currentTarget.previousElementSibling?.previousElementSibling;
  if (passwordTag instanceof HTMLInputElement) {
    passwordTag.type = passwordTag.type == 'text' ? 'password' : 'text';
};
}
function Register(): JSX.Element {
  return (
    <div id={style.register__bg__image}>
      <div className={style.register__bg__image}></div>
      <div id={style.register}>
        <aside>
          <figure>
            <a href="home">
              <img src={register} className={style.register__img} />
            </a>
          </figure>
          <Formik
            initialValues={{ email: '', password: '' ,  name: '' , lastName: '' , confirmePassword: ''  }}
            validationSchema={RegisterSchema}
            onSubmit={(values): void => {
              console.log(values);
            }}
          >
            {(): JSX.Element => (
              <Form>
                <div className={style.access__social}>
                  <div className={style.form__group}>
                    <label htmlFor="name">Your Name</label>
                    <Field type="text" name="name" className={style.form__control} />
                    <UserSvg />
                    <ErrorMessage name="name" component="div" className={style.error} />
                  </div>
                  <div className={style.form__group}>
                    <label htmlFor="lastName">Your Last Name</label>
                    <Field type="text" name="lastName" className={style.form__control} />
                    <UserSvg />
                    <ErrorMessage name="lastName" component="div" className={style.error} />
                  </div>
                  <div className={style.form__group}>
                    <label htmlFor="email"> Your Email</label>
                    <Field type="email" name="email" className={style.form__control} />
                    <EmailSvg />
                    <ErrorMessage name="email" component="div" className={style.error} />
                  </div>
                  <div className={style.form__group}>
                    <div>
                      <label htmlFor="password">Your Password</label>
                      <Field type="password" name="password" className={style.form__control} />
                      <LockSvg />
                    </div>
                    <ErrorMessage name="password" component="div" className={style.error} />
                  </div>

                  <div className={style.form__group}>
                    <div>
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <Field type="password" name="confirmPassword" className={style.form__control} />
                      <LockSvg />
                    </div>
                    <ErrorMessage name="password" component="div" className={style.error} />
                  </div>
                </div>
                <div className={style.clearfix__left}>
                  <button type="submit" className={style.register__button}>
                    Register Now!
                  </button>
                  <div className={style.new__register}>
                    Already have an account?
                    <strong className={style.sign}>
                      <a href="/login"> Sign In</a>
                    </strong>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          <div className={style.copy}>© Panagea</div>
        </aside>
      </div>
    </div>
  );
}

export default Register;
