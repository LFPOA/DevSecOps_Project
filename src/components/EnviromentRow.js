const EnvironmentRow = ({ env, index }) => {

    const getStatusColor = (status) => {
        switch (status) {
            case 'success': return 'bg-green-500';
            case 'error': return 'bg-red-500';
            case 'warning': return 'bg-yellow-500';
            default: return 'bg-gray-500';
        }
    };

    return (
    <div key={index} className="grid grid-cols-4 gap-4 py-3 hover:bg-gray-50 rounded-lg">
    <div className="px-3">
      <span className="text-gray-800">{env.name}</span>
    </div>
    <div className="px-3">
      <div className="flex items-center">
        <div className={`w-3 h-3 rounded-full mr-2 ${getStatusColor(env.status)}`}></div>
        <span className="text-gray-600">&gt;</span>
      </div>
    </div>
    <div className="px-3">
      <span className="text-gray-600">{env.date}</span>
    </div>
    <div className="px-3">
      <span className="text-gray-600">&gt;</span>
    </div>
    </div>
    )
};

export default EnvironmentRow