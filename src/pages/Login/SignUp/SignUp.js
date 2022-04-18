import React, { useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css'
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import googleLogo from '../../../images/logo/google-logo.png'
import dentistLogo from '../../../images/dentist/how-to-become-a-dentist.jpg'


const SignUp = () => {
    const navigate = useNavigate()


    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);

    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('')
    const handleSignUp = async (event) => {
        event.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const confirmPassword = confirmPasswordRef.current.value
        if (/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
            if (password === confirmPassword) {

                toast(" please wait creating user & sending email verification")
                await createUserWithEmailAndPassword(email, password)
                await updateProfile({ displayName: name });

            }
            else {
                toast("password did'nt match")
            }

        }

        else {
            toast("your passowrd must be min 8 letter password, with at least a symbol, upper and lower case letters and a number")
        }


    }



    if (user || user1) {
        alert("profile updated")
        navigate('/home')

    }
    if (loading || loading1 || updating) {
        return <Loading></Loading>
    }
    if (error || error1) {
        toast(error?.message) || toast(error1?.message)
    }


    return (
        <div className='signup-form w-50 mx-auto '>
            <h2 className='mb-3'>Sign Up</h2>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="your Name" required />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>confirm Password</Form.Label>
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <div className='d-flex'>
                        <Form.Check className="me-3" onClick={() => setAgree(!agree)} type="checkbox" />

                        <p className={agree ? "text-success" : ""}> Accept Terms & Conditions</p>

                    </div>
                </Form.Group>

                <p>Already have a account ? <Link className='text-decoration-none' to={'/login'}>Login Now</Link> </p>
                {/*     <Button
                    disabled={!agree}
                    className='w-50' type="submit">
                    Sign Up
                </Button> */}
                <input
                    disabled={!agree}
                    className='w-50 submit-button'
                    type="submit" value="Sign Up" />
            </Form>
            <div className='d-flex align-items-center justify-center '>
                <div className='signup-line1'></div>
                <p className='mt-2 ps-2 pe-2 '>or</p>
                <div className='signup-line2'></div>
            </div>
            <button
                onClick={() => signInWithGoogle()}
                className='google-btn ' >
                <img className='me-2 ' style={{ width: "30px", height: "30px" }} src={googleLogo} alt="" />
                Sign In with Google</button>


            <ToastContainer />
        </div>
    );
};

export default SignUp;