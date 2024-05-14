import { Link } from "react-router-dom"
import { Topbar } from "./Topbar"
import { Footer } from "./Footer"
export const LandingPage = () =>{
    return <div className="bg-gray-800 h-screen">
        <Topbar/>
        <div className="flex-col">
            <div className="flex justify-center">
                <div className="pt-36 text-white text-3xl font-bold  ">
                    A New Way to Learn
                </div>
            </div>
            
            <div className="flex justify-center">
                <div className="text-gray-500 pt-10 grid-cols-2">
                    NeonCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.
                </div>
            </div>
            <div className="flex justify-center pt-12 pb-20">
                <Link to="/user">
                <button type="button" className="text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-cyan-700 dark:hover:bg-cyan-800 dark:focus:ring-cyan-700">Create Account</button>
                </Link>
            
            </div> 
        </div>
        <div>
        {/* <img className="h-auto max-w-full" src="../../images/leet.png" alt="image description"/> */}
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Questions, Community & Contests */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
                <span>3300+</span>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 20a8 8 0 100-16 8 8 0 000 16zm1-11h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 112 0v3z"/></svg>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 text-white rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 00-8 8 8 8 0 0016 0 8 8 0 00-8-8zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"/></svg>
              </div>
            </div>
            <h2 className="mt-4 text-xl font-bold text-blue-600">Questions, Community & Contests</h2>
            <p className="mt-2 text-gray-700">Over 3300 questions for you to practice. Come and join one of the largest tech communities with hundreds of thousands of active users and participate in our contests to challenge yourself and earn rewards.</p>
            <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">View Questions</a>
          </div>
          
          {/* Companies & Candidates */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 text-white rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 00-8 8 8 8 0 0016 0 8 8 0 00-8-8zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"/></svg>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-500 text-white rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 00-8 8 8 8 0 0016 0 8 8 0 00-8-8zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"/></svg>
              </div>
            </div>
            <h2 className="mt-4 text-xl font-bold text-yellow-600">Companies & Candidates</h2>
            <p className="mt-2 text-gray-700">Not only does LeetCode prepare candidates for technical interviews, we also help companies identify top technical talent. From sponsoring contests to providing online assessments and training, we offer numerous services to businesses.</p>
            <a href="#" className="mt-4 inline-block text-yellow-500 hover:underline">Business Opportunities</a>
          </div>

          {/* Developer */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-teal-500 text-white rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 00-8 8 8 8 0 0016 0 8 8 0 00-8-8zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"/></svg>
            </div>
            <h2 className="mt-4 text-xl font-bold text-teal-600">Developer</h2>
            <p className="mt-2 text-gray-700">We now support 14 popular coding languages. At our core, LeetCode is about developers. Our powerful development tools such as Playground help you test, debug and even write your own projects online.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>    
      </div>
    </div>
}