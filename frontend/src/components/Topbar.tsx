import { Link } from "react-router-dom"
import { DevClick } from "./LoggedTopbar"

export const Topbar = () => {
    return<div>
        <div className="flex justify-around pt-6 text-white lc	">
            <div className="cursor-pointer">
                NeonCode
            </div>
            <div className="flex justify-between ">
                <button className="mr-14">
                    Premium
                </button>
                <button className="mr-14">
                    Explore
                </button>


                <Link to="/Leaderboard">
                <button className="mr-14">
                    Leaderboard
                </button>
                </Link>
                
                
                <button onClick={DevClick}className="mr-14">
                    Developer
                </button>
                <button>
                    <Link to="/user">
                    Sign in
                    </Link>
                    
                </button>
            </div>
        </div>
    </div> 
    
}   