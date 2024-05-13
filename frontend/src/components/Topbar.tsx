import { Link } from "react-router-dom"

export const Topbar = () => {
    return<div>
        <div className="flex justify-around pt-6 text-white lc	">
            <div className="cursor-pointer">
                Leet Code
            </div>
            <div className="flex justify-between ">
                <button className="mr-14">
                    Premium
                </button>
                <button className="mr-14">
                    Explore
                </button>
                <button className="mr-14">
                    Product
                </button>
                <button className="mr-14">
                    Developer
                </button>
                <button>
                    <Link to="/signin">
                    Sign in
                    </Link>
                    
                </button>
            </div>
        </div>
    </div> 
    
}   