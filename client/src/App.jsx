import { getToPathname } from '@remix-run/router'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header.jsx'
import { useLocation } from 'react-router-dom'

function App() {

  // const [users, Setusers] = useState([]);
  // useEffect(() => {

  //   const fetchData = async () => {
  //     const res = await fetch('http://localhost:8080/');
  //     const data = await res.json();
  //     Setusers(data.users)
  //   }
  //   fetchData();
  // }, []);

      /* {users.map ((u, index) => (
      <p className="text-red-500" key = {index}>{u.username}-{u.email}-{u.password}</p>
    ))} */
   const location = useLocation()
   const isAuthenPath = /^\/supper-car-k\/authen\/.*/.test(location.pathname);
  return (  
    <div className="">
      {isAuthenPath ? null : <Header />}

        <Outlet />
        {/* <Home /> */}
    </div>
  )
}

export default App
