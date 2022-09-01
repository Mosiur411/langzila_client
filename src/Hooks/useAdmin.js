import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {

console.log(user);

  const [admin, setAdmin] = useState(false)
  const [adminLoading, setadminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email


    if (email) {
      fetch(`http://localhost:5000/admin/${email}`, {
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          // 'authorization': `Bearer, ${localStorage.getItem('accessToken')}`
        },
      })

        .then(res => res.json())
        .then(data => {
          console.log(data.admin)
          setAdmin(data.admin)
          setadminLoading(false)
        })
    }


  }, [admin])

  return [admin, adminLoading];
};

export default useAdmin;