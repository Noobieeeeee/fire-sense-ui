
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/ui/custom/Button';

// Sample log data
interface LogEntry {
  id: string;
  dateTime: string;
  activity: string;
  fireStatus: 'Detected' | 'Undetected';
  smokeStatus: 'Detected' | 'Undetected';
  normalFireStatus: 'Detected' | 'Undetected';
}

const LogsPage = () => {
  // Sample data - in a real app, this would come from an API
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: '1',
      dateTime: 'August 16, 2024 08:58:47 am',
      activity: 'Detecting',
      fireStatus: 'Undetected',
      smokeStatus: 'Undetected',
      normalFireStatus: 'Detected',
    },
    {
      id: '2',
      dateTime: 'August 16, 2024 08:55:40 am',
      activity: 'Detecting',
      fireStatus: 'Detected',
      smokeStatus: 'Detected',
      normalFireStatus: 'Undetected',
    },
    {
      id: '3',
      dateTime: 'August 16, 2024 08:55:40 am',
      activity: 'Detecting',
      fireStatus: 'Undetected',
      smokeStatus: 'Undetected',
      normalFireStatus: 'Detected',
    },
  ]);

  // Handle print logs button click
  const handlePrintLogs = () => {
    window.print();
  };

  const getStatusColor = (status: 'Detected' | 'Undetected') => {
    return status === 'Detected' ? 'text-espfire-green' : 'text-espfire-red';
  };

  return (
    <Layout title="Logs">
      <div className="flex flex-col h-full">
        <div className="bg-espfire-dark-blue rounded-lg p-4 flex-1">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-800 rounded-md">
                  <th className="px-4 py-3 rounded-l-md">Date & Time</th>
                  <th className="px-4 py-3">Activity</th>
                  <th className="px-4 py-3 text-center text-red-400">Fire</th>
                  <th className="px-4 py-3 text-center text-orange-300">Smoke</th>
                  <th className="px-4 py-3 text-center rounded-r-md text-yellow-300">Normal Fire</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.id} className="border-b border-gray-700 last:border-0">
                    <td className="px-4 py-3">{log.dateTime}</td>
                    <td className="px-4 py-3">{log.activity}</td>
                    <td className={`px-4 py-3 text-center ${getStatusColor(log.fireStatus)}`}>
                      {log.fireStatus}
                    </td>
                    <td className={`px-4 py-3 text-center ${getStatusColor(log.smokeStatus)}`}>
                      {log.smokeStatus}
                    </td>
                    <td className={`px-4 py-3 text-center ${getStatusColor(log.normalFireStatus)}`}>
                      {log.normalFireStatus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <Button variant="success" onClick={handlePrintLogs}>
            Print Logs
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default LogsPage;
