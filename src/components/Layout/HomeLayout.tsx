import type React from "react"
import GeneralHeader from "../header/GeneralHeader"

const HomeLayout = ({children}:{children: React.ReactNode}) => {
    return <>
        <div className="h-fit w-full font-orbiter">
            {/* header disini */}
            <GeneralHeader/>
            {children}
        </div>
    </>
}
export default HomeLayout;