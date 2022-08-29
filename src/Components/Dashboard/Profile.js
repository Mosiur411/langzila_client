// import React, { useEffect, useState } from 'react';
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { BiEdit } from 'react-icons/bi';
// import auth, { upload } from '../Firebase/firebase.init';
// import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
// import { FiEdit } from 'react-icons/fi';
// import { useForm } from 'react-hook-form';
// import Spinner from '../Spinner/Spinner';

// const Profile = () => {
//     const [user] = useAuthState(auth);
//     const [userInfo, setUserInfo] = useState({});
//     const { register, formState: { errors }, handleSubmit, reset } = useForm();
//     const [updateProfile, updating, error] = useUpdateProfile(auth);
//     const [displayName, setDisplayName] = useState('');
//     const [photoURL, setPhotoURL] = useState('https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png');
//     const [photo, setPhoto] = useState(null);
//     const [loading, setLoading] = useState(false);
 
//     const email = user.email;
//     console.log(email)
//     useEffect(() => {
//         fetch(`http://localhost:5000/userprofile/${email}`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 setUserInfo(data)
//             })

//     }, [])
//    if (updating) {
//     return <Spinner/>
//    }
// console.log(userInfo);

// function handleChange(e) {
//     if (e.target.files[0]) {

//       const image = e.target.files[0]
//       const formData = new FormData()
//     formData.append('image', image)

    
//     const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
//     fetch(url, {
//       method: "POST",
//       body: formData,
//     })
//       .then(res => res.json())
//       .then(result => {
//         setPhotoURL(result.data.url)
//         console.log(photoURL);
//         setPhoto(result.data.url)
//       })
//     }
//   }


//   const handleClick = async e=>{
//   await updateProfile({ displayName, photoURL });
//         alert('Updated profile');
   
//   }
//     const updateMyProfile = event => {
//         console.log(event);
//         event.preventDefault();
//         const updateProfile = {
//             name: user.displayName,
//             email: user.email,
//             desc: event.target.desc.value,
//             address: event.target.address.value,
//             phone: event.target.phone.value,
//             country: event.target.country.value,
//             age: event.target.age.value,
//             date: event.target.date.value,
//         }

//         const email = user.email
//         const url = `http://localhost:5000/userprofile/${email}`;
//         fetch(url, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(updateProfile)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log('success', data);
//                 alert('Update Successfully');
                
//                 event.target.reset();
//             })

//     };
//     const imageStorageKey = '3a1e59ad1d3a8caba2efe37f45b560e9';

//         const onSubmit = async data => {
//             const image = data.image[0]
//             const formData = new FormData()
//             formData.append('image', image)
        
            
//             const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
//             fetch(url, {
//               method: "POST",
//               body: formData,
//             })
//               .then(res => res.json())
//               .then( async result => {
//                 const photoURL = result.data.url;
//                 const displayName=data.target.name.value
//                 await updateProfile({ displayName, photoURL })
//                 toast("Profile updated")
//               })
       
        
//         }

//     return (
//         <div>
// <<<<<<< HEAD
//             <div className='mx-12 shadow-md border border-gray-100 lg:w-[900px] rounded-lg'>
//                 <div className='lg:flex flex-wrap justify-between'>
//                     <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
//                         <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
//                             <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
//                                 <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
//                                 <circle cx="12" cy="7" r="4"></circle>
//                             </svg>
//                         </div>
//                         <div className="flex flex-col items-center text-center justify-center">
//                             <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{user?.displayName}</h2>
//                             <div className="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
//                             <p className="text-base">
//                                 <lebel className='font-bold'>Describe Yourself</lebel>
//                                 <p>{user?.desc}</p>
// =======
//             <div className='mx-12 shadow-md border  border-gray-100 lg:w-[900px] rounded-lg'>
//                 <div className='lg:flex flex-wrap justify-between relative'>
//                     <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8 relative">
//                         <div class="w-20 h-20 rounded-full relative inline-flex items-center justify-center bg-gray-200 text-gray-400 ">
                          
//                            <div class="avatar">
//   <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//   <img src={user?.photoURL} alt="" />
//   </div>
// </div>
                     

// {/* <input onClick={(data)=>handleSubmit(data)} style={{display:"none"}} id="file-upload" type="file" name='img'/> */}

                            
//                         </div>
//                         <div class="flex flex-col items-center text-center justify-center">
//                             <h2 class="font-medium title-fonttext-gray-900 text-lg ">{user?.displayName}</h2>
//                             <div class="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
//                             <p class="text-base">
//                                 <lebel class='font-bold'>Describe Yourself</lebel>
//                                 <p>{userInfo?.desc}</p>
// >>>>>>> 26356b531be0cc4e840dae6133e29d80b5820feb
//                             </p>
//                         </div>
//                         <label for="my-modal1" class="">
//                             <BiEdit className='text-center absolute top-1 right-1 text-primary' />
// </label>
                    
