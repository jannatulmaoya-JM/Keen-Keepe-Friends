

// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//     const linkStyle = ({ isActive }) => 
//         isActive 
//       ? "flex items-center gap-2 bg-[#244D3F] text-white px-4 py-2 rounded-md font-medium transition-all" 
//         : "flex items-center gap-2 text-gray-600 hover:text-[#244D3F] px-4 py-2 transition-all";

//     return (
//         <nav className="shadow-md bg-white">
//             <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-20">
                
              
//                 <div className="text-3xl ">
//                     <span className="font-extrabold text-[#1D2D35]">Keen</span>
//                     <span className="font-semibold text-[#244D3F]">Keeper</span>
//                 </div>

               
//                 <div className="flex gap-4 items-center">
                    
                
//                     <NavLink to="/" className={linkStyle}>
//                         <span className="material-symbols-outlined text-[20px]">home</span>
//                         Home
//                     </NavLink>

//                     <NavLink to="/timeline" className={linkStyle}>
//                         <span className="material-symbols-outlined text-[20px]">history</span>
//                         Timeline
//                     </NavLink>

//                     <NavLink to="/stats" className={linkStyle}>
//                         <span className="material-symbols-outlined text-[20px]">leaderboard</span>
//                         Stats
//                     </NavLink>

//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // অ্যাক্টিভ এবং নরমাল লিংকের স্টাইল
    const linkStyle = ({ isActive }) => 
        isActive 
        ? "flex items-center gap-2 bg-[#244D3F] text-white px-4 py-2 rounded-md font-medium transition-all" 
        : "flex items-center gap-2 text-gray-600 hover:text-[#244D3F] px-4 py-2 transition-all";

    return (
        <nav className="shadow-md bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-20">
                
                {/* লোগো */}
                <div className="text-3xl tracking-tighter">
                    <span className="font-extrabold text-[#1D2D35]">Keen</span>
                    <span className="font-semibold text-[#244D3F]">Keeper</span>
                </div>

                {/* ডেস্কটপ মেনু (বড় স্ক্রিনে দেখাবে) */}
                <div className="hidden md:flex gap-4 items-center">
                    <NavLink to="/" className={linkStyle}>
                        <span className="material-symbols-outlined text-[24px]">home</span>
                        Home
                    </NavLink>
                    <NavLink to="/timeline" className={linkStyle}>
                        <span className="material-symbols-outlined text-[24px]">schedule</span>
                        Timeline
                    </NavLink>
                    <NavLink to="/stats" className={linkStyle}>
                        <span className="material-symbols-outlined text-[24px]">query_stats</span>
                        Stats
                    </NavLink>
                </div>

                {/* মোবাইল মেনু বাটন (শুধু ছোট স্ক্রিনে দেখাবে) */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-[#244D3F] focus:outline-none">
                        <span className="material-symbols-outlined text-3xl">
                            {isOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* মোবাইল ড্রপডাউন মেনু */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 pb-4 px-4 transition-all">
                    <div className="flex flex-col gap-2 mt-4">
                        <NavLink to="/" className={linkStyle} onClick={() => setIsOpen(false)}>
                            <span className="material-symbols-outlined text-[22px]">home</span>
                            Home
                        </NavLink>
                        <NavLink to="/timeline" className={linkStyle} onClick={() => setIsOpen(false)}>
                            <span className="material-symbols-outlined text-[22px]">schedule</span>
                            Timeline
                        </NavLink>
                        <NavLink to="/stats" className={linkStyle} onClick={() => setIsOpen(false)}>
                            <span className="material-symbols-outlined text-[22px]">query_stats</span>
                            Stats
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;