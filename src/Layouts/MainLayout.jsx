import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Monitor, GitBranch, FileText, Settings } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: Monitor },
  { name: "Pipelines", icon: GitBranch },
  { name: "Repos", icon: FileText },
  { name: "Config", icon: Settings }
];

const MainLayout = ({ selectedMenu, onMenuSelect, children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Devops" />
      <div className="flex">
        <Sidebar
          menuItems={menuItems}
          selectedMenu={selectedMenu}
          onMenuSelect={onMenuSelect}
        />
        <div className="flex-1 p-6">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;