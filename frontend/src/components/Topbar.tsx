import { Link } from "react-router-dom"


export const Topbar = () => {
    return<div>
        <div className="flex justify-around pt-6 text-white">
            <div className="cursor-pointer">
                NeonCode
            </div>
            <div className="flex justify-between ">
            <button onClick={() =>{
                    window.open("http://localhost:5173/premium", '_blank', 'noopener,noreferrer');

                }} className="mr-14">
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
                
                
                <button onClick={() =>{
                        window.open("https://github.com/Official-Krish", '_blank', 'noopener,noreferrer');

                }} className="mr-14">
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