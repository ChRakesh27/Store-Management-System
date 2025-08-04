import {
  Calendar,
  Camera,
  Crown,
  Download,
  ExternalLink,
  MapPin,
  PlayCircle,
  Search,
  ShoppingBag,
  Star,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Storefront = () => {
  // Mock storefront items data
  const navigate = useNavigate();
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Handcrafted Silver Necklace",
      description:
        "Beautiful handmade silver necklace with traditional Indian motifs",
      type: "product",
      price: 2500,
      originalPrice: 3000,
      currency: "₹",
      creator: "Priya's Crafts",
      creatorAvatar: null,
      creatorInitials: "PC",
      location: "Mumbai",
      rating: 4.8,
      reviews: 156,
      image: null,
      bgColor: "from-rose-100 to-pink-100",
      isVerified: true,
      discount: 17,
      inStock: true,
    },
    {
      id: 2,
      title: "Complete Web Development Course",
      description:
        "Learn full-stack web development with React, Node.js, and MongoDB",
      type: "course",
      price: 4999,
      originalPrice: 7999,
      currency: "₹",
      creator: "TechMaster Pro",
      creatorAvatar: null,
      creatorInitials: "TM",
      location: "Bangalore",
      rating: 4.9,
      reviews: 298,
      image: null,
      bgColor: "from-blue-100 to-indigo-100",
      isVerified: true,
      discount: 38,
      duration: "40 hours",
      students: 1250,
    },
    {
      id: 3,
      title: "Premium Spice Collection",
      description: "Organic spice collection from Kerala farms - 10 varieties",
      type: "product",
      price: 899,
      originalPrice: 1200,
      currency: "₹",
      creator: "Spice Paradise",
      creatorAvatar: null,
      creatorInitials: "SP",
      location: "Kochi",
      rating: 4.7,
      reviews: 89,
      image: null,
      bgColor: "from-orange-100 to-amber-100",
      isVerified: false,
      discount: 25,
      inStock: true,
    },
    {
      id: 4,
      title: "Photography Masterclass",
      description:
        "Learn professional photography techniques and post-processing",
      type: "event",
      price: 1500,
      currency: "₹",
      creator: "Lens Magic Studio",
      creatorAvatar: null,
      creatorInitials: "LM",
      location: "Delhi",
      rating: 4.6,
      reviews: 234,
      image: null,
      bgColor: "from-purple-100 to-violet-100",
      isVerified: true,
      eventDate: "2025-08-15",
      eventTime: "10:00 AM",
      attendees: 45,
      maxAttendees: 50,
    },
    {
      id: 5,
      title: "Yoga & Meditation Sessions",
      description: "Weekly yoga and meditation sessions for inner peace",
      type: "subscription",
      price: 999,
      currency: "₹",
      creator: "Wellness Guru",
      creatorAvatar: null,
      creatorInitials: "WG",
      location: "Pune",
      rating: 4.8,
      reviews: 167,
      image: null,
      bgColor: "from-green-100 to-emerald-100",
      isVerified: true,
      billing: "monthly",
      subscribers: 580,
    },
    {
      id: 6,
      title: "Digital Art Brushes Pack",
      description:
        "Professional digital art brushes for Photoshop and Procreate",
      type: "download",
      price: 599,
      originalPrice: 999,
      currency: "₹",
      creator: "ArtCraft Studio",
      creatorAvatar: null,
      creatorInitials: "AC",
      location: "Jaipur",
      rating: 4.5,
      reviews: 78,
      image: null,
      bgColor: "from-teal-100 to-cyan-100",
      isVerified: false,
      discount: 40,
      downloads: 1240,
      fileSize: "45 MB",
    },
    {
      id: 7,
      title: "Cooking Masterclass Video Series",
      description: "Learn traditional Indian cooking with 20+ recipe videos",
      type: "video",
      price: 1299,
      originalPrice: 1899,
      currency: "₹",
      creator: "Chef Ravi's Kitchen",
      creatorAvatar: null,
      creatorInitials: "CR",
      location: "Chennai",
      rating: 4.9,
      reviews: 456,
      image: null,
      bgColor: "from-red-100 to-rose-100",
      isVerified: true,
      discount: 32,
      duration: "8 hours",
      videos: 24,
    },
    {
      id: 8,
      title: "Business Mentorship Program",
      description: "1-on-1 business mentorship sessions with industry expert",
      type: "session",
      price: 3500,
      currency: "₹",
      creator: "Startup Mentor",
      creatorAvatar: null,
      creatorInitials: "SM",
      location: "Hyderabad",
      rating: 4.7,
      reviews: 123,
      image: null,
      bgColor: "from-indigo-100 to-blue-100",
      isVerified: true,
      duration: "60 minutes",
      nextAvailable: "Tomorrow",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");

  // Helper functions
  const getTypeIcon = (type) => {
    const icons = {
      product: <ShoppingBag className="w-4 h-4" />,
      download: <Download className="w-4 h-4" />,
      course: <PlayCircle className="w-4 h-4" />,
      subscription: <Crown className="w-4 h-4" />,
      event: <Calendar className="w-4 h-4" />,
      session: <Users className="w-4 h-4" />,
      video: <Camera className="w-4 h-4" />,
    };
    return icons[type] || <ShoppingBag className="w-4 h-4" />;
  };

  const getTypeLabel = (type) => {
    const labels = {
      product: "Product",
      download: "Digital Download",
      course: "Course",
      subscription: "Subscription",
      event: "Event",
      session: "Session",
      video: "Video",
    };
    return labels[type] || "Item";
  };

  const formatPrice = (price, currency) => {
    return `${currency}${price.toLocaleString()}`;
  };

  // Filter and sort options
  const typeFilters = [
    { id: "all", name: "All" },
    { id: "product", name: "Products" },
    { id: "download", name: "Downloads" },
    { id: "course", name: "Courses" },
    { id: "subscription", name: "Subscriptions" },
    { id: "event", name: "Events" },
    { id: "session", name: "Sessions" },
    { id: "video", name: "Videos" },
  ];

  const sortOptions = [
    { id: "popular", name: "Most Popular" },
    { id: "price-low", name: "Price: Low to High" },
    { id: "price-high", name: "Price: High to Low" },
    { id: "rating", name: "Highest Rated" },
    { id: "newest", name: "Newest" },
  ];

  const priceRanges = [
    { id: "all", name: "All Prices" },
    { id: "0-500", name: "Under ₹500" },
    { id: "500-1500", name: "₹500 - ₹1,500" },
    { id: "1500-5000", name: "₹1,500 - ₹5,000" },
    { id: "5000+", name: "Above ₹5,000" },
  ];

  // Filter and sort items
  const filteredItems = items
    .filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.creator.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === "all" || item.type === filterType;

      let matchesPrice = true;
      if (priceRange !== "all") {
        const [min, max] = priceRange.split("-").map((p) => p.replace("+", ""));
        if (max) {
          matchesPrice =
            item.price >= parseInt(min) && item.price <= parseInt(max);
        } else {
          matchesPrice = item.price >= parseInt(min);
        }
      }

      return matchesSearch && matchesType && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return b.id - a.id;
        default:
          return b.reviews - a.reviews;
      }
    });

  const handleItemClick = (item) => {
    console.log("Opening item:", item.title);
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Creator Storefront
          </h1>
          <p className="text-gray-600 mt-1">
            Discover amazing products, courses, and services from creators
          </p>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="bg-white border-b">
        <div className="   py-6">
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, courses, events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center mx-auto max-w-[80%] justify-center  gap-14">
            <div className="flex items-center gap-3">
              <div className="flex space-x-2">
                {typeFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setFilterType(filter.id)}
                    className={`px-4 py-2 rounded-full border ${
                      filterType === filter.id
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white text-gray-700 border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 ps-10">
              <label className="text-sm font-medium text-gray-700">Price</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className=" rounded-full px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent border"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-full px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Results count */}
        </div>
      </div>

      {/* Items Grid */}
      <div className="mx-auto max-w-[80%] main-container">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group"
                onClick={() => handleItemClick(item)}
              >
                {/* Item Image */}
                <div
                  className={`h-48 bg-gradient-to-r ${item.bgColor} relative overflow-hidden`}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-6xl opacity-30">
                        {getTypeIcon(item.type)}
                      </div>
                    </div>
                  )}

                  {/* Type Badge */}
                  <div className="absolute top-3 left-3">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-xs font-medium text-gray-700">
                      {getTypeIcon(item.type)}
                      {getTypeLabel(item.type)}
                    </div>
                  </div>

                  {/* Discount Badge */}
                  {item.discount && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        -{item.discount}%
                      </div>
                    </div>
                  )}

                  {/* Verification Badge */}
                  {item.isVerified && (
                    <div className="absolute bottom-3 right-3">
                      <div className="w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Item Content */}
                <div className="p-4">
                  {/* Title and Price */}
                  <div className="mb-3">
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors mb-1 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">
                        {formatPrice(item.price, item.currency)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(item.originalPrice, item.currency)}
                        </span>
                      )}
                      {item.billing && (
                        <span className="text-sm text-gray-600">
                          /{item.billing}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Creator Info */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">
                        {item.creatorInitials}
                      </span>
                    </div>
                    <div onClick={() => navigate("/profile/123")}>
                      <p className="text-sm font-medium text-gray-900">
                        {item.creator}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">
                      {item.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({item.reviews})
                    </span>
                  </div>

                  {/* Additional Info */}
                  <div className="text-xs text-gray-600 mb-4">
                    {item.type === "course" && item.duration && (
                      <span>
                        📚 {item.duration} • {item.students} students
                      </span>
                    )}
                    {item.type === "event" && item.eventDate && (
                      <span>
                        📅 {item.eventDate} at {item.eventTime}
                      </span>
                    )}
                    {item.type === "download" && (
                      <span>
                        💾 {item.downloads} downloads • {item.fileSize}
                      </span>
                    )}
                    {item.type === "subscription" && item.subscribers && (
                      <span>👥 {item.subscribers} subscribers</span>
                    )}
                    {item.type === "session" && item.nextAvailable && (
                      <span>⏰ Available {item.nextAvailable}</span>
                    )}
                    {item.type === "video" && item.videos && (
                      <span>
                        🎥 {item.videos} videos • {item.duration}
                      </span>
                    )}
                    {item.type === "product" && (
                      <span
                        className={
                          item.inStock ? "text-green-600" : "text-red-600"
                        }
                      >
                        {item.inStock ? "✅ In Stock" : "❌ Out of Stock"}
                      </span>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 group-hover:shadow-md">
                    {item.type === "product"
                      ? "Add to Cart"
                      : item.type === "course"
                      ? "Enroll Now"
                      : item.type === "event"
                      ? "Register"
                      : item.type === "subscription"
                      ? "Subscribe"
                      : item.type === "session"
                      ? "Book Session"
                      : item.type === "download"
                      ? "Download"
                      : "View Details"}
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No items found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Storefront;
