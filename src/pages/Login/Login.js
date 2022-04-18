import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import googleLogo from '../../images/logo/google-logo.png'
import './Login.css'

const Login = () => {
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const handleUserLogin = (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const handleGooleSignIn = () => {
        signInWithGoogle();
    }
    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {

            await sendPasswordResetEmail(email)
            toast("Please check your email for password reset link and reload the page for login again")
        }
        else {
            toast("please input your email ")
        }

    }


    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (user || user1) {
        navigate(from, { replace: true });
    }
    if (error || error1 || error2) {
        toast(error?.message) || toast(error1.message) || toast(error2?.message)
    }
    return (
        <div className='login-form'>
            <Form onSubmit={handleUserLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <p>New to Dentist Hameed ! <Link className='text-decoration-none' to={"/signup"}>create a account</Link></p>
                {/*  <Button className='w-50' variant="primary" type="submit">
                    Login
                </Button> */}
                <input
                    className='submit-button w-50'
                    type="submit" value="Login" />

                <p onClick={handleResetPassword} className='mt-2 '> Forgot Password ! <span className='text-danger reset-link '> reset password</span></p>
            </Form>
            <div className='d-flex align-items-center justify-center '>
                <div className='signup-line1'></div>
                <p className='mt-2 ps-2 pe-2 '>or</p>
                <div className='signup-line2'></div>
            </div>
            <button
                onClick={handleGooleSignIn}
                className='google-btn ' >
                <img className='me-2' style={{ width: "30px", height: "30px" }} src={googleLogo} alt="" />
                Sign In with Google</button>
            <ToastContainer />
        </div>
    );
};

export default Login;