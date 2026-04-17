import { useState } from "react";
import { useTimeline } from "../TimelineContext/TimelineContext";

const Timeline = () => {
    const { timelineData } = useTimeline();

    const [filter, setFilter] = useState("All");

    const filteredData = filter === "All" 
        ? timelineData 
        : timelineData.filter(entry => entry.type === filter);

    return (
        <div className="bg-base-200 min-h-screen py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-[#1D2D35]">Timeline</h2>

                <div className="mb-6">
                    <select 
                        className="select select-bordered w-full max-w-xs bg-white text-gray-600 focus:outline-none border-gray-200"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="All">Filter timeline (All)</option>
                        <option value="Call">Call</option>
                        <option value="Text">Text</option>
                        <option value="Video">Video</option>
                    </select>
                </div>

                <div className="space-y-4">
                    {filteredData.length === 0 ? (
                        <div className="bg-white p-10 rounded-xl text-center border border-dashed border-gray-300">
                            <p className="text-gray-500 font-medium">No {filter !== "All" ? filter : ""} interactions found.</p>
                        </div>
                    ) : (
                        filteredData.map((entry) => (
                            <div key={entry.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-5 transition-all hover:shadow-md">
                                <div className="p-3 bg-gray-50 rounded-lg">   
                                    <span className="material-icons text-gray-600">
                                        {entry.icon}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-lg">
                                        {entry.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm font-medium">
                                        {entry.date}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timeline;