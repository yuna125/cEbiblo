/*
 * This is Our Signup Model Component
 */
import React, { useState } from 'react';
import styles from '../signup.module.css';
import { Link } from 'react-router-dom';
import { network } from '../../../services/network';

import { IoMdClose, IoIosArrowBack } from 'react-icons/io';

function SignUp(props) {

    const { visible, handleClose } = props;
    const [emailValue, setEmailValue] = React.useState('')
    const [codeValue, setCodeValue] = React.useState('')
    const [step, setStep] = React.useState(1)

    /**
     * submit dispatch
     */
    const handleSubmit = () => {
        console.log(emailValue, codeValue)
        if (codeValue !== '') {
            let URL = 'signup';  // 调用的后端地址
            const body = {
                email: emailValue,  // email和code需要跟后端确认字段名是否正确
                code: codeValue,
            };
            network
                // post后面两个参数，一个传url，代表访问的地址
                //                 另一个是body参数，也就是要传给后端的参数
                .post(URL, body)
                .catch((err) => {
                    console.log(err);
                });
        } else {
            console.log('请输入验证码')
        }
    }

    /**
     * next step:input code
     */
    const handleNext = () => {
        if (emailValue === '') {
            console.log('请输入邮箱')
        } else {
            setStep(2)
        }
    }

    /**
     * claer state
     */
    const handleClear = () => {
        setEmailValue('')
        setCodeValue('')
        setStep(1)
    }

    /**
     * close Model
     */
    const closeModel = () => {
        handleClose(false)
        handleClear()
    }


    const handleGoSignIn = () => {
        console.log('go to sign in')
    }

    return (
        <>
            {
                visible ? (
                    <div className={styles.hidden}>
                        <div className={styles.content}>
                            <IoMdClose
                                style={{ position: 'absolute', right: 5, top: 5, cursor: 'pointer' }}
                                onClick={closeModel}
                            />
                            <div className={styles.stepEmail}>
                                {
                                    step === 1 ? (
                                        <>
                                            <p className={styles.emailTitle}>Sign up with email</p>
                                            <input
                                                className={styles.emailInput}
                                                value={emailValue}
                                                onChange={(e) => { setEmailValue(e.target.value) }}
                                                placeholder='Your email'
                                            />
                                            <div className={styles.emailBtn} onClick={handleNext}>Continue</div>
                                        </>
                                    ) : null
                                }
                                {
                                    step === 2 ? (
                                        <>
                                            <p className={styles.emailTitle}>Check your inbox</p>
                                            <p className={styles.codeTip}>Enter the code we sent to xxxxxxx@deakin.edu.au to sign in. </p>
                                            <input
                                                style={{ marginTop: 40 }}
                                                className={styles.emailInput}
                                                value={codeValue}
                                                onChange={(e) => { setCodeValue(e.target.value) }}
                                                placeholder='Code'
                                            />
                                            <div className={styles.emailBtn} onClick={handleSubmit}>OK</div>
                                        </>
                                    ) : null
                                }
                                <p className={styles.return}><IoIosArrowBack style={{ fontSize: 20, cursor: 'pointer' }} onClick={handleGoSignIn} />See all sign in options</p>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>

    );
}
export default SignUp;
