import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function SliderHome() {

    const listTextImgs = [
        {
            srcTextImg: 'https://cdn.ferrari.com/cms/network/media/img/resize/64944ed5af4f7900226ad22d-logo-menu-car-sf90%20stradale_export?',
            srcImg: 'https://cdn.ferrari.com/cms/network/media/img/resize/649ec85da3933d0095d1203f-ferrari-models-menu-2023-cards-sf90-stradale?width=850&height=395'
        },
        {
            srcTextImg: 'https://cdn.ferrari.com/cms/network/media/img/resize/649450f059497e002227fc42-ferrari-menu-car-04_ferrari%20296%20ts_export?',
            srcImg: 'https://cdn.ferrari.com/cms/network/media/img/resize/649ec8a6e4a85f0089b49315-ferrari-models-menu-2023-cards-296-gts?width=850&height=395'
        },
        {
            srcTextImg: 'https://cdn.ferrari.com/cms/network/media/img/resize/649459c2096d6200233aaa54-menu-ferrari-logo-812%20competizione%20a_export?',
            srcImg: 'https://cdn.ferrari.com/cms/network/media/img/resize/649ec942f6396100889d6e17-ferrari-models-menu-2023-cards-812-competizione-a?width=850&height=395'
        },
        {
            srcTextImg: 'https://cdn.ferrari.com/cms/network/media/img/resize/64945a709148ac002333bdb5-menu-logo-car-ferrari%20daytona%20sp3_export?',
            srcImg: 'https://cdn.ferrari.com/cms/network/media/img/resize/649ecafd437d870023cf5351-ferrari-models-menu-2023-cards-ferrari-daytonasp3?width=850&height=395'
        }
    ]

    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;

        // Đảm bảo rằng ScrollTrigger được đăng ký
        gsap.registerPlugin(ScrollTrigger);

     

        // Tạo timeline với GSAP
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: slider,
                pin: true,
                scrub: 3,
                end: () => `+=${slider.scrollWidth}`
            }
        });

        // Animation cuộn ngang
        tl.to(slider, { xPercent: -66 });

        // Dọn dẹp ScrollTrigger khi component unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // animation img text
    const h1Ref1_s1 = useRef(null);
    const h1Ref2_s1 = useRef(null);
    const pRef_s1 = useRef(null);
    const imgRef_s1 = useRef(null);
    const imgRefs1_s1 = useRef(null);
    const imgRefs2_s1 = useRef(null);
    const moreRef_s1 = useRef(null);

    const h1Ref1_s2 = useRef(null);
    const h1Ref2_s2 = useRef(null);
    const pRef_s2 = useRef(null);
    const imgRef_s2 = useRef(null);
    const imgRefs1_s2 = useRef(null);
    const imgRefs2_s2 = useRef(null);
    const moreRef_s2 = useRef(null);

    const h1Ref1_s3 = useRef(null);
    const h1Ref2_s3 = useRef(null);
    const pRef_s3 = useRef(null);
    const imgRef_s3 = useRef(null);
    const imgRefs1_s3 = useRef(null);
    const imgRefs2_s3 = useRef(null);
    const moreRef_s3 = useRef(null);

    const h1Ref1_s4 = useRef(null);
    const h1Ref2_s4 = useRef(null);
    const pRef_s4 = useRef(null);
    const imgRef_s4 = useRef(null);
    const imgRefs1_s4 = useRef(null);
    const imgRefs2_s4 = useRef(null);
    const moreRef_s4= useRef(null);

    // anim ss1
    useEffect(() => {  
        gsap.fromTo(h1Ref1_s1.current, {
            opacity: 0,
            y: 250,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: h1Ref1_s2.current,
                
                start: "top 95%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                end: "bottom 75%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                scrub: true, // Kích hoạt hiệu ứng cuộn
            }
        });
        // 
        gsap.fromTo(h1Ref2_s1.current, {
            opacity: 0,
            y: 200,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: h1Ref2_s1.current,
                
                start: "top 85%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                end: "bottom 65%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                scrub: true, // Kích hoạt hiệu ứng cuộn
            }
        });
        gsap.fromTo(pRef_s1.current, {
            opacity: 0,
            scale: 0.5,
        }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: pRef_s1.current,
                
                start: "top 65%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                end: "bottom 60%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                scrub: true, // Kích hoạt hiệu ứng cuộn
            }
        });
        gsap.fromTo(moreRef_s1.current, {
            opacity: 0,

        }, {
            opacity: 1,

            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: moreRef_s1.current,
                
                start: "top 80%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                end: "bottom 70%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                scrub: true, // Kích hoạt hiệu ứng cuộn
            }
        });
        gsap.fromTo(imgRef_s1.current, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: imgRef_s1.current,
                
                start: "top 90%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                end: "bottom 80%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                scrub: true, // Kích hoạt hiệu ứng cuộn
            }
        });
        gsap.fromTo(imgRefs1_s1.current, {
            opacity: 0,
            scale: 1.5
        }, {
            opacity: 1,
            scale: 1,

            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: imgRefs1_s1.current,
                
                start: "top 70%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                end: "bottom 50%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                scrub: true, // Kích hoạt hiệu ứng cuộn
            }
        });
        gsap.fromTo(imgRefs2_s1.current, {
            opacity: 0,
            x: 200,
            scale: 0.5
        }, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: imgRefs2_s1.current,
                
                start: "top 75%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                end: "bottom 65%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                scrub: true, // Kích hoạt hiệu ứng cuộn
            }
        });
    }, []);

    // =================================================
        // anim ss2
        useEffect(() => {  
            gsap.fromTo(h1Ref1_s2.current, {
                opacity: 0,
                x: 250,
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: h1Ref1_s2.current,
                    
                    start: "top -60%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -90%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            // 
            gsap.fromTo(h1Ref2_s2.current, {
                opacity: 0,
                x: 150
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: h1Ref2_s2.current,
                    
                    start: "top -60%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -85%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            gsap.fromTo(pRef_s2.current, {
                opacity: 0,
                scale: 0.5,
            }, {
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: pRef_s2.current,
                    
                    start: "top -60%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -70%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            gsap.fromTo(moreRef_s2.current, {
                opacity: 0,
    
            }, {
                opacity: 1,
    
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: moreRef_s2.current,
                    
                    start: "top -65%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -70%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            gsap.fromTo(imgRef_s2.current, {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: imgRef_s2.current,
                    
                    start: "top -90%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -110%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            gsap.fromTo(imgRefs1_s2.current, {
                opacity: 0,
                scale: 1.5
            }, {
                opacity: 1,
                scale: 1,
    
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: imgRefs1_s2.current,
                    
                    start: "top -110%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -125%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            gsap.fromTo(imgRefs2_s2.current, {
                opacity: 0,
                x: 200,
                scale: 0.5
            }, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: imgRefs2_s2.current,
                    
                    start: "top -100%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -110%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
        }, []);
         // =================================================
        // anim ss3
        useEffect(() => {  
            gsap.fromTo(h1Ref1_s3.current, {
                opacity: 0,
                x: 250,
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: h1Ref1_s3.current,
                    
                    start: "top -260%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -290%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            // 
            gsap.fromTo(h1Ref2_s3.current, {
                opacity: 0,
                x: 150
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: h1Ref2_s3.current,
                    
                    start: "top -260%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -285%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            gsap.fromTo(pRef_s3.current, {
                opacity: 0,
                scale: 0.5,
            }, {
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: pRef_s3.current,
                    
                    start: "top -260%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -270%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            gsap.fromTo(moreRef_s3.current, {
                opacity: 0,
    
            }, {
                opacity: 1,
    
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: moreRef_s3.current,
                    
                    start: "top -265%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -270%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            gsap.fromTo(imgRef_s3.current, {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: imgRef_s3.current,
                    
                    start: "top -290%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -310%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            gsap.fromTo(imgRefs1_s3.current, {
                opacity: 0,
                scale: 1.5
            }, {
                opacity: 1,
                scale: 1,
    
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: imgRefs1_s3.current,
                    
                    start: "top -310%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -325%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            gsap.fromTo(imgRefs2_s3.current, {
                opacity: 0,
                x: 200,
                scale: 0.5
            }, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: imgRefs2_s3.current,
                    
                    start: "top -315%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -315%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
        }, []);
         // =================================================
        // anim ss4
        useEffect(() => {  
            gsap.fromTo(h1Ref1_s4.current, {
                opacity: 0,
                x: 250,
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: h1Ref1_s4.current,
                    
                    start: "top -560%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -585%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            // 
            gsap.fromTo(h1Ref2_s4.current, {
                opacity: 0,
                x: 150
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: h1Ref2_s4.current,
                    
                    start: "top -560%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -585%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            gsap.fromTo(pRef_s4.current, {
                opacity: 0,
                scale: 0.5,
            }, {
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: pRef_s4.current,
                    
                    start: "top -560%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -570%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            gsap.fromTo(moreRef_s4.current, {
                opacity: 0,
    
            }, {
                opacity: 1,
    
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: moreRef_s4.current,
                    
                    start: "top -565%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -570%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            gsap.fromTo(imgRef_s4.current, {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: imgRef_s4.current,
                    
                    start: "top -590%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -610%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            gsap.fromTo(imgRefs1_s4.current, {
                opacity: 0,
                scale: 1.5
            }, {
                opacity: 1,
                scale: 1,
    
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: imgRefs1_s4.current,
                    
                    start: "top -630%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -665%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
            gsap.fromTo(imgRefs2_s4.current, {
                opacity: 0,
                x: 200,
                scale: 0.5
            }, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: imgRefs2_s4.current,
                    
                    start: "top -710%", // Khi phần tử h1 cách 80% từ trên cùng của viewport
                    end: "bottom -755%", // Kết thúc khi phần tử h1 cách 60% từ dưới cùng của viewport
                    scrub: true, // Kích hoạt hiệu ứng cuộn
                }
            });
        }, []);
        

    //   const listSections = 
    //   listTextImgs.map((listTextImg, i) => (
    //       <section key={i} className="h-screen w-screen relative">
    //           <div className="inner m-24">
    //               <div ref={imgRef_s + i} className="bg-radial-custom absolute bottom-[12%] left-[53.5%] w-[800px] h-[535px] z-1 rounded-full"></div>
    //               <img 
    //                   ref={imgRefs1_s + i}
    //                   className="absolute bottom-[57.5%] left-[68%] justify-self-end drop-shadow-lg z-3"
    //                   src={listTextImg.srcTextImg}
    //                   alt="Name SupperCar"
    //               />
    //               <img 
    //                   ref={imgRefs2_s +i }
    //                   className="absolute bottom-[22.5%] left-[55%] justify-self-end z-3"
    //                   src={listTextImg.srcImg}
    //                   alt="SupperCar"
    //               />
    //               <div className="content text-white w-1/3 absolute bottom-[28%] left-44 flex flex-col items-center">
    //                   <h1 ref={h1Ref1_s + i} className="uppercase text-6xl tracking-tight text-shadow-sm font-bebas">SF90 Stradale</h1>
    //                   <h1 ref={h1Ref2_s + i} className="uppercase text-6xl tracking-tight text-shadow-sm font-bebas">new series-production supercar</h1>
    //                   <p ref={pRef_s + i} className="text-justify font-mon text-sm leading-6 mt-5">
    //                       The car’s name encapsulates the true significance of all that has been achieved in terms of performance. The reference to the 90th anniversary of the foundation of Scuderia Ferrari underscores the strong link that has always existed between Ferrari’s track and road cars. A brilliant encapsulation of the most advanced technologies developed in Maranello, the SF90 Stradale is also the perfect demonstration of how Ferrari immediately transitions the knowledge and skills it acquires in competition to its production cars.
    //                   </p>
    //                   <button ref={moreRef_s + i} className="w-32 h-12 flex mt-20 z-1 border border-solid border-white bg-white hover:bg-black group/detail transition-all ease-in-out duration-300">
    //                       <span className="w-full h-full inline-block pt-2.5 pl-6 z-0">
    //                           <span className="w-full flex justify-around">
    //                               <p className="uppercase font-roboto tracking-wide text-lg text-black font-bold group-hover/detail:text-white transition-all ease-in-out duration-300">more</p>
    //                               <div className="flex items-center pr-5">
    //                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-black group-hover/detail:text-white transition-all ease-in-out duration-300">
    //                                       <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
    //                                   </svg>
    //                               </div>
    //                           </span>
    //                       </span>
    //                   </button>
    //               </div>
    //           </div>
    //       </section>
    //   ))


    return (
        <div className="outer w-full overflow-x-hidden">
            <div ref={sliderRef} className="flex w-[460vw] bg-[#171717]">
                {/* ss1 */}
                <section className="h-screen w-screen relative">
                    <div className="inner m-24 ">
                        <div ref={imgRef_s1} className="bg-radial-custom absolute bottom-[12%] left-[53.5%] w-[800px] h-[535px] z-1 rounded-full"></div>
                        <img ref={imgRefs1_s1}
                            className="absolute bottom-[57.5%] left-[68%] justify-self-end drop-shadow-lg z-3"
                            src="https://cdn.ferrari.com/cms/network/media/img/resize/64944ed5af4f7900226ad22d-logo-menu-car-sf90%20stradale_export?"
                            alt="Name SupperCar"
                        />
                        <img ref={imgRefs2_s1}
                            className="absolute bottom-[22.5%] left-[55%] justify-self-end z-3"
                            src="https://cdn.ferrari.com/cms/network/media/img/resize/649ec85da3933d0095d1203f-ferrari-models-menu-2023-cards-sf90-stradale?width=850&height=395"
                            alt="SupperCar"
                        />
                        <div className="content text-white w-1/3 absolute bottom-[28%] left-44 flex flex-col items-center">
                            <h1 ref={h1Ref1_s1} className="uppercase text-6xl tracking-tight text-shadow-sm font-bebas">SF90 Stradale</h1>
                            <h1 ref={h1Ref2_s1} className="uppercase text-6xl tracking-tight text-shadow-sm font-bebas">new series-production supercar</h1>
                            <p ref={pRef_s1} className="text-justify font-mon text-sm leading-6 mt-5">The car’s name encapsulates the true significance of all that has been achieved in terms of performance. The reference to the 90th anniversary of the foundation of Scuderia Ferrari underscores the strong link that has always existed between Ferrari’s track and road cars. A brilliant encapsulation of the most advanced technologies developed in Maranello, the SF90 Stradale is also the perfect demonstration of how Ferrari immediately transitions the knowledge and skills it acquires in competition to its production cars.</p>

                            <button ref={moreRef_s1} className="w-32 h-12 flex mt-20 z-1 border border-solid border-white bg-white hover:bg-black group/detail transition-all ease-in-out duration-300 ">
                                <span className=" w-full h-full inline-block pt-2.5 pl-6 z-0 ">
                                    <span className="w-full flex justify-around ">
                                        <p className="uppercase font-roboto tracking-wide text-lg text-black font-bold group-hover/detail:text-white transition-all ease-in-out duration-300">more</p>
                                        <div className="flex items-center pr-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-black group-hover/detail:text-white transition-all ease-in-out duration-300">
                                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                                            </svg>


                                        </div>

                                    </span>
                                </span>
                                <span className="text-black bg-white h-full pt-3">


                                </span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* ss2 */}
                <section className="h-screen w-screen relative">
                    <div className="inner m-24 ">
                        <div ref={imgRef_s2} className="bg-radial-custom absolute bottom-[12%] left-[53.5%] w-[800px] h-[535px] z-1 rounded-full"></div>
                        <img ref={imgRefs1_s2}
                            className="absolute bottom-[57.5%] left-[68%] justify-self-end drop-shadow-lg z-3"
                            src="https://cdn.ferrari.com/cms/network/media/img/resize/649450f059497e002227fc42-ferrari-menu-car-04_ferrari%20296%20ts_export?"
                            alt="Name SupperCar"
                        />
                        <img ref={imgRefs2_s2}
                            className="absolute bottom-[22.5%] left-[55%] justify-self-end z-3"
                            src="https://cdn.ferrari.com/cms/network/media/img/resize/649ec8a6e4a85f0089b49315-ferrari-models-menu-2023-cards-296-gts?width=850&height=395"
                            alt="SupperCar"
                        />
                        <div className="content text-white w-1/3 absolute bottom-[28%] left-44 flex flex-col items-center">
                            <h1 ref={h1Ref1_s2} className="uppercase text-6xl tracking-tight text-shadow-sm font-bebas">F296 GTS</h1>
                            <h1 ref={h1Ref2_s2} className="uppercase text-6xl tracking-tight text-shadow-sm font-bebas">series-production supercar</h1>
                            <p ref={pRef_s2} className="text-justify font-mon text-sm leading-6 mt-5">The Ferrari 296 GTS, the evolution of Ferrari’s mid-rear-engined two-seater berlinetta spider concept, is powered by the new 120° V6 engine coupled with a plug-in (PHEV) electric motor that debuted on the 296 GTB, which unleashes a massive 830 cv in total. The car thus redefines the whole concept of fun behind the wheel, guaranteeing pure emotions not just when it is being pushed to its limits, but also in day-to-day driving situations.</p>

                            <button ref={moreRef_s2} className="w-32 h-12 flex mt-20 z-1 border border-solid border-white bg-white hover:bg-black group/detail transition-all ease-in-out duration-300 ">
                                <span className=" w-full h-full inline-block pt-2.5 pl-6 z-0 ">
                                    <span className="w-full flex justify-around ">
                                        <p className="uppercase font-roboto tracking-wide text-lg text-black font-bold group-hover/detail:text-white transition-all ease-in-out duration-300">more</p>
                                        <div className="flex items-center pr-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-black group-hover/detail:text-white transition-all ease-in-out duration-300">
                                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </span>
                                </span>
                                <span className="text-black bg-white h-full pt-3">
                                </span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* ss3 */}
                <section className="h-screen w-screen relative">
                    <div className="inner m-24 ">
                        <div ref={imgRef_s3} className="bg-radial-custom absolute bottom-[12%] left-[53.5%] w-[800px] h-[535px] z-1 rounded-full"></div>
                        <img ref={imgRefs1_s3}
                            className="absolute bottom-[57.5%] left-[68%] justify-self-end drop-shadow-lg z-3"
                            src="https://cdn.ferrari.com/cms/network/media/img/resize/649459c2096d6200233aaa54-menu-ferrari-logo-812%20competizione%20a_export?"
                            alt="Name SupperCar"
                        />
                        <img ref={imgRefs2_s3}
                            className="absolute bottom-[22.5%] left-[55%] justify-self-end z-3"
                            src="https://cdn.ferrari.com/cms/network/media/img/resize/649ec942f6396100889d6e17-ferrari-models-menu-2023-cards-812-competizione-a?width=850&height=395"
                            alt="SupperCar"
                        />
                        <div className="content text-white w-1/3 absolute bottom-[28%] left-44 flex flex-col items-center">
                            <h1 ref={h1Ref1_s3} className="uppercase text-6xl tracking-tight text-shadow-sm font-bebas">F812 Competizione A</h1>
                            <h1 ref={h1Ref2_s3} className="uppercase text-6xl tracking-tight text-shadow-sm font-bebas">special niche in automotive</h1>
                            <p ref={pRef_s3} className="text-justify font-mon text-sm leading-6 mt-5">The 812 Competizione A, a spectacular limited-series with Targa top, is an homage to the Prancing Horse’s glorious open-top tradition. The car encapsulates and epitomises the company’s 70-plus years of experience on the world’s circuits, drawing on its thoroughbred sports car DNA to deliver a perfect marriage of performance, form and functionality. Aimed at Ferrari’s most passionate collectors and connoisseurs, it features numerous uncompromising engineering solutions to guarantee peerless driving pleasure.</p>

                            <button ref={moreRef_s3} className="w-32 h-12 flex mt-20 z-1 border border-solid border-white bg-white hover:bg-black group/detail transition-all ease-in-out duration-300 ">
                                <span className=" w-full h-full inline-block pt-2.5 pl-6 z-0 ">
                                    <span className="w-full flex justify-around ">
                                        <p className="uppercase font-roboto tracking-wide text-lg text-black font-bold group-hover/detail:text-white transition-all ease-in-out duration-300">more</p>
                                        <div className="flex items-center pr-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-black group-hover/detail:text-white transition-all ease-in-out duration-300">
                                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </span>
                                </span>
                                <span className="text-black bg-white h-full pt-3">
                                </span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* ss4 */}
                <section className="h-screen w-screen relative">
                    <div className="inner m-24 ">
                        <div ref={imgRef_s4} className="bg-radial-custom absolute bottom-[12%] left-[53.5%] w-[800px] h-[535px] z-1 rounded-full"></div>
                        <img ref={imgRefs1_s4}
                            className="absolute bottom-[57.5%] left-[68%] justify-self-end drop-shadow-lg z-3"
                            src="https://cdn.ferrari.com/cms/network/media/img/resize/64945a709148ac002333bdb5-menu-logo-car-ferrari%20daytona%20sp3_export?"
                            alt="Name SupperCar"
                        />
                        <img ref={imgRefs2_s4}
                            className="absolute bottom-[22.5%] left-[55%] justify-self-end z-3"
                            src="https://cdn.ferrari.com/cms/network/media/img/resize/649ecafd437d870023cf5351-ferrari-models-menu-2023-cards-ferrari-daytonasp3?width=850&height=395"
                            alt="SupperCar"
                        />
                        <div className="content text-white w-1/3 absolute bottom-[28%] left-44 flex flex-col items-center">
                            <h1 ref={h1Ref1_s4} className="uppercase text-6xl tracking-tight text-shadow-sm font-bebas">Ferrari Daytona SP3</h1>
                            <h1 ref={h1Ref2_s4} className="uppercase text-6xl tracking-tight text-shadow-sm font-bebas">A SPORTS PROTOTYPE SOUL</h1>
                            <p ref={pRef_s4} className="text-justify font-mon text-sm leading-6 mt-5">At the 1967 24 Hours of Daytona, Ferrari took the top three places in the first round of the International World Sports Car Championship. The 330 P3/4, 330 P4 and 412 P that famously shot past the chequered flag side by side perfectly encapsulated the spirit of the sports prototypes of the 1960s, a decade now considered the golden era of closed wheel racing. The Ferrari Daytona SP3, the second car to join the limited edition Icona series, pays homage to the mid-rear-engined Ferrari V12 sports prototypes that earned the marque its unparalleled motor sport status.</p>

                            <button ref={moreRef_s4} className="w-32 h-12 flex mt-20 z-1 border border-solid border-white bg-white hover:bg-black group/detail transition-all ease-in-out duration-300 ">
                                <span className=" w-full h-full inline-block pt-2.5 pl-6 z-0 ">
                                    <span className="w-full flex justify-around ">
                                        <p className="uppercase font-roboto tracking-wide text-lg text-black font-bold group-hover/detail:text-white transition-all ease-in-out duration-300">more</p>
                                        <div className="flex items-center pr-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-black group-hover/detail:text-white transition-all ease-in-out duration-300">
                                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </span>
                                </span>
                                <span className="text-black bg-white h-full pt-3">
                                </span>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
