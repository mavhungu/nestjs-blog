import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiClient, { CanceledError, AxiosError } from '../services/api-service';
import moment from 'moment';
import { Wrapper } from '../components';
import { PostSummary } from '../interfaces';
import { BsArrowRight } from 'react-icons/bs';

const Home = ()=>{

	const [getPost,setPost] = useState<PostSummary[]>([]);
	const [loader,setLoader] = useState(false);
	const [noPost, setNoPost] = useState(false);
  const [error,setError] = useState('');

  useEffect(() => {
    (
      // async () => {
      //   setLoader(true);
      //   const { data } = await apiClient.get<PostSummary[]>("/blog-post");
      //   setTimeout(() => {
      //     setLoader(false);
      //   },3000);
      //     if(data.length === 0){
      //       setNoPost(true);
      //     };
      //       setPost(data);
      // }
      async () =>{
        const controller = new AbortController();
        try{
          setLoader(true);
          const { data } = await apiClient.get<PostSummary[]>("/blog-post", {signal: controller.signal});
          if(data.length === 0){
            setNoPost(true);
            setLoader(false);
          }
          setPost(data);
          setLoader(false);
        }
        catch(err){
          if( err instanceof CanceledError) return;
          setError((err as AxiosError).message);
          setLoader(false);
        }
        return ()=> { controller.abort(); };
      }
    )();
  }, []);

  return (
    <Wrapper>
      {
				loader?
					<div style={{position: 'fixed', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>
						<p style={{display: 'block',margin: '0 auto', borderColor: 'red'}}>
              <svg className="gear" style={{width:"64px",marginBottom:0,paddingBottom:0}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path id="p" fill="#fdb" d="M94.1 58.8c.6-2.8.9-5.8.9-8.8s-.3-6-.9-8.8l-11.7-.4c-.7-2.6-1.7-5-3-7.3l8-8.5c-3.3-4.9-7.5-9.2-12.5-12.5l-8.5 8c-2.3-1.3-4.7-2.3-7.3-3l-.3-11.6C56 5.3 53 5 50 5s-6 .3-8.8.9l-.4 11.7c-2.6.7-5 1.7-7.3 3l-8.5-8c-4.9 3.3-9.2 7.5-12.5 12.5l8 8.5c-1.3 2.3-2.3 4.7-3 7.3l-11.6.3C5.3 44 5 47 5 50s.3 6 .9 8.8l11.7.4c.7 2.6 1.7 5 3 7.3l-8 8.5c3.3 4.9 7.5 9.2 12.5 12.5l8.5-8c2.3 1.3 4.7 2.3 7.3 3l.4 11.7c2.7.5 5.7.8 8.7.8s6-.3 8.8-.9l.4-11.7c2.6-.7 5-1.7 7.3-3l8.5 8c4.9-3.3 9.2-7.5 12.5-12.5l-8-8.5c1.3-2.3 2.3-4.7 3-7.3l11.6-.3zM50 66.9c-9.3 0-16.9-7.6-16.9-16.9S40.7 33.1 50 33.1 66.9 40.7 66.9 50 59.3 66.9 50 66.9z"></path>
              </svg>
              <svg className="gear" style={{width:"64px",margin:"64px 0 0 -12px",animationDirection:"reverse",paddingTop:0,marginTop:0}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <use href="#p"></use>
              </svg>
            </p>
					</div>
				:(
          error ?
            <div className="p-[10px] justify-center items-center align-center">
              <p className="text-white leading-40">{error}</p>
            </div>
          :(
					noPost ?
						<div className='flex align-center pb-4 p-[10px] gap-2'>
							<p className="text-3xl justify-center">No data has been found at the moment</p>
						</div>
					:
          <div className='grid pb-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-[10px] gap-6'>
            {
              getPost.map((post)=>(
                <div className='rounded overflow-hidden pb-4 mb-6 bg-white-500 shadow bordered' key={post.id}>
                  <img src={post.image} alt={post.title}  className='w-full'/>
                    <div className="mx-4">
                      <p className="my-4 text-sm font-san font-normal">{moment(post.updatedAt).format('MMM Do, YYYY')}</p>
                      <h5 className='mt-2 font-bold font-xl font-san text-blacks mb-5 capitalize'>{post.title}</h5>
                      <p className='mb-4 text-white-400'>{post.summary}</p>
                      <Link to={`/blog-post/${post.slug}`} className='flex pb-2 text-primary-600 hover:text-primary-400'>
                        <span className="capitalize">read more</span>
                        <span className="ml-1 transition ease-in-out hover:translate-x-6 hover:scale-x-110 duration-300"><BsArrowRight/></span>
                      </Link>
                    </div>
                </div>
              ))
            }
          </div>
          )
				)
      }
    </Wrapper>
  )
}

export default Home;