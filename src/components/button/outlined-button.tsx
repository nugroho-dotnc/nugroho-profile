import type { ReactNode } from "react";

const OutlinedButton = ({className, children, onClick, mode = "primary"}:{
    className?: string;
    children?: ReactNode;
    onClick?: ()=>void;
    mode?: "light" | "primary" | "dark"
}) =>{
    if(mode == "primary"){
        return<>
            <button className={`p-2 hover:bg-primary hover:text-dark-foreground mt-4 transition-all duration-300 rounded-sm border-primary border-2 text-primary bg-transparent cursor-pointer ${className}`}  onClick={onClick}>
                    {children}
            </button>
        </>
   }else if(mode = "light"){
        return<>
            <button className={`p-2 hover:bg-white hover:text-dark-foreground mt-4 transition-all duration-300 rounded-sm border-white border-2 text-white bg-transparent cursor-pointer ${className}`}  onClick={onClick}>
                    {children}
            </button>
        </>
   }else{
        return<>
            <button className={`p-2 hover:bg-dark-foreground hover:text-white mt-4 transition-all duration-300 rounded-sm border-dark-foreground border-2 text-dark-foreground bg-transparent cursor-pointer ${className}`}  onClick={onClick}>
                    {children}
            </button>
        </>
   }
}
export default OutlinedButton;