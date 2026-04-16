import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTimeline } from "../TimelineContext/TimelineContext"; // পাথটি আপনার ফোল্ডার অনুযায়ী ঠিক আছে
import { toast, Toaster } from 'react-hot-toast';

const FriendDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [friend, setFriend] = useState(null);
    const { addTimelineEntry } = useTimeline();

    useEffect(() => {
        fetch('/friends/friends.json')
            .then(res => res.json())
            .then(data => {
                const selectedFriend = data.find(f => f.id === parseInt(id));
                setFriend(selectedFriend);
            })
            .catch(error => console.error("Error loading details:", error));
    }, [id]);

    const handleAction = (type) => {
        const newEntry = {
            id: Date.now(),
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            type: type,
            title: `${type} with ${friend.name}`,
            icon: type === 'Call' ? 'call' : type === 'Text' ? 'chat_bubble_outline' : 'videocam'
        };
        addTimelineEntry(newEntry);
        toast.success(`${type} logged successfully!`);
    };

    if (!friend) return (
        <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-dots loading-lg text-[#244D3F]"></span>
        </div>
    );

    const statusColors = {
        "Overdue": "bg-red-500",
        "Almost Due": "bg-orange-400",
        "On-Track": "bg-[#244D3F]"
    };

    return (
        <div className="bg-base-200 min-h-screen py-10 px-4 md:px-10">
         
            <Toaster position="top-right" /> 
            
            <div className="max-w-6xl mx-auto">
   
                {/* Back Button */}
                <button 
                    onClick={() => navigate(-1)} 
                    className="mb-6 flex items-center gap-2 text-gray-600 hover:text-black transition-all font-medium"
                >
                    <span className="material-icons">arrow_back</span> Back to Friends
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
     
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <div className="relative w-28 h-28 mb-4">
                            <img 
                                src={friend.image} 
                                alt={friend.name} 
                                className="w-full h-full rounded-full object-cover border-4 border-gray-50 shadow-sm" 
                            />
                        </div>
                        
                        <h2 className="text-2xl font-extrabold text-[#1D2D35]">{friend.name}</h2>
                        
                        <div className="flex gap-2 mt-3">
                            <span className={`${statusColors[friend.status]} text-white text-[10px] px-4 py-1 rounded-full uppercase font-bold`}>
                                {friend.status}
                            </span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 mt-3">
                            {friend.tags.map((tag, idx) => (
                                <span key={idx} className="text-green-700 text-[10px] font-bold border border-green-200 px-3 py-1 rounded-full bg-green-50 uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-gray-500 italic mt-6 text-sm leading-relaxed px-2">
                            "{friend.description}"
                        </p>
                        <p className="text-gray-400 text-xs mt-3">
                            Preferred Mode: <span className="font-semibold text-gray-600">{friend.preferred_contact}</span>
                        </p>

                        <div className="w-full mt-10 space-y-3">
                            <button className="w-full py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all active:scale-95 text-gray-700">
                                <span className="material-icons text-lg">snooze</span> Snooze 2 Weeks
                            </button>
                            <button className="w-full py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all active:scale-95 text-gray-700">
                                <span className="material-icons text-lg">archive</span> Archive
                            </button>
                            <button className="w-full py-3 bg-white border border-red-50 text-red-500 rounded-xl text-sm font-semibold flex items-center justify-center gap-3 hover:bg-red-50 transition-all active:scale-95">
                                <span className="material-icons text-lg">delete_outline</span> Delete Friend
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                      
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            <div className="bg-white p-7 rounded-xl shadow-sm border border-gray-100 text-center">
                                <h4 className="text-4xl font-black text-gray-800">{friend.days_since_contact}</h4>
                                <p className="text-gray-400 text-[10px] font-semibold mt-2 tracking-widest">Days Since Contact</p>
                            </div>
                            <div className="bg-white p-7 rounded-xl shadow-sm border border-gray-100 text-center">
                                <h4 className="text-4xl font-black text-gray-800">{friend.goal_days}</h4>
                                <p className="text-gray-400 text-[10px] font-semibold  mt-2 tracking-widest">Goal (Days)</p>
                            </div>
                            <div className="bg-white p-7 rounded-xl shadow-sm border border-gray-100 text-center border-b-4 border-[#244D3F]">
                                <h4 className="text-xl font-black text-[#244D3F]">{friend.next_due}</h4>
                                <p className="text-gray-400 text-[10px] font-semibold  mt-2 tracking-widest">Next Due Date</p>
                            </div>
                        </div>

                        <div className="bg-white p-7 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center group">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Relationship Goal</h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    Connect every <span className="font-bold text-[#244D3F] underline decoration-green-100">{friend.goal_days} days</span>
                                </p>
                            </div>
                            <button className="px-6 py-2 border-2 border-gray-100 rounded-xl text-xs font-bold text-gray-500 hover:bg-[#244D3F] hover:text-white hover:border-[#244D3F] transition-all">
                                Edit
                            </button>
                        </div>

                      
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-800 mb-8">Quick Check-In</h3>
                            <div className="grid grid-cols-3 gap-6">
                                
                                <button 
                                    onClick={() => handleAction('Call')}
                                    className="group flex flex-col items-center gap-4 p-6 border border-gray-50 rounded-2xl hover:border-green-100 hover:bg-green-50 transition-all active:scale-95"
                                >
                                    <div className="p-3 bg-gray-50 rounded-full group-hover:bg-white transition-colors">
                                        <span className="material-icons text-gray-600 group-hover:text-green-600 text-3xl">call</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Call</span>
                                </button>

                                <button 
                                    onClick={() => handleAction('Text')}
                                    className="group flex flex-col items-center gap-4 p-6 border border-gray-50 rounded-2xl hover:border-blue-100 hover:bg-blue-50 transition-all active:scale-95"
                                >
                                    <div className="p-3 bg-gray-50 rounded-full group-hover:bg-white transition-colors">
                                        <span className="material-icons text-gray-600 group-hover:text-blue-600 text-3xl">chat_bubble_outline</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Text</span>
                                </button>

                                <button 
                                    onClick={() => handleAction('Video')}
                                    className="group flex flex-col items-center gap-4 p-6 border border-gray-50 rounded-2xl hover:border-purple-100 hover:bg-purple-50 transition-all active:scale-95"
                                >
                                    <div className="p-3 bg-gray-50 rounded-full group-hover:bg-white transition-colors">
                                        <span className="material-icons text-gray-600 group-hover:text-purple-600 text-3xl">videocam</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Video</span>
                                </button>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;