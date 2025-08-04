import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Globe,
  MapPin,
  Monitor,
  Play,
  ShoppingCart,
  Star,
  Target,
  UserCheck,
  Users,
  Video as VideoIcon,
} from "lucide-react";
import { useState } from "react";

const CreaterViewPages = () => {
  const [currentView, setCurrentView] = useState("profile");
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState("products");

  // Mock creator data
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

  // Mock content data with expanded details
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
        duration: "6 hours",
        platform: "Zoom + Breakout Rooms",
        includes: [
          "6 hours of live instruction",
          "Workbook and templates",
          "1-on-1 mini consultations",
          "90-day community access",
          "Recording for lifetime access",
          "Business plan template",
        ],
        agenda: [
          "Finding Your Niche (1 hour)",
          "Pricing Your Work (1 hour)",
          "Marketing Strategies (1.5 hours)",
          "Lunch Break (30 mins)",
          "Client Management (1 hour)",
          "Scaling Your Business (1 hour)",
          "Q&A & Next Steps (1 hour)",
        ],
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
          {
            title: "Week 5-6: Color Theory",
            lessons: [
              "Color Wheel Mastery",
              "Color Harmony",
              "Lighting Basics",
              "Mood & Atmosphere",
            ],
          },
          {
            title: "Week 7-8: Advanced Techniques",
            lessons: [
              "Texture Painting",
              "Advanced Brushwork",
              "Digital Blending",
              "Special Effects",
            ],
          },
          {
            title: "Week 9-10: Composition",
            lessons: [
              "Rule of Thirds",
              "Visual Hierarchy",
              "Storytelling",
              "Portfolio Pieces",
            ],
          },
          {
            title: "Week 11-12: Professional Skills",
            lessons: [
              "Client Work",
              "Art Direction",
              "Portfolio Building",
              "Career Guidance",
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
        modules: [
          {
            title: "Week 1: Business Foundation",
            lessons: [
              "Mindset & Goals",
              "Business Structure",
              "Legal Basics",
              "Financial Planning",
            ],
          },
          {
            title: "Week 2: Pricing & Packages",
            lessons: [
              "Value-Based Pricing",
              "Package Creation",
              "Pricing Psychology",
              "Negotiation",
            ],
          },
          {
            title: "Week 3-4: Marketing",
            lessons: [
              "Brand Identity",
              "Social Media Strategy",
              "Content Creation",
              "Email Marketing",
            ],
          },
          {
            title: "Week 5-6: Client Management",
            lessons: [
              "Finding Clients",
              "Proposals & Contracts",
              "Project Management",
              "Communication",
            ],
          },
          {
            title: "Week 7-8: Growth & Scaling",
            lessons: [
              "Passive Income",
              "Team Building",
              "Systems & Automation",
              "Long-term Strategy",
            ],
          },
        ],
        includes: [
          "32 detailed video lessons",
          "Business templates & contracts",
          "Pricing calculator tool",
          "Marketing templates",
          "Private mastermind group",
          "Monthly group coaching calls",
          "1-year access",
        ],
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
        includes: [
          "200+ Social Media Templates",
          "Instagram Post Templates",
          "Story Templates",
          "LinkedIn Graphics",
          "Twitter Headers",
          "Facebook Cover Photos",
        ],
        formats: [
          "Instagram Posts (1080x1080)",
          "Instagram Stories (1080x1920)",
          "Twitter Posts (1200x675)",
          "LinkedIn Posts (1200x627)",
        ],
        software: ["Adobe Photoshop", "Canva Pro", "Figma"],
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
        format: "Video call via Zoom",
        preparation: "Complete pre-session questionnaire",
        whatToExpected: [
          "Deep dive into your creative goals and challenges",
          "Personalized action plan development",
          "Strategies for overcoming creative blocks",
          "Career guidance and next steps",
          "Resource and opportunity recommendations",
        ],
        includes: [
          "90-minute intensive mentorship session",
          "Personalized action plan",
          "Resource list and recommendations",
          "30-day follow-up check-in",
          "Direct message access for questions",
        ],
        idealFor: [
          "Artists at career crossroads",
          "Creatives facing blocks",
          "Entrepreneurs in creative fields",
          "Students planning their future",
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

  // Product Detail View
  const ProductDetailView = ({ item }) => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Profile
        </button>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                <div className="text-8xl opacity-30">🎨</div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-20 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <div className="text-2xl opacity-50">🎨</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {item.type}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                    <span className="text-sm text-gray-500">
                      ({item.reviews} reviews)
                    </span>
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  {item.fullDescription}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-gray-900">
                    {formatPrice(item.price)}
                  </span>
                  {item.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(item.originalPrice)}
                    </span>
                  )}
                </div>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                  Save ${item.originalPrice - item.price}!
                </span>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Buy Now
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {formatNumber(item.sales)}
                  </div>
                  <div className="text-sm text-gray-600">Sales</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {item.rating}
                  </div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features & Details */}
          <div className="border-t border-gray-100 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.compatibility && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Compatibility
                  </h3>
                  <div className="space-y-3">
                    {item.compatibility.map((software, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                      >
                        <Monitor className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">{software}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Event Detail View
  const EventDetailView = ({ item }) => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Profile
        </button>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Event Header */}
          <div className="h-64 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 relative">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {item.type} • {item.status}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-2">{item.title}</h1>
              <p className="text-xl opacity-90">{item.description}</p>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    About This Event
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {item.fullDescription}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    What You'll Learn
                  </h2>
                  <ul className="space-y-3">
                    {item.includes.map((include, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-gray-700">{include}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Event Agenda
                  </h2>
                  <div className="space-y-3">
                    {item.agenda.map((agendaItem, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{agendaItem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {formatPrice(item.price)}
                    </div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-medium text-gray-900">
                          {new Date(item.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="text-sm text-gray-600">{item.time}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{item.platform}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        {item.attendees}/{item.maxAttendees} registered
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                    Register Now
                  </button>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Prerequisites
                  </h3>
                  <p className="text-gray-700 text-sm">{item.prerequisites}</p>

                  <h3 className="font-semibold text-gray-900 mb-2 mt-4">
                    Equipment Needed
                  </h3>
                  <p className="text-gray-700 text-sm">{item.equipment}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Course Detail View
  const CourseDetailView = ({ item }) => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Profile
        </button>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Course Header */}
          <div className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 text-white p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {item.level} • {item.duration}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                    <span className="text-sm opacity-80">
                      ({item.reviews} reviews)
                    </span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
                <p className="text-xl opacity-90 leading-relaxed">
                  {item.fullDescription}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold mb-1">
                    {formatPrice(item.price)}
                  </div>
                  <div className="text-sm opacity-80">one-time payment</div>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="opacity-80">Students:</span>
                    <span className="font-medium">
                      {formatNumber(item.students)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="opacity-80">Lessons:</span>
                    <span className="font-medium">{item.lessons}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="opacity-80">Duration:</span>
                    <span className="font-medium">{item.duration}</span>
                  </div>
                </div>

                <button className="w-full bg-white text-green-600 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Course Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Course Curriculum
                  </h2>
                  <div className="space-y-4">
                    {item.modules.map((module, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <div className="bg-gray-50 p-4 border-b border-gray-200">
                          <h3 className="font-semibold text-gray-900">
                            {module.title}
                          </h3>
                        </div>
                        <div className="p-4">
                          <div className="space-y-2">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div
                                key={lessonIndex}
                                className="flex items-center gap-3 py-2"
                              >
                                <Play className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-700">{lesson}</span>
                                <span className="text-xs text-gray-500 ml-auto">
                                  5-10 min
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    What's Included
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.includes.map((include, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-green-50 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-gray-700">{include}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Course Details
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Level:</span>
                      <span className="font-medium text-gray-900">
                        {item.level}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium text-gray-900">
                        {item.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Lessons:</span>
                      <span className="font-medium text-gray-900">
                        {item.lessons}
                      </span>
                    </div>
                    {item.requirements && (
                      <>
                        <div className="pt-3 border-t border-gray-200">
                          <span className="text-gray-600 font-medium">
                            Requirements:
                          </span>
                          <p className="text-gray-700 mt-1">
                            {item.requirements}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Student Support
                  </h3>
                  <p className="text-gray-700 text-sm">{item.support}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Session Detail View
  const SessionDetailView = ({ item }) => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Profile
        </button>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Session Header */}
          <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white p-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  1:1 Session • {item.duration}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">{item.rating}</span>
                  <span className="text-sm opacity-80">
                    ({item.reviews} reviews)
                  </span>
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
              <p className="text-xl opacity-90 leading-relaxed">
                {item.fullDescription}
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    What to Expect
                  </h2>
                  <div className="space-y-4">
                    {item.whatToExpect?.map((expectation, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                      >
                        <Target className="w-5 h-5 text-teal-600 mt-0.5" />
                        <span className="text-gray-700">{expectation}</span>
                      </div>
                    )) ||
                      item.whatToExpected?.map((expectation, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                        >
                          <Target className="w-5 h-5 text-teal-600 mt-0.5" />
                          <span className="text-gray-700">{expectation}</span>
                        </div>
                      ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    What's Included
                  </h2>
                  <ul className="space-y-3">
                    {item.includes.map((include, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-gray-700">{include}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Perfect For
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.idealFor.map((audience, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg"
                      >
                        <UserCheck className="w-5 h-5 text-teal-600" />
                        <span className="text-gray-700 text-sm">
                          {audience}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Sidebar */}
              <div className="space-y-6">
                <div className="bg-teal-50 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {formatPrice(item.price)}
                    </div>
                    <div className="text-sm text-gray-600">
                      {item.duration} session
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <VideoIcon className="w-5 h-5 text-teal-600" />
                      <span className="text-gray-700 text-sm">
                        {item.format}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-teal-600" />
                      <span className="text-gray-700 text-sm">
                        {item.preparation}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-teal-600" />
                      <span className="text-gray-700 text-sm">
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      item.availability === "Available"
                        ? "bg-teal-600 hover:bg-teal-700 text-white"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={item.availability !== "Available"}
                  >
                    {item.availability === "Available"
                      ? "Book Session"
                      : item.availability}
                  </button>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Session Stats
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total Bookings:</span>
                      <span className="font-medium text-gray-900">
                        {item.bookings}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-medium text-gray-900">
                          {item.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Reviews:</span>
                      <span className="font-medium text-gray-900">
                        {item.reviews}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Digital Product Detail View
  const DigitalProductDetailView = ({ item }) => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Profile
        </button>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Preview */}
            <div className="space-y-4">
              <div className="h-96 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center">
                <div className="text-8xl opacity-30">📁</div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-24 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <div className="text-2xl opacity-50">📄</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Digital Download
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                    <span className="text-sm text-gray-500">
                      ({item.reviews} reviews)
                    </span>
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  {item.fullDescription}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(item.price)}
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                  Instant Download
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {formatNumber(item.downloads)}
                  </div>
                  <div className="text-sm text-gray-600">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {item.size}
                  </div>
                  <div className="text-sm text-gray-600">File Size</div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Now
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  Preview Files
                </button>
              </div>
            </div>
          </div>

          {/* File Details */}
          <div className="border-t border-gray-100 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {item.includes.map((include, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{include}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Technical Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">File Types:</span>
                    <span className="font-medium text-gray-900">
                      {item.fileType}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Total Size:</span>
                    <span className="font-medium text-gray-900">
                      {item.size}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">License:</span>
                    <span className="font-medium text-gray-900">
                      {item.license}
                    </span>
                  </div>
                  {item.software && (
                    <div className="pt-3">
                      <span className="text-gray-600 font-medium mb-2 block">
                        Compatible Software:
                      </span>
                      <div className="space-y-2">
                        {item.software.map((software, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 text-sm text-gray-700"
                          >
                            <Monitor className="w-4 h-4" />
                            {software}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Main Profile View (existing code)
  const ProfileView = () => {
    const tabs = [
      {
        id: "products",
        name: "Products",
        icon: "🛍️",
        count: content.products.length,
      },
      {
        id: "events",
        name: "Events",
        icon: "🎟️",
        count: content.events.length,
      },
      {
        id: "courses",
        name: "Courses",
        icon: "🎓",
        count: content.courses.length,
      },
      {
        id: "digital",
        name: "Digital",
        icon: "💾",
        count: content.digitalProducts.length,
      },
      {
        id: "sessions",
        name: "1:1 Sessions",
        icon: "💬",
        count: content.sessions.length,
      },
    ];

    const renderContent = () => {
      switch (activeTab) {
        case "products":
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => handleItemClick(product, "product")}
                >
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-4xl opacity-30">🎨</div>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                      {product.type}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gray-900">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{product.rating}</span>
                        <span>({product.reviews})</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-600">
                        {formatNumber(product.sales)} sold
                      </span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );

        case "events":
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => handleItemClick(event, "event")}
                >
                  <div className="h-32 bg-gradient-to-r from-blue-100 to-indigo-100 relative overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-4xl opacity-30">🎪</div>
                    </div>
                    <div className="absolute top-3 right-3 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {event.status}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {event.description}
                    </p>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-gray-900">
                        {formatPrice(event.price)}
                      </span>
                      <span className="text-sm text-gray-600">
                        {event.attendees}/{event.maxAttendees} attending
                      </span>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          );

        case "courses":
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => handleItemClick(course, "course")}
                >
                  <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 relative overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-4xl opacity-30">📚</div>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                      {course.level}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {course.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{formatNumber(course.students)} students</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>
                          {course.rating} ({course.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xl font-bold text-gray-900">
                        {formatPrice(course.price)}
                      </span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );

        case "digital":
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.digitalProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => handleItemClick(product, "digital")}
                >
                  <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 relative overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-4xl opacity-30">📁</div>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                      {product.fileType}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Download className="w-4 h-4" />
                        <span>{formatNumber(product.downloads)} downloads</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{product.rating}</span>
                        <span>({product.reviews})</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-xl font-bold text-gray-900">
                          {formatPrice(product.price)}
                        </span>
                        <div className="text-xs text-gray-500">
                          {product.size}
                        </div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );

        case "sessions":
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.sessions.map((session) => (
                <div
                  key={session.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => handleItemClick(session, "session")}
                >
                  <div className="h-32 bg-gradient-to-br from-teal-100 to-cyan-100 relative overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-4xl opacity-30">💬</div>
                    </div>
                    <div
                      className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
                        session.availability === "Available"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {session.availability}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {session.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {session.description}
                    </p>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{session.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{session.rating}</span>
                        <span>({session.reviews})</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-xl font-bold text-gray-900">
                          {formatPrice(session.price)}
                        </span>
                        <div className="text-xs text-gray-500">
                          {session.bookings} booked
                        </div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        View Details
                      </button>
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
      <div className="min-h-screen bg-gray-50">
        {/* Cover Photo */}
        <div className="h-64 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 relative">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white/30 text-6xl">🎨</div>
          </div>
        </div>

        {/* Profile Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 -mt-32 relative z-10 p-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Profile Picture */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-white rounded-xl shadow-lg border-4 border-white flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">
                      {getInitials(creator.name)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-bold text-gray-900">
                        {creator.name}
                      </h1>
                      {creator.isVerified && (
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                      )}
                    </div>
                    <p className="text-lg text-gray-600 mb-2">
                      {creator.username}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {creator.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Joined {creator.joinedDate}
                      </div>
                      {creator.website && (
                        <div className="flex items-center gap-1">
                          <ExternalLink className="w-4 h-4" />
                          <a
                            href={`https://${creator.website}`}
                            className="text-blue-600 hover:underline"
                          >
                            {creator.website}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {creator.bio}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {formatNumber(creator.followers)}
                    </div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {formatNumber(creator.following)}
                    </div>
                    <div className="text-sm text-gray-600">Following</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {formatNumber(creator.monthlyReach)}
                    </div>
                    <div className="text-sm text-gray-600">Monthly Reach</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {creator.engagementRate}%
                    </div>
                    <div className="text-sm text-gray-600">Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {formatNumber(creator.totalSales)}
                    </div>
                    <div className="text-sm text-gray-600">Total Sales</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <div className="mt-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    {tab.name}
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      {tab.count}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="py-8">{renderContent()}</div>
          </div>
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

export default CreaterViewPages;
