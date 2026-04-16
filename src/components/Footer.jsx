import React from 'react';
import logo from '../assets/logo-xl.png'; 
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white  py-7 md:py-8">
            <div className="max-w-7xl mx-auto px-6">                
                <div className="flex flex-col items-center text-center mb-10">
                    <div className="mb-6">
                        <img 
                            src={logo} 
                            alt="KeenKeeper Logo" 
                            className="h-12 md:h-14 mx-auto brightness-0 invert transition-all" 
                        />
                    </div>
                    <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                </div>

                <div className="flex flex-col items-center mb-12">
                    <h3 className="text-lg md:text-xl font-semibold mb-6 text-white tracking-wide">Social Links</h3>
                    <div className="flex justify-center gap-4 sm:gap-6">
     
                        <a href="#" className="bg-white/90 p-3 rounded-full hover:bg-white hover:scale-110 transition-all flex items-center justify-center shadow-lg group">
                            <img 
                                src={instagramIcon}
                                alt="Instagram" 
                                className="w-6 h-6 sm:w-7 sm:h-7 object-contain" 
                            />
                        </a>

                        <a href="#" className="bg-white/90 p-3 rounded-full hover:bg-white hover:scale-110 transition-all flex items-center justify-center shadow-lg group">
                            <img 
                                src={facebookIcon} 
                                alt="Facebook" 
                                className="w-6 h-6 sm:w-7 sm:h-7 object-contain" 
                            />
                        </a>

                        <a href="#" className="bg-white/90 p-3 rounded-full hover:bg-white hover:scale-110 transition-all flex items-center justify-center shadow-lg group">
                            <img 
                                src={twitterIcon} 
                                alt="X" 
                                className="w-6 h-6 sm:w-7 sm:h-7 object-contain" 
                            />
                        </a>

                    </div>
                </div>

           

                <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
    
 
    <p className="text-sm text-gray-300 font-medium order-1 md:order-1">
        © 2026 <span className="text-white">KeenKeeper</span>. All rights reserved.
    </p>
    
    
    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 md:gap-8 text-xs sm:text-sm text-gray-300 order-2 md:order-2">
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