import { useEffect, useRef } from "react";
import { usePage } from "../../utils/Context/page-context-provider";

const Contact = () =>{
    const { setCurrentPage } = usePage();
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setCurrentPage("#contact"); 
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
        <section id="contact" ref={sectionRef} className="h-screen w-full flex justify-center items-center bg-light-foreground">
            <div>
                
            </div>
        </section>
    </>
}
export default Contact;