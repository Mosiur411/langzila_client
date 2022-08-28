import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const User = ({roller,index,refetch}) => {
  const hadndleAdmin=()=>{
    fetch(`http://localhost:5000/user/admin/${roller.email}`, {
        method: "PUT",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          refetch()
        }
        )
  
    
  }
  return (
    <div>
       <div class="">
  <table class="table w-full">
    <thead>
      <tr>
        <th>No</th>
        <th>email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    <tr className=''>
      
        <td>{index+1}</td>
        <td>{roller?.email}</td>
       
          {
           roller.role ? <><td><button disabled className='btn btn-primary  '>Admin </button></td></>:<td><button className='btn btn-primary' onClick={hadndleAdmin}>Make Admin</button></td>
          }
        
      </tr>
    </tbody>
    <ToastContainer/>
  </table>
</div>
    </div>
  );
};

export default User;