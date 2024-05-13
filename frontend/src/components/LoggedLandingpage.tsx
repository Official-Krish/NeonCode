import { LoggedTopbar } from "./LoggedTopbar"

export const LoggedLandingPage = () =>{
    return <div className="bg-gray-800 h-screen">
        <LoggedTopbar/>
        <div className="flex-col">
            <div className="flex justify-center">
                <div className="pt-36 text-white text-3xl font-bold  ">
                    A New Way to Learn
                </div>
            </div>
            
            <div className="flex justify-center">
                <div className="text-gray-500 pt-10 grid-cols-2">
                    LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.
                </div>
            </div>
            <div className="flex justify-center pt-12 pb-20">
            <button type="button" className="text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-cyan-700 dark:hover:bg-cyan-800 dark:focus:ring-cyan-700">Explore</button>
            </div> 
        </div>
        <div>
        <img className="h-auto max-w-full" src="../../images/leet.png" alt="image description"/>

        </div>
        
    </div>
}