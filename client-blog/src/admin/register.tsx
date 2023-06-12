import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Register = () => {
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');

	const registerUser = async (e:any)=>{
		e.preventDefault();
		const user = {email,password};
		const {data} = await axios.post("admin/register",user,{withCredentials:true});
		console.log(data);

		}
  return (
	<div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
		<div className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" />
			<div className="absolute inset-0 bg-[url('img/logo.png')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
				<div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
					<div className="w-full">
						<div className="text-center">
							<h1 className="text-3xl font-semibold text-gray-900">Welcome Home</h1>
							<p className="mt-2 text-gray-500">Register in below to create an account</p>
						</div>
						<div className="mt-8">
							<form onSubmit={registerUser} noValidate className="group">
								<div className="mb-6">
									<label for-email="email" className="mb-2 block text-sm text-gray-600">Email Address</label>
									<input type="email" name="email" id="email" placeholder="you@company.com" onChange={(e)=>setEmail(e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2.5 placeholder-gray-300 shadow shadow-gray-100 focus:border-gray-500 focus:outline-none valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400" autoComplete="off" required pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
									<span className="mt-2 hidden text-sm text-red-400">Please enter a valid email address. </span>
								</div>
								<div className="mb-6">
									<div className="mb-2 flex justify-between">
										<label for-password="password" className="text-sm text-gray-600">Password</label>
										<a href="#!" className="text-sm text-gray-400 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none" tabIndex={-1} >Forgot password?</a>
									</div>
									<input type="password" name="password" id="password" placeholder="Your Password" onChange={(e)=>setPassword(e.target.value)} className="peer w-full rounded-md border border-gray-300 px-3 py-2.5 placeholder-gray-300 shadow shadow-gray-100 focus:border-gray-500 focus:outline-none valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400" pattern=".{6,}" required />
									<span className="mt-2 hidden text-sm text-red-400">Password must be atleast six characters. </span>
								</div>
								<div className="mb-6">
									<button type="submit" className="w-full rounded-md bg-indigo-500 px-3 py-4 text-white focus:bg-indigo-600 focus:outline-none group-invalid:pointer-events-none group-invalid:opacity-70">Sign in</button>
								</div>
								<p className="text-center text-sm text-gray-500">Have an account? <Link to='/admin' className="font-semibold text-indigo-500 focus:text-indigo-500 focus:underline focus:outline-none">Login</Link>.</p>
							</form>
						</div>
					</div>
				</div>
		</div>
  )
}
export default Register;