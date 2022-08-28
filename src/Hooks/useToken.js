import React, { useEffect, useState } from 'react';

const useToken = (user) => {
  const [Token, setToken] = useState('')
  console.log(user);

  const email = user?.email
  console.log(email);

  const currentUser = { email: email };


  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      body: JSON.stringify({
        currentUser,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToken(data.acknowledged);
        // if (user) {
        //   localStorage.setItem('accessToken', data.accessToken)
        //   setToken(data.accessToken);

        // }


      })

  }, [user])




  return [Token, setToken]
};

export default useToken;