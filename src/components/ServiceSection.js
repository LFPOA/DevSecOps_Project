import EnvironmentCard from "./EnvironmentCard";

const ServiceSection = ({ service, onServiceClick }) => (
    
  <div className="mb-8 p-6 bg-gray-50 rounded-lg border">
    <button 
      onClick={() => onServiceClick(service)}
      className="text-lg font-medium text-gray-800 mb-6 hover:text-blue-600 transition-colors cursor-pointer"
    >
      {service.name} &gt;
    </button>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {service.environments.map((env, index) => (
        <EnvironmentCard key={index} env={env} />
      ))}
    </div>
  </div>
);

export default ServiceSection