import { Monitor, GitBranch, FileText, Settings, LucideServer, RocketIcon } from "lucide-react";

export const HomeMenuItems = [
  { name: "Dashboard", icon: Monitor, path: "/" },
  { name: "Repos", icon: FileText, path: "/repos" },
  { name: "Config", icon: Settings, path: "/config" }
];

export const ServiceMenuItems = [
    { name: "Service", icon: LucideServer},
    { name: "Pipelines", icon: GitBranch},
    { name: "Releases", icon: RocketIcon}
]