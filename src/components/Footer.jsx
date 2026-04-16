import logo from '../assets/logo-xl.png'; 
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';

const Footer = () => {
    return (
      
        <footer className="bg-[#244D3F] text-white py-4 md:py-6">
            <div className="max-w-7xl mx-auto px-6">                
           
                <div className="flex flex-col items-center text-center mb-6">
                    <div className="mb-4">
                        <img 
                            src={logo} 
                            alt="KeenKeeper Logo" 
                            className="h-10 md:h-12 mx-auto brightness-0 invert transition-all" 
                        />
                    </div>
                    <p className="text-gray-200 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                </div>

         
                <div className="flex flex-col items-center mb-6">
                    <h3 className="text-sm md:text-base font-semibold mb-3 text-white tracking-wide">Social Links</h3>
                    <div className="flex justify-center gap-4">
     
                        <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-white hover:scale-110 transition-all flex items-center justify-center shadow-lg group">
                            <img 
                                src={instagramIcon}
                                alt="Instagram" 
                                className="w-5 h-5 object-contain" 
                            />
                        </a>

                        <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-white hover:scale-110 transition-all flex items-center justify-center shadow-lg group">
                            <img 
                                src={facebookIcon} 
                                alt="Facebook" 
                                className="w-5 h-5 object-contain" 
                            />
                        </a>

                        <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-white hover:scale-110 transition-all flex items-center justify-center shadow-lg group">
                            <img 
                                src={twitterIcon} 
                                alt="X" 
                                className="w-5 h-5 object-contain" 
                            />
                        </a>

                    </div>
                </div>

                <div className="border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
    
                    <p className="text-xs text-gray-300 font-medium order-1 md:order-1">
                        © 2026 <span className="text-white">KeenKeeper</span>. All rights reserved.
                    </p>
                    
                    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 text-[10px] sm:text-xs text-gray-300 order-2 md:order-2">
                        <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline py-1">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline py-1">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline py-1">Cookies</a>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;