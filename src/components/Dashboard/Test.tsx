import {
  Calendar,
  CheckCircle,
  Clock,
  Download,
  ExternalLink,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Play,
  Send,
  Star,
  Twitter,
  Users,
  Youtube,
} from "lucide-react";
import { useState } from "react";

const Test = () => {
  const [currentView, setCurrentView] = useState("profile");
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState("products");

  // Enhanced creator data with social links and contact info
  const creator = {
    name: "Alex Rivera",
    username: "@alexcreates",
    bio: "Digital artist & educator helping creatives build their online presence. Teaching design, business, and creativity to 50k+ students worldwide.",
    location: "San Francisco, CA",
    profileImage: null,
    coverImage: null,
    isVerified: true,
    joinedDate: "March 2022",
    website: "alexcreates.com",

    // Contact Information
    email: "hello@alexcreates.com",
    phone: "+1 (555) 123-4567",

    // Social Links
    socialLinks: {
      instagram: "https://instagram.com/alexcreates",
      twitter: "https://twitter.com/alexcreates",
      linkedin: "https://linkedin.com/in/alexrivera",
      youtube: "https://youtube.com/@alexcreates",
    },

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

  // Mock content data (keeping existing structure but will enhance styling)
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
        features: [
          "200+ Premium Digital Brushes",
          "50 High-Resolution Textures",
          "30 Professional Templates",
          "Video Tutorials Included",
          "Compatible with Photoshop & Procreate",
          "Lifetime Updates",
        ],
        files: [
          "Photoshop Brushes (.abr)",
          "Procreate Brushes (.brushset)",
          "Texture Files (.jpg, .png)",
          "Template Files (.psd)",
        ],
        totalSize: "1.2 GB",
        compatibility: ["Adobe Photoshop", "Procreate", "Adobe Fresco"],
        includes:
          "Brush files, texture library, template collection, installation guide, bonus video tutorials",
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
        features: [
          "3 Initial Concept Designs",
          "Unlimited Revisions",
          "High-Resolution Files",
          "Vector & Raster Formats",
          "Commercial License Included",
          "7-Day Delivery",
        ],
        deliverables: [
          "Logo in AI, EPS, PDF formats",
          "PNG files (transparent & white background)",
          "Brand guidelines document",
          "Color palette specifications",
        ],
        process: "Consultation → Concepts → Revisions → Final Delivery",
        timeline: "7-10 business days",
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
        features: [
          "50 Unique Brush Designs",
          "Watercolor Collection (15 brushes)",
          "Oil Paint Collection (15 brushes)",
          "Sketching Collection (10 brushes)",
          "Special Effects (10 brushes)",
          "Installation Guide Included",
        ],
        compatibility: ["Procreate 5.0+"],
        fileSize: "45 MB",
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
        duration: "3 hours",
        platform: "Zoom",
        includes: [
          "Live instruction and demonstration",
          "Q&A session",
          "Recording access for 30 days",
          "Bonus brush pack",
          "PDF guide with techniques",
          "Certificate of completion",
        ],
        agenda: [
          "Introduction & Setup (15 mins)",
          "Advanced Brush Techniques (45 mins)",
          "Color Theory in Digital Art (30 mins)",
          "Break (15 mins)",
          "Composition & Lighting (45 mins)",
          "Live Painting Demo (30 mins)",
          "Q&A Session (20 mins)",
        ],
        prerequisites: "Basic knowledge of digital art software recommended",
        equipment: "Computer/tablet with Procreate or Photoshop",
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
        modules: [
          {
            title: "Week 1-2: Foundations",
            lessons: [
              "Software Overview",
              "Basic Tools",
              "Digital Canvas Basics",
              "First Digital Painting",
            ],
          },
          {
            title: "Week 3-4: Drawing Fundamentals",
            lessons: [
              "Line Art Techniques",
              "Shape & Form",
              "Perspective Basics",
              "Character Sketching",
            ],
          },
        ],
        includes: [
          "48 comprehensive video lessons",
          "Downloadable resources & brushes",
          "Weekly assignments with feedback",
          "Private student community",
          "1-on-1 portfolio review",
          "Certificate of completion",
          "Lifetime access to updates",
        ],
        requirements:
          "Computer/tablet with art software (Photoshop, Procreate, or similar)",
        support: "Community forum + weekly office hours",
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
        includes: [
          "20 Logo Templates",
          "Business Card Designs",
          "Letterhead Templates",
          "Social Media Templates",
          "Brand Guidelines Template",
          "Color Palette Collection",
        ],
        compatibility: [
          "Adobe Illustrator CC 2020+",
          "Adobe Photoshop CC 2020+",
        ],
        license: "Commercial use allowed",
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
        format: "Video call via Zoom",
        preparation: "Send portfolio 24 hours before session",
        whatToExpect: [
          "Detailed review of 5-10 portfolio pieces",
          "Feedback on composition, technique, and presentation",
          "Suggestions for improvement and next steps",
          "Industry insights and career advice",
          "Follow-up notes and action items",
        ],
        includes: [
          "60-minute live video session",
          "Written feedback summary",
          "Action plan with next steps",
          "Resource recommendations",
          "One follow-up email",
        ],
        idealFor: [
          "Artists seeking portfolio improvement",
          "Job seekers in creative fields",
          "Students preparing for applications",
          "Professionals wanting expert feedback",
        ],
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

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
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

  // Enhanced Profile View with modern design
  const ProfileView = () => {
    const tabs = [
      {
        id: "products",
        name: "Products",
        icon: "🛍️",
        count: content.products.length,
        color: "from-purple-500 to-pink-500",
      },
      {
        id: "events",
        name: "Events",
        icon: "🎟️",
        count: content.events.length,
        color: "from-blue-500 to-indigo-500",
      },
      {
        id: "courses",
        name: "Courses",
        icon: "🎓",
        count: content.courses.length,
        color: "from-green-500 to-emerald-500",
      },
      {
        id: "digital",
        name: "Digital",
        icon: "💾",
        count: content.digitalProducts.length,
        color: "from-orange-500 to-red-500",
      },
      {
        id: "sessions",
        name: "1:1 Sessions",
        icon: "💬",
        count: content.sessions.length,
        color: "from-teal-500 to-cyan-500",
      },
    ];

    const renderContent = () => {
      switch (activeTab) {
        case "products":
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer relative"
                  onClick={() => handleItemClick(product, "product")}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="h-56 bg-gradient-to-br from-purple-100 via-pink-50 to-purple-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20"></div>
                    <div className="w-full h-full flex items-center justify-center relative z-10">
                      <div className="text-6xl opacity-40 group-hover:scale-110 transition-transform duration-500">
                        🎨
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700 shadow-sm">
                      {product.type}
                    </div>
                    {product.originalPrice && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        Save ${product.originalPrice - product.price}!
                      </div>
                    )}
                  </div>

                  <div className="p-7">
                    <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-gray-900">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold text-gray-700">
                          {product.rating}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                      <span className="text-sm text-gray-600 font-medium">
                        {formatNumber(product.sales)} sold
                      </span>
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                        View Details
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );

        case "events":
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.events.map((event) => (
                <div
                  key={event.id}
                  className="group bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer"
                  onClick={() => handleItemClick(event, "event")}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="w-full h-full flex items-center justify-center relative z-10">
                      <div className="text-6xl opacity-40 group-hover:scale-110 transition-transform duration-500">
                        🎪
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {event.status}
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="space-y-3 mb-5">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Calendar className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="font-medium">
                          {new Date(event.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Clock className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="font-medium">{event.time}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-bold text-gray-900">
                        {formatPrice(event.price)}
                      </span>
                      <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-medium">
                        {event.attendees}/{event.maxAttendees} attending
                      </span>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          );

        case "courses":
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.courses.map((course) => (
                <div
                  key={course.id}
                  className="group bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer"
                  onClick={() => handleItemClick(course, "course")}
                >
                  <div className="h-56 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="w-full h-full flex items-center justify-center relative z-10">
                      <div className="text-6xl opacity-40 group-hover:scale-110 transition-transform duration-500">
                        📚
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700 shadow-sm">
                      {course.level}
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-5">
                      <div className="flex items-center gap-2 bg-green-50 p-3 rounded-xl">
                        <Play className="w-5 h-5 text-green-600" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {course.lessons}
                          </div>
                          <div className="text-xs text-gray-600">lessons</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-green-50 p-3 rounded-xl">
                        <Clock className="w-5 h-5 text-green-600" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {course.duration}
                          </div>
                          <div className="text-xs text-gray-600">duration</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-green-50 p-3 rounded-xl">
                        <Users className="w-5 h-5 text-green-600" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {formatNumber(course.students)}
                          </div>
                          <div className="text-xs text-gray-600">students</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-green-50 p-3 rounded-xl">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {course.rating}
                          </div>
                          <div className="text-xs text-gray-600">
                            ({course.reviews})
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                      <span className="text-2xl font-bold text-gray-900">
                        {formatPrice(course.price)}
                      </span>
                      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                        View Details
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );

        case "digital":
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.digitalProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer"
                  onClick={() => handleItemClick(product, "digital")}
                >
                  <div className="h-56 bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="w-full h-full flex items-center justify-center relative z-10">
                      <div className="text-6xl opacity-40 group-hover:scale-110 transition-transform duration-500">
                        📁
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700 shadow-sm">
                      {product.fileType}
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2 bg-orange-50 px-3 py-2 rounded-xl">
                        <Download className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-semibold text-gray-700">
                          {formatNumber(product.downloads)} downloads
                        </span>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold text-gray-700">
                          {product.rating}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">
                          {formatPrice(product.price)}
                        </span>
                        <div className="text-xs text-gray-500 font-medium">
                          {product.size}
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                        View Details
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );

        case "sessions":
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.sessions.map((session) => (
                <div
                  key={session.id}
                  className="group bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer"
                  onClick={() => handleItemClick(session, "session")}
                >
                  <div className="h-48 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="w-full h-full flex items-center justify-center relative z-10">
                      <div className="text-6xl opacity-40 group-hover:scale-110 transition-transform duration-500">
                        💬
                      </div>
                    </div>
                    <div
                      className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                        session.availability === "Available"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {session.availability}
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                      {session.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {session.description}
                    </p>

                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex items-center gap-2 bg-teal-50 px-3 py-2 rounded-xl">
                        <Clock className="w-4 h-4 text-teal-600" />
                        <span className="text-sm font-semibold text-gray-700">
                          {session.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold text-gray-700">
                          {session.rating}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({session.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">
                          {formatPrice(session.price)}
                        </span>
                        <div className="text-xs text-gray-500 font-medium">
                          {session.bookings} booked
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                        View Details
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );

        default:
          return null;
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Enhanced Cover Photo */}
        <div className="h-80 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          {/* Floating shapes for visual interest */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-32 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-500"></div>

          <div className="w-full h-full flex items-center justify-center relative z-10">
            <div className="text-white/20 text-8xl">🎨</div>
          </div>
        </div>

        {/* Enhanced Profile Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 -mt-40 relative z-10 p-8 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Enhanced Profile Picture */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-2xl border-4 border-white flex items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/50 to-pink-400/50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <span className="text-4xl font-bold text-white relative z-10">
                    {getInitials(creator.name)}
                  </span>
                </div>
              </div>

              {/* Enhanced Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {creator.name}
                      </h1>
                      {creator.isVerified && (
                        <div className="bg-blue-500 p-1 rounded-full">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>
                    <p className="text-xl text-purple-600 font-semibold mb-3">
                      {creator.username}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl">
                        <MapPin className="w-4 h-4" />
                        {creator.location}
                      </div>
                      <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl">
                        <Calendar className="w-4 h-4" />
                        Joined {creator.joinedDate}
                      </div>
                      {creator.website && (
                        <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl">
                          <ExternalLink className="w-4 h-4" />
                          <a
                            href={`https://${creator.website}`}
                            className="text-blue-600 hover:underline font-medium"
                          >
                            {creator.website}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Contact & Social Section */}
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 min-w-[300px]">
                    <h3 className="font-bold text-gray-900 mb-4">
                      Get in Touch
                    </h3>

                    {/* Contact Info */}
                    <div className="space-y-3 mb-5">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Mail className="w-4 h-4 text-blue-600" />
                        </div>
                        <a
                          href={`mailto:${creator.email}`}
                          className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                          {creator.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <Phone className="w-4 h-4 text-green-600" />
                        </div>
                        <a
                          href={`tel:${creator.phone}`}
                          className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                        >
                          {creator.phone}
                        </a>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-sm text-gray-600 mb-3">
                        Follow me on social:
                      </p>
                      <div className="flex gap-3">
                        <a
                          href={creator.socialLinks.instagram}
                          className="bg-gradient-to-br from-pink-500 to-purple-600 p-2 rounded-xl text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a
                          href={creator.socialLinks.twitter}
                          className="bg-gradient-to-br from-blue-400 to-blue-600 p-2 rounded-xl text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a
                          href={creator.socialLinks.linkedin}
                          className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-xl text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={creator.socialLinks.youtube}
                          className="bg-gradient-to-br from-red-500 to-red-700 p-2 rounded-xl text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                        >
                          <Youtube className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    {/* Contact Button */}
                    <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </div>
                </div>

                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  {creator.bio}
                </p>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl">
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                      {formatNumber(creator.followers)}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Followers
                    </div>
                  </div>
                  <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {formatNumber(creator.following)}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Following
                    </div>
                  </div>
                  <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {formatNumber(creator.monthlyReach)}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Monthly Reach
                    </div>
                  </div>
                  <div className="text-center bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-2xl">
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      {creator.engagementRate}%
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Engagement
                    </div>
                  </div>
                  <div className="text-center bg-gradient-to-br from-teal-50 to-cyan-50 p-4 rounded-2xl">
                    <div className="text-3xl font-bold text-teal-600 mb-1">
                      {formatNumber(creator.totalSales)}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Total Sales
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Tabs */}
          <div className="mt-12">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2">
              <nav className="flex space-x-2 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-6 rounded-xl font-semibold text-sm flex items-center gap-3 transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab.id
                        ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    {tab.name}
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold ${
                        activeTab === tab.id
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="py-12">{renderContent()}</div>
          </div>
        </div>
      </div>
    );
  };

  // For now, just return the main profile view - detailed views can be enhanced similarly
  return <ProfileView />;
};

export default Test;
