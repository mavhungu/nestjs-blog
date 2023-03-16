import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='justify-content-center align-items-center'>
    	<form className="group">
			<p>Register page</p>
			<p className="text-center text-sm text-gray-500">
			  <Link to={'/admin'} className="font-semibold text-indigo-500 focus:text-indigo-500 focus:underline focus:outline-none">Login</Link>
			</p>
		</form>
    </div>
  )
}
export default Register;