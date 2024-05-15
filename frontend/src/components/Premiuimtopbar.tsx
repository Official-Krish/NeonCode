

export const Premiuimtopbar = () => {
    return <div>
        <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">

            <div className="cursor-pointer hover:text-gray-400 font-extrabold text-lg	pr-28">NeonCode</div>
            
          
          <a href="/problems" className="hover:text-gray-400 ">Problems</a>
          <a href="/contest" className="hover:text-gray-400">Contest</a>
          <a href="/discuss" className="hover:text-gray-400">Discuss</a>
          <div className="relative group">
            <a href="#" className="hover:text-gray-400">Interview</a>
            <div className="absolute hidden group-hover:block bg-gray-700 text-white mt-2 p-2 rounded shadow-lg">
              <a href="/interview-1" className="block px-4 py-2 hover:bg-gray-600">Interview 1</a>
              <a href="/interview-2" className="block px-4 py-2 hover:bg-gray-600">Interview 2</a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="text-orange-500 hover:text-orange-400">Store</a>
          </div>
        </div>

        {/* Authentication Links */}
        <div className="flex items-center space-x-4">
          <a href="/register" className="hover:text-gray-400">Register</a>
          <span>or</span>
          <a href="/signin" className="hover:text-gray-400">Sign in</a>
          <a href="/premium" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Premium</a>
        </div>
      </div>
    </nav>
    </div>
}