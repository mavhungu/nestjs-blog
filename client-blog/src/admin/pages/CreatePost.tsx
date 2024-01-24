import React, { useState, ChangeEvent, FormEvent } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import slugify from 'react-slugify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSnackbar } from 'notistack';

import Wrapper from "../components/Wrapper";

interface FormValues {
  title: string;
  image: string;
  summary: string;
  postBody: string;
  slug: string;
  categoryId: string;
  tagId: string;
  published: boolean | string | undefined;
  authorId: string;
}

const CreatePost = ()=> {

  const [formData, setFormData] = useState<FormValues>({title: '', image: '', summary: '', postBody: '', slug:'', categoryId:'',tagId: '', published: undefined, authorId:'' });
  const { enqueueSnackbar } = useSnackbar();

  // handle input change funtion
  const handleInputChange = (
    field: keyof FormValues,
    value: string | boolean | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>)=>{
      if (field === 'title') {
        const newSlug = slugify(value as string);
        setFormData((prevData) => ({
          ...prevData,
          [field]: value,
          slug: newSlug,
        } as FormValues)); // Explicitly define the type for the update function
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [field]: typeof value === 'string' || typeof value === 'boolean' ? value : value.target.value,
        } as FormValues)); // Explicitly define the type for the update function
      }
  };

  const handleFullBodyChange = (value: string) => {
    handleInputChange('postBody', value);
  };

  // Submit function
  const handleSubmit = async(e: FormEvent)=>{
    e.preventDefault();
    // Perform form validation
    const errors: Partial<FormValues> = {};

    // Title validation
    if (formData.title.trim() === '') {
      errors.title = 'Title is required';
    }

    // Add additional validation for other fields as needed
    if (Object.keys(errors).length > 0) {
      // Display validation errors as notifications
      Object.values(errors).forEach((error) => {
        enqueueSnackbar(error as string, { variant: 'error' });
      });
      return;
    }

    // Convert the published value to a boolean before sending it to the backend
    const publishedValue = formData.published === 'true';
    // Sending form data to the backend
    const sendDataToBackend = {
      ...formData,
      published: publishedValue,
    };

    try{
      const response = await axios.post("admin/data/post/add",sendDataToBackend,{withCredentials:true});
      console.log(response);
      // Check for success or error messages in the response
      if (response.data.statusCode === 200) {
        // Successful response from the backend
        enqueueSnackbar(response.data.message, { variant: 'success' });

        // Clear the form after successful submission
        setFormData({
          title: '', image: '', summary: '', postBody: '', slug:'', categoryId:'',tagId: '', published: undefined, authorId:''
        });
      } else {
        // Error response from the backend
        //console.log(response.data);
        enqueueSnackbar(response.data.message, { variant: 'error' });
      }
    } catch(error){
      // Handle error and display error notification
      console.error('Error submitting form:', error);
      enqueueSnackbar('An error occurred while submitting the form', { variant: 'error' });
    }
  }

  return (
    <Wrapper>
      <div className='container mx-auto mt-2'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col p-3'>
            <div className=''>
              <input type='text' name='title' value={formData.title} onChange={(e) => handleInputChange('title', e.target.value)} className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border' placeholder='Enter title' />
            </div>
            <div className='mt-5'>
              <input type='text' name='slug' value={formData.slug} onChange={(e) => handleInputChange('slug', e.target.value)} className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border' placeholder='Enter slug' />
            </div>
            <div className='mt-5'>
              <input type='text' name='image' value={formData.image} onChange={(e) => handleInputChange('image', e.target.value)} className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border' placeholder='Enter image' />
            </div>
            <div className='mt-5'>
              <input type='text' name='summary' value={formData.summary} onChange={(e) => handleInputChange('summary', e.target.value)} className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border' placeholder='Enter summary' />
            </div>
            <div className='mt-5'>
              <input type='text' name='authorId' value={formData.authorId} onChange={(e) => handleInputChange('authorId', e.target.value)} className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border' placeholder='Enter authorId' />
            </div>
            <div className='mt-5'>
              <input type='text' name='tagId' value={formData.tagId} onChange={(e) => handleInputChange('tagId', e.target.value)} className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border' placeholder='Enter tagId' />
            </div>
            <div className='mt-5'>
              <input type='text' name='categoryId' value={formData.categoryId} onChange={(e) => handleInputChange('categoryId', e.target.value)} className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border' placeholder='Enter categoryId' />
            </div>
            <div className='mt-5'>
              <ReactQuill
                theme="snow"
                value={formData.postBody}
                onChange={handleFullBodyChange}
                placeholder={'Write the post content...'}
              />
            {/* <div className='mt-5'>
              <input type='text' name='published' value={formData.published} onChange={(e) => handleInputChange('published', e.target.value)} className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border' placeholder='Enter published' />
            </div> */}
            <div className="mt-5">
              <select
                value={formData.published === true ? 'true' : formData.published === false ? 'false' : ''}
                onChange={(e) => handleInputChange('published', e)}
              >
                <option value="">Select</option>
                <option value="false">Not Published</option>
                <option value="true">Published</option>
              </select>
            </div>
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
