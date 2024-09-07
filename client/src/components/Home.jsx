import React, { useState, useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import beforeBlack from '../moduleCSS/before.module.css';
import afterBlack from '../moduleCSS/after.module.css'
import video1 from '../assets/video/Ferrari-0.mp4';
import video2 from '../assets/video/Ferrari-1.mp4';
import video3 from '../assets/video/Lambor-Countach LPI 800-4.mp4';

export default function Home() {

    const videos = [
        { src: video1, title: 'Video 1' },
        { src: video2, title: 'Video 2' },
        { src: video3, title: 'Video 3' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    const listPlayVideo = videos.map((_, index) => <li onClick={() => gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.07,
        onComplete: () => {
          setCurrentIndex(index);
          gsap.to(containerRef.current, {opacity: 1, duration: 0.07});
        },
      })} key={index}>{currentIndex === index ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM9 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H9Zm5.25 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75Z" clipRule="evenodd" />
  </svg>
   : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
   <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
  </svg>
  }</li>)

    const nextVideo = () => {
        const nextIndex = (currentIndex + 1) % videos.length;

        // GSAP animation
    gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.07,
       
        onComplete: () => {
          setCurrentIndex(nextIndex);
          gsap.to(containerRef.current, {opacity: 1, duration: 0.07 });
        },
      });
    };

    // const prevVideo = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    //     );
    // };


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
        <div ref={containerRef} className={`${beforeBlack.beforeBlackOverlay} ${afterBlack.afterBlackOverlay} w-full h-[953px]`}>

            <video ref={videoRef} className=" absolute inset-0 object-cover w-full h-full" src={videos[currentIndex].src} autoPlay loop={false} muted playsInline />

            <div className="z-10 flex justify-center absolute bottom-10 w-full">
                <ul className="text-white flex justify-between w-28">{listPlayVideo}</ul>
            </div>
        </div>
    )
}
