import { LucideArrowRight } from "lucide-react";
import GeneralButton from "../../components/button/general-button";
import SkillProgression from "../../components/card/skill-progression";
import { usePage } from "../../utils/Context/page-context-provider";
import { useRef, useEffect } from "react";

const About = () =>{
  const { setCurrentPage } = usePage();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentPage("#about"); 
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
        <section id="about" ref={sectionRef} className="min-h-screen w-full flex justify-center items-center bg-dark-foreground p-12">
           <div className="flex flex-col gap-12 w-full  max-w-6xl">
                <div className="w-full text-white flex md:flex-row flex-col items-center gap-8 md:gap-12">
                    <img className="w-full md:w-[24rem] md:h-[24rem] lg:w-[28rem] lg:h-[28rem] object-contain transition-all duration-300 cursor-pointer" src="/assets/images/nugroho-about.png"></img>
                    <div className="w-full flex flex-col gap-8 items-start justify-center font-poppins">
                        <div className="flex gap-4 items-center justify-center">
                            <div className="w-8 h-[4px] bg-primary" />
                            <h1 className="text-3xl text-primary font-bold">
                                About Me?
                            </h1>
                        </div>
                        <p className="text-white ">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quidem ad ut temporibus laudantium maiores eum ea, nesciunt vero magni obcaecati quaerat natus totam fugiat eligendi! Sapiente sunt quae architecto.
                        </p>
                        <p className="text-white ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, iure temporibus! Voluptate rerum, enim corrupti expedita impedit aut ea assumenda?
                        </p>
                        <div className="flex gap-4">
                            <GeneralButton className="flex items-center justify-center gap-4">
                                See details <LucideArrowRight  />
                            </GeneralButton>
                        </div>
                    </div>
                </div>
                <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-12">
                    <SkillProgression
                        skill="UI UX DESIGN"
                        progress={70}
                        animationDelay={200}
                    />
                    <SkillProgression
                        skill="WEB DEVELOPMENT"
                        progress={85}
                        animationDelay={200}
                    />
                    <SkillProgression
                        skill="MOBILE DEVELOPMENT"
                        progress={60}
                        animationDelay={200}
                    />
                    <SkillProgression
                        skill="FRONT END MENTORING"
                        progress={65}
                        animationDelay={200}
                    />
                </div>
           </div>
        </section>
    </>
}
export default About;