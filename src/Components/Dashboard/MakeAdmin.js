import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../Spinner/Spinner';
import User from './User';

const MakeAdmin = () => {
 const { isLoading, data: role, refetch } = useQuery('user', () =>
 fetch('http://localhost:5000/roleuser', {
   method: "GET",
 }).then(res => res.json())
)
if (isLoading) {
 return <Spinner></Spinner>;
}
// const hadndleAdmin=()=>{
//   fetch(`http://localhost:5000/user/admin/${data.email}`, {
//       method: "PUT",
//       headers: {
//         authorization: `Bearer ${localStorage.getItem('accessToken')}`
//       }
//     })
//       .then(res => {
//         if (res.status === 403) {
//           toast.error("You are not a admin dont do anything")
//         }
//         return res.json()
//       })
//       .then(data => {
//         console.log(data);

//         if (data.modifiedCount > 0) {
//           refetch()
//           toast.success("Your Admin added")
//         }

//       }
//       )

  
// }

  return (
    <div>
      <h1 className='text-5xl text-primary font-bold text-center'>Here Our All User</h1>
      <div className='container mx-auto mt-6 w-[90%]'>
           {
            role.map((roller,index)=><User roller={roller} refetch={refetch} index={index}/> )
           }
      </div>
    </div>
  );
};

export default MakeAdmin;