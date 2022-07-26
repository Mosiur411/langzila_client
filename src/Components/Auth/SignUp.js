import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import GoogleLogo from '../assets/google.svg';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail, useUpdateProfile } from 'react-firebase-hooks/auth';
import { BsEyeSlash } from "@react-icons/all-files/bs/BsEyeSlash";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../Firebase/firebase.init';
import Spinner from '../Spinner/Spinner';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleloading, googleError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);
    const [updateProfile, updating, updatError] = useUpdateProfile(auth);
    const [email, setEmail] = useState('');
    const [showPass, setShowPass] = useState(false);

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log(data)
    };
    let signUpError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || googleUser) {

            navigate(from, { replace: true });
        }
    }, [user, googleUser, from, navigate]);

    if (loading || googleloading || updating) {
        return <Spinner></Spinner>
    }

    if (error || googleError || updatError) {
        signUpError = <p className='text-[#FE4A55] mb-2'><small>{error?.message || googleError?.message}</small></p>
    }

    return (
        <div className='pt-12'>
            < div className="w-[400px] p-8 mx-auto border-2 border-[#FE4A55] bg-gray-50 items-center text-center shadow-xl rounded-xl">
                <h1 className='w-56 text-center rounded p-2 mx-auto mb-8 mt-[-50px] bg-[#FE4A55] text-white font-medium text-xl'>Sign Up</h1>
                <div className="avatar mb-8 z-0">
                    <div className="w-28 rounded-full ring ring-[#FE4A55] ring-offset-base-100 ring-offset-2">
                        <img src="https://img.freepik.com/premium-vector/avatar-portrait-kid-caucasian-boy-round-frame-vector-illustration-cartoon-flat-style_551425-43.jpg?w=2000" alt='' />
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input
                        className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        placeholder='Name'
                        {...register("name", { required: true })} />
                    {errors.firstName?.type === 'required' && "Name is required"}
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
                    {signUpError}
                    <div className="text-center mb-3 pb-1 justify-between">
                        <label htmlFor="remember" className="text-sm font-bold text-[#FE4A55] mb-2">Already Have an account? <Link to='/signIn' className='hover:underline'>Sign In</Link></label>
                        <br /> <button className=" hover:underline text-gray-400 mt-3">Forgot password?</button>
                    </div>
                    <input
                        className="border border-gray-300 bg-[#FE4A55] text-white text-sm uppercase font-bold rounded-lg block w-full p-2.5"
                        type="submit" value="Sign Up" />

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

export default SignUp;