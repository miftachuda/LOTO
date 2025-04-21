import { useState } from "react";
import EquipmentLib from "./Equipment_Library";
import {
  Settings2,
  LayoutDashboard,
  Library,
  Info,
  Menu,
  X,
  FileKey2,
} from "lucide-react";
import AboutPage from "./About";
import SettingsPage from "./Setting";
import DashboardPage from "./DashboardPage";
// import Equipment from "./Equipment_Interface";

type MenuItem = "dashboard" | "equipment" | "settings" | "about";

function App() {
  // const [equipments, setEquipments] = useState<Equipment[]>([]);
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItem>("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [formData, setFormData] = useState<Omit<Equipment, "id" | "createdAt">>(
  //   {
  //     tagNumber: "",
  //     voltageRating: "",
  //     powerRating: "",
  //     rpm: "",
  //     flowRate: "",
  //     pressure: "",
  //     description: "",
  //   }
  // );

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const newEquipment: Equipment = {
  //     ...formData,
  //     id: crypto.randomUUID(),
  //     createdAt: new Date(),
  //   };
  //   setEquipments([newEquipment, ...equipments]);
  //   setFormData({
  //     tagNumber: "",
  //     voltageRating: "",
  //     powerRating: "",
  //     rpm: "",
  //     flowRate: "",
  //     pressure: "",
  //     description: "",
  //   });
  // };

  // const handleDelete = (id: string) => {
  //   setEquipments(equipments.filter((eq) => eq.id !== id));
  // };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "equipment", label: "Equipment Library", icon: Library },
    { id: "settings", label: "Settings", icon: Settings2 },
    { id: "about", label: "About", icon: Info },
  ];

  const handleMenuClick = (menuId: MenuItem) => {
    setActiveMenuItem(menuId);
    setIsSidebarOpen(false);
  };

  const renderContent = () => {
    switch (activeMenuItem) {
      case "dashboard":
        return <DashboardPage />;
      case "equipment":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-6"></h2>
            <EquipmentLib />
          </div>
        );
      case "settings":
        return <SettingsPage />;
      case "about":
        return <AboutPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen h-screen bg-navy-900 text-gray-100 flex overflow-hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-navy-800 rounded-lg hover:bg-navy-700 transition-colors"
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:sticky top-0 h-screen w-64 bg-navy-800 border-r border-navy-700 p-4 transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center gap-3 mb-8 px-2">
          <FileKey2 className="w-8 h-8 text-blue-400" />
          <h1 className="text-xl font-bold text-blue-400">LOTO & PSPV</h1>
        </div>
        <nav>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id as MenuItem)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                activeMenuItem === item.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-navy-700 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 lg:px-8 py-8 pt-16 lg:pt-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
