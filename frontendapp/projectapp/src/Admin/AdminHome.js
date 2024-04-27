import React, { useEffect, useState } from 'react'

export default function AdminHome() {
  const [adminData, setAdminData] = useState("");

  useEffect(() => {
    const storedAdminData = localStorage.getItem('admin');
    if (storedAdminData) {
      const parsedAdminData = JSON.parse(storedAdminData);
      setAdminData(parsedAdminData);
    }
  }, []);

  return (
    <div className='content' > 
      <h4>I am in Admin Home Page</h4>
    </div>
  )
}