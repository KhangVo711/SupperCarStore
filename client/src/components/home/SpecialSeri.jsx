
export default function SpecialSeri() {

    return (
        <div className="h-[102rem] flex flex-col items-center">
            <div className="">
                <span className="uppercase font-mon font-bold text-4xl">special seri</span>
            </div>

            <div className="flex justify-between w-2/3 h-96 mt-32 ">
                <div className="flex flex-col items-center justify-center h-3/4 "> 
                    <div className="h-1/3 pl-20">
                    <img className="w-[80%]" src="https://cdn.ferrari.com/cms/network/media/img/resize/649ae233ff73dc002475180d-logo-ferrari-line-up-sf90xx_stradale?" alt="Name" />
                    </div>
                    <div className="flex w-full pl-20 ml-3">
                        <a href="#" className="w-20 flex items-center justify-between border rounded border-solid border-gray-400 bg-zinc-100 hover:border-gray-950 hover:bg-zinc-300 px-2 py-1 transition ease-in-out duration-200">
                            <p className="font-bebas text-lg">
                                Detail
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <img src="https://cdn.ferrari.com/cms/network/media/img/resize/649ae24e437d870023cf502e-sf90xxstradale_lineup_desktop?height=450" alt="Car" />
                </div>
               
            </div>

           

            


        </div>
    )
}