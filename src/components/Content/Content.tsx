import {
  BookOpen,
  Calendar,
  Download,
  Edit3,
  Filter,
  MessageCircle,
  MoreVertical,
  Plus,
  Search,
  ShoppingCart,
  Star,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import FormatNumber from "../../Constants/FormatNumber";

function Content() {
  const [searchParams] = useSearchParams();
  const activeContentType = searchParams.get("type");
  const [content, setContent] = useState({
    products: [
      {
        id: 1,
        title: "Digital Art Starter Kit",
        price: 49,
        originalPrice: 79,
        status: "published",
        sales: 1245,
        rating: 4.8,
        type: "bundle",
        createdAt: "2025-07-15",
      },
      {
        id: 2,
        title: "Custom Logo Design",
        price: 299,
        status: "published",
        sales: 89,
        rating: 5.0,
        type: "service",
        createdAt: "2025-07-10",
      },
    ],
    events: [
      {
        id: 1,
        title: "Digital Art Masterclass",
        price: 89,
        date: "2025-08-15",
        attendees: 156,
        maxAttendees: 200,
        status: "upcoming",
        createdAt: "2025-07-20",
      },
    ],
    courses: [
      {
        id: 1,
        title: "Complete Digital Art Course",
        price: 297,
        students: 2340,
        lessons: 48,
        status: "published",
        rating: 4.9,
        createdAt: "2025-06-01",
      },
    ],
    digitalProducts: [
      {
        id: 1,
        title: "Brand Identity Template Pack",
        price: 39,
        downloads: 1567,
        status: "published",
        fileType: "AI, PSD",
        size: "245 MB",
        createdAt: "2025-07-05",
      },
    ],
    sessions: [
      {
        id: 1,
        title: "Portfolio Review Session",
        price: 149,
        duration: "60 minutes",
        bookings: 234,
        status: "available",
        rating: 4.9,
        createdAt: "2025-07-01",
      },
    ],
  });

  const getColorClasses = (color) => {
    const colors = {
      purple: "from-purple-500 to-pink-500",
      blue: "from-blue-500 to-purple-500",
      green: "from-green-500 to-emerald-500",
      orange: "from-orange-500 to-red-500",
      teal: "from-teal-500 to-cyan-500",
    };
    return colors[color] || "from-gray-500 to-gray-600";
  };

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

  const handleEdit = (item) => {};

  const handleDelete = (id) => {
    setContent((prev) => ({
      ...prev,
      [activeContentType]: prev[activeContentType].filter(
        (item) => item.id !== id
      ),
    }));
  };

  const currentContent = content[activeContentType] || [];
  const currentType = contentTypes.find((t) => t.id === activeContentType);
  return (
    <div className="ml-[300px] bg-gray-50 min-h-screen">
      {/* Top Bar */}

      <div className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Content Management
            </h1>
            <p className="text-gray-500">
              Create and manage your products, courses, and services
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
              <MessageCircle className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm">AC</span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6 main-container">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(
                currentType.color
              )} rounded-xl flex items-center justify-center`}
            >
              <currentType.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {currentType.name}
              </h1>
              <p className="text-gray-500">{currentContent.length} items</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button
              className={`flex items-center gap-2 bg-gradient-to-r ${getColorClasses(
                currentType.color
              )} text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
            >
              <Plus className="w-4 h-4" />
              Add {currentType.name.slice(0, -1)}
            </button>
          </div>
        </div>

        {/* Content List */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden ">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={`Search ${currentType.name.toLowerCase()}...`}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {currentContent.map((item) => (
              <div
                key={item.id}
                className="p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(
                        currentType.color
                      )} rounded-xl flex items-center justify-center`}
                    >
                      <currentType.icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>Created: {item.createdAt}</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.status === "published"
                              ? "bg-green-100 text-green-800"
                              : item.status === "draft"
                              ? "bg-yellow-100 text-yellow-800"
                              : item.status === "upcoming"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <div className="flex items-center gap-6 mt-2">
                        <span className="text-xl font-bold text-gray-900">
                          ${item.price}
                        </span>
                        {item.sales && (
                          <span className="text-sm text-gray-600">
                            {FormatNumber(item.sales)} sold
                          </span>
                        )}
                        {item.students && (
                          <span className="text-sm text-gray-600">
                            {FormatNumber(item.students)} enrolled
                          </span>
                        )}
                        {item.downloads && (
                          <span className="text-sm text-gray-600">
                            {FormatNumber(item.downloads)} downloads
                          </span>
                        )}
                        {item.bookings && (
                          <span className="text-sm text-gray-600">
                            {item.bookings} booked
                          </span>
                        )}
                        {item.attendees && (
                          <span className="text-sm text-gray-600">
                            {item.attendees} registered
                          </span>
                        )}
                        {item.rating && (
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600">
                              {item.rating}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit3 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
