import {
  BookOpen,
  Calendar,
  DollarSign,
  Download,
  MessageCircle,
  Save,
  ShoppingCart,
  TrendingUp,
  Upload,
  X,
} from "lucide-react";
import { useState } from "react";
import FormatNumber from "../../Constants/FormatNumber";

function Dashboard() {
  const stats = {
    totalRevenue: 125000,
    totalSales: 3420,
    monthlyRevenue: 15800,
    activeProducts: 15,
    pendingOrders: 8,
    upcomingEvents: 3,
  };
  const [activeSection, setActiveSection] = useState("dashboard");
  const [activeContentType, setActiveContentType] = useState("products");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});
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
  const resetForm = () => {
    setFormData({});
    setEditingItem(null);
    setShowAddForm(false);
  };

  const handleSubmit = () => {
    if (editingItem) {
      // Update existing item
      setContent((prev) => ({
        ...prev,
        [activeContentType]: prev[activeContentType].map((item) =>
          item.id === editingItem.id ? { ...item, ...formData } : item
        ),
      }));
    } else {
      // Add new item
      const newItem = {
        ...formData,
        id: Date.now(),
        createdAt: new Date().toISOString().split("T")[0],
        status: "published",
      };
      setContent((prev) => ({
        ...prev,
        [activeContentType]: [...prev[activeContentType], newItem],
      }));
    }
    resetForm();
  };

  // Add/Edit Side Drawer
  const AddEditForm = () => {
    const currentType = contentTypes.find((t) => t.id === activeContentType);
    const isEditing = !!editingItem;

    const commonFields = (
      <>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Title*
            </label>
            <input
              type="text"
              value={formData.title || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={`Enter ${currentType.name
                .toLowerCase()
                .slice(0, -1)} title`}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Price*
            </label>
            <div className="relative">
              <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="number"
                value={formData.price || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    price: parseInt(e.target.value),
                  }))
                }
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Description*
          </label>
          <textarea
            value={formData.description || ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="3"
            placeholder="Write a compelling description..."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Description
          </label>
          <textarea
            value={formData.fullDescription || ""}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                fullDescription: e.target.value,
              }))
            }
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="4"
            placeholder="Detailed description for the product page..."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Cover Image
          </label>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-gray-300 transition-colors cursor-pointer">
            <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600 text-sm">
              Click to upload or drag and drop
            </p>
            <p className="text-gray-400 text-xs">PNG, JPG up to 10MB</p>
          </div>
        </div>
      </>
    );

    const getSpecificFields = () => {
      switch (activeContentType) {
        case "products":
          return (
            <>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Product Type
                  </label>
                  <select
                    value={formData.type || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, type: e.target.value }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    <option value="bundle">Bundle</option>
                    <option value="service">Service</option>
                    <option value="digital">Digital</option>
                    <option value="physical">Physical</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Original Price
                  </label>
                  <div className="relative">
                    <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="number"
                      value={formData.originalPrice || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          originalPrice: parseInt(e.target.value),
                        }))
                      }
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Original price (optional)"
                    />
                  </div>
                </div>
              </div>
            </>
          );

        case "events":
          return (
            <>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Event Date*
                  </label>
                  <input
                    type="date"
                    value={formData.date || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, date: e.target.value }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Time*
                  </label>
                  <input
                    type="time"
                    value={formData.time || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, time: e.target.value }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Max Attendees*
                  </label>
                  <input
                    type="number"
                    value={formData.maxAttendees || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        maxAttendees: parseInt(e.target.value),
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={formData.duration || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        duration: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="3 hours"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Platform
                  </label>
                  <select
                    value={formData.platform || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        platform: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select platform</option>
                    <option value="Zoom">Zoom</option>
                    <option value="Google Meet">Google Meet</option>
                    <option value="In-person">In-person</option>
                    <option value="YouTube Live">YouTube Live</option>
                  </select>
                </div>
              </div>
            </>
          );

        case "courses":
          return (
            <>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Duration*
                  </label>
                  <input
                    type="text"
                    value={formData.duration || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        duration: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="12 weeks"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Total Lessons*
                  </label>
                  <input
                    type="number"
                    value={formData.lessons || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        lessons: parseInt(e.target.value),
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="48"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Level
                  </label>
                  <select
                    value={formData.level || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        level: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="All Levels">All Levels</option>
                  </select>
                </div>
              </div>
            </>
          );

        case "digitalProducts":
          return (
            <>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    File Type*
                  </label>
                  <input
                    type="text"
                    value={formData.fileType || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        fileType: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="AI, PSD, PNG"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    File Size
                  </label>
                  <input
                    type="text"
                    value={formData.size || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, size: e.target.value }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="245 MB"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    License Type
                  </label>
                  <select
                    value={formData.license || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        license: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select license</option>
                    <option value="Personal use only">Personal use only</option>
                    <option value="Commercial use allowed">
                      Commercial use allowed
                    </option>
                    <option value="Extended commercial license">
                      Extended commercial license
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Files
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-gray-300 transition-colors cursor-pointer">
                    <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 text-sm">
                      Upload your digital files
                    </p>
                    <p className="text-gray-400 text-xs">
                      ZIP, RAR, or individual files up to 500MB
                    </p>
                  </div>
                </div>
              </div>
            </>
          );

        case "sessions":
          return (
            <>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Duration*
                  </label>
                  <select
                    value={formData.duration || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        duration: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select duration</option>
                    <option value="30 minutes">30 minutes</option>
                    <option value="60 minutes">60 minutes</option>
                    <option value="90 minutes">90 minutes</option>
                    <option value="120 minutes">120 minutes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Availability
                  </label>
                  <select
                    value={formData.availability || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        availability: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select availability</option>
                    <option value="Available">Available</option>
                    <option value="Limited spots">Limited spots</option>
                    <option value="Booked until Sept">Booked until Sept</option>
                    <option value="Not available">Not available</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Session Format
                  </label>
                  <input
                    type="text"
                    value={formData.format || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        format: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Video call via Zoom"
                  />
                </div>
              </div>
            </>
          );

        default:
          return null;
      }
    };

    return (
      <div className="fixed inset-0 z-50 flex">
        {/* Backdrop */}
        <div
          className="flex-1 bg-black/50 backdrop-blur-sm"
          onClick={resetForm}
        ></div>

        {/* Side Drawer */}
        <div
          className={`w-[500px] bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col h-full ${
            showAddForm ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div
            className={`bg-gradient-to-r ${getColorClasses(
              currentType.color
            )} text-white p-6 flex-shrink-0`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <currentType.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">
                    {isEditing ? "Edit" : "Add New"}{" "}
                    {currentType.name.slice(0, -1)}
                  </h2>
                  <p className="opacity-90 text-sm">
                    Create and manage your content
                  </p>
                </div>
              </div>
              <button
                onClick={resetForm}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Drawer Content - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-6">
              {commonFields}
              {getSpecificFields()}
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="border-t border-gray-200 p-6 bg-gray-50 flex-shrink-0">
            <div className="flex gap-3">
              <button
                onClick={handleSubmit}
                className={`flex-1 flex items-center justify-center gap-2 bg-gradient-to-r ${getColorClasses(
                  currentType.color
                )} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
              >
                <Save className="w-4 h-4" />
                {isEditing ? "Update" : "Create"}
              </button>
              <button
                onClick={resetForm}
                className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="ml-24  bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 px-8 py-4 ">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500">
              Track your performance and manage your creator business
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

      {/* Page Content */}
      <div className="main-container">
        <div className="space-y-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-600 text-sm font-medium">
                  +12.5%
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                ${FormatNumber(stats.totalRevenue)}
              </h3>
              <p className="text-gray-500 text-sm">Total Revenue</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <span className="text-blue-600 text-sm font-medium">+8.2%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {FormatNumber(stats.totalSales)}
              </h3>
              <p className="text-gray-500 text-sm">Total Sales</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-orange-600 text-sm font-medium">
                  +15.3%
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                ${FormatNumber(stats.monthlyRevenue)}
              </h3>
              <p className="text-gray-500 text-sm">This Month</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {contentTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => {
                      setActiveSection("content");
                      setActiveContentType(type.id);
                      setShowAddForm(true);
                    }}
                    className={`group p-4 rounded-xl border-2 border-dashed border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105`}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(
                        type.color
                      )} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      Add {type.name}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {[
                {
                  type: "sale",
                  content: "Digital Art Starter Kit sold",
                  time: "2 hours ago",
                  amount: "$49",
                },
                {
                  type: "enrollment",
                  content:
                    "New student enrolled in Complete Digital Art Course",
                  time: "4 hours ago",
                },
                {
                  type: "booking",
                  content: "Portfolio Review Session booked",
                  time: "6 hours ago",
                  amount: "$149",
                },
                {
                  type: "review",
                  content: "New 5-star review on Procreate Brush Set",
                  time: "1 day ago",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">
                      {activity.content}
                    </p>
                    <p className="text-gray-500 text-sm">{activity.time}</p>
                  </div>
                  {activity.amount && (
                    <span className="text-green-600 font-bold">
                      {activity.amount}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showAddForm && <AddEditForm />}
    </div>
  );
}

export default Dashboard;
