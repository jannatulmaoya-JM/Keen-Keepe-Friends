import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center pt-16 pb-20 border-b-2 border-gray-300">
            <div className="container mx-auto px-6 lg:px-20 text-center">
 
                <h1 className="text-9xl font-extrabold tracking-widest mb-5 text-[#1D2D35]">
                    404
                </h1>

                <h2 className="text-4xl md:text-5xl font-bold text-[#1D2D35] mb-6 tracking-tight">
                    Oops! Page not found.
                </h2>

                <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                    The page you are looking for might have been removed, had its name changed, <br className="hidden md:block" /> or is temporarily unavailable.
                </p>
                
                <NavLink 
                    to="/" 
                    className="inline-flex items-center gap-2 bg-[#244D3F] text-white px-8 py-3.5 rounded-md font-semibold transition-all hover:bg-[#1a382e] shadow-sm text-lg"
                >
                    <span className="material-symbols-outlined text-2xl">arrow_back</span>
                    Back to Homepage
                </NavLink>
            </div>
        </section>
    );
};

export default NotFound;