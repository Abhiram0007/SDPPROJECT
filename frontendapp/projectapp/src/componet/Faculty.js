import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Faculty() {
  return (
    <>
    <div>
      <nav style={{textAlign:"center"}}>
        <Link to="addFaculty">Add Faculty</Link>&nbsp;&nbsp;

        <Link to="viewFaculty">View Faculty</Link>&nbsp;&nbsp;

        <Link to="updateFaculty">Update Faculty</Link>&nbsp;&nbsp;

        <Link to="deleteFaculty">Delete Faculty</Link>&nbsp;&nbsp;
        
      </nav>
    </div>

    <div>
      <Outlet/>
    </div>
    </>
  )
}