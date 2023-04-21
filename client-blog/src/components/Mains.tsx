import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Aside, Footer, Wrapper  } from ".";

interface PostData {
	id: string;
	title: string;
	summary: string;
	postBody: string;
	createdAt: Date;
	updatedAt: Date;
	categoryId: string;
	tagId: string;
	image: string;
	authorId: string;
	slug: string;
	published: boolean;

}


const Main = ()=>{
	const [getPost,setPost] = useState<PostData[]>([]);
	const [loader,setLoader] = useState(false);
	const [noPost, setNoPost] = useState(false);

  useEffect(() => {
    (
      async () => {
        setLoader(true);
        const { data } = await axios.get<PostData[]>("http://localhost:5000/api/blog-post");
        setTimeout(() => {
          setLoader(false);
        },3000);
        console.log(data);
        const datas = data;
          if(datas.length === 0){
            setNoPost(true);
          };
            setPost(datas);
      }
    )();
  }, []);

  return(
    <Wrapper>
			{
				loader?
					<div style={{position: 'fixed', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>
						<p style={{display: 'block',margin: '0 auto', borderColor: 'red'}}>Loadin....</p>
					</div>
				:
					<div className="bg-primary h-[100%] pt-4 px-4 w-full">
						<p className="text-white">Mavhungu TGB</p>
						<p className="bg-green-80">Ronewa Mavhungu</p>
							{
								getPost.map((post)=>(
									<div className='' key={post.id}>
										<img src={post.image} alt={post.title} />
										<h3>{post.title}</h3>
										<p style={{color: 'ghostwhite'}}>{post.summary}</p>
										<Link to={`/blog-post/${post.slug}`}>read more</Link>
									</div>
								))
							}
					</div>
			}
    </Wrapper>
  )
}
export default Main;