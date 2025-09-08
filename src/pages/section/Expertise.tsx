import { useEffect, useRef } from "react";
import ExpertiseCardList from "./Fragment/Expertise/expertise-card-list";
import { usePage } from "../../utils/Context/page-context-provider";

const Expertise = () =>{
    const { setCurrentPage } = usePage();
    const sectionRef = useRef<HTMLElement | null>(null);
    useEffect(() => {
            const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setCurrentPage("#expertise"); 
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
        <section ref={sectionRef} className="min-h-screen w-full flex justify-center items-center bg-light-foreground p-12" id="expertise">
            <div className="w-full h-full max-w-6xl text-white flex flex-col gap-8 justify-center items-center">
                <h1 className="text-4xl font-bold text-primary">
                    Expertise Area
                </h1>
                <p className="w-3/4 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, laudantium. Impedit delectus cumque incidunt maxime fugiat quo cupiditate quisquam quas!
                </p>
                <ExpertiseCardList/>
            </div>
        </section>  
    </>
}
export default Expertise;