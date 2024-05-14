export const Footer = () => {
    return <div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 112 0v3z"/></svg>
            </div>
          </div>
          <h2 className="text-xl font-bold text-red-600">Made with ❤️ by Krish</h2>
          <p className="mt-2 text-gray-600">At NeonCode, our mission is to help you improve yourself and land your dream job. We have a sizable repository of interview resources for many companies. In the past few years, our users have landed jobs at top companies around the world.</p>
          <div className="flex justify-center space-x-6 mt-6">
            {/* <img src="path-to-facebook-logo" alt="Facebook" className="h-6" />
            <img src="path-to-leap-motion-logo" alt="Leap Motion" className="h-6" />
            <img src="path-to-apple-logo" alt="Apple" className="h-6" />
            <img src="path-to-uber-logo" alt="Uber" className="h-6" />
            <img src="path-to-squarespace-logo" alt="Squarespace" className="h-6" />
            <img src="path-to-jet-logo" alt="Jet" className="h-6" />
            <img src="path-to-intel-logo" alt="Intel" className="h-6" />
            <img src="path-to-amazon-logo" alt="Amazon" className="h-6" />
            <img src="path-to-bank-of-america-logo" alt="Bank of America" className="h-6" />
            <img src="path-to-pinterest-logo" alt="Pinterest" className="h-6" />
            <img src="path-to-cisco-logo" alt="Cisco" className="h-6" />
            <img src="path-to-stripe-logo" alt="Stripe" className="h-6" /> */}
          </div>
          <p className="mt-6 text-gray-600">If you are passionate about tackling some of the most interesting problems around, we would love to hear from you.</p>
          <a href="#" className="mt-4 inline-block text-blue-500">Join Our Team &rarr;</a>
        </div>
    </div>
}