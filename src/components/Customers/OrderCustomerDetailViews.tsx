import {
  AlertTriangle,
  ArrowLeft,
  Ban,
  Calendar,
  CheckCircle,
  Clock,
  Copy,
  DollarSign,
  Edit3,
  ExternalLink,
  Eye,
  Gift,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  MoreVertical,
  Package,
  Phone,
  Printer,
  RefreshCw,
  ShoppingCart,
  Target,
  Truck,
  UserX,
  XCircle,
} from "lucide-react";
import { useState } from "react";

const OrderCustomerDetailViews = () => {
  const [currentView, setCurrentView] = useState("orders"); // 'orders', 'customers', 'order-detail', 'customer-detail'
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showActionMenu, setShowActionMenu] = useState(false);
  const [orderNotes, setOrderNotes] = useState("");
  const [customerNotes, setCustomerNotes] = useState("");

  // Mock data
  const orders = [
    {
      id: "ORD-2025-001",
      customerName: "Sarah Johnson",
      customerId: 1,
      customerEmail: "sarah.johnson@email.com",
      customerPhone: "+1 (555) 234-5678",
      items: [
        {
          id: 1,
          name: "Digital Art Starter Kit",
          price: 49,
          quantity: 1,
          image: "🎨",
        },
        {
          id: 2,
          name: "Procreate Brush Set",
          price: 29,
          quantity: 2,
          image: "🖌️",
        },
      ],
      subtotal: 107,
      tax: 8.56,
      shipping: 0,
      total: 115.56,
      status: "completed",
      paymentStatus: "paid",
      paymentMethod: "Credit Card (**** 4242)",
      orderDate: "2025-07-28",
      shippingDate: "2025-07-29",
      deliveryDate: "2025-08-01",
      shippingAddress: {
        name: "Sarah Johnson",
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "United States",
      },
      billingAddress: {
        name: "Sarah Johnson",
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "United States",
      },
      trackingNumber: "TRK123456789",
      notes: "Customer requested expedited processing",
      timeline: [
        {
          date: "2025-07-28 10:30 AM",
          event: "Order placed",
          status: "completed",
        },
        {
          date: "2025-07-28 11:15 AM",
          event: "Payment confirmed",
          status: "completed",
        },
        {
          date: "2025-07-28 2:00 PM",
          event: "Order processing",
          status: "completed",
        },
        {
          date: "2025-07-29 9:00 AM",
          event: "Order shipped",
          status: "completed",
        },
        {
          date: "2025-08-01 3:30 PM",
          event: "Order delivered",
          status: "completed",
        },
      ],
    },
    {
      id: "ORD-2025-002",
      customerName: "Mike Chen",
      customerId: 2,
      customerEmail: "mike.chen@email.com",
      customerPhone: "+1 (555) 345-6789",
      items: [
        {
          id: 3,
          name: "Complete Digital Art Course",
          price: 297,
          quantity: 1,
          image: "📚",
        },
      ],
      subtotal: 297,
      tax: 23.76,
      shipping: 0,
      total: 320.76,
      status: "processing",
      paymentStatus: "paid",
      paymentMethod: "PayPal",
      orderDate: "2025-07-27",
      shippingAddress: {
        name: "Mike Chen",
        street: "456 Oak Ave",
        city: "San Francisco",
        state: "CA",
        zip: "94102",
        country: "United States",
      },
      billingAddress: {
        name: "Mike Chen",
        street: "456 Oak Ave",
        city: "San Francisco",
        state: "CA",
        zip: "94102",
        country: "United States",
      },
      trackingNumber: null,
      notes: "",
      timeline: [
        {
          date: "2025-07-27 2:15 PM",
          event: "Order placed",
          status: "completed",
        },
        {
          date: "2025-07-27 2:20 PM",
          event: "Payment confirmed",
          status: "completed",
        },
        {
          date: "2025-07-27 3:00 PM",
          event: "Order processing",
          status: "current",
        },
      ],
    },
  ];

  const customers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 234-5678",
      avatar: "SJ",
      totalSpent: 847,
      totalOrders: 12,
      averageOrderValue: 70.58,
      joinDate: "2024-03-15",
      lastOrderDate: "2025-07-28",
      status: "active",
      location: "New York, NY",
      tags: ["VIP", "Frequent Buyer"],
      notes: "Excellent customer, always provides feedback",
      billingAddress: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "United States",
      },
      shippingAddress: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "United States",
      },
      recentOrders: [
        {
          id: "ORD-2025-001",
          date: "2025-07-28",
          total: 115.56,
          status: "completed",
        },
        {
          id: "ORD-2025-015",
          date: "2025-07-15",
          total: 89.0,
          status: "completed",
        },
        {
          id: "ORD-2025-008",
          date: "2025-06-28",
          total: 149.0,
          status: "completed",
        },
      ],
      favoriteProducts: [
        "Digital Art Starter Kit",
        "Procreate Brush Set",
        "Portfolio Review Session",
      ],
      communicationPreferences: {
        email: true,
        sms: false,
        phone: true,
        marketing: true,
      },
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      phone: "+1 (555) 345-6789",
      avatar: "MC",
      totalSpent: 1250,
      totalOrders: 8,
      averageOrderValue: 156.25,
      joinDate: "2024-01-22",
      lastOrderDate: "2025-07-27",
      status: "active",
      location: "San Francisco, CA",
      tags: ["Premium", "Designer"],
      notes: "Professional designer, interested in advanced courses",
      billingAddress: {
        street: "456 Oak Ave",
        city: "San Francisco",
        state: "CA",
        zip: "94102",
        country: "United States",
      },
      shippingAddress: {
        street: "456 Oak Ave",
        city: "San Francisco",
        state: "CA",
        zip: "94102",
        country: "United States",
      },
      recentOrders: [
        {
          id: "ORD-2025-002",
          date: "2025-07-27",
          total: 320.76,
          status: "processing",
        },
        {
          id: "ORD-2025-012",
          date: "2025-07-10",
          total: 299.0,
          status: "completed",
        },
        {
          id: "ORD-2025-005",
          date: "2025-06-20",
          total: 197.0,
          status: "completed",
        },
      ],
      favoriteProducts: [
        "Complete Digital Art Course",
        "Advanced Design Workshop",
        "Custom Logo Design",
      ],
      communicationPreferences: {
        email: true,
        sms: true,
        phone: false,
        marketing: false,
      },
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
      case "paid":
      case "active":
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200";
      case "processing":
      case "pending":
      case "current":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "shipped":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "cancelled":
      case "refunded":
      case "inactive":
        return "bg-red-100 text-red-800 border-red-200";
      case "hold":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
      case "paid":
      case "delivered":
        return <CheckCircle className="w-4 h-4" />;
      case "processing":
      case "pending":
      case "current":
        return <Clock className="w-4 h-4" />;
      case "shipped":
        return <Truck className="w-4 h-4" />;
      case "cancelled":
      case "refunded":
        return <XCircle className="w-4 h-4" />;
      case "hold":
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  const handleOrderAction = (action, orderId) => {
    console.log(`${action} action for order ${orderId}`);
    // Implement action logic here
  };

  const handleCustomerAction = (action, customerId) => {
    console.log(`${action} action for customer ${customerId}`);
    // Implement action logic here
  };

  const OrderDetailView = ({ order }) => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentView("orders")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Order {order.id}
              </h1>
              <p className="text-gray-600">Placed on {order.orderDate}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${getStatusColor(
                order.status
              )}`}
            >
              {getStatusIcon(order.status)}
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
            <div className="relative">
              <button
                onClick={() => setShowActionMenu(!showActionMenu)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>

              {showActionMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  <button
                    onClick={() => handleOrderAction("fulfill", order.id)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 text-green-700"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Fulfill Order
                  </button>
                  <button
                    onClick={() => handleOrderAction("hold", order.id)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 text-yellow-700"
                  >
                    <Clock className="w-4 h-4" />
                    Hold Order
                  </button>
                  <button
                    onClick={() => handleOrderAction("cancel", order.id)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 text-red-700"
                  >
                    <XCircle className="w-4 h-4" />
                    Cancel Order
                  </button>
                  <button
                    onClick={() => handleOrderAction("refund", order.id)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 text-red-700"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Process Refund
                  </button>
                  <div className="border-t border-gray-100 my-2"></div>
                  <button
                    onClick={() => handleOrderAction("print", order.id)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 text-gray-700"
                  >
                    <Printer className="w-4 h-4" />
                    Print Invoice
                  </button>
                  <button
                    onClick={() => handleOrderAction("email", order.id)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 text-gray-700"
                  >
                    <Mail className="w-4 h-4" />
                    Email Customer
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Order Items */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Items
              </h2>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-2xl">
                      {item.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">
                        ${item.price * item.quantity}
                      </p>
                      <p className="text-sm text-gray-600">
                        ${item.price} each
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="border-t border-gray-200 mt-6 pt-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${order.subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${order.tax}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>
                      {order.shipping === 0 ? "Free" : `$${order.shipping}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>${order.total}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Timeline */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Timeline
              </h2>
              <div className="space-y-4">
                {order.timeline.map((event, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        event.status === "completed"
                          ? "bg-green-100"
                          : event.status === "current"
                          ? "bg-blue-100"
                          : "bg-gray-100"
                      }`}
                    >
                      {event.status === "completed" ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : event.status === "current" ? (
                        <Clock className="w-5 h-5 text-blue-600" />
                      ) : (
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{event.event}</p>
                      <p className="text-sm text-gray-600">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Notes */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Notes
              </h2>
              <div className="space-y-4">
                {order.notes && (
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <p className="text-blue-900">{order.notes}</p>
                  </div>
                )}
                <div>
                  <textarea
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="Add internal notes about this order..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows="3"
                  />
                  <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Add Note
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Customer Info */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Customer</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {order.customerName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {order.customerName}
                    </p>
                    <p className="text-sm text-gray-600">
                      Customer #{order.customerId}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{order.customerEmail}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{order.customerPhone}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const customer = customers.find(
                        (c) => c.id === order.customerId
                      );
                      setSelectedCustomer(customer);
                      setCurrentView("customer-detail");
                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Customer
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    Message
                  </button>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Payment</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Status</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      order.paymentStatus
                    )}`}
                  >
                    {order.paymentStatus}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Method</span>
                  <span className="font-medium">{order.paymentMethod}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total</span>
                  <span className="font-bold text-lg">${order.total}</span>
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Shipping</h3>
              <div className="space-y-3">
                {order.trackingNumber && (
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Tracking Number
                    </p>
                    <div className="flex items-center gap-2">
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                        {order.trackingNumber}
                      </code>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Copy className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                )}

                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Shipping Address
                  </p>
                  <div className="text-sm text-gray-700">
                    <p>{order.shippingAddress.name}</p>
                    <p>{order.shippingAddress.street}</p>
                    <p>
                      {order.shippingAddress.city},{" "}
                      {order.shippingAddress.state} {order.shippingAddress.zip}
                    </p>
                    <p>{order.shippingAddress.country}</p>
                  </div>
                </div>

                {order.trackingNumber && (
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Track Package
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CustomerDetailView = ({ customer }) => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentView("customers")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {customer.avatar}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {customer.name}
                </h1>
                <p className="text-gray-600">
                  Customer since {customer.joinDate}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-2 rounded-lg border ${getStatusColor(
                customer.status
              )}`}
            >
              {customer.status.charAt(0).toUpperCase() +
                customer.status.slice(1)}
            </span>
            <div className="relative">
              <button
                onClick={() => setShowActionMenu(!showActionMenu)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>

              {showActionMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  <button
                    onClick={() => handleCustomerAction("edit", customer.id)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 text-gray-700"
                  >
                    <Edit3 className="w-4 h-4" />
                    Edit Customer
                  </button>
                  <button
                    onClick={() => handleCustomerAction("message", customer.id)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 text-blue-700"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send Message
                  </button>
                  <button
                    onClick={() =>
                      handleCustomerAction("discount", customer.id)
                    }
                    className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 text-green-700"
                  >
                    <Gift className="w-4 h-4" />
                    Apply Discount
                  </button>
                  <div className="border-t border-gray-100 my-2"></div>
                  <button
                    onClick={() => handleCustomerAction("block", customer.id)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 text-red-700"
                  >
                    <Ban className="w-4 h-4" />
                    Block Customer
                  </button>
                  <button
                    onClick={() => handleCustomerAction("delete", customer.id)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 text-red-700"
                  >
                    <UserX className="w-4 h-4" />
                    Delete Customer
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Customer Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Total Spent</h3>
                </div>
                <p className="text-3xl font-bold text-gray-900">
                  ${customer.totalSpent}
                </p>
                <p className="text-sm text-gray-600">Lifetime value</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Total Orders</h3>
                </div>
                <p className="text-3xl font-bold text-gray-900">
                  {customer.totalOrders}
                </p>
                <p className="text-sm text-gray-600">All time</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Avg Order</h3>
                </div>
                <p className="text-3xl font-bold text-gray-900">
                  ${customer.averageOrderValue}
                </p>
                <p className="text-sm text-gray-600">Per order</p>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Recent Orders
                </h2>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  View All Orders
                </button>
              </div>

              <div className="space-y-4">
                {customer.recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {order.id}
                        </p>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-gray-900">
                        ${order.total}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                      <button
                        onClick={() => {
                          const fullOrder = orders.find(
                            (o) => o.id === order.id
                          );
                          if (fullOrder) {
                            setSelectedOrder(fullOrder);
                            setCurrentView("order-detail");
                          }
                        }}
                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                      >
                        <Eye className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Notes */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Customer Notes
              </h2>
              <div className="space-y-4">
                {customer.notes && (
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <p className="text-blue-900">{customer.notes}</p>
                  </div>
                )}
                <div>
                  <textarea
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    placeholder="Add internal notes about this customer..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows="3"
                  />
                  <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Add Note
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">{customer.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">{customer.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">
                    Last order: {customer.lastOrderDate}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call
                </button>
              </div>
            </div>

            {/* Customer Tags */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {customer.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                <button className="px-3 py-1 border-2 border-dashed border-gray-300 text-gray-600 text-sm font-medium rounded-full hover:border-gray-400 transition-colors">
                  + Add Tag
                </button>
              </div>
            </div>

            {/* Favorite Products */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Favorite Products
              </h3>
              <div className="space-y-2">
                {customer.favoriteProducts.map((product) => (
                  <div
                    key={product}
                    className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                  >
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-gray-700">{product}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Addresses */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Addresses
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Billing Address
                  </p>
                  <div className="text-sm text-gray-700 p-3 bg-gray-50 rounded-lg">
                    <p>{customer.billingAddress.street}</p>
                    <p>
                      {customer.billingAddress.city},{" "}
                      {customer.billingAddress.state}{" "}
                      {customer.billingAddress.zip}
                    </p>
                    <p>{customer.billingAddress.country}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Shipping Address
                  </p>
                  <div className="text-sm text-gray-700 p-3 bg-gray-50 rounded-lg">
                    <p>{customer.shippingAddress.street}</p>
                    <p>
                      {customer.shippingAddress.city},{" "}
                      {customer.shippingAddress.state}{" "}
                      {customer.shippingAddress.zip}
                    </p>
                    <p>{customer.shippingAddress.country}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Demo Navigation
  const DemoNavigation = () => (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Order & Customer Management Demo
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Orders Section */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Sample Orders
            </h2>
            <div className="space-y-3">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-semibold text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-600">
                      {order.customerName}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedOrder(order);
                      setCurrentView("order-detail");
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                  >
                    View Order
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Customers Section */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Sample Customers
            </h2>
            <div className="space-y-3">
              {customers.map((customer) => (
                <div
                  key={customer.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {customer.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {customer.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        ${customer.totalSpent} spent
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedCustomer(customer);
                      setCurrentView("customer-detail");
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                  >
                    View Customer
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Main render
  if (currentView === "order-detail" && selectedOrder) {
    return <OrderDetailView order={selectedOrder} />;
  }

  if (currentView === "customer-detail" && selectedCustomer) {
    return <CustomerDetailView customer={selectedCustomer} />;
  }

  return <DemoNavigation />;
};

export default OrderCustomerDetailViews;
