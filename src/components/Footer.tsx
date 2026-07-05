export function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-200 pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-950 font-bold text-xl">
                E
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white leading-tight text-xl">Excellence</span>
                <span className="text-xs text-amber-500 font-medium tracking-wider uppercase">Career Academy</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              A premier coaching institute committed to shaping futures through expert guidance, comprehensive study material, and unwavering dedication to student success.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-amber-500 rounded-full inline-block"></span>
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#results" className="hover:text-amber-400 transition-colors">Our Results</a></li>
              <li><a href="#faculty" className="hover:text-amber-400 transition-colors">Faculty Profiles</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Campus Gallery</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-amber-500 rounded-full inline-block"></span>
              Our Courses
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#courses" className="hover:text-amber-400 transition-colors">JEE Main & Advanced</a></li>
              <li><a href="#courses" className="hover:text-amber-400 transition-colors">NEET Preparation</a></li>
              <li><a href="#courses" className="hover:text-amber-400 transition-colors">CUET Coaching</a></li>
              <li><a href="#courses" className="hover:text-amber-400 transition-colors">SSC & Banking</a></li>
              <li><a href="#courses" className="hover:text-amber-400 transition-colors">Foundation (Class 9-10)</a></li>
              <li><a href="#courses" className="hover:text-amber-400 transition-colors">Board Prep (Class 11-12)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-amber-500 rounded-full inline-block"></span>
              Newsletter
            </h4>
            <p className="text-sm opacity-80 mb-4">Subscribe to get latest exam notifications and updates.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-blue-900/50 border border-blue-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-blue-300 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button 
                type="button" 
                className="bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold py-2.5 rounded-lg transition-colors text-sm"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-900 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Excellence Career Academy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
