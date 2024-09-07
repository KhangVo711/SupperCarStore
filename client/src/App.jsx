import { useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header.jsx'

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

  return (  
    <div className="">
        <Header />

        <Outlet />
        {/* <Home /> */}
    </div>
  )
}

export default App
