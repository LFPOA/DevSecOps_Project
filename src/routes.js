import Dashboard from "./components/Dashboard";
import ServiceDetail from "./components/ServiceDetail";
import Repos from "./components/Repos";
import Config from "./components/Config";
import MainLayout from "./Layouts/MainLayout";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "service/:name", element: <ServiceDetail /> },
      { path: "repos", element: <Repos /> },
      { path: "config", element: <Config /> },
    ],
  },
];

export default routes;
