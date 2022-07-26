import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsEyeSlash } from "@react-icons/all-files/bs/BsEyeSlash";
import GoogleLogo from '../assets/google.svg';
import auth from '../Firebase/firebase.init';
import Spinner from '../Spinner/Spinner';

const SignIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState('');

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };


    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || googleUser) {

            navigate(from, { replace: true });
        }
    }, [user, googleUser, from, navigate]);

    if (loading || googleLoading) {
        return <Spinner></Spinner>
    }

    if (error || googleError) {
        signInError = <p className='text-[#FE4A55] mb-2'><small>{error?.message || googleError?.message}</small></p>
    }
    return (
        <div className='pt-16'>
            < div className="w-[400px] p-8 mx-auto border-2 border-[#FE4A55] bg-gray-50 items-center text-center shadow-xl rounded-xl">
                <h1 className='w-56 text-center rounded p-2 mx-auto mb-8 mt-[-50px] bg-[#FE4A55] text-white font-medium text-xl'>Sign In</h1>
                <div className="avatar mb-8 z-0">
                    <div className="w-28 rounded-full ring ring-[#FE4A55] ring-offset-base-100 ring-offset-2">
                        <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png" alt='' />
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        placeholder='Email'
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })} />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                    <div className='relative'>
                        <input
                            placeholder="Password"
                            className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                            type={showPass ? "text" : "password"}
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 8,
                                    message: 'Must be 8 characters'
                                }
                            })}
                        />
                        <p className="absolute top-3 right-5 cursor-pointer" onClick={() => setShowPass(!showPass)}><BsEyeSlash /></p>
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    {signInError}
                    <div className="text-center mb-3 pb-1 justify-between">
                        <label htmlFor="remember" className="text-sm font-bold text-[#FE4A55] mb-2">Don't Have an Account? <Link to='/signUp' className='hover:underline'>Sign Up</Link></label>
                        <br /> <button onClick={async () => {
                            await sendPasswordResetEmail(email);
                            alert('Sent email');
                        }} className=" hover:underline text-gray-400 mt-3">Forgot password?</button>
                    </div>
                    <input
                        className="border border-gray-300 bg-[#FE4A55] text-white text-sm uppercase font-bold rounded-lg block w-full p-2.5"
                        type="submit" value="Sign In" />

                </form>
                <div className='flex font-bold items-center my-3 text-[#FE4A55]'>
                    <hr className='border-[#FE4A55] h-px w-full mr-2 mt-1' />
                    <span>or</span>
                    <hr className='border-[#FE4A55] h-px w-full ml-2 mt-1' />
                </div>
                <button onClick={() => signInWithGoogle()} className="flex items-center justify-center bg-gray-50 border font-bold border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 w-full p-2.5"> <img className='w-6 pr-2' src={GoogleLogo} alt='' /> Continue with Google</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default SignIn;