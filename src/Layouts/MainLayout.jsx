import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { HomeMenuItems } from "../components/constants/MenuItems";
import { ServiceMenuItems } from "../components/constants/MenuItems";

const MainLayout = () => {

  const location = useLocation();

  const renderSidebar = () => {
    if (location.pathname.startsWith("/service")) 
      return <Sidebar
              menuItems={ServiceMenuItems}
            />
    else
      return <Sidebar
              menuItems={HomeMenuItems}
              />
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="DevSecOps" />
      <div className="flex">
        {renderSidebar()}
        <div className="flex-1 p-6">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;