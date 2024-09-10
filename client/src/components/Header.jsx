import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import logo from '../assets/image/LogoSPCar.png';
import hexa from '../moduleCSS/styleImg.module.css'



export default function Header() {
  const [hiddens, setHiddens] = useState("flex")
  const [opacitys, setOpacitys] = useState("opacity-100")

  // Header
  const compoHeaders = ["home", "about", "contact", "store"];
  function capitalize(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const listHeader = compoHeaders.map((compoHeader, i) => <a key={i} className={`${hiddens} w-20 flex items-center ${opacitys}`} href={`/supper-car-k/${compoHeader === "home" ? "" : compoHeader}`}> <li className="font-mon text-xl w-full text-center" >{capitalize(compoHeader)}</li></a>)
  // Header

  // Move Header
  const [isHeader, setIsHeader] = useState(false);
  const [offsetHeader, setOffsetHeader] = useState({ x: 0, y: 0 });
  const headerRef = useRef(null);

  const handleMouseDown = useCallback((e) => {
    if (e.button !== 0) return;
    setIsHeader(true);
    const startX = e.clientX - offsetHeader.x;
    const startY = e.clientY - offsetHeader.y;

    const handleMouseMove = (moveEvent) => {
      if (isHeader) {
        requestAnimationFrame(() => {
          setOffsetHeader({
            x: moveEvent.clientX - startX,
            y: moveEvent.clientY - startY,
          });
        });
      }
    };
    const handleMouseUp = () => {
      setIsHeader(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [isHeader, offsetHeader]);
  // Move Header

  // GSAP Width
  const [widths, setWidths] = useState("w-1/3")
  useGSAP(() => {
    gsap.to(headerRef.current, { duration: 1, width: widths, display: hiddens });
  }, [widths, hiddens])
  // GSAP Width

  // GSAP Search
  const [yValues, setYvalues] = useState("-top-4")
  const [yNone, setYnone] = useState("opacity-0")
  const searchRef = useRef(null);
  useGSAP(() => {
    gsap.to(searchRef.current, {y: yValues, display: yNone, duration: 1});
  }, [yValues, yNone])
  // GSAP Search 
  return (
    <>
    <div className={`z-50 fixed top-7 shadow-inner left-10 w-20 h-20 bg-[#171717] flex items-center justify-center ${hexa.hexagon}`}>
    <img className=" w-24 h-24 " src={logo} alt="Logo" />
    </div>
      <div ref={headerRef} style={{ transform: `translate(${offsetHeader.x}px, ${offsetHeader.y}px)` }} className={`truncate transition-all duration-700 ${widths} ease-in-out pr-2 select-none cursor-pointer bg-opacity fixed  h-11 ${hiddens} items-center z-50 text-black-300 font-semibold rounded-xl shadow-lg top-11 left-80`} onMouseDown={handleMouseDown}>
        <ul className="flex w-full justify-around">{listHeader}</ul>
        <div className=" hover:scale-110" onClick={() => { if (widths === "w-1/3") { setWidths("w-14"); setHiddens("hidden"); setOpacitys("opacity-0"); setOffsetHeader({x: -327, y: 427})} else { setWidths("w-1/3"); setHiddens("flex"); setOpacitys("opacity-100"); setOffsetHeader({x: 0, y: 0}) } }}>
          <svg className="size-9 flex items-center justify-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
      <div ref={searchRef} className={`transition-all duration-500 ease-in-out fixed drop-shadow-2xl start-3/4 z-50 ${yValues} w-2/12 ${yNone}`}>
        <div className="relative">
        <input type="text" className="h-11 w-full pl-2 bg-transparent text-white text-lg drop-shadow-xl outline-none" placeholder="Enter the search to find"/>
        <div className="absolute bg-slate-600 h-0.5 w-full z-50 top-9 shadow-lg"></div>
        </div>
      </div>
      <div className="z-50 fixed text-white right-10 top-10 hover:scale-110 cursor-pointer" onClick={() => { if (yValues === "-top-4") {setYvalues("top-11"); setYnone("opacity-100"); } else { setYvalues("-top-4"); setYnone("opacity-0"); } }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-14 drop-shadow-xl">
  <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
</svg>
      </div>
    </>
  )
}
