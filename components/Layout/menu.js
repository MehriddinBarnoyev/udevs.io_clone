import DashboardIcon from "@mui/icons-material/Dashboard";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FolderIcon from "@mui/icons-material/Folder";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";


const menuItems = [
  { title: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { title: "Projects", icon: <PermMediaIcon />, path: "/projects" },
  { title: "Teams", icon: <WidgetsIcon />, path: "/Teams" },
  { title: "Employees", icon: <PeopleOutlineIcon />, path: "/employees" },
  { title: "Meetings", icon: <LocalPhoneIcon />, path: "/meetings" },
  { title: "Tasks", icon: <FolderIcon />, path: "/tasks" },
  { title: "Settings", icon: <SettingsIcon />, path: "/settings" },
];
export default menuItems;
