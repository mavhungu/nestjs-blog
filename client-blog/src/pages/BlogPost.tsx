import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import apiClient from '../services/api-service';
import moment from 'moment';
import { Wrapper } from '../components';
import { blogPost } from '../interfaces';

import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const BlogPost = ()=>{
  
  //const rapid_key = process.env.REACT_APP_RAPID_API_KEY || '';
  //Get param id/value
  let { id } = useParams();

  // const [tagId,setTagName] = useState('');
  // const [catagoryId,setCategoryName] = useState('');
  const [title,setTitle] = useState('');
  const [image,setImage]= useState('');
  const [postBody,setPostBody] = useState('');
  const [createdAt,setCreatedAt] = useState('');
  //const [adion, setAudio] = useState('');

  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);

  // // const [text, setText] = useState('');
  // // const [speechId, setSpeechId] = useState('');
  // // const [audioUrl, setAudioUrl] = useState('');
  // // const [isPlaying,setIsPlaying] = useState(false);
  // // const [overallTime,setOverallTime] = useState<number>(Number);

  // const postTextToSpeechApi = async (text:string)=>{
  //   try{
  //     const response = await apiClient.post<postTextToSpeech>("https://large-text-to-speech.p.rapidapi.com/tts",{text},{
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'X-RapidAPI-Key': rapid_key,
  //       }
  //     });
  //     if(response.status === 200){
  //       setSpeechId(response.data.id);
  //       fetchSpeech(response.data.id);
  //     }else{
  //       console.log('Text-to-speech API request failed');
  //     }
  //   }catch(error){
  //     console.log('An error accured while communicating', error);
  //   }
  // };

  // const fetchSpeech = async (data: string)=>{
  //   try {
  //     const response = await fetch(`https://large-text-to-speech.p.rapidapi.com/tts?id=${data}`, {
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Host': 'large-text-to-speech.p.rapidapi.com',
  //         'X-RapidAPI-Key': rapid_key
  //       }
  //     });
  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log("results using fetch ",result);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   const options = {
  //     method: 'GET',
  //     url: 'https://large-text-to-speech.p.rapidapi.com/tts',
  //     params: {id: data},
  //     headers: {
  //       'X-RapidAPI-Host': 'large-text-to-speech.p.rapidapi.com',
  //       'X-RapidAPI-Key': rapid_key
  //     }
  //   };
    
  //   if(data){
  //     axios.request<getTextToSpeech>(options).then(function (response) {
  //       console.log("getTextToSpeech : ",response.data);
  //       setAudioUrl(response.data.url);
  //       setOverallTime(response.data.job_time);
  //     }).catch(function (error) {
  //       console.error(error);
  //     });
  //   }
  // };

  // const togglePlay = ()=>{
  //   setIsPlaying((prevIsPlaying)=> !prevIsPlaying);
  // }

  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;
    (
      async()=>{
        setLoading(true);
        const { data } = await apiClient.get<blogPost>(`/blog-post/${id}`, { signal });
        // const categoryName = await axios.get<Category>(`/blog-post/category/${data.categoryId}`, { signal });
        // const tagName = await axios.get<Tag>(`/blog-post/tag/${data.tagId}`, { signal });
        setTimeout(()=>{
          setLoading(false);
        },3000);

        if(!data) {
          setError('Unable to find requested data');
        }
          //setText(data.postBody);
          setTitle(data.title);
          setImage(data.image);
          setCreatedAt(moment(data.createdAt).format('MMM Do, YYYY'));
          setPostBody(data.postBody);
          // setCategoryName(categoryName.data.name);
          // setTagName(tagName.data.name)
          //postTextToSpeechApi(data.postBody);
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
            <div className='w-full sm:w-full md:w-full lg:w-4/5'>
              <div className="px-12 flex-col justify-center">
                <div className="mb-16">
                  <h1 className="text-5xl mb-4 font-bold leading-[50px] text-blacks capitalize font-xl">{title}</h1>
                  <div className="w-6 h-[3px] mt-10 mb-[60px] bg-primary-600"/>
                  <div className="flex w-full space-x-6 items-center">
                    <img className="h-[75px] w-auto rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="d" />
                      <div>
                        <h3 className="text-base font-semibold leading-none text-gray-900 text-undeline">Leslie Alexander</h3>
                        <div className="flex">
                          <p className="text-sm font-normal leading-[25px]">{createdAt}</p>
                        </div>
                        <div className="flex justify-center items-center gap-x-3">
                          <Link to="#" style={{borderRadius:'50%', border: '1px solid rgb(76,15,251)',padding: '8px',}} className='bg-blue-400'><FaLinkedinIn style={{color:'blue'}}/></Link>
                          <Link to="#" style={{borderRadius:'50%', border: '1px solid rgb(76,15,251)',padding: '8px',}}><BsTwitter style={{color: 'red'}}/></Link>
                          <Link to="#" style={{borderRadius:'50%', border: '1px solid rgb(76,15,251)',padding: '8px',}} className={'bg-blue-600 text-white'}><FaFacebook /></Link>
                          <Link to="#" style={{borderRadius:'50%', border: '1px solid rgba(245, 31, 59, 0.61)',padding: '8px',}} className='bg-rose-400 text-white'><AiOutlineInstagram /></Link>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="container mx-auto px-auto">
                  <div className="max-w-[700px] block">
                    <img src={image} alt={title} className="w-full relative inset-0 object-center md:object-center"/>
                  </div>
                </div>
                  <div className="mt-16">
                    <p className="">{postBody}</p>
                  </div>
                    {/* <div>
                      <button onClick={togglePlay}>{isPlaying ? <AiOutlinePause/> : <BsPlay/>}</button>
                      <span>{overallTime}</span>
                    </div>
                    <audio controls autoPlay={isPlaying}>
                      <source src={audioUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio> */}
              </div>
            </div>

            {/* <div className='hidden lg:block w-1/5 ml-2'>
              <div className="flex flex-col">
                <div className="bg-primary-600 flex justify-between items-center mb-2 py-2">
                  <p className="text-white text-center ml-2">Category</p>
                </div>
                <div className="mb-2 text-center">
                  <p className="mb-2">{catagoryId}</p>
                </div>

                <div className="bg-primary-600 flex justify-between items-center py-2">
                  <p className="text-white text-center ml-2">Tag</p>
                </div>
                <div className="text-center">
                  <p className="my-2">{tagId}</p>
                </div>
              </div>
            </div> */}
          </div>
        )
      }
    </Wrapper>
  )
}

export default BlogPost;