import {
  AlertCircle,
  CheckCircle,
  Clock,
  Download,
  Eye,
  Filter,
  Mail,
  MapPin,
  MessageCircle,
  MoreVertical,
  Package,
  Phone,
  RefreshCw,
  Search,
  Truck,
  Users,
  XCircle,
} from "lucide-react";
import { useState } from "react";

function Customers() {
  const [activeCustomerView, setActiveCustomerView] = useState("customers");

  const [customers] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 234-5678",
      totalSpent: 847,
      orders: 12,
      joinDate: "2024-03-15",
      status: "active",
      avatar: "SJ",
      location: "New York, NY",
      tags: ["VIP", "Frequent Buyer"],
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      phone: "+1 (555) 345-6789",
      totalSpent: 1250,
      orders: 8,
      joinDate: "2024-01-22",
      status: "active",
      avatar: "MC",
      location: "San Francisco, CA",
      tags: ["Premium", "Designer"],
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.rodriguez@email.com",
      phone: "+1 (555) 456-7890",
      totalSpent: 395,
      orders: 5,
      joinDate: "2024-06-10",
      status: "active",
      avatar: "ER",
      location: "Austin, TX",
      tags: ["New Customer"],
    },
    {
      id: 4,
      name: "David Kim",
      email: "david.kim@email.com",
      phone: "+1 (555) 567-8901",
      totalSpent: 2100,
      orders: 15,
      joinDate: "2023-11-05",
      status: "active",
      avatar: "DK",
      location: "Seattle, WA",
      tags: ["VIP", "Early Adopter"],
    },
    {
      id: 5,
      name: "Lisa Thompson",
      email: "lisa.thompson@email.com",
      phone: "+1 (555) 678-9012",
      totalSpent: 89,
      orders: 2,
      joinDate: "2025-07-28",
      status: "inactive",
      avatar: "LT",
      location: "Miami, FL",
      tags: ["Trial User"],
    },
  ]);

  const [orders] = useState([
    {
      id: "ORD-2025-001",
      customerName: "Sarah Johnson",
      customerId: 1,
      customerEmail: "sarah.johnson@email.com",
      items: [
        { name: "Digital Art Starter Kit", price: 49, quantity: 1 },
        { name: "Procreate Brush Set", price: 29, quantity: 2 },
      ],
      total: 107,
      status: "completed",
      paymentStatus: "paid",
      orderDate: "2025-07-28",
      shippingAddress: "123 Main St, New York, NY 10001",
      trackingNumber: "TRK123456789",
    },
    {
      id: "ORD-2025-002",
      customerName: "Mike Chen",
      customerId: 2,
      customerEmail: "mike.chen@email.com",
      items: [{ name: "Complete Digital Art Course", price: 297, quantity: 1 }],
      total: 297,
      status: "processing",
      paymentStatus: "paid",
      orderDate: "2025-07-27",
      shippingAddress: "456 Oak Ave, San Francisco, CA 94102",
      trackingNumber: null,
    },
    {
      id: "ORD-2025-003",
      customerName: "Emily Rodriguez",
      customerId: 3,
      customerEmail: "emily.rodriguez@email.com",
      items: [
        { name: "Brand Identity Template Pack", price: 39, quantity: 1 },
        { name: "Logo Design Service", price: 299, quantity: 1 },
      ],
      total: 338,
      status: "shipped",
      paymentStatus: "paid",
      orderDate: "2025-07-25",
      shippingAddress: "789 Pine St, Austin, TX 73301",
      trackingNumber: "TRK987654321",
    },
    {
      id: "ORD-2025-004",
      customerName: "David Kim",
      customerId: 4,
      customerEmail: "david.kim@email.com",
      items: [
        { name: "Digital Art Masterclass", price: 89, quantity: 1 },
        { name: "Portfolio Review Session", price: 149, quantity: 1 },
      ],
      total: 238,
      status: "cancelled",
      paymentStatus: "refunded",
      orderDate: "2025-07-24",
      shippingAddress: "321 Cedar Blvd, Seattle, WA 98101",
      trackingNumber: null,
    },
    {
      id: "ORD-2025-005",
      customerName: "Lisa Thompson",
      customerId: 5,
      customerEmail: "lisa.thompson@email.com",
      items: [{ name: "Digital Art Starter Kit", price: 49, quantity: 1 }],
      total: 49,
      status: "pending",
      paymentStatus: "pending",
      orderDate: "2025-07-29",
      shippingAddress: "654 Beach Dr, Miami, FL 33101",
      trackingNumber: null,
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
      case "paid":
      case "active":
        return "bg-green-100 text-green-800";
      case "processing":
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
      case "refunded":
      case "inactive":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
      case "paid":
        return <CheckCircle className="w-4 h-4" />;
      case "processing":
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "shipped":
        return <Truck className="w-4 h-4" />;
      case "cancelled":
      case "refunded":
        return <XCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const CustomersListView = () => {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden ">
        {/* Search Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search customers..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Total Spent</option>
                <option>Join Date</option>
                <option>Name</option>
                <option>Orders</option>
              </select>
            </div>
          </div>
        </div>

        {/* Customers List */}
        <div className="divide-y divide-gray-100">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="p-6 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {customer.avatar}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-lg text-gray-900">
                        {customer.name}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          customer.status
                        )}`}
                      >
                        {customer.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        <span>{customer.email}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        <span>{customer.phone}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{customer.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <span className="text-xl font-bold text-gray-900">
                        ${customer.totalSpent}
                      </span>
                      <span className="text-sm text-gray-600">
                        {customer.orders} orders
                      </span>
                      <span className="text-sm text-gray-600">
                        Joined {customer.joinDate}
                      </span>
                      <div className="flex gap-1">
                        {customer.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    <MessageCircle className="w-5 h-5" />
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
    );
  };

  // Orders List View
  const OrdersListView = () => {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {/* Search Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Status:</span>
              <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Orders</option>
                <option>Pending</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="divide-y divide-gray-100">
          {orders.map((order) => (
            <div
              key={order.id}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Package className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-lg text-gray-900">
                        {order.id}
                      </h3>
                      <span
                        className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {getStatusIcon(order.status)}
                        {order.status}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          order.paymentStatus
                        )}`}
                      >
                        {order.paymentStatus}
                      </span>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-2">
                      <span>{order.customerName}</span>
                      <span>{order.orderDate}</span>
                      {order.trackingNumber && (
                        <div className="flex items-center gap-1">
                          <Truck className="w-4 h-4" />
                          <span>{order.trackingNumber}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-6">
                      <span className="text-xl font-bold text-gray-900">
                        ${order.total}
                      </span>
                      <span className="text-sm text-gray-600">
                        {order.items.length} items
                      </span>
                      <div className="text-sm text-gray-600">
                        {order.items.slice(0, 2).map((item, index) => (
                          <span key={index}>
                            {item.name}
                            {index < Math.min(order.items.length, 2) - 1 &&
                              ", "}
                          </span>
                        ))}
                        {order.items.length > 2 && (
                          <span> +{order.items.length - 2} more</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                    <RefreshCw className="w-5 h-5" />
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
    );
  };

  return (
    <div className="ml-24 bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Customer Management
            </h1>
            <p className="text-gray-500">
              Manage your customers and track their orders
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
        {/* Header with Choice Chips */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {activeCustomerView === "customers" ? "Customers" : "Orders"}
              </h1>
              <p className="text-gray-500">
                {activeCustomerView === "customers"
                  ? `${customers.length} total customers`
                  : `${orders.length} total orders`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Choice Chips */}
        <div className="bg-white rounded-2xl p-2 border border-gray-100 inline-flex">
          <button
            onClick={() => setActiveCustomerView("customers")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeCustomerView === "customers"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            <Users className="w-5 h-5" />
            Customers
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                activeCustomerView === "customers"
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {customers.length}
            </span>
          </button>
          <button
            onClick={() => setActiveCustomerView("orders")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeCustomerView === "orders"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            <Package className="w-5 h-5" />
            Orders
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                activeCustomerView === "orders"
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {orders.length}
            </span>
          </button>
        </div>

        {/* Content Based on Active View */}
        {activeCustomerView === "customers" ? (
          <CustomersListView />
        ) : (
          <OrdersListView />
        )}
      </div>
    </div>
  );
}

export default Customers;
