import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
import { toast } from 'react-toastify';
import axios from 'axios';

const MyBoocking = () => {


    const [user] = useAuthState(auth);
    const [bookData, setBookData] = useState([]);
    const [reload, setReload] = useState(false)
    const email = user?.email

    useEffect(() => {
        fetch(`http://localhost:5000/eventData/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data?.data)
                setBookData(data?.data)
                setReload(true)
            })
    }, [reload])


    useEffect(() => {
        console.log('data reload')
    }, [reload, bookData])


    const handelDelete = async (course) => {
        console.log(course)
        const url = `http://localhost:5000/eventDelete/${email}/${course}`;
        console.log(url);

        if (window.confirm("Delete?")) {
            try {
                const { data } = axios.delete(url, {
                    method: 'DELETE'
                });
                setReload(!reload)
                if (!data?.success) {
                    return toast.error(data?.error)
                }
                console.log(data);
                toast.success(data?.message);
                setReload(!reload)

            } catch (error) {
                setReload(!reload)
                toast.error(error?.message)
            }
        }


    }




    console.log(bookData);

    return (
        <div>
            {
                bookData.length > 0 ?
                    <div>
                        {
                            bookData?.map(data =>
                                <div key={data._id} className='mt-5'>
                                    <div className=' h-40 xl:w-1/2 w-10/12 mx-auto rounded-lg flex items-center'>
                                        <div className=' w-[75%] bg-purple-900 rounded-r-box h-full rounded-l-xl shadow-md'>

                                            <h1 className=' text-center mt-2 font-medium text-lg text-amber-400'>{data?.course}</h1>
                                            <hr className=' h-[1px] w-2/3 mx-auto border-white' />
                                            <div>
                                                <div className=' flex items-center justify-between px-4 mt-5'>
                                                    <div>

                                                        <p className=' text-sm font-medium text-white mb-1'><span className=' text-amber-400'>Phone :</span> {data?.phone}</p>
                                                        <p className=' text-sm font-medium text-white mb-1'><span className=' text-amber-400'>Event start :</span> {data?.time.split('-')[0]}</p>
                                                    </div>

                                                    <div>
                                                        <p className=' text-sm font-medium text-white mb-1'><span className=' text-amber-400'>Name : </span>{data?.useName}</p>
                                                        <p className=' text-sm font-medium text-white mb-1'><span className=' text-amber-400'>Total people :</span> {data?.people}</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className=' text-center mt-4'>
                                                <button onClick={() => handelDelete(data?.course)} className=' bg-amber-400 py-1 text-xs px-3 rounded text-balck font-bold text-black text-medium'>Cancle</button>
                                            </div>
                                        </div>
                                        <div className=' w-[25%] h-full bg-amber-300 border-l-2 border-dashed   rounded-l-box rounded-r-xl py-2 text-center shadow-md'>
                                            <h1 className=' text-3xl font-bold text-blue-900 mt-3 '>
                                                {
                                                    data?.date.split(' ')[0].slice(0, 3)
                                                }
                                            </h1>
                                            <h1 className=' text-[45px] font-bold text-black mt-[-5px]'>
                                                {
                                                    data?.date.split(' ')[1].slice(0, 2)
                                                }
                                            </h1>

                                            <h1 className=' text-2xl font-bold text-blue-900 mt-[-10px]'>
                                                {
                                                    data?.date.split(' ')[2]
                                                }
                                            </h1>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div> :
                    <div className=' h-full  text-center'>

                        <img className='mt-16 h-64 mx-auto' src="https://i.ibb.co/LkPpBBH/Realistic-3d-super-sale-instagram-post.png" alt="Image" />
                        <h1 className=' font-mono text-blue-700 font-medium'>Please! Book An Event.</h1>
                    </div>


            }
        </div>
    );
};

export default MyBoocking;