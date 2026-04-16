
const Banner = () => {
    return (
        // banner section
        <section className="bg-gray-200 pt-16 pb-20">
            
            <div className="container mx-auto px-6 lg:px-20">
            
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1D2D35] mb-6 ">
                        Friends to keep close in your life
                    </h1>
                    <p className="text-gray-500 text-lg mb-10 ">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br className="hidden md:block" /> relationships that matter most.
                    </p>

                    <button className="flex items-center gap-2 bg-[#244D3F] text-white px-7 py-3 rounded-md font-semibold transition-all hover:bg-[#1a382e] mx-auto shadow-sm">
                        <span className="material-symbols-outlined">add</span>
                        Add a Friend
                    </button>
                    
                    <div className="mt-16"></div> 
                </div>

               
                <div className="max-w-6xl mx-auto"> 
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                      
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center transition-transform hover:-translate-y-1">
                            <h2 className="text-3xl font-bold text-[#1D2D35] mb-2">10</h2>
                            <p className="text-gray-600 font-semibold text-base">Total Friends</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center transition-transform hover:-translate-y-1">
                            <h2 className="text-3xl font-bold text-[#1D2D35] mb-2">3</h2>
                            <p className="text-gray-600 font-semibold text-base">On Track</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center transition-transform hover:-translate-y-1">
                            <h2 className="text-3xl font-bold text-[#1D2D35] mb-2">6</h2>
                            <p className="text-gray-600 font-semibold text-base">Need Attention</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center transition-transform hover:-translate-y-1">
                            <h2 className="text-3xl font-bold text-[#1D2D35] mb-2">12</h2>
                            <p className="text-gray-600 font-semibold text-base">Interactions</p>
                        </div>

                    </div>

                    <div className="border-b-2 border-gray-300 w-full mt-16"></div>
                </div>
            </div>
        </section>
    );
};

export default Banner;