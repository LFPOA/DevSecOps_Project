import DashboardContent from "./DashboardContent.jsx";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
  
  // 테스트용 하드코딩 데이터
  const services = [
    {
      name: 'Chat_service',
      environments: [
        { name: 'Dev', version: '1.1', date: '2020.20.20', status: 'success' },
        { name: 'Stage', version: '1.1', date: '2020.20.20', status: 'error' },
        { name: 'Prod', version: '1.0', date: '2020.20.20', status: 'success' }
      ]
    },
    {
      name: 'Shopping_service',
      environments: [
        { name: 'Dev', version: '1.1', date: '2020.20.20', status: 'success' },
        { name: 'Stage', version: '1.1', date: '2020.20.20', status: 'error' },
        { name: 'Prod', version: '1.0', date: '2020.20.20', status: 'success' }
      ]
    },
    {
      name: 'Map_service',
      environments: [
        { name: 'Dev', version: '1.1', date: '2020.20.20', status: 'success' },
        { name: 'Stage', version: '1.1', date: '2020.20.20', status: 'error' },
        { name: 'Prod', version: '1.0', date: '2020.20.20', status: 'success' }
      ]
    }
  ];

  // 서비스별 상세 페이지로 이동
  const handleServiceClick = (service) => {
    navigate(`/service/${service.name}`)
  };

  return (
     <DashboardContent services={services} onServiceClick={handleServiceClick} />
  );
};

export default Dashboard