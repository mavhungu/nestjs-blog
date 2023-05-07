import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { Wrapper } from '../components';
import { blogPost, Category, Tag } from '../interfaces';

const BlogPost = ()=>{

  let { id } = useParams();
  moment.locale();
  moment().format();

  const [autherId,setAuthorId] = useState('');
  const [tagId,setTagName] = useState('');
  const [catagoryId,setCategoryName] = useState('');
  const [title,setTitle] = useState('');
  const [image,setImage]= useState('');
  const [postBody,setPostBody] = useState('');
  const [createdAt,setCreatedAt] = useState('');

  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;
    (
      async()=>{
        setLoading(true);
        const { data } = await axios.get<blogPost>(`http://localhost:5000/api/blog-post/${id}`, { signal });
        const categoryName = await axios.get<Category>(`http://localhost:5000/api/blog-post/category/${data.categoryId}`, { signal });
        const tagName = await axios.get(`http://localhost:5000/api/blog-post/tag/${data.tagId}`, { signal });
        setTimeout(()=>{
          setLoading(false);
        },3000);
          setTitle(data.title);
          setImage(data.image);
          setCategoryName(categoryName.data.name);
          setTagName(tagName.data.name)
          setCreatedAt(moment(data.createdAt).format('MMM DD'));
          setPostBody(data.postBody);
      }
      )();
      return ()=> { controller.abort(); };
  },[id]);

  return (
    <Wrapper>
      {
      loading ?
        <div style={{position: 'fixed', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}} id='splash'>
          <svg className="gear" style={{width:"64px",marginBottom:0,paddingBottom:0}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path id="p" fill="#fdb" d="M94.1 58.8c.6-2.8.9-5.8.9-8.8s-.3-6-.9-8.8l-11.7-.4c-.7-2.6-1.7-5-3-7.3l8-8.5c-3.3-4.9-7.5-9.2-12.5-12.5l-8.5 8c-2.3-1.3-4.7-2.3-7.3-3l-.3-11.6C56 5.3 53 5 50 5s-6 .3-8.8.9l-.4 11.7c-2.6.7-5 1.7-7.3 3l-8.5-8c-4.9 3.3-9.2 7.5-12.5 12.5l8 8.5c-1.3 2.3-2.3 4.7-3 7.3l-11.6.3C5.3 44 5 47 5 50s.3 6 .9 8.8l11.7.4c.7 2.6 1.7 5 3 7.3l-8 8.5c3.3 4.9 7.5 9.2 12.5 12.5l8.5-8c2.3 1.3 4.7 2.3 7.3 3l.4 11.7c2.7.5 5.7.8 8.7.8s6-.3 8.8-.9l.4-11.7c2.6-.7 5-1.7 7.3-3l8.5 8c4.9-3.3 9.2-7.5 12.5-12.5l-8-8.5c1.3-2.3 2.3-4.7 3-7.3l11.6-.3zM50 66.9c-9.3 0-16.9-7.6-16.9-16.9S40.7 33.1 50 33.1 66.9 40.7 66.9 50 59.3 66.9 50 66.9z"></path>
          </svg>
          <svg className="gear" style={{width:"64px",margin:"64px 0 0 -12px",animationDirection:"reverse",paddingTop:0,marginTop:0}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <use href="#p"></use>
          </svg>
        </div>
      :(
        error ?
          <div className="p-[10px] justify-center items-center align-center">
            <p className="text-white leading-40">{error}</p>
          </div>
        :
          <div className="w-full flex p-[10px]">
            <div className='w-full sm:w-full md:w-full lg:w-4/5 rounded border border-gray-200'>
              <div className="p-2">
                <img src={image} alt={title} className="w-18 container mx-auto"/>
                  <div className="flex justify-between items-center my-2">
                    <h2 className="text-3xl bold leading-none mt-3">{title}</h2>
                    <p>{createdAt}</p>
                  </div>
                <p className="">{postBody}</p>
              </div>
            </div>
            <div className='hidden lg:block w-1/5 rounded border border-gray-200 ml-2'>
              <p className="leading-none text-gray">Tag and Category section</p>
              <div className="flex flex-col">
                <p className="my-2">{tagId}</p>
                <p className="mb-2">{catagoryId}</p>
              </div>
            </div>
          </div>
        )
      }
    </Wrapper>
  )
}

export default BlogPost;