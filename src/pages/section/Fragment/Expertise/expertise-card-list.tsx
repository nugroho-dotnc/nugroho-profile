import { LucideCode, LucidePaintBucket, LucideSmartphone } from "lucide-react";
import ExpertiseCard from "../../../../components/card/expertise-card";
import { ExpertType, useExpertise } from "../../../../utils/Context/expertise-context-provider";

const ExpertiseList = [
  {
    icon: <LucidePaintBucket />,
    title: "UI UX DESIGN",
    description:
      "Designing intuitive and visually appealing interfaces that enhance user experiences, focusing on usability, accessibility, and aesthetics.",
    expertise: ExpertType.UIUX
  },
  {
    icon: <LucideCode />,
    title: "FRONT END DEVELOPER",
    description:
      "Building responsive and high-performance web applications using modern frameworks, clean code practices, and seamless user interaction.",
    expertise: ExpertType.FRONTEND
  },
  {
    icon: <LucideSmartphone />,
    title: "MOBILE APP DEVELOPMENT",
    description:
      "Building user-friendly and high-performance mobile applications with modern technologies, focusing on seamless functionality, responsive design, and engaging user experience.",
    expertise: ExpertType.MOBILE
  },
];

const ExpertiseCardList =  ({}:{}) => {
    const {expertiseContext, setExpertiseContext} = useExpertise();
    return <>
        <div className="flex flex-col w-full items-center justify-center gap-12">
          <div className="grid lg:grid-cols-3 w-full lg:h-[20rem]">   
                      {
                          ExpertiseList.map((val)=>{
                              return <ExpertiseCard
                                      icon={val.icon}
                                      title={val.title}
                                      description={val.description}
                                      onClick={()=>setExpertiseContext(val.expertise)}
                                      active={expertiseContext == val.expertise}
                                  />
                          })
                      }
          </div>
          <div className="gap-4 hidden lg:flex">
              {
                      ExpertiseList.map((val)=>{
                          return <div className={`w-4 h-4   border rounded-full transition-all duration-300 ease-in-out ${val.expertise == expertiseContext?"bg-primary/100 shadow-md shadow-accent border-dark-foreground":"bg-primary/0 shadow-md shadow-black border-primary"} `}></div>
                      })
                  }
          </div>
        </div>
    </>
}
export default ExpertiseCardList;