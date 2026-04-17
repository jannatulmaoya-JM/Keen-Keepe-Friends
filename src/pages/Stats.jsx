import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useTimeline } from '../TimelineContext/TimelineContext';

const Stats = () => {
    const { timelineData } = useTimeline();

    const dataCounts = timelineData.reduce((acc, curr) => {
        const type = curr.type; 
        if (acc[type]) {
            acc[type] += 1;
        } else {
            acc[type] = 1;
        }
        return acc;
    }, {});

    const chartData = [
        { name: 'Text', value: dataCounts['Text'] || 0 },
        { name: 'Call', value: dataCounts['Call'] || 0 },
        { name: 'Video', value: dataCounts['Video'] || 0 },
    ];

    const COLORS = ['#8b5cf6', '#1D2D35', '#34d399'];

    return (
        <div className="bg-[#F8F9FA] min-h-screen py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-[#1D2D35]">Friendship Analytics</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-gray-500 font-semibold mb-6">By Interaction Type</p>
                    <div className="h-[300px] w-full flex justify-center items-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36}/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;