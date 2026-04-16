import { createContext, useState, useContext } from 'react';

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [timelineData, setTimelineData] = useState([]);

    const addTimelineEntry = (entry) => {
        setTimelineData((prev) => [entry, ...prev]);
    };

    return (
        <TimelineContext.Provider value={{ timelineData, addTimelineEntry }}>
            {children}
        </TimelineContext.Provider>
    );
};

export const useTimeline = () => useContext(TimelineContext);