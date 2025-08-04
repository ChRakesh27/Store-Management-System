import React, { useState, useEffect } from "react";
import { ChevronDown, Sparkles, Menu } from "lucide-react";

const Test2 = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [aiMessage, setAiMessage] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const words = ["Sell", "Teach", "Grow", "Operate"];

  // Typewriter effect
  useEffect(() => {
    const typeWriter = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        setCurrentCharIndex((prev) => prev - 1);
      } else {
        setCurrentCharIndex((prev) => prev + 1);
      }

      let typeSpeed = isDeleting ? 100 : 150;

      if (!isDeleting && currentCharIndex === currentWord.length) {
        typeSpeed = 2000;
        setTimeout(() => setIsDeleting(true), typeSpeed);
        return;
      } else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        typeSpeed = 300;
      }

      setTimeout(typeWriter, typeSpeed);
    };

    const timer = setTimeout(typeWriter, isDeleting ? 100 : 150);
    return () => clearTimeout(timer);
  }, [currentCharIndex, currentWordIndex, isDeleting, words]);

  const handleAiSubmit = () => {
    if (aiMessage.trim()) {
      console.log("AI Message:", aiMessage);
      setAiMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAiSubmit();
    }
  };

  const MegaMenu = ({ title, sections }) => (
    <div className="relative group">
      <a
        href="#"
        className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium text-sm py-2 transition-colors duration-200"
      >
        {title}
        <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
      </a>

      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] max-w-[90vw] md:max-w-[600px] bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-gray-900 font-semibold text-sm mb-4">
                {section.title}
              </h4>
              <div className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="block py-1 text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const productsSections = [
    {
      title: "Sell",
      links: [
        "E-commerce Store",
        "Digital Products",
        "Subscriptions",
        "Payment Processing",
      ],
    },
    {
      title: "Teach",
      links: [
        "Course Builder",
        "Live Classes",
        "Student Management",
        "Certificates",
      ],
    },
    {
      title: "Grow",
      links: [
        "Email Marketing",
        "Social Media Tools",
        "Analytics",
        "SEO Tools",
      ],
    },
    {
      title: "Operate",
      links: ["CRM", "Project Management", "Team Collaboration", "Automation"],
    },
  ];

  const opportunitiesSections = [
    {
      title: "Revenue Streams",
      links: [
        "Affiliate Marketing",
        "Sponsorships",
        "Brand Partnerships",
        "Licensing Deals",
      ],
    },
    {
      title: "Growth Opportunities",
      links: [
        "Creator Marketplace",
        "Partnership Program",
        "Investor Network",
        "Scaling Support",
      ],
    },
    {
      title: "Community",
      links: ["Creator Events", "Networking", "Mentorship", "Success Stories"],
    },
    {
      title: "Resources",
      links: [
        "Business Templates",
        "Legal Support",
        "Tax Guidance",
        "Industry Reports",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-[70px]">
          <a href="#" className="text-2xl font-bold text-blue-600">
            Creator
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <MegaMenu title="Products" sections={productsSections} />
            <MegaMenu title="Opportunities" sections={opportunitiesSections} />
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
            >
              Tools
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
            >
              How it Works
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1 p-2"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-[140px]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-sm md:text-base font-medium tracking-wider uppercase mb-6">
            For Modern Creators
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            One Platform to{" "}
            <div className="inline-block">
              <span className="text-blue-600 relative">
                {words[currentWordIndex].substring(0, currentCharIndex)}
                <span className="absolute -right-1 top-0 w-0.5 h-full bg-blue-600 animate-pulse" />
              </span>
            </div>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Built for modern creators and early-stage businesses who want to
            streamline their operations and focus on growth.
          </p>

          {/* AI Assistant Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
              {/* Gradient border effect */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  AI Assistant
                </h3>
              </div>

              <div>
                <textarea
                  value={aiMessage}
                  onChange={(e) => setAiMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full min-h-[120px] bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-lg p-4 text-gray-700 resize-y transition-all duration-200 focus:outline-none focus:border-blue-500/50 focus:ring-3 focus:ring-blue-500/10 focus:bg-white/70 placeholder-gray-400"
                  placeholder="Ask our AI assistant how we can help grow your business..."
                  rows={4}
                />

                <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                  <span>Press Enter to send</span>
                  <button
                    onClick={handleAiSubmit}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-md font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="fixed top-[70px] left-0 right-0 bg-white border-b border-gray-200 p-4">
            <div className="space-y-4">
              <a href="#" className="block text-gray-700 font-medium">
                Products
              </a>
              <a href="#" className="block text-gray-700 font-medium">
                Opportunities
              </a>
              <a href="#" className="block text-gray-700 font-medium">
                Tools
              </a>
              <a href="#" className="block text-gray-700 font-medium">
                Pricing
              </a>
              <a href="#" className="block text-gray-700 font-medium">
                How it Works
              </a>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a href="#" className="block text-gray-700 font-medium">
                  Login
                </a>
                <a
                  href="#"
                  className="block bg-blue-600 text-white px-4 py-2 rounded-md font-semibold text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test2;
