/*
 * This is Our Early Access Form Page
 */
import React, {useEffect} from 'react';
import styles from './earlyaccesspage.module.css';
import {Form, Container} from 'reactstrap';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {earlyaccessSubmit} from '../../redux/subscription/subscription.actions';

function EarlyAccessPage() {
  const dispath = useDispatch();
  const status = useSelector((state) => state.status);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (status.message && status.tp === 'earlyaccess') {
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
          <p className={styles.maint1}>
            Get early access to Ebiblo
            <br />
            Let us know your favourite classic books
          </p>

          <div className={styles.formarea}>
            <Formik
              initialValues={{
                email: '',
                book1: '',
                book2: '',
                book3: '',
                join_facebook: false,
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Email is Required!';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address!';
                }
                if (!values.book1) {
                  errors.book1 = 'Book 1 is Required!';
                }

                return errors;
              }}
              onSubmit={(values, {setSubmitting}) => {
                dispath(earlyaccessSubmit(values));
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
                    <label className={styles.labels}>
                      Email<span style={{color: '#ff0000'}}> *</span>{' '}
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={styles.cinputs}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <p className={styles.cerrors}>
                      {errors.email && touched.email && errors.email}
                    </p>

                    <label className={styles.labels1}>
                      Book 1<span style={{color: '#ff0000'}}> *</span>
                    </label>
                    <input
                      type="text"
                      name="book1"
                      onChange={handleChange}
                      className={styles.cinputs}
                      onBlur={handleBlur}
                      value={values.book1}
                    />
                    <p className={styles.cerrors}>
                      {errors.book1 && touched.book1 && errors.book1}
                    </p>

                    <label className={styles.labels}>Book 2</label>
                    <input
                      type="text"
                      name="book2"
                      onChange={handleChange}
                      className={styles.cinputs}
                      onBlur={handleBlur}
                      value={values.book2}
                    />
                    <br />

                    <label className={styles.labels}>Book 3</label>
                    <input
                      type="text"
                      name="book3"
                      onChange={handleChange}
                      className={styles.cinputs}
                      onBlur={handleBlur}
                      value={values.book3}
                    />
                    <br />

                    <label className={styles.checkboxs}>
                      <input
                        type="checkbox"
                        name="join_facebook"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.join_facebook}
                      />
                      <span> </span>
                      I'd like to join the Facebook group
                    </label>

                    <br />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={styles.cbutton}>
                      Subscribe
                    </button>
                  </>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </>
    );
  }
}
export default EarlyAccessPage;
