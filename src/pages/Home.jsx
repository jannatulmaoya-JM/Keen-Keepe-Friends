// import { useEffect, useState } from "react";
// import Banner from '../components/Banner';
// import FriendCard from "../components/FriendCard";

// const Home = () => {
//     const [friends, setFriends] = useState([]);

//     useEffect(() => {
//         fetch('/friends/friends.json')
//             .then(res => res.json())
//             .then(data => setFriends(data))
//             .catch(error => console.error("Error fetching data:", error));
//     }, []);

//     return (
//         // পুরো পেজের ব্যাকগ্রাউন্ড bg-base-200
//         <div className="bg-base-200 min-h-screen">
//             <Banner />

//             {/* কার্ডগুলোর জন্য মেইন কন্টেইনার */}
//             <div className="max-w-screen-xl mx-auto px-6 py-16">
//                 <h2 className="text-3xl font-bold text-[#1D2D35] mb-10 ml-2">Your Friends</h2>
                
//                 {/* কার্ড গ্রিড */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                     {
//                         friends.map(friend => (
//                             <FriendCard key={friend.id} friend={friend} />
//                         ))
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;
import { useEffect, useState } from "react";
import Banner from '../components/Banner';
import FriendCard from "../components/FriendCard";

const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('/friends/friends.json')
            .then(res => res.json())
            .then(data => setFriends(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        // পুরো পেজের ব্যাকগ্রাউন্ড bg-base-200 যা ব্যানারের সাথে মিলে যাবে
        <div className="bg-base-200 min-h-screen">
            <Banner />

            {/* মেইন কন্টেইনার - এখানে max-w-6xl দেওয়া হয়েছে ব্যানারের সাথে এলাইনমেন্ট মিলাতে */}
            <div className="max-w-6xl mx-auto px-6 lg:px-0 pb-20">
                
                {/* Your Friends টেক্সট - mb-6 দিয়ে উপরে তোলা হয়েছে এবং ব্যানারের মতো এলাইন করা হয়েছে */}
                <h2 className="text-2xl font-bold text-[#1D2D35] mb-8">
                    Your Friends
                </h2>
                
                {/* কার্ড গ্রিড */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        friends.map(friend => (
                            <FriendCard key={friend.id} friend={friend} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;