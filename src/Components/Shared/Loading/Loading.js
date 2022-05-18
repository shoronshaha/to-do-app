import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="flex items-center justify-center space-x-2 animate-bounce mt-10">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
        </div>
    );
};

export default Loading;