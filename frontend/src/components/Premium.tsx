
import { Premiuimtopbar } from "./Premiuimtopbar"


export const Premium = () => {
    return <div className="bg-gray-800">
        <Premiuimtopbar/>
        <div className=" text-white flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Premium</h1>
      <p className="mb-12">Get started with a NeonCode Subscription that works for you.</p>
      
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* Monthly Plan */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-xl font-bold mb-2">Monthly <span className="text-sm font-normal">billed monthly</span></h2>
          <p className="text-gray-500 mb-4">Down from $39/month.</p>
          <p className="mb-4">Our monthly plan grants access to all premium features, the best plan for short-term subscribers.</p>
          <div className="text-4xl font-bold mb-4">$35<span className="text-xl font-normal">/mo</span></div>
          <p className="text-sm text-gray-500 mb-4">Prices are marked in USD</p>
          <button className="bg-black text-white py-2 px-4 rounded">Subscribe</button>
        </div>

        {/* Yearly Plan */}
        <div className="bg-yellow-400 text-gray-900 p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-xl font-bold mb-2">Yearly <span className="text-sm font-normal">billed yearly ($159)</span></h2>
          <span className="inline-block bg-gray-200 text-black text-xs font-semibold px-2 py-1 rounded mb-2">🎉 Most popular</span>
          <p className="mb-4">Our most popular plan previously sold for $299 and is now only $13.25/month. This plan saves you over 60% in comparison to the monthly plan.</p>
          <div className="text-4xl font-bold mb-4">$13.25<span className="text-xl font-normal">/mo</span></div>
          <p className="text-sm text-gray-700 mb-4">Prices are marked in USD</p>
          <button className="bg-black text-white py-2 px-4 rounded">Subscribe</button>
        </div>
      </div>
    </div>
    </div>
}