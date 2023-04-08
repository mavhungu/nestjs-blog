import { useState, useEffect } from 'react';
import axios from 'axios';
import { Aside, Footer  } from ".";


const Main = ()=>{
	const [getPost,setPost] = useState([]);
	const [loader,setLoader] = useState(false);
	const [noPost, setNoPost] = useState(false);

  useEffect(() => {
    (
      async () => {
        setLoader(true);
        const {data} = await axios.get("http://localhost:5000/api/blog-post");
        setTimeout(() => {
          setLoader(false)
        },3000);
        console.log(data);
        const datas = data;
          if(datas.length === 0){
            setNoPost(true)
          };
            setPost(datas)
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
				</div>
      </main>
      <Footer />
    </>
  )
}
export default Main;