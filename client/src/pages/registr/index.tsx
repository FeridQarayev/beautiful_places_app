import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import registr from '../../images/registr/Travel-agency-logo-design-template-on-transparent-background-PNG (1).png';
import { ReactComponent as EmailSvg } from '../../svgs/email.svg';
import { ReactComponent as LockSvg } from '../../svgs/lock.svg';
import { ReactComponent as UserSvg } from '../../svgs/user-regular.svg';
import style from './style.module.scss';

const RegistrSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  ConfirmePassword: Yup.string().min(6, 'Confirme Password must be at least 6 characters').required('Required'),
});

function Registr(): JSX.Element {
  return (
    <div id={style.registr__bg__image}>
      <div className={style.registr__bg__image}></div>
      <div id={style.registr}>
        <aside>
          <figure>
            <a href="home">
              <img src={registr} className={style.registr__img} />
            </a>
          </figure>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={RegistrSchema}
            onSubmit={(values): void => {
              console.log(values);
            }}
          >
            {(): JSX.Element => (
              <Form>
                <div className={style.access__social}>
                  <div className={style.form__group}>
                    <label htmlFor="name">Your Name</label>
                    <Field type="name" name="name" className={style.form__control} />
                    <UserSvg />
                  </div>
                  <div className={style.form__group}>
                    <label htmlFor="lastName">Your Last Name</label>
                    <Field type="lastName" name="lastName" className={style.form__control} />
                    <UserSvg />
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
                      <label htmlFor="ConfirmPassword">Confirm Password</label>
                      <Field type="password" name="ConfirmPassword" className={style.form__control} />
                      <LockSvg />
                    </div>
                    <ErrorMessage name="password" component="div" className={style.error} />
                  </div>
                </div>
                <div className={style.clearfix__left}>
                  <button type="submit" className={style.registr__button} >
                    Registr Now!
                  </button>
                  <div className={style.new__registr}>
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

export default Registr;
