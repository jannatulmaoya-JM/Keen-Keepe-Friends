
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
        <div className="bg-base-200 min-h-screen">
            <Banner />
            <div className="max-w-6xl mx-auto px-6 lg:px-0 pb-20">
                <h2 className="text-2xl font-bold text-[#1D2D35] mb-8">
                    Your Friends
                </h2>
                
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