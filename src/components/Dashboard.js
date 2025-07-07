import { useState } from "react";
import { GitBranch, FileText, Settings } from "lucide-react";
import DashboardContent from "./DashboardContent.jsx";
import EmptyState from "./Emptystate.js";
import { useNavigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout.jsx";

const Dashboard = () => {
    const navigate = useNavigate();

  const [selectedMenu, setSelectedMenu] = useState('Dashboard');
  
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
    }
  ];

  const handleMenuSelect = (menuName) => {
  // 필요한 로직 추가 (예: setSelectedMenu)
  setSelectedMenu(menuName);
};

  // 서비스별 상세 페이지로 이동
  const handleServiceClick = (service) => {
    navigate(`/service/${service.name}`)
  };

  const renderMainContent = () => {
    switch (selectedMenu) {
      case 'Dashboard':
        return <DashboardContent services={services} onServiceClick={handleServiceClick} />;
      case 'Pipelines':
        return (
          <EmptyState 
            icon={GitBranch}
            title="Pipelines"
            description="Pipeline management functionality coming soon"
          />
        );
      case 'Repos':
        return (
          <EmptyState 
            icon={FileText}
            title="Repositories"
            description="Repository management functionality coming soon"
          />
        );
      case 'Config':
        return (
          <EmptyState 
            icon={Settings}
            title="Configuration"
            description="Configuration settings coming soon"
          />
        );
      default:
        return <DashboardContent services={services} onServiceClick={handleServiceClick} />;
    }
  };

  return (
    <MainLayout selectedMenu={selectedMenu} onMenuSelect={handleMenuSelect}>
        {renderMainContent()}
    </MainLayout>
  );
};

export default Dashboard