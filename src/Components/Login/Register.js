import React from 'react';
import username from '../../icons/user.png';
import mail from '../../icons/mail.png';
import password from '../../icons/password.png';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }



    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast('Updated profile');
        navigate('/addTask');
    }



    return (
        <div>

            <form onSubmit={handleRegister} className="justify-center items-center w-full shadow rounded-lg bg-white px-6 flex flex-col md:w-1/2 lg:w-1/3 m-auto my-20">
                <h2 className="text-3xl my-4 font-bold">REGISTER</h2>
                <div className="w-full p-2 justify-start flex flex-col">
                    <div className=" my-4 flex flex-row">
                        <span className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0" mode="render" block="">
                            <img src={username} alt="" />
                        </span>
                        <input type="text" className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1" id="" name="username" required placeholder="username" />
                    </div>
                    <div className="my-4 flex flex-row">
                        <span className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0" mode="render" block="">
                            <img src={mail} alt="" />
                        </span>
                        <input className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1" id="" type="email" name="email" required placeholder="email" />
                    </div>

                    <div className="my-4 flex flex-row">
                        <span className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0" mode="render" block="">
                            <img src={password} alt="" />
                        </span>
                        <input type="password" className="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-1" id="" name="password" placeholder="password" required />
                    </div>
                    <button value="button" className="px-4 py-2 rounded bg-orange-400 text-white hover:bg-orange-600 my-4 w-full" >Register</button>
                </div>
                <p>Already have an account?
                    <Link to="/login" className=' text-blue-500 no-underline mx-2 cursor-pointer' onClick={navigateLogin}>Please Login</Link>
                </p>
                <div>


                    <ToastContainer />
                </div>
            </form>

        </div>
    );
};

export default Register;