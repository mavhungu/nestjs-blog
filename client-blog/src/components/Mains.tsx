import { useState, useEffect } from 'react';
import axios from 'axios';
import { Aside, Footer  } from ".";

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
    <>
      <main className="flex justify-bebween bg-dimWhite">
        <Aside />
				<div className="bg-primary h-[100%] pt-4 px-4 w-full">
					<p className="text-white">Mavhungu TGB</p>
					<p className="bg-green-80">Ronewa Mavhungu</p>
					{getPost.map((post)=>(
						<div className='' key={post.id}>
							<h3>{post.title}</h3>
							<p style={{color: 'ghostwhite'}}>{post.postBody}</p>
						</div>
					))
					}
				</div>
      </main>
      <Footer />
    </>
  )
}
export default Main;