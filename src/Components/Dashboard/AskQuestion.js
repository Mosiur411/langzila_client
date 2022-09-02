import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
// import { useQuery } from 'react-query'
import { toast, ToastContainer } from 'react-toastify';
import auth from '../Firebase/firebase.init';
import askimg from '../assets/Ask.png'
// import Spinner from '../Spinner/Spinner';
import Answer from './Answer';
const AskQuestion = () => {
  const [user] = useAuthState(auth);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  // const { data, isLoading, refetch } = useQuery("tools", () => fetch("https://langzila.herokuapp.com/ask").then(res => res.json()));




  const imageStorageKey = '3a1e59ad1d3a8caba2efe37f45b560e9';

  // if (isLoading) {
  //   return <Spinner></Spinner>
  // }

  const onSubmit = async data => {
    const image = data.image[0]
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);

        if (result.success) {
          const img = result.data.url;
          const question = {
            tittle: data.tittle,
            question: data.question,
            image: img,
            email: user.email,
            name: user.name,
          }
          fetch('https://langzila.herokuapp.com/ask', {
            method: "POST",
            headers: {
              'content-type': 'application/json; charset=UTF-8',

            },
            body: JSON.stringify(question),
          })
            .then(res => res.json())
            .then(insered => {
              console.log(insered);
              toast.success("Your Question Added")
              reset()
            }
            )

        }
      }
      )


  }
  return (
    <div className='mx-12 pb-20 shadow-md border border-gray-100 lg:w-[900px] flex justify-center items-center'>
      <div className=''> <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-control text-center">
          <img className=' h-60' src={askimg} alt="askimg" />
          <label className="label">
            <span className="mb-2 font-bold text-2xl text-red-500 text-center mx-auto">Ask Your Question </span>

          </label>
          <input type="text" placeholder="Question tittle" name='tittle' className=" border py-2 px-3 mb-5 rounded max-w-xs "
            {...register("tittle", {
              required: {
                value: true,
                message: "tittle is Required"
              }
            })} />
          <textarea
            placeholder="Your Question Here"
            className=" border py-2 px-3 rounded max-w-xs "
            {...register("question", {
              required: {
                value: true,
                message: "Question is Required"
              }
            })} />


        </div>

        <input type="file"
          placeholder="Choose File Here"
          className="mt-5 items-center border py-2 px-3 rounded max-w-xs"
          {...register("image", {
            required: {

              value: true,
              message: "image is required"
            },

          })} />
        <br />
        <div className=' text-center '>
          <input type="submit" className='py-1.5 mt-5 px-3 bg-red-500 text-white rounded ' value={"Add Question"} />
        </div>
      </form>
      </div>
      <div>
        {

          <Answer></Answer>

        }
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AskQuestion;