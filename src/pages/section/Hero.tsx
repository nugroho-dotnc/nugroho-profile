import { LucideGithub, LucideInstagram, LucideLinkedin } from "lucide-react";
import GeneralButton from "../../components/button/general-button";
import OutlinedButton from "../../components/button/outlined-button";
import { TypeAnimation } from "react-type-animation";
import { usePage } from "../../utils/Context/page-context-provider";
import { useEffect, useRef } from "react";

const Hero = () =>{
        const { setCurrentPage } = usePage();
        const sectionRef = useRef<HTMLElement | null>(null);
        useEffect(() => {
                const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentPage("#home"); 
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
        <section ref={sectionRef} id="home" className="min-h-screen w-full flex justify-center items-center bg-light-foreground p-12">
           <div className="w-full max-w-6xl text-white flex justify-center items-center h-[32rem]">
                <div className="w-full flex flex-col gap-2 items-start justify-center font-poppins">
                    <h3 className="text-md tracking-widest text-primary flex gap-4 items-center">
                        <div className="h-[1px] w-8 bg-white"/> Hello
                    </h3>
                    <TypeAnimation
                        sequence={[
                            "I'm Nugroho Nur Cahyo "
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={500}
                        className="text-white text-4xl font-bold"
                    />
                    {/* <h1 className="text-white text-4xl font-bold">
                        I'm <span className="text-primary">Nugroho</span> Nur Cahyo
                    </h1> */}
                    <p className="mt-12 text-lg">
                        A 19-year-old Informatics student at Jakarta State Polytechnic. I specialize in front-end and design, crafting modern, user-friendly web and mobile experiences with creativity and passion.                   
                    </p>
                    <GeneralButton onClick={()=>{window.location.href = "#about"}}>
                        Get to know me
                    </GeneralButton>
                    <div className="mt-24 flex gap-4">
                        <OutlinedButton mode="light">
                            <LucideGithub/>
                        </OutlinedButton>
                        <OutlinedButton mode="light">
                            <LucideInstagram/>
                        </OutlinedButton>
                        <OutlinedButton mode="light">
                            <LucideLinkedin/>
                        </OutlinedButton>
                    </div>
                </div>
                <img className="w-[32rem] h-[32rem] hidden xl:block object-contain transition-all duration-300 cursor-pointer drop-shadow-md drop-shadow-white hover:scale-105" src="/assets/images/nugroho.png"></img>
           </div>
        </section>
    </>
}
export default Hero;