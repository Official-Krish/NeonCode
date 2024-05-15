
import { userAtom } from "../store/atoms/user"
import { useRecoilValue } from "recoil"

export const LoggedTopbar = () => {
    const userAvatar = useRecoilValue(userAtom);
    return<div>
        <div className="flex justify-around pt-6 text-white ">
            <div className="cursor-pointer">
                NeonCode
            </div>
            <div className="flex justify-between ">
                <button className="mr-14">
                    Premium
                </button>
                <button className="mr-14">
                    Product
                </button>
                <button className="mr-14">
                    About
                </button>
                <button onClick={DevClick} className="mr-14">
                    Developer
                </button>
                <div className="flex justify-end pr-6">
                    <button>
                        <Avatar size={"big"} name={userAvatar.user?.email}/>
                    </button>
                </div>
                
                
            </div>
        </div>
        
        
    </div> 
    
}   

export function Avatar({ name, size = "small" }: { name: any , size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
        {name[0]}
    </span>
</div>
}

export function DevClick () {
    return window.location.href = "https://github.com/Official-Krish";
}