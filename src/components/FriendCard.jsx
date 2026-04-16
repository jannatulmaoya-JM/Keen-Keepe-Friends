const FriendCard = ({ friend }) => {
    // স্ট্যাটাস অনুযায়ী কালার সেট করার লজিক
    const statusColors = {
        "Overdue": "bg-red-500 text-white",
        "Almost Due": "bg-orange-400 text-white",
        "On-Track": "bg-[#244D3F] text-white"
    };

    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
            {/* গোল ছবি */}
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-50">
                <img src={friend.image} alt={friend.name} className="w-full h-full object-cover" />
            </div>

            {/* নাম ও সময় */}
            <h3 className="text-lg font-bold text-gray-800">{friend.name}</h3>
            <p className="text-gray-400 text-[10px] mb-4">{friend.last_interaction}</p>
            
            {/* ট্যাগ সেকশন */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {friend.tags.map((tag, index) => (
                    <span key={index} className="bg-green-50 text-[#244D3F] text-[9px] font-bold px-3 py-1 rounded-full border border-green-100 uppercase">
                        {tag}
                    </span>
                ))}
            </div>

            {/* স্ট্যাটাস বাটন */}
            <div className={`px-5 py-1.5 rounded-full text-[10px] font-bold uppercase ${statusColors[friend.status]}`}>
                {friend.status}
            </div>
        </div>
    );
};

export default FriendCard;