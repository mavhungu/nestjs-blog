import React, { useState, ChangeEvent, FormEvent } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Wrapper from "../components/Wrapper";

interface FormValues {
  title: string;
  picture: string;
  summary: string;
  fullbody: string;
}

const CreatePost = ()=> {
  const [formData, setFormData] = useState<FormValues>({title: '', picture: '', summary: '', fullbody: ''});
  const handleInputChange = (
    field: keyof FormValues,
    value: string | ChangeEvent<HTMLTextAreaElement>)=>{
    setFormData((prevData) => ({
      ...prevData,
      [field]: value ,
    }));
  };

  const handleFullBodyChange = (value: string) => {
    handleInputChange('fullbody', value);
  };

  const handleSubmit = async(e: FormEvent)=>{
    e.preventDefault();
    try{
      //const result = await axios.post(`/`, formData);
      console.log('return result are', formData);
    } catch(error){
      console.log('Something went wrong', error);
    }
  }

  return (
    <Wrapper>
      <div className='container mx-auto mt-2'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col p-3'>
            <div className=''>
              <input type='text' name='title' value={formData.title} onChange={(e) => handleInputChange('title', e.target.value)} className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border' placeholder='Enter name' />
            </div>
            <div className='mt-5'>
              <input type='text' name='picture' value={formData.picture} onChange={(e) => handleInputChange('picture', e.target.value)} className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border' placeholder='Enter name' />
            </div>
            <div className='mt-5'>
              <input type='text' name='summary' value={formData.summary} onChange={(e) => handleInputChange('summary', e.target.value)} className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border' placeholder='Enter name' />
            </div>
            <div className='mt-5'>
              <ReactQuill
                theme="snow"
                value={formData.fullbody}
                onChange={handleFullBodyChange}
                placeholder={'Write the post content...'}
              />
            </div>
            <div className='mt-5'>
              <button className='hover:bg-gray-700 focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800' type='submit'>Save</button>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

// CreatePost.propTypes = {}

export default CreatePost;
