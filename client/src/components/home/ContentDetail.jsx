import img1 from '../../assets/image/ImgDetailHome/Img1.png';
import beforeBg from '../../moduleCSS/before.module.css';
import afterBg from '../../moduleCSS/after.module.css'


export default function ContentDetail(){

  
    return(
        <>
        <div className={`relative ${beforeBg.beforeBgCut} ${afterBg.afterBgCut} h-screen flex items-center justify-items-between`}>
            <div className="absolute left-[-25rem]">
            <img className={`object-cover w-[80%] h-[80%] over overflow-hidden`} src={img1} alt="" />
            </div>
             <div className="absolute right-10 w-1/3 z-10 flex flex-col items-center ">
                <h1 className="text-4xl font-bebas text-center">THE SUPER SPORTS CAR OF THE FUTURE</h1>
                <p className="text-md font-roboto text-justify pt-2 w-[80%]">Automobili Lamborghini looks to the future with a visionary approach, carrying our core values to extremes. Dictating the requirements of the third millennium, the Terzo Millennio combines energy efficiency and innovative materials to forge a path in the electric super sports car segment, guaranteeing the purest driving experience.</p>
             </div>

        </div>
        
        </>

    )
} 