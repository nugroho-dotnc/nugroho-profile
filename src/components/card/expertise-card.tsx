import type { ReactNode } from "react"

const ExpertiseCard = (
    {
        icon,
        title,
        description,
        active,
        onClick
    }:
    {
        icon?: ReactNode;
        title?: string;
        description?: string;
        active?: boolean;
        onClick?: ()=>void;
    }
) =>{
    return <>
        <div className={`w-full h-full p-4 font-poppins text-center transition-transform duration-500 ease-in-out cursor-pointer  ${active?"-translate-y-4":"-translate-0"}`} onClick={onClick}>
            <div className={`w-full h-full flex flex-col gap-4 items-center justify-center  transition-all duration-300 ease-in-out hover:shadow-lg  ${active?"shadow-lg shadow-accent":"shadow-sm shadow-black"}   p-4`}>
                <div className="text-primary">
                    {
                        icon
                    }
                </div>
                <h1 className={`${active?"text-primary":"text-white"} font-semibol text-2xl`}>
                    {
                        title
                    }
                </h1>
                <p className="text-white text-base">
                    {
                        description
                    }
                </p>
            </div>
        </div>
    </>
}
export default ExpertiseCard;