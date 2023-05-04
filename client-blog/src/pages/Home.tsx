import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Wrapper } from '../components';
import { PostSummary } from '../interfaces/post';

const Home = ()=>{

	const [getPost,setPost] = useState<PostSummary[]>([]);
	const [loader,setLoader] = useState(false);
	const [noPost, setNoPost] = useState(false);

  useEffect(() => {
    (
      async () => {
        setLoader(true);
        const { data } = await axios.get<PostSummary[]>("http://localhost:5000/api/blog-post");
        setTimeout(() => {
          setLoader(false);
        },3000);
        console.log(data);
          if(data.length === 0){
            setNoPost(true);
          };
            setPost(data);
      }
    )();
  }, []);

  return (
    <Wrapper>
      {
				loader?
					<div style={{position: 'fixed', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>
						<p style={{display: 'block',margin: '0 auto', borderColor: 'red'}}>Loadin....</p>
					</div>
				:(
					noPost ?
						<div className='flex align-center pb-4 p-[10px] gap-2'>
							<p className="text-3xl justify-center">No data has been found at the moment</p>
						</div>
					:
          <div className='grid pb-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-[10px] gap-2'>
            {
              getPost.map((post)=>(
                <div className='rounded overflow-hidden px-3 pb-4' key={post.id}>
                  <img src={post.image} alt={post.title} />
                  <h2 className='mx-2 mt-2 text-gray-700 font-bold mb-2'>{post.title}</h2>
                  <p className='mx-2 mb-2 text-white-400'>{post.summary}</p>
                  <Link to={`/blog-post/${post.slug}`} className='mx-2 pb-2 text-primary-600 hover:text-sky-400'>read more</Link>
                </div>
              ))
            }
          </div>
				)
      }
    </Wrapper>
  )
}

export default Home;