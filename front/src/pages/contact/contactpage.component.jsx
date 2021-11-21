/*
 * This is Our Contact us Page
 */
import React, {useEffect} from 'react';
import styles from './contactpage.module.css';
import {Container, Form} from 'reactstrap';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {contactusSubmit} from '../../redux/subscription/subscription.actions';

function ContactPage() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (status.message && status.tp === 'contact') {
    if (status.message.includes('Thank')) {
      return (
        <>
          <Container className={styles.messageprv}>
            <p style={{color: 'green'}}>{status.message}</p>
          </Container>
        </>
      );
    } else {
      return (
        <>
          <Container className={styles.messageprv}>
            <p>{status.message}</p>
          </Container>
        </>
      );
    }
  } else {
    return (
      <>
        <div className={styles.main}>
          <Container>
            <p className={styles.tit1}>Contact Us Today</p>

            <div className={styles.formarea}>
              <Formik
                initialValues={{
                  email: '',
                  name: '',
                  mobile: '',
                  message: '',
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Email is Empty!';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email,
                    )
                  ) {
                    errors.email = 'Invalid Email address!';
                  }
                  if (!values.name) {
                    errors.name = 'Name is Empty!';
                  }
                  if (!values.mobile) {
                    errors.mobile = 'Phone number is Empty!';
                  }
                  if (!values.message) {
                    errors.message = 'Message is Empty!';
                  }
                  return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                  dispatch(contactusSubmit(values));
                  setSubmitting(false);
                }}>
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <Form onSubmit={handleSubmit} autoComplete="off">
                    <>
                      <input
                        type="email"
                        name="email"
                        className={styles.cinputs}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Email"
                      />
                      <p className={styles.cerrors}>
                        {errors.email && touched.email && errors.email}
                      </p>

                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        className={styles.cinputs}
                        onBlur={handleBlur}
                        value={values.name}
                        placeholder="Name"
                      />
                      <p className={styles.cerrors}>
                        {errors.name && touched.name && errors.name}
                      </p>

                      <input
                        type="text"
                        name="mobile"
                        onChange={handleChange}
                        className={styles.cinputs}
                        onBlur={handleBlur}
                        value={values.mobile}
                        placeholder="Phone number"
                      />
                      <p className={styles.cerrors}>
                        {errors.mobile && touched.mobile && errors.mobile}
                      </p>

                      <input
                        type="textarea"
                        name="message"
                        onChange={handleChange}
                        className={styles.cinputst}
                        onBlur={handleBlur}
                        value={values.message}
                        placeholder="Leave your message here."
                      />
                      <p className={styles.cerrors}>
                        {errors.message && touched.message && errors.message}
                      </p>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={styles.cbutton}>
                        Submit
                      </button>
                    </>
                  </Form>
                )}
              </Formik>
            </div>
          </Container>
        </div>
      </>
    );
  }
}
export default ContactPage;
