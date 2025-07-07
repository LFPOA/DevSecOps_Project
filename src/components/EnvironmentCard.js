import { Database } from "lucide-react";

const EnvironmentCard = ({ env }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'success': return 'bg-green-500';
            case 'error': return 'bg-red-500';
            case 'warning': return 'bg-yellow-500';
            default: return 'bg-gray-500';
        }
    };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{env.name}</h3>
    <div className="mb-4">
      <Database size={48} className="text-gray-600" />
    </div>
    <div className="text-center text-sm text-gray-600 mb-2">
      <div>version {env.version}</div>
      <div className="text-gray-400">{env.date}</div>
    </div>
    <div className="flex items-center">
      <span className="text-sm text-gray-600 mr-2">status</span>
      <div className={`w-3 h-3 rounded-full ${getStatusColor(env.status)}`}></div>
    </div>
    </div>
  )
};


export default EnvironmentCard