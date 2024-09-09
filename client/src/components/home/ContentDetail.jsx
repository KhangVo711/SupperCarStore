import img1 from '../../assets/image/ImgDetailHome/Img1.png';


export default function ContentDetail(){

    return(
        <>
        <div className="relative h-screen flex items-center justify-items-between">
            <div className="absolute left-[-40rem] ">
            <img className={`object-cover w-full h-3/4 over overflow-hidden`} src={img1} alt="" />
            </div>
             <div className="absolute right-10 w-1/3 z-10 flex flex-col items-center ">
                <h1 className="text-4xl font-bebas text-center">THE SUPER SPORTS CAR OF THE FUTURE</h1>
                <p className="text-md font-roboto text-justify pt-2 w-2/3">Automobili Lamborghini looks to the future with a visionary approach, carrying our core values to extremes. Dictating the requirements of the third millennium, the Terzo Millennio combines energy efficiency and innovative materials to forge a path in the electric super sports car segment, guaranteeing the purest driving experience.</p>
             </div>
             <div className="absolute w-1/2 h-full z-[-3] right-[25%] ">
                <svg fill='#F8F8F7' height="100%" viewBox="0 0 28 11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="  clip-svg"><g><polygon points="8 0, 8.1 11, 8.1 11, 0 11"></polygon><rect x="8" y="0" width="12" height="11"></rect><polygon points="19.9 0, 28 0, 20 11, 19.9 11"></polygon></g></svg>
            </div>
            <div className="absolute w-80 h-[76%] z-[2] right-[45%] ">
                <svg fill='#F8F8F7' height="100%" viewBox="0 0 28 11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="  clip-svg"><g><polygon points="8 0, 8.1 11, 8.1 11, 0 11"></polygon><rect x="8" y="0" width="12" height="11"></rect><polygon points="19.9 0, 28 0, 20 11, 19.9 11"></polygon></g></svg>
            </div>

        </div>
        
        </>

    )
} 