import React from 'react';
import { Link } from 'react-router-dom';
export const Navbar = ()=>{
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-primary py-2 sticky-top flex-md-nowrap p-0" role={'banner'}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{'LOGO'}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID"
          aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarID">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" rel='noreffere' to="/">Home</Link>
            <Link className="nav-link" aria-current="page" rel='noreffere' to="#">About</Link>
            <Link className="nav-link" aria-current="page" rel='noreffere' to="#">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}