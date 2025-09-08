import { useEffect, useRef } from "react";
import { usePage } from "../../utils/Context/page-context-provider";
import { ExpertTypeList, useExpertise } from "../../utils/Context/expertise-context-provider";

const Project = () =>{
        const { setCurrentPage } = usePage();
        const {expertiseContext, setExpertiseContext} = useExpertise();
        const sectionRef = useRef<HTMLElement | null>(null);
        useEffect(() => {
                const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentPage("#project"); 
                    }
                    });
                },
                { threshold: 0.5 }
                );
        
                if (sectionRef.current) {
                observer.observe(sectionRef.current);
                }
        
                return () => {
                if (sectionRef.current) {
                    observer.unobserve(sectionRef.current);
                }
                };
            }, [setCurrentPage]);
    return <>
        <section ref={sectionRef} id="project" className="min-h-screen w-full flex justify-center items-center bg-dark-foreground p-12">
           <div className="w-full h-full max-w-6xl text-white flex flex-col gap-8 justify-start items-center pt-16">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h1 className="text-4xl font-bold text-primary">
                        Featured Works
                    </h1>
                    <p className="lg:w-3/4 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, laudantium. Impedit delectus cumque incidunt maxime fugiat!
                    </p>
                </div>
                <div className="flex items-center justify-center gap-4 lg:gap-8">
                    {
                        ExpertTypeList.map((val)=>{
                            return <div className="text-sm lg:text-base flex flex-col gap-2 items-center justify-center">
                                <button className={`font-poppins cursor-pointer transition-all duration-300 ease-in-out h-10 flex items-center justify-center  ${expertiseContext == val.expert?"text-accent ":"text-white/40 "}`} onClick={()=>setExpertiseContext(val.expert)}>
                                    {
                                        val.title
                                    }
                                </button>
                                <div className={`h-[1px] w-full bg-accent transition-all duration-700 ease-in-out ${expertiseContext == val.expert?"max-w-[100px]":"max-w-0"}`} />
                            </div>
                        })
                    }
                </div>
                <div className="w-full min-h-[24rem] bg-white">

                </div>
                {/* <OutlinedButton mode="primary" className="flex gap-4 items-center justify-center">
                    Check My Github <LucideArrowRight/>
                </OutlinedButton> */}
            </div>
        </section>
    </>
}
export default Project;