import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='justify-content-center align-items-center'>
    	<form>
				<p>Register page</p>
				<Link to={'/admin'}>Login</Link>
			</form>
    </div>
  )
}
export default Register;