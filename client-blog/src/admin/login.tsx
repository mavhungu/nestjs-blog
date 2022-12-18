import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/form.css"

const Login = () =>{
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className='col-6 me-auto'>
          <form className="form">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
            </div>
            <div className="mt-3">
            	<Link to="/admin/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login;