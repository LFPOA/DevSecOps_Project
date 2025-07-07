import { Plus } from "lucide-react";
import ServiceSection from "./ServiceSection.js";

const DashboardContent = ({ services, onServiceClick }) => {

  const handleAddService = () => {
    console.log('Add service clicked');
  };

  return (
    <div>
    <div className="flex justify-end mb-4">
      <button 
        onClick={handleAddService}
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
      <Plus size={16} className="mr-2" />
      Add Service
      </button>
    </div>
    {services.map((service, index) => (
      <ServiceSection 
        key={index} 
        service={service} 
        onServiceClick={onServiceClick} 
      />
    ))}
  </div>
  );
};

export default DashboardContent