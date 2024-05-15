
import { Link } from "react-router-dom";
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
                <button onClick={() =>{
                        window.open("http://localhost:5173/premium", '_blank', 'noopener,noreferrer');

                }} className="mr-14">
                    Premium
                </button>


                <Link to = "/leaderboard">
                <button className="mr-14 pt-2">
                    Leaderboard
                    
                </button>
                </Link>
                
                <button className="mr-14">
                    About
                </button>
                <button onClick={() =>{
                        window.open("https://github.com/Official-Krish", '_blank', 'noopener,noreferrer');

                }} className="mr-14">
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
    return <button className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
        {name[0]}
    </span>
</button>
}

