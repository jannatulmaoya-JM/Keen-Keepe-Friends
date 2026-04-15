

import { NavLink } from "react-router-dom";

const Navbar = () => {
    const linkStyle = ({ isActive }) => 
        isActive 
      ? "flex items-center gap-2 bg-[#244D3F] text-white px-4 py-2 rounded-md font-medium transition-all" 
        : "flex items-center gap-2 text-gray-600 hover:text-[#244D3F] px-4 py-2 transition-all";

    return (
        <nav className="shadow-md bg-white">
            <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-20">
                
              
                <div className="text-3xl ">
                    <span className="font-extrabold text-[#1D2D35]">Keen</span>
                    <span className="font-semibold text-[#244D3F]">Keeper</span>
                </div>

               
                <div className="flex gap-4 items-center">
                    
                
                    <NavLink to="/" className={linkStyle}>
                        <span className="material-symbols-outlined text-[20px]">home</span>
                        Home
                    </NavLink>

                    <NavLink to="/timeline" className={linkStyle}>
                        <span className="material-symbols-outlined text-[20px]">history</span>
                        Timeline
                    </NavLink>

                    <NavLink to="/stats" className={linkStyle}>
                        <span className="material-symbols-outlined text-[20px]">leaderboard</span>
                        Stats
                    </NavLink>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;