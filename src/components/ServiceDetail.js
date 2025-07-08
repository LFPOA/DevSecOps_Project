import { useNavigate, useParams } from "react-router-dom";
import EnviromentRow from "./EnviromentRow";

// 테스트용 하드코딩 데이터
const services = [
  {
    name: 'Chat_service',
    environments: [
      { name: 'Dev', date: '2020.20.20', status: 'success' },
      { name: 'Stage', date: '2020.20.20', status: 'error' },
      { name: 'Prod', date: '2020.20.20', status: 'success' }
    ]
  },
  {
    name: 'Shopping_service',
    environments: [
      { name: 'Dev', date: '2020.20.20', status: 'success' },
      { name: 'Stage', date: '2020.20.20', status: 'error' },
      { name: 'Prod', date: '2020.20.20', status: 'success' }
    ]
  },
  {
    name: 'Map_service',
    environments: [
      { name: 'Dev', date: '2020.20.20', status: 'success' },
      { name: 'Stage', date: '2020.20.20', status: 'error' },
      { name: 'Prod', date: '2020.20.20', status: 'success' }
    ]
  }
];

const ServiceDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.name === name);

  if (!service) {
    return <div className="p-6 text-red-600">Service not found</div>;
  }
  return (
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Service Detail</h1>
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Back to Dashboard
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="font-medium text-gray-700">Service</div>
            <div className="font-medium text-gray-700">Status</div>
            <div className="font-medium text-gray-700">Last activity</div>
            <div className="font-medium text-gray-700"></div>
          </div>

          <div className="border-b pb-4 mb-4">
            <div className="text-lg font-medium text-gray-800 mb-4">{service.name}</div>
            {service.environments.map((env, idx) => (
              <EnviromentRow key={idx} env={env} index={idx} />
            ))}
          </div>
        </div>
      </div>
  );
};
export default ServiceDetail;
