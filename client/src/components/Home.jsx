import BannerHome from "./home/BannerHome.jsx";
import ContentDetail from "./home/ContentDetail.jsx";
import SliderHome from "./home/SliderHome.jsx";
import SpecialSeri from "./home/SpecialSeri.jsx";

export default function Home() {

  return(
    <div className="flex flex-col">
      <BannerHome/>
      <SliderHome/>
      <SpecialSeri/>
      <ContentDetail/>
    </div>
  )
}