import type { ReactNode } from "react";

const GeneralButton = ({className, children, onClick, mode = "primary"}:{
    className?: string;
    children?: ReactNode;
    onClick?: ()=>void;
    mode?: "light" | "primary" | "dark"
}) =>{
   if(mode == "primary"){
        return<>
            <button className={`p-2 bg-primary text-dark-foreground mt-4 transition-all duration-300 rounded-sm border-primary border-2 hover:text-primary hover:bg-transparent cursor-pointer ${className}`}  onClick={onClick}>
                    {children}
            </button>
        </>
   }else if(mode = "light"){
        return<>
            <button className={`p-2 bg-white text-dark-foreground mt-4 transition-all duration-300 rounded-sm border-white border-2 hover:text-white hover:bg-transparent cursor-pointer ${className}`}  onClick={onClick}>
                    {children}
            </button>
        </>
   }else{
        return<>
            <button className={`p-2 bg-dark-foreground text-white mt-4 transition-all duration-300 rounded-sm border-dark-foreground border-2 hover:text-dark-foreground hover:bg-transparent cursor-pointer ${className}`}  onClick={onClick}>
                    {children}
            </button>
        </>
   }
}
export default GeneralButton;