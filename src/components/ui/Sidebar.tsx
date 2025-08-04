import {
  BarChart3,
  BookOpen,
  Calendar,
  Download,
  FileText,
  MessageCircle,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const activeContentType = searchParams.get("type");
  const activeSection = location.pathname;
  const navigate = useNavigate();

  const contentTypes = [
    { id: "products", name: "Products", icon: ShoppingCart, color: "purple" },
    { id: "events", name: "Events", icon: Calendar, color: "blue" },
    { id: "courses", name: "Courses", icon: BookOpen, color: "green" },
    {
      id: "digitalProducts",
      name: "Digital Products",
      icon: Download,
      color: "orange",
    },
    {
      id: "sessions",
      name: "1:1 Sessions",
      icon: MessageCircle,
      color: "teal",
    },
  ];

  const getColorClasses = (color: string): string => {
    const colors: { [key: string]: string } = {
      purple: "from-purple-500 to-pink-500",
      blue: "from-blue-500 to-purple-500",
      green: "from-green-500 to-emerald-500",
      orange: "from-orange-500 to-red-500",
      teal: "from-teal-500 to-cyan-500",
    };
    return colors[color] || "from-gray-500 to-gray-600";
  };

  return (
    <div
      className={
        "fixed left-0 top-0 bottom-0  bg-white border-r border-gray-100 z-40 shadow-sm flex " +
        (activeSection.includes("content") ? "w-[300px] " : "24")
      }
    >
      <div className="w-24 border-r border-gray-100">
        <div className="p-6 h-full flex flex-col">
          {/* Elegant Logo/Avatar Section */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 transform hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="text-white font-bold text-lg">AC</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
            </div>
            <div className="text-center">
              <h1 className="font-bold text-gray-900 text-sm leading-tight">
                Creator
              </h1>
              <h1 className="font-bold text-gray-900 text-sm leading-tight">
                Studio
              </h1>
              <p className="text-gray-400 text-xs mt-1 font-medium">@alex</p>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="flex-1 space-y-6">
            <div className="relative group">
              <button
                onClick={() => navigate("/wall")}
                className={`relative w-full flex flex-col items-center gap-3 px-3 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  activeSection.includes("wall")
                    ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeSection.includes("wall")
                      ? "bg-white/20 backdrop-blur-sm"
                      : "bg-gray-100 group-hover:bg-gray-200"
                  }`}
                >
                  <BarChart3 className="w-5 h-5" />
                </div>
                {/* <span className="text-xs font-semibold leading-tight text-center">
                  Wall
                </span> */}

                {/* Active Indicator */}
                {activeSection.includes("wall") && (
                  <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-r-full"></div>
                )}
              </button>

              {/* Enhanced Tooltip */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 px-3 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                Wall
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900/90 rotate-45"></div>
              </div>
            </div>
            <div className="relative group">
              <button
                onClick={() => navigate("/create")}
                className={`relative w-full flex flex-col items-center gap-3 px-3 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  activeSection.includes("/create")
                    ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeSection.includes("/create")
                      ? "bg-white/20 backdrop-blur-sm"
                      : "bg-gray-100 group-hover:bg-gray-200"
                  }`}
                >
                  <BarChart3 className="w-5 h-5" />
                </div>
                {/* <span className="text-xs font-semibold leading-tight text-center">
                  Create
                </span> */}

                {/* Active Indicator */}
                {activeSection.includes("/create") && (
                  <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-r-full"></div>
                )}
              </button>

              {/* Enhanced Tooltip */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 px-3 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                Create
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900/90 rotate-45"></div>
              </div>
            </div>

            <div className="relative group">
              <button
                onClick={() => navigate("/content?type=products")}
                className={`relative w-full flex flex-col items-center gap-3 px-3 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  activeSection.includes("content")
                    ? "bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeSection.includes("content")
                      ? "bg-white/20 backdrop-blur-sm"
                      : "bg-gray-100 group-hover:bg-gray-200"
                  }`}
                >
                  <FileText className="w-5 h-5" />
                </div>
                {/* <span className="text-xs font-semibold leading-tight text-center">
                  Content
                </span> */}

                {/* Active Indicator */}
                {activeSection.includes("content") && (
                  <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-r-full"></div>
                )}
              </button>

              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 px-3 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                Content Management
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900/90 rotate-45"></div>
              </div>
            </div>

            <div className="relative group">
              <button
                onClick={() => navigate("/customers")}
                className={`relative w-full flex flex-col items-center gap-3 px-3 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  activeSection.includes("customers")
                    ? "bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeSection.includes("customers")
                      ? "bg-white/20 backdrop-blur-sm"
                      : "bg-gray-100 group-hover:bg-gray-200"
                  }`}
                >
                  <Users className="w-5 h-5" />
                </div>
                {/* <span className="text-xs font-semibold leading-tight text-center">
                  Customers
                </span> */}

                {/* Active Indicator */}
                {activeSection.includes("customers") && (
                  <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-r-full"></div>
                )}
              </button>

              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 px-3 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                Customers
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900/90 rotate-45"></div>
              </div>
            </div>

            <div className="relative group">
              <button className="relative w-full flex flex-col items-center gap-3 px-3 py-4 rounded-2xl text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                <div className="w-8 h-8 bg-gray-100 group-hover:bg-gray-200 rounded-xl flex items-center justify-center transition-all duration-300">
                  <Settings className="w-5 h-5" />
                </div>
                {/* <span className="text-xs font-semibold leading-tight text-center">
                  Settings
                </span> */}
              </button>

              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 px-3 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                Account Settings
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900/90 rotate-45"></div>
              </div>
            </div>
          </nav>

          {/* Enhanced Content Type Sub-navigation */}

          {/* Elegant Bottom Section */}
          <div className="mt-auto pt-6">
            <div className="text-center">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-2"></div>
              <p className="text-xs text-gray-400 font-medium">v2.0</p>
            </div>
          </div>
        </div>
      </div>

      {activeSection.includes("content") && (
        <div className=" border-t border-gray-200 w-[300px] pt-6 px-4">
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Content Types
              </p>
            </div>

            <div className="space-y-3">
              {contentTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <div key={type.id} className="relative group">
                    <button
                      onClick={() => navigate("?type=" + type.id)}
                      className={`relative w-full   px-2 py-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                        activeContentType === type.id
                          ? `bg-gradient-to-br ${getColorClasses(
                              type.color
                            )} text-white shadow-lg shadow-${type.color}-500/30`
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center px-2 gap-4">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            activeContentType === type.id
                              ? "bg-white/20 backdrop-blur-sm"
                              : "bg-gray-100 group-hover:bg-gray-200"
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="text-xs font-medium leading-tight text-center">
                          {type.name.includes(" ")
                            ? type.name.split(" ")[0]
                            : type.name}
                        </div>
                      </div>

                      {/* Subtle Active Indicator */}
                      {activeContentType === type.id && (
                        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-white rounded-full opacity-80"></div>
                      )}
                    </button>

                    {/* Enhanced Tooltip for Content Types */}
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 px-3 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                      {type.name}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900/90 rotate-45"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
