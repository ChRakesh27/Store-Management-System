import { ExternalLink, MapPin, Search, Star, Store, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Stores = () => {
  // Mock stores data
  const [stores, setStores] = useState([
    {
      id: 1,
      name: "Priya's Handmade Crafts",
      bio: "Beautiful handcrafted jewelry & accessories made with love",
      category: "jewelry",
      location: "Mumbai",
      rating: 4.8,
      reviews: 156,
      totalProducts: 24,
      isVerified: true,
      profileImage: null,
      coverImage: null,
      coverColor: "from-rose-100 to-pink-100",
    },
    {
      id: 2,
      name: "TechHub Gadgets",
      bio: "Latest tech gadgets and accessories at best prices",
      category: "electronics",
      location: "Bangalore",
      rating: 4.6,
      reviews: 298,
      totalProducts: 156,
      isVerified: true,
      profileImage: null,
      coverImage: null,
      coverColor: "from-blue-100 to-indigo-100",
    },
    {
      id: 3,
      name: "Spice Paradise",
      bio: "Farm-fresh organic spices and masalas from Kerala",
      category: "food",
      location: "Kochi",
      rating: 4.9,
      reviews: 89,
      totalProducts: 45,
      isVerified: false,
      profileImage: null,
      coverImage: null,
      coverColor: "from-orange-100 to-amber-100",
    },
    {
      id: 4,
      name: "Urban Fashion Studio",
      bio: "Contemporary fashion for modern Indians",
      category: "fashion",
      location: "Delhi",
      rating: 4.4,
      reviews: 234,
      totalProducts: 89,
      isVerified: true,
      profileImage: null,
      coverImage: null,
      coverColor: "from-purple-100 to-violet-100",
    },
    {
      id: 5,
      name: "Ayurveda Wellness",
      bio: "Traditional Ayurvedic products for modern wellness",
      category: "health",
      location: "Pune",
      rating: 4.7,
      reviews: 167,
      totalProducts: 67,
      isVerified: false,
      profileImage: null,
      coverImage: null,
      coverColor: "from-green-100 to-emerald-100",
    },
    {
      id: 6,
      name: "Art & Crafts Corner",
      bio: "Premium art supplies and handmade crafts",
      category: "art",
      location: "Jaipur",
      rating: 4.5,
      reviews: 78,
      totalProducts: 123,
      isVerified: false,
      profileImage: null,
      coverImage: null,
      coverColor: "from-teal-100 to-cyan-100",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  // Helper functions
  const getCategoryIcon = (category) => {
    const icons = {
      jewelry: "💎",
      electronics: "📱",
      food: "🌶️",
      fashion: "👗",
      health: "🌿",
      art: "🎨",
    };
    return icons[category] || "🏪";
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Categories" },
    { id: "jewelry", name: "Jewelry" },
    { id: "electronics", name: "Electronics" },
    { id: "fashion", name: "Fashion" },
    { id: "food", name: "Food & Spices" },
    { id: "health", name: "Health & Wellness" },
    { id: "art", name: "Art & Crafts" },
  ];

  // Sort options
  const sortOptions = [
    { id: "popular", name: "Most Popular" },
    { id: "rating", name: "Highest Rated" },
    { id: "newest", name: "Newest" },
  ];

  // Filter and sort stores
  const filteredStores = stores
    .filter((store) => {
      const matchesSearch =
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.bio.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        filterCategory === "all" || store.category === filterCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return b.id - a.id;
        default:
          return b.reviews + b.totalProducts - (a.reviews + a.totalProducts);
      }
    });
  const navigate = useNavigate();
  const handleStoreClick = (store) => {
    navigate(`/profile/${store.id}`);
  };

  return (
    <div className="">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Discover Stores</h1>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search stores..."
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
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
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
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              {filteredStores.length} store
              {filteredStores.length !== 1 ? "s" : ""} found
            </span>
          </div>
        </div>
      </div>

      {/* Store Grid */}
      <div className="main-container">
        {filteredStores.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredStores.map((store) => (
              <div
                key={store.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group"
                onClick={() => handleStoreClick(store)}
              >
                {/* Cover Photo */}
                <div
                  className={`h-32 bg-gradient-to-r ${store.coverColor} relative overflow-hidden`}
                >
                  {store.coverImage ? (
                    <img
                      src={store.coverImage}
                      alt={`${store.name} cover`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-4xl opacity-30">
                        {getCategoryIcon(store.category)}
                      </div>
                    </div>
                  )}

                  {/* Verification Badge */}
                  {store.isVerified && (
                    <div className="absolute top-3 right-3">
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

                {/* Store Content */}
                <div className="p-6 relative">
                  {/* Company Logo */}
                  <div className="absolute -top-8 left-6">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-lg border-2 border-white flex items-center justify-center overflow-hidden">
                      {store.profileImage ? (
                        <img
                          src={store.profileImage}
                          alt={`${store.name} logo`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <span className="text-sm font-bold text-gray-600">
                            {getInitials(store.name)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Store Info */}
                  <div className="mt-8">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                        {store.name}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {store.bio}
                    </p>

                    {/* Location and Rating */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 font-medium">
                          {store.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold text-gray-900">
                          {store.rating}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({store.reviews})
                        </span>
                      </div>
                    </div>

                    {/* Products Count and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">
                          {store.totalProducts}
                        </span>{" "}
                        products
                      </span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 group-hover:shadow-md">
                        Visit Store
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Store className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No stores found
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

export default Stores;
