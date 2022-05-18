import React from 'react';
import { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import mail from '../../icons/mail.png'
import password from '../../icons/password.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Shared/Loading/Loading';



const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/addTask";

    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-red-600'>Error: {error?.message}</p>

    }
    if (loading) {
        return <Loading></Loading>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);

    }

    const navigateRegister = event => {
        navigate("/register");
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('please give your email')
        }
    }

    return (
        <div>

            <form onSubmit={handleSubmit} className="justify-center items-center w-full shadow rounded-lg bg-white px-6 flex flex-col md:w-1/2 lg:w-1/3 m-auto my-20 py-10">
                <h2 className="text-3xl my-4 font-bold ">LOGIN</h2>
                <div className="w-full p-2 justify-start flex flex-col">
                    <div className=" flex flex-row">
                        <span className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0" mode="render" block="">
                            <img src={mail} alt="" />
                        </span>
                        <input className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1" ref={emailRef} id="" required type="email" name="" placeholder="email" />
                    </div>

                    <div className="my-4 flex flex-row">
                        <span className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0" mode="render" block="">
                            <img src={password} alt="" />
                        </span>
                        <input className="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-1" id="" ref={passwordRef} required type="password" name="password" placeholder="password" />
                    </div>
                    {errorElement}
                    <button value="button" className="px-4 py-2 rounded bg-orange-400 text-white hover:bg-orange-600 my-4 w-full" id="whoobe-ibemp">Login</button>
                </div>
                <p>New to Stylist Photographer?
                    <Link to="/register" className=' text-blue-500 no-underline mx-2 cursor-pointer' onClick={navigateRegister}>Please Register</Link>

                </p>


                <p>Forget Password? <button onClick={resetPassword} className=' text-red-500 no-underline mx-2'>Reset Password</button></p>

                <div>


                    <ToastContainer />
                </div>
            </form>


        </div>
    );
};

export default Login;