import {
  ArrowLeft,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Download,
  ExternalLink,
  FileText,
  Grid3X3,
  List,
  MessageCircle,
  Monitor,
  MoreHorizontal,
  Share2,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import FormatNumber from "../../Constants/FormatNumber";

const Profile = () => {
  const [currentView, setCurrentView] = useState("profile");
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState("products");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  // Mock creator data
  const creator = {
    name: "Alex Rivera",
    username: "alexcreates",
    bio: "Digital artist & educator ✨ Helping creatives build their online presence 🎨 Teaching 50k+ students worldwide 🌍",
    location: "San Francisco, CA",
    profileImage: null,
    coverImage: null,
    isVerified: true,
    joinedDate: "March 2022",
    website: "alexcreates.com",

    // Stats
    followers: 45230,
    following: 892,
    totalEarnings: 125000,
    monthlyReach: 890000,
    engagementRate: 4.8,

    // Social proof
    rating: 4.9,
    reviews: 1247,
    totalSales: 3420,
  };

  // Enhanced content data
  const content = {
    products: [
      {
        id: 1,
        title: "Digital Art Starter Kit",
        description:
          "Complete bundle of brushes, textures, and templates for digital artists",
        fullDescription:
          "Transform your digital art with this comprehensive starter kit designed for both beginners and intermediate artists. This carefully curated collection includes 200+ premium brushes, 50 unique textures, and 30 professional templates that will elevate your artwork to the next level.",
        price: 49,
        originalPrice: 79,
        image: null,
        sales: 1245,
        rating: 4.8,
        reviews: 156,
        type: "bundle",
        trending: true,
        features: [
          "200+ Premium Digital Brushes",
          "50 High-Resolution Textures",
          "30 Professional Templates",
          "Video Tutorials Included",
          "Compatible with Photoshop & Procreate",
          "Lifetime Updates",
        ],
        compatibility: ["Adobe Photoshop", "Procreate", "Adobe Fresco"],
      },
      {
        id: 2,
        title: "Custom Logo Design",
        description:
          "Professional logo design service with 3 concepts and unlimited revisions",
        fullDescription:
          "Get a professional logo that perfectly represents your brand. I'll work closely with you to understand your vision and create a unique design that sets you apart from the competition.",
        price: 299,
        image: null,
        sales: 89,
        rating: 5.0,
        reviews: 23,
        type: "service",
        trending: false,
        features: [
          "3 Initial Concept Designs",
          "Unlimited Revisions",
          "High-Resolution Files",
          "Vector & Raster Formats",
          "Commercial License Included",
          "7-Day Delivery",
        ],
      },
      {
        id: 3,
        title: "Procreate Brush Set",
        description:
          "50 premium brushes for Procreate including watercolor, oil paint, and sketching",
        fullDescription:
          "Enhance your Procreate artwork with this professional brush collection. Each brush has been meticulously crafted to provide authentic textures and natural-feeling strokes.",
        price: 29,
        image: null,
        sales: 892,
        rating: 4.7,
        reviews: 234,
        type: "digital",
        trending: true,
      },
    ],

    events: [
      {
        id: 1,
        title: "Digital Art Masterclass",
        description:
          "3-hour intensive workshop covering advanced digital painting techniques",
        fullDescription:
          "Join me for an intensive 3-hour masterclass where we'll dive deep into advanced digital painting techniques. Perfect for artists looking to take their skills to the next level.",
        date: "2025-08-15",
        time: "2:00 PM PST",
        price: 89,
        attendees: 156,
        maxAttendees: 200,
        type: "online",
        status: "upcoming",
        trending: true,
        duration: "3 hours",
        platform: "Zoom",
      },
      {
        id: 2,
        title: "Creative Business Bootcamp",
        description:
          "Full-day workshop on building and scaling your creative business",
        fullDescription:
          "A comprehensive full-day workshop designed to help creative professionals build, launch, and scale their creative businesses from the ground up.",
        date: "2025-08-22",
        time: "10:00 AM PST",
        price: 199,
        attendees: 78,
        maxAttendees: 100,
        type: "online",
        status: "upcoming",
        trending: false,
        duration: "6 hours",
        platform: "Zoom + Breakout Rooms",
      },
    ],

    courses: [
      {
        id: 1,
        title: "Complete Digital Art Course",
        description:
          "12-week comprehensive course from beginner to advanced digital artist",
        fullDescription:
          "Master digital art from the ground up with this comprehensive 12-week course. Whether you're a complete beginner or looking to refine your skills, this course will guide you through every aspect of digital art creation.",
        price: 297,
        students: 2340,
        lessons: 48,
        duration: "12 weeks",
        rating: 4.9,
        reviews: 345,
        level: "All Levels",
        trending: true,
      },
      {
        id: 2,
        title: "Creative Business Fundamentals",
        description:
          "Learn to monetize your creativity and build a sustainable creative business",
        fullDescription:
          "Turn your creative passion into a profitable business with this comprehensive 8-week course covering everything from pricing to marketing to client management.",
        price: 197,
        students: 1890,
        lessons: 32,
        duration: "8 weeks",
        rating: 4.8,
        reviews: 267,
        level: "Beginner",
        trending: false,
      },
    ],

    digitalProducts: [
      {
        id: 1,
        title: "Brand Identity Template Pack",
        description:
          "Complete branding templates for Adobe Illustrator and Photoshop",
        fullDescription:
          "Create stunning brand identities with this comprehensive template pack. Includes everything you need to design professional logos, business cards, letterheads, and more.",
        price: 39,
        downloads: 1567,
        rating: 4.6,
        reviews: 89,
        fileType: "AI, PSD",
        size: "245 MB",
        trending: false,
      },
      {
        id: 2,
        title: "Social Media Graphics Bundle",
        description:
          "200+ templates for Instagram, Twitter, and LinkedIn posts",
        fullDescription:
          "Boost your social media presence with this massive collection of professional templates designed for maximum engagement across all major platforms.",
        price: 59,
        downloads: 2341,
        rating: 4.8,
        reviews: 156,
        fileType: "PSD, PNG",
        size: "512 MB",
        trending: true,
      },
    ],

    sessions: [
      {
        id: 1,
        title: "Portfolio Review Session",
        description:
          "1-on-1 feedback on your creative portfolio with actionable improvement tips",
        fullDescription:
          "Get personalized, expert feedback on your creative portfolio in this comprehensive 1-on-1 review session. I'll analyze your work and provide specific, actionable advice to help you stand out.",
        duration: "60 minutes",
        price: 149,
        bookings: 234,
        rating: 4.9,
        reviews: 67,
        availability: "Available",
        trending: true,
      },
      {
        id: 2,
        title: "Creative Mentorship Call",
        description:
          "Personal mentoring session to help you overcome creative blocks and plan your next steps",
        fullDescription:
          "Unlock your creative potential with personalized mentorship. Whether you're facing creative blocks, career decisions, or need guidance on your artistic journey, this session is designed to give you clarity and direction.",
        duration: "90 minutes",
        price: 199,
        bookings: 156,
        rating: 5.0,
        reviews: 45,
        availability: "Booked until Sept",
        trending: false,
      },
    ],
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const formatPrice = (price) => {
    return `$${price}`;
  };

  const handleItemClick = (item, type) => {
    setSelectedItem({ ...item, contentType: type });
    setCurrentView("detail");
  };

  const goBack = () => {
    setCurrentView("profile");
    setSelectedItem(null);
  };

  // Enhanced Product Detail View
  const ProductDetailView = ({ item }) => (
    <div className="min-h-screen bg-gray-50">
      {/* Modern header with glassmorphism */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={goBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {getInitials(creator.name)}
                </span>
              </div>
              <div>
                <h1 className="font-semibold text-gray-900">
                  {creator.username}
                </h1>
                <p className="text-sm text-gray-500">Product</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Share2 className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <MoreHorizontal className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product showcase */}
          <div className="space-y-6">
            {/* Main product image */}
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 flex items-center justify-center shadow-xl shadow-purple-500/10 border border-white/50">
              <div className="text-8xl filter drop-shadow-lg">🎨</div>
            </div>

            {/* Thumbnail gallery */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform border border-purple-100"
                >
                  <div className="text-2xl opacity-60">🖼️</div>
                </div>
              ))}
            </div>
          </div>

          {/* Product information */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {item.trending && (
                  <div className="flex items-center gap-1 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <TrendingUp className="w-4 h-4" />
                    Trending
                  </div>
                )}
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {item.type}
                </div>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {item.title}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-gray-900">
                    {item.rating}
                  </span>
                  <span className="text-gray-500">
                    ({item.reviews} reviews)
                  </span>
                </div>
                <div className="text-gray-500">•</div>
                <div className="text-gray-700 font-medium">
                  {FormatNumber(item.sales)} sold
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                {item.fullDescription}
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  {formatPrice(item.price)}
                </span>
                {item.originalPrice && (
                  <div className="flex flex-col">
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(item.originalPrice)}
                    </span>
                    <span className="text-sm text-green-600 font-semibold">
                      Save{" "}
                      {Math.round((1 - item.price / item.originalPrice) * 100)}%
                    </span>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                  Add to Cart
                </button>
                <button className="flex-1 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-900 py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What's included
              </h3>
              <div className="space-y-3">
                {item.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Enhanced Event Detail View
  const EventDetailView = ({ item }) => (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={goBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {getInitials(creator.name)}
                </span>
              </div>
              <div>
                <h1 className="font-semibold text-gray-900">
                  {creator.username}
                </h1>
                <p className="text-sm text-gray-500">Live Event</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Event hero card */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white mb-8 shadow-2xl shadow-purple-500/20">
          <div className="flex items-center gap-3 mb-4">
            {item.trending && (
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Hot Event
              </div>
            )}
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
              {item.status}
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
          <p className="text-xl opacity-90 mb-6">{item.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <Calendar className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="font-semibold">
                {new Date(item.date).toLocaleDateString()}
              </div>
              <div className="text-sm opacity-75">{item.time}</div>
            </div>
            <div className="text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="font-semibold">{item.duration}</div>
              <div className="text-sm opacity-75">Duration</div>
            </div>
            <div className="text-center">
              <Users className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="font-semibold">{item.attendees}</div>
              <div className="text-sm opacity-75">Registered</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="font-semibold">{formatPrice(item.price)}</div>
              <div className="text-sm opacity-75">Price</div>
            </div>
          </div>

          <button className="w-full bg-white text-purple-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors">
            Register Now
          </button>
        </div>

        {/* Event details */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Event Details
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {item.fullDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                What You'll Get
              </h3>
              <div className="space-y-3">
                {[
                  "Live instruction",
                  "Q&A session",
                  "Recording access",
                  "Bonus materials",
                  "Certificate",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Event Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Platform:</span>
                  <span className="text-gray-900 font-medium">
                    {item.platform}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Capacity:</span>
                  <span className="text-gray-900 font-medium">
                    {item.maxAttendees} people
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Spots left:</span>
                  <span className="text-green-600 font-medium">
                    {item.maxAttendees - item.attendees} available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Enhanced Course Detail View
  const CourseDetailView = ({ item }) => (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={goBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {getInitials(creator.name)}
                </span>
              </div>
              <div>
                <h1 className="font-semibold text-gray-900">
                  {creator.username}
                </h1>
                <p className="text-sm text-gray-500">Course</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Course hero */}
        <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-3xl p-8 text-white mb-8 shadow-2xl shadow-green-500/20">
          <div className="flex items-center gap-3 mb-4">
            {item.trending && (
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Popular
              </div>
            )}
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
              {item.level}
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">{item.title}</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <BookOpen className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="font-semibold">{item.lessons}</div>
              <div className="text-sm opacity-75">Lessons</div>
            </div>
            <div className="text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="font-semibold">{item.duration}</div>
              <div className="text-sm opacity-75">Duration</div>
            </div>
            <div className="text-center">
              <Users className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="font-semibold">{FormatNumber(item.students)}</div>
              <div className="text-sm opacity-75">Students</div>
            </div>
            <div className="text-center">
              <Star className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="font-semibold">{item.rating}</div>
              <div className="text-sm opacity-75">Rating</div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold">
              {formatPrice(item.price)}
            </span>
            <span className="text-lg opacity-75">one-time payment</span>
          </div>

          <button className="w-full bg-white text-green-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors">
            Enroll Now
          </button>
        </div>

        {/* Course content */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            About This Course
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {item.fullDescription}
          </p>
        </div>
      </div>
    </div>
  );

  // Enhanced Session Detail View
  const SessionDetailView = ({ item }) => (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={goBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {getInitials(creator.name)}
                </span>
              </div>
              <div>
                <h1 className="font-semibold text-gray-900">
                  {creator.username}
                </h1>
                <p className="text-sm text-gray-500">1:1 Session</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Session hero */}
        <div className="bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 rounded-3xl p-8 text-white mb-8 shadow-2xl shadow-teal-500/20">
          <div className="flex items-center gap-3 mb-4">
            {item.trending && (
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                In Demand
              </div>
            )}
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                item.availability === "Available"
                  ? "bg-green-400/30 text-green-100"
                  : "bg-red-400/30 text-red-100"
              }`}
            >
              {item.availability}
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">{item.title}</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="font-semibold">{item.duration}</div>
              <div className="text-sm opacity-75">Session</div>
            </div>
            <div className="text-center">
              <Users className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="font-semibold">{item.bookings}</div>
              <div className="text-sm opacity-75">Booked</div>
            </div>
            <div className="text-center">
              <Star className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="font-semibold">{item.rating}</div>
              <div className="text-sm opacity-75">Rating</div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold">
              {formatPrice(item.price)}
            </span>
            <span className="text-lg opacity-75">per session</span>
          </div>

          <button
            className={`w-full py-4 rounded-xl font-bold text-lg transition-colors ${
              item.availability === "Available"
                ? "bg-white text-teal-600 hover:bg-gray-50"
                : "bg-gray-400 text-gray-600 cursor-not-allowed"
            }`}
            disabled={item.availability !== "Available"}
          >
            {item.availability === "Available"
              ? "Book Session"
              : item.availability}
          </button>
        </div>

        {/* Session details */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Session Details
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {item.fullDescription}
          </p>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">What to Expect</h3>
            {item.whatToExpected.map((expectation, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-teal-50 rounded-xl"
              >
                <Target className="w-5 h-5 text-teal-600 mt-0.5" />
                <span className="text-gray-700">{expectation}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Enhanced Digital Product Detail View
  const DigitalProductDetailView = ({ item }) => (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={goBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {getInitials(creator.name)}
                </span>
              </div>
              <div>
                <h1 className="font-semibold text-gray-900">
                  {creator.username}
                </h1>
                <p className="text-sm text-gray-500">Digital Product</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Product hero */}
        <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl p-8 text-white mb-8 shadow-2xl shadow-orange-500/20">
          <div className="flex items-center gap-3 mb-4">
            {item.trending && (
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Bestseller
              </div>
            )}
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
              Instant Download
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">{item.title}</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <Download className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="font-semibold">
                {FormatNumber(item.downloads)}
              </div>
              <div className="text-sm opacity-75">Downloads</div>
            </div>
            <div className="text-center">
              <FileText className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="font-semibold">{item.fileType}</div>
              <div className="text-sm opacity-75">File Types</div>
            </div>
            <div className="text-center">
              <Monitor className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="font-semibold">{item.size}</div>
              <div className="text-sm opacity-75">File Size</div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold">
              {formatPrice(item.price)}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">{item.rating}</span>
              <span className="opacity-75">({item.reviews})</span>
            </div>
          </div>

          <button className="w-full bg-white text-orange-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-3">
            <Download className="w-5 h-5" />
            Download Now
          </button>
        </div>

        {/* Product details */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Product Details
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {item.fullDescription}
          </p>
        </div>
      </div>
    </div>
  );

  // Enhanced Profile View - Instagram inspired with creativity
  const ProfileView = () => {
    const tabs = [
      {
        id: "products",
        icon: ShoppingCart,
        name: "Products",
        color: "from-purple-400 to-pink-500",
      },
      {
        id: "events",
        icon: Calendar,
        name: "Events",
        color: "from-blue-400 to-purple-500",
      },
      {
        id: "courses",
        icon: BookOpen,
        name: "Courses",
        color: "from-green-400 to-emerald-500",
      },
      {
        id: "digital",
        icon: Download,
        name: "Digital",
        color: "from-orange-400 to-red-500",
      },
      {
        id: "sessions",
        icon: MessageCircle,
        name: "Sessions",
        color: "from-teal-400 to-cyan-500",
      },
    ];

    const getCurrentContent = () => {
      switch (activeTab) {
        case "products":
          return content.products;
        case "events":
          return content.events;
        case "courses":
          return content.courses;
        case "digital":
          return content.digitalProducts;
        case "sessions":
          return content.sessions;
        default:
          return [];
      }
    };

    const getItemColor = (type) => {
      const colors = {
        products: "from-purple-400 to-pink-500",
        events: "from-blue-400 to-purple-500",
        courses: "from-green-400 to-emerald-500",
        digital: "from-orange-400 to-red-500",
        sessions: "from-teal-400 to-cyan-500",
      };
      return colors[type] || "from-gray-400 to-gray-500";
    };

    const renderContent = () => {
      const currentContent = getCurrentContent();

      if (viewMode === "grid") {
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {currentContent.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => handleItemClick(item, activeTab.slice(0, -1))}
              >
                <div
                  className={`aspect-square rounded-2xl bg-gradient-to-br ${getItemColor(
                    activeTab
                  )} p-6 flex flex-col justify-between transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl shadow-lg`}
                >
                  <div className="flex justify-between items-start">
                    <div className="text-4xl filter drop-shadow-sm">
                      {activeTab === "products" && "🎨"}
                      {activeTab === "events" && "🎪"}
                      {activeTab === "courses" && "📚"}
                      {activeTab === "digital" && "📁"}
                      {activeTab === "sessions" && "💬"}
                    </div>
                    {item.trending && (
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1 leading-tight">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">
                        {formatPrice(item.price)}
                      </span>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      } else {
        return (
          <div className="space-y-4">
            {currentContent.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleItemClick(item, activeTab.slice(0, -1))}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getItemColor(
                      activeTab
                    )} flex items-center justify-center text-2xl`}
                  >
                    {activeTab === "products" && "🎨"}
                    {activeTab === "events" && "🎪"}
                    {activeTab === "courses" && "📚"}
                    {activeTab === "digital" && "📁"}
                    {activeTab === "sessions" && "💬"}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg text-gray-900">
                        {item.title}
                      </h3>
                      {item.trending && (
                        <TrendingUp className="w-4 h-4 text-orange-500" />
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-bold text-gray-900">
                        {formatPrice(item.price)}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">
                          {item.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      }
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Creative profile header */}
          <div className="bg-white px-6 py-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile picture with story-like ring */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-orange-500 p-1">
                  <div className="w-full h-full rounded-full bg-white p-1">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-600">
                        {getInitials(creator.name)}
                      </span>
                    </div>
                  </div>
                </div>
                {creator.isVerified && (
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>

              {/* Profile info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {creator.name}
                  </h1>
                  <div className="text-gray-500">@{creator.username}</div>
                </div>

                {/* Stats with creative layout */}
                <div className="grid grid-cols-3 gap-8 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {FormatNumber(creator.totalSales)}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      products sold
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {FormatNumber(creator.followers)}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      followers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      {creator.engagementRate}%
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      engagement
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {creator.bio}
                </p>

                {/* Action buttons */}
                <div className="flex gap-3 justify-center md:justify-start">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Follow
                  </button>
                  <button className="bg-white border-2 border-gray-200 text-gray-900 px-8 py-3 rounded-full font-semibold hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                    Message
                  </button>
                  <button className="bg-white border-2 border-gray-200 p-3 rounded-full hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Creative tabs */}
          <div className="bg-white border-t border-gray-100">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1 bg-gray-100 rounded-full p-1">
                  {tabs.map((tab) => {
                    const IconComponent = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                          activeTab === tab.id
                            ? "bg-white text-gray-900 shadow-sm"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="hidden sm:inline">{tab.name}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "grid" ? "bg-gray-100" : "hover:bg-gray-50"
                    }`}
                  >
                    <Grid3X3 className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "list" ? "bg-gray-100" : "hover:bg-gray-50"
                    }`}
                  >
                    <List className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content area */}
          <div className="px-6 py-8">{renderContent()}</div>
        </div>
      </div>
    );
  };

  // Main render logic
  if (currentView === "detail" && selectedItem) {
    switch (selectedItem.contentType) {
      case "product":
        return <ProductDetailView item={selectedItem} />;
      case "event":
        return <EventDetailView item={selectedItem} />;
      case "course":
        return <CourseDetailView item={selectedItem} />;
      case "digital":
        return <DigitalProductDetailView item={selectedItem} />;
      case "session":
        return <SessionDetailView item={selectedItem} />;
      default:
        return <ProfileView />;
    }
  }

  return <ProfileView />;
};

export default Profile;
