import { Bell, Compass, Home, Search } from "lucide-react";
import { useState } from "react";
import Storefront from "../Storefront/Storefront";
import Stores from "../Stores/Stores";
import Feed from "./Feed";

const Wall = () => {
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <div className="min-h-screen bg-gray-50 ml-24">
      {/* Top Navigation */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                CreatorHub
              </h1>

              <nav className="flex items-center gap-6">
                <button
                  onClick={() => setActiveTab("feed")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === "feed"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Home className="w-5 h-5" />
                  Feed
                </button>
                <button
                  onClick={() => setActiveTab("discover")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === "discover"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Compass className="w-5 h-5" />
                  Discover
                </button>
                <button
                  onClick={() => setActiveTab("store")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === "store"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Compass className="w-5 h-5" />
                  Store
                </button>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search creators, products..."
                  className="pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-full focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all w-80"
                />
              </div>

              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
                <Bell className="w-6 h-6" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </button>

              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center cursor-pointer">
                <span className="text-white font-bold text-sm">AC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div>
        {activeTab === "feed" && <Feed />}
        {activeTab === "store" && <Stores />}
        {activeTab === "discover" && <Storefront />}
      </div>
    </div>
  );
};

export default Wall;
