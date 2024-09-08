import React, { useState, useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import beforeBlack from '../../moduleCSS/before.module.css';
import afterBlack from '../../moduleCSS/after.module.css'
import video1 from '../../assets/video/Ferrari-0.mp4';
import video2 from '../../assets/video/Ferrari-1.mp4';
import video3 from '../../assets/video/Lambor-Countach LPI 800-4.mp4';

export default function BannerHome() {

  const videos = [
    { src: video1, title: 'Video 1' },
    { src: video2, title: 'Video 2' },
    { src: video3, title: 'Video 3' },
  ];
  // VIDEO
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  // VIDEO

  // TEXT
   const textVideo1 = `<h1 class='font-bebas tracking-wide text-9xl text-shadow-xl'>START YOUR ENGINE</h1><h3 class='font-mon text-2xl tracking-tight text-shadow-md '>Overcome your own limits</h3><a href='#' class='w-16 h-20 mt-8'><svg class='group/ibtn cursor-pointer'  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50.464 58.271'><g strokeWidth='1.5' transform='translate(-1624 -187.923)'><path d='M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z' transform='translate(1623.5 187.345)' class='transition duration-500 ease-in-out fill-transparent group-hover/ibtn:fill-white stroke-white'></path><path class='transition duration-500 ease-in-out fill-transparent group-hover/ibtn:stroke-black stroke-white' d='M0 0l7.432 5.674L14.864 0' transform='rotate(-90 935.432 -711.068)'></path></g></svg></a>`
   const textVideo2 = `<h1 class='font-bebas tracking-wide text-9xl text-shadow-xl'>EXPAND THE LIMIT</h1><h3 class='font-mon text-2xl tracking-tight text-shadow-md '>Open up a new challenge for yourself</h3><a href='#' class='w-16 h-20 mt-8'><svg class='group/ibtn cursor-pointer'  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50.464 58.271'><g strokeWidth='1.5' transform='translate(-1624 -187.923)'><path d='M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z' transform='translate(1623.5 187.345)' class='transition duration-500 ease-in-out fill-transparent group-hover/ibtn:fill-white stroke-white'></path><path class='transition duration-500 ease-in-out fill-transparent group-hover/ibtn:stroke-black stroke-white' d='M0 0l7.432 5.674L14.864 0' transform='rotate(-90 935.432 -711.068)'></path></g></svg></a>`
   const textVideo3 = `<h1 class='font-bebas tracking-wide text-9xl text-shadow-xl'>JOURNEY LUXURY</h1><h3 class='font-mon text-2xl tracking-tight text-shadow-md '>Shine with high-end supercar</h3><a href='#' class='w-16 h-20 mt-8'><svg class='group/ibtn cursor-pointer'  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50.464 58.271'><g strokeWidth='1.5' transform='translate(-1624 -187.923)'><path d='M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z' transform='translate(1623.5 187.345)' class='transition duration-500 ease-in-out fill-transparent group-hover/ibtn:fill-white stroke-white'></path><path class='transition duration-500 ease-in-out fill-transparent group-hover/ibtn:stroke-black stroke-white' d='M0 0l7.432 5.674L14.864 0' transform='rotate(-90 935.432 -711.068)'></path></g></svg></a>`
   // TEXT
 
   const listTextVideo = [textVideo1, textVideo2, textVideo3]
   const textRef = useRef(null);
  // TEXT ANI
  useEffect(() => {
    // GSAP animation to fade text in and out
    gsap.fromTo(
      "ctn-content",
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
    gsap.fromTo(
      ".ctn-content h1",
      { x: -100, stagger:0.1, opacity: 0},
      { x: 0, opacity: 1, duration: 1, delay: 0.2}
    );
    gsap.fromTo(
      ".ctn-content h3",
      { x: 100, stagger: 0.15, opacity: 0},
      { x: 0, opacity: 1, duration: 1.5, delay: 0.6 }
    );
    gsap.fromTo(
      ".ctn-content a",
      { y: 200, stagger: 0.2, opacity: 0},
      { y: 0, opacity: 1, duration: 1.5, delay: 1.2 }
    );
  }, [currentIndex]);

  // TEXT ANI

  // LI ANI
  const listPlayVideo = videos.map((_, index) => <li className="cursor-pointer hover:scale-125 transition ease-in duration-300" onClick={() => gsap.to(containerRef.current, {
    opacity: 0,
    duration: 0.07,
    onComplete: () => {
      setCurrentIndex(index);
      gsap.to(containerRef.current, { opacity: 1, duration: 0.07 });
    },
  })} key={index}>{currentIndex === index ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM9 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H9Zm5.25 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75Z" clipRule="evenodd" />
  </svg>
    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
    </svg>
    }</li>)

  // LI ANI

  const nextVideo = () => {
    const nextIndex = (currentIndex + 1) % videos.length;

    // VIDEO animation
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.07,

      onComplete: () => {
        setCurrentIndex(nextIndex);
        gsap.to(containerRef.current, { opacity: 1, duration: 0.07 });
      },
    });
  };
 
  // const prevVideo = () => {
  //     setCurrentIndex((prevIndex) =>
  //         prevIndex === 0 ? videos.length - 1 : prevIndex - 1
  //     );
  // };

  // VIDEO animation

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', nextVideo);

      return () => {
        videoElement.removeEventListener('ended', nextVideo);
      };
    }
  }, [currentIndex]);

  return (
    <div ref={containerRef} className={`${beforeBlack.beforeBlackOverlay} ${afterBlack.afterBlackOverlay} w-full h-screen`}>

      <video ref={videoRef} className=" absolute inset-0 object-cover w-full h-full" src={videos[currentIndex].src} autoPlay loop={false} muted playsInline />

      <div className="z-10 flex justify-center absolute bottom-10 w-full">
        <ul className="text-white flex justify-between w-28">{listPlayVideo}</ul>
      </div>
      {/* TEXT CONTENT */}
      <div ref={textRef} className="ctn-content absolute z-10 text-white inset-y-1/3 inset-x-40 font-bold h-64 flex flex-col justify-between" dangerouslySetInnerHTML={{ __html: listTextVideo[currentIndex] }}>
        {/* TEXT */}
        {/* <h1 className="font-bebas tracking-wide text-9xl text-shadow-xl">START YOUR ENGINE</h1>
        <h3 className="font-mon text-2xl tracking-tight text-shadow-md ">Open up a new challenge for yourself</h3>
        <a href="#" className="w-16 h-20 mt-8">
          <svg className="group/ibtn cursor-pointer"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.464 58.271">
            <g strokeWidth="1.5" transform="translate(-1624 -187.923)">
              <path d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z" transform="translate(1623.5 187.345)" className="transition duration-500 ease-in-out fill-transparent group-hover/ibtn:fill-white stroke-white">
              </path>
              <path className="transition duration-500 ease-in-out fill-transparent group-hover/ibtn:stroke-black stroke-white" d="M0 0l7.432 5.674L14.864 0" transform="rotate(-90 935.432 -711.068)">
              </path>
            </g>
          </svg>
        </a> */}
        {/* TEXT */}
        
      </div>
      {/* TEXT CONTENT */}
    </div>
  )
}
