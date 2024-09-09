import img1 from '../../assets/image/ImgDetailHome/Img1.png';
import afterBg from '../../moduleCSS/after.module.css';
import beforeBg from '../../moduleCSS/before.module.css';




export default function ContentDetail(){

    
    return(
        <div className={`${afterBg.afterBgCut} ${beforeBg.beforeBgCut} relative h-screen flex items-center`}>
            <img className={`absolute left-[-33rem] object-cover w-full h-3/4 `} src={img1} alt="" />
             <div className="absolute right-10 w-1/3 z-10 flex flex-col ">
                <h1 className="text-4xl font-bebas text-center">THE SUPER SPORTS CAR OF THE FUTURE</h1>
                <p className="text-md font-roboto text-justify pt-2">Automobili Lamborghini looks to the future with a visionary approach, carrying our core values to extremes. Dictating the requirements of the third millennium, the Terzo Millennio combines energy efficiency and innovative materials to forge a path in the electric super sports car segment, guaranteeing the purest driving experience.</p>
             </div>
        </div>
    )
} 