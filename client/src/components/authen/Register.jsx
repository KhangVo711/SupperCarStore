import React, { useState } from 'react';
import logo from '../../assets/image/LogoSPCar.png';
import video from '../../assets/video/VideoRegister.mp4';
import beforeBlack from '../../moduleCSS/before.module.css';
import afterBlack from '../../moduleCSS/after.module.css'

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Thêm state để lưu thông báo lỗi

  const collectData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/supper-car-k/authen/register', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();

      if (response.status === 400) {
        setErrorMessage(result.message); 
      } else {
        localStorage.setItem("users", JSON.stringify(result.user));
        setErrorMessage("Success"); 
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={`relative flex items-center h-screen ${beforeBlack.beforeBlackOverlay} ${afterBlack.afterBlackOverlay}`}>
      {/* Left section: Form */}
      <div className="w-full max-w-md mx-auto flex flex-col justify-center px-8 py-6 z-10 bg-opacity-50 shadow-lg rounded">
        <div className="mb-6 flex items-center flex-col">
          <img src={logo} alt="Logo" className="h-24" />
          <h2 className="text-3xl tracking-wider font-bold text-white uppercase">Register</h2>
        </div>

        {/* Hiển thị thông báo lỗi nếu có */}
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        <form className="space-y-6" onSubmit={collectData}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email address</label>
            <input type="email" id="email" placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
            <input type="password" id="password" placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-white rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-white opacity-90">Remember me</label>
            </div>
          </div>

          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit
          </button>
        </form>

        <div className="mt-6 text-center relative flex flex-col items-center">
          <div className="absolute top-1/2 w-1/3 right-0 h-px bg-gray-300 z-0"></div>
          <p className="text-sm text-gray-300 z-10 w-1/3">Or continue with</p>
          <div className="absolute top-1/2 left-0 w-1/3 h-px bg-gray-300 z-0"></div>
        </div>

        <div className="mt-4 mb-6 grid grid-cols-2 gap-3">
          <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Google
          </button>
          <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Facebook
          </button>
        </div>
      </div>

      {/* Right section: Video */}
      <video className={`absolute inset-0 object-cover w-full h-full`} src={video} autoPlay loop muted playsInline />
    </div>
  );
}
