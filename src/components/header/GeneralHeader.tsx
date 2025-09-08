import { LucideMenu, LucideX } from "lucide-react";
import { useEffect, useState } from "react"
import { usePage } from "../../utils/Context/page-context-provider";


const link = [
  {
    title: "Home",
    link: "#home"
  },
  {
    title: "About",
    link: "#about"
  },
  {
    title: "Expertise",
    link: "#expertise"
  },
  {
    title: "Project",
    link: "#project"
  },
  {
    title: "Contact",
    link: "#contact"
  },
]
const GeneralHeader = () =>{
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const {currentPage, setCurrentPage}  = usePage();
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return <>
        <div className={`h-fit w-full flex z-50 flex-col items-center justify-center fixed px-12
          ease-in-out duration-500 transition-all backdrop-blur-xl 
                ${scrolled || isOpen
                ?"bg-white/10 shadow-sm shadow-white/5"
                :"bg-white/0"}
                
          `}>
          <div className={`w-full h-18  text-white flex justify-between items-center font-montserrat`
              }>
              <h1 className="text-2xl font-semibold text-primary ">
                  Nugroho
              </h1>
              <ul className="items-center justify-center gap-8 font-normal hidden md:flex">
              {
                link.map((val)=>{
                  return  <li>
                            <a href={val.link}  className={`${currentPage == val.link? "text-primary":"text-white"} cursor-pointer font-semibold`} onClick={()=>setCurrentPage(val.link)}>
                              {val.title}
                            </a>
                          </li>
                })
              }
              </ul>
              <button className="md:hidden cursor-pointer duration-300 transition-all" onClick={()=>setIsOpen(!isOpen)}>
                {
                  isOpen?
                  <LucideX/>:
                  <LucideMenu/>
                }
              </button>
          </div>
          <div className={`w-full ${isOpen?"max-h-[300px] opacity-100":"max-h-0 opacity-0"} overflow-hidden transition-all duration-500 border-t-white border-t-2`}>
                <ul className="items-center justify-center gap-2 flex flex-col font-normal w-full text-center p-4">
                  {
                    link.map((val)=>{
                      return  <li >
                                <a href={val.link} className={`${currentPage == val.link? "text-primary":"text-white"} cursor-pointer font-semibold`} onClick={()=>setCurrentPage(val.link)}>
                                  {val.title}
                                </a>
                              </li>
                    })
                  }
                </ul>
          </div>
        </div>
    </>
}
export default GeneralHeader;