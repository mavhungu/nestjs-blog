import { Aside, Footer  } from ".";


const Main = ()=>{
  return(
    <>
      <main className="flex justify-bebween bg-dimWhite">
        <Aside />
				<div className="bg-primary h-[100%] pt-4 px-4 w-full">
					<p className="text-white">Mavhungu TGB</p>
				</div>
      </main>
      <Footer />
    </>
  )
}
export default Main;