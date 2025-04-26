
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const LiveStreamPage = () => {
  const [fireDetected, setFireDetected] = useState(false);
  
  // For demonstration purposes, toggle detection status every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFireDetected(prev => !prev);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Layout title="Live Stream">
      <div className="flex flex-col h-full">
        <div className="flex-1 relative">
          <div className="absolute top-0 left-0 bg-green-600 text-white px-4 py-1 rounded-br-md flex items-center gap-2 z-10">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
            <span>Live</span>
          </div>
          
          <div className="bg-gray-700 w-full h-full rounded-lg flex items-center justify-center">
            <div className="text-gray-400">
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="text-lg">Camera feed unavailable</p>
                <p className="text-sm">Connect a camera to see live video</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <div className={`px-8 py-3 rounded-md text-white font-bold text-xl ${fireDetected ? 'bg-espfire-red' : 'bg-espfire-dark-blue'}`}>
            STATUS: {fireDetected ? 'FIRE DETECTED' : 'NO FIRE DETECTED'}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LiveStreamPage;
