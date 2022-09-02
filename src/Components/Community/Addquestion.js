import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../Firebase/firebase.init';
import Navbar from '../Home/Navbar/Navbar';
import './Addquestion.css'
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import EditorToolbar, { modules, formats } from "./EditorToolbar";
const Addquestion = () => {
  const [user] = useAuthState(auth);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  // const { data, isLoading, refetch } = useQuery("tools", () => fetch("https://langzila.herokuapp.com/ask").then(res => res.json()));

  const [valuequil, setValuequil] = useState('')
  const navigate = useNavigate()
  const ENTER = 13;
  const COMMA = 188;
  const BACKSPACE = 8;
  const SPACE = 32;
  const [tags, setTags] = useState(["Bangla", "English", "Hindi"]);
  const [value, setValue] = useState("");

  const handleKeyUp = (e) => {
    const key = e.keyCode;
    if (key === ENTER || key === COMMA || key === SPACE) {
      addTag();
    }
  };

  const handleKeyDown = (e) => {
    const key = e.keyCode;
    if (key === BACKSPACE && !value) {
      editTag();
    }
  };
  const handleclose = (e) => {
    editTag()
  }
  const addTag = () => {
    let tag = value.trim().replace(/,/g, "");
    if (!tag) return;
    setTags([...tags, tag]);
    setValue("");
  };

  const editTag = () => setValue(tags.pop());
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
        const newtags = tags.reduce((a, v) => ({ ...a, [v]: v }), {})
        if (result.success) {
          const img = result.data.url;
          const topic = {
            tittle: data.tittle,
            disc: value,
            tags: newtags,
            image: img,
            email: user.email,
            name: user.displayName,
            vote: 0,
            zone: new Date(),
            date: new Date().getUTCDate(),
            month: new Date().toLocaleString(
              'default', { month: 'long' }),
            time: new Date().toLocaleTimeString()
          }
          fetch('https://langzila.herokuapp.com/topic', {
            method: "POST",
            headers: {
              'content-type': 'application/json; charset=UTF-8',

            },
            body: JSON.stringify(topic),
          })
            .then(res => res.json())
            .then(insered => {
              console.log(insered);
              toast.success("Your Question Added")
              reset()
              navigate('/forum')
            }
            )

        }
      }
      )
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-6xl mb-10 mx-auto mt-9 border shadow-sm py-5 '>
        <div className='px-10'>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control text-center">
              <label className="label">
                <span className="label-text text-xl font-bold">Title <span className='text-xs text-red-600  '>REQUIRED</span></span>
              </label>
              <input type="text" name='tittle' className="   rounded-none  mb-5 border border-2 border-primary p-5"
                {...register("tittle", {
                  required: {
                    value: true,
                    message: "tittle is Required"
                  }
                })} />

              <label className="label">
                <span className="label-text text-xl font-bold"> <span className='text-xs text-red-600  '>REQUIRED</span></span>
              </label>
              <EditorToolbar toolbarId={'t1'} />
              <ReactQuill
                id='editor' style={{
                  border: "1px solid #fe4854", color: "black"
                }}
                placeholder="Write here your Discription"
                theme="snow"

                value={valuequil}
                onChange={setValuequil} modules={modules('t1')}
                formats={formats} />


            </div>
            <label className="label">
              <span className="label-text text-xl font-bold"> <span className='text-xs text-green-600  '>OPTIONAL</span></span>
            </label>
            <div className='containertag'>
              {tags.map((tag, index) => (
                <div key={index} className="tag flex justify-center items-center gap-3 bg-primary text-white">
                  {tag}<AiOutlineCloseCircle onClick={handleclose} />
                </div>
              ))}
              <input
                className='inputtag />

                '
                type="text"
                placeholder="Add Tag and Press Space..."
                autoFocus
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyUp={handleKeyUp}
                onKeyDown={handleKeyDown}
              />
            </div>
            <input type="file"
              placeholder="Choose File Here"
              className="mt-5 items-center max-w-xs"
              {...register("image", {
                required: {

                  value: true,
                  message: "image is required"
                },

              })} />
            <div className='flex justify-center items-center'>

              <input type="submit" className='btn btn-primary  text-white w-full mt-5 ' value={"Submit Question"} />
            </div>
          </form>
        </div>


      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Addquestion;