//                     </div>
//                     <div className='lg:w-2/3  pr-6 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
//                         <div className='flex justify-between items-center '>
//                             <h1 className='mb-5 font-bold text-2xl'>Personal Information</h1>
//                             <label for="my-modal" className="flex items-center -mt-14 text-primary modal-button mb-2 font-medium text-lg w-full sm:w-auto text-center">Edit<BiEdit className='ml-1' /></label>
//                         </div>
//                         <hr className='py-3' />
//                         <div className="relative z-0 w-full mb-6 group">
//                             <lebel className='font-bold'>Email</lebel>
//                             <p>{user?.email}</p>
//                         </div>
//                         <div className="relative z-0 w-full mb-6 group">
//                             <lebel className='font-bold'>Address</lebel>
//                             <p>{userInfo?.address}</p>
//                         </div>
//                         <div className="relative z-0 w-full mb-6 group">
//                             <lebel className='font-bold'>Phone Number</lebel>
//                             <p>{userInfo?.phone}</p>
//                         </div>
//                         <div className="relative z-0 w-full mb-6 group">
//                             <lebel className='font-bold'>Country</lebel>
//                             <p>{userInfo?.country}</p>
//                         </div>
//                         <div className="relative z-0 w-full mb-6 group">
//                             <lebel className='font-bold'>Age</lebel>
//                             <p>{userInfo?.age}</p>
//                         </div>
//                         <div className="relative z-0 w-full group mb-1">
// <<<<<<< HEAD
//                             <lebel className='font-bold'>Birth Date</lebel>
//                             <p>{userInfo?.date}</p>
// =======
//                             <lebel class='font-bold'>Birth Date</lebel>
//                             <p>{userInfo?.Birthdate}</p>
// >>>>>>> 26356b531be0cc4e840dae6133e29d80b5820feb
//                         </div>
//                     </div>
                 
//                 </div>

//             </div>
//             <input type="checkbox" id="my-modal" className="modal-toggle" />

//             <div className="modal">
//                 <div className="modal-box">
//                     <form onSubmit={updateMyProfile}>
//                         <div className="relative z-0 w-full mb-6 group">
//                             <lebel className='font-bold'>Name</lebel>
//                             <input type="name" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none" value={user?.displayName} />
//                         </div>
//                         <div className="relative z-0 w-full mb-6 group">
// <<<<<<< HEAD
//                             <lebel className='font-bold'>Email</lebel>
//                             <input type="email" name="email" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={user?.email} />
//                         </div>
//                         <div className="relative z-0 w-full mb-6 group">
//                             <lebel className='font-bold'>Description</lebel>
//                             <input type="text" name="desc" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
// =======
//                             <lebel class='font-bold'>Email</lebel>
//                             <input type="email" name="email" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={user?.email} disabled/>
//                         </div>
//                         <div className="relative z-0 w-full mb-6 group">
//                             <lebel class='font-bold'>Description</lebel>
//                             <input type="text" name="desc" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" defaultValue={userInfo.desc} />
// >>>>>>> 26356b531be0cc4e840dae6133e29d80b5820feb
//                         </div>
//                         <div className="relative z-0 w-full mb-6 group">
//                             <input type="text" name="address" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" defaultValue={userInfo?.address} />
//                             <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
//                         </div>
//                         <div className="grid xl:grid-cols-2 xl:gap-6">
//                             <div className="relative z-0 w-full mb-6 group">
//                                 <input type="number" name="phone" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""defaultValue={userInfo?.phone} />
//                                 <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Phone Number</label>
//                             </div>
//                             <div className="relative z-0 w-full mb-6 group">
//                                 <input type="text" name="country" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" defaultValue={userInfo?.country} />
//                                 <label htmlFor="country" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City/Country</label>
//                             </div>
//                         </div>
//                         <div className="grid xl:grid-cols-2 xl:gap-6">
//                             <div className="relative z-0 w-full mb-6 group">
//                                 <input type="number" name="age" id="age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" defaultValue={userInfo?.age} />
//                                 <label htmlFor="age" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
//                             </div>
//                             <div className="relative z-0 w-full mb-6 group">
//                                 <input type="date" name="date" id="date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""defaultValue={userInfo?.Birthdate} />
//                                 <label htmlFor="date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Birth Date</label>
//                             </div>
//                         </div>
//                         <button type="submit" className="text-white bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Update</button>
//                     </form>
//                     <div className="modal-action">
//                         <label for="my-modal" className="btn">Close</label>
//                     </div>
//                 </div>
//             </div>




//             {/* pic modal */}
//             <input type="checkbox" id="my-modal1" class="modal-toggle" />

// <div class="modal">
//     <div class="modal-box">
//     <form >
//     <div className="relative z-0 w-full mb-6 group">
//                 <lebel class='font-bold'>Name</lebel>
//                 <input    onChange={(e) => setDisplayName(e.target.value)} type="name" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none" defaultValue={user?.displayName} />
//             </div>
//             <p>Update Your Profile Images</p>
//             <input type="file" onChange={handleChange} />
//       <button disabled={loading || !photo}  className="btn btn-primary" onClick={handleClick}> 
       
//     Update Profile</button>
//         </form>
//         <div class="modal-action">
//             <label for="my-modal1" class="btn">Close</label>
//         </div>
//     </div>
// </div>
//         </div>

//     );
// };

// export default Profile;