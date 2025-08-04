import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Building,
  Camera,
  CheckCircle,
  CircleDollarSign,
  Code,
  DollarSign,
  Euro,
  ExternalLink,
  Eye,
  EyeOff,
  Facebook,
  Globe,
  Headphones,
  IndianRupee,
  Instagram,
  Link,
  Linkedin,
  Loader,
  Lock,
  Mail,
  Music,
  Paintbrush,
  PoundSterling,
  Sparkles,
  Twitter,
  User,
  X,
  Youtube,
} from "lucide-react";
import { useState } from "react";

const Auth = () => {
  const [currentView, setCurrentView] = useState("auth"); // auth, onboarding, complete
  const [authMode, setAuthMode] = useState("signup"); // signin, signup
  const [onboardingStep, setOnboardingStep] = useState(1); // 1-4
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [authForm, setAuthForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [onboardingForm, setOnboardingForm] = useState({
    username: "",
    businessName: "",
    socialPlatform: "",
    socialHandle: "",
    currency: "USD",
  });

  const [errors, setErrors] = useState({});
  const [usernameStatus, setUsernameStatus] = useState(""); // checking, available, taken

  // Social platforms with enhanced options
  const socialPlatforms = [
    {
      id: "instagram",
      name: "Instagram",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
      baseUrl: "instagram.com/",
      placeholder: "your_handle",
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: Facebook,
      color: "from-blue-600 to-blue-700",
      baseUrl: "facebook.com/",
      placeholder: "your.page",
    },
    {
      id: "twitter",
      name: "X (Twitter)",
      icon: Twitter,
      color: "from-gray-800 to-black",
      baseUrl: "x.com/",
      placeholder: "your_handle",
    },
    {
      id: "youtube",
      name: "YouTube",
      icon: Youtube,
      color: "from-red-500 to-red-600",
      baseUrl: "youtube.com/@",
      placeholder: "yourchannel",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: Linkedin,
      color: "from-blue-500 to-blue-600",
      baseUrl: "linkedin.com/in/",
      placeholder: "your-profile",
    },
    {
      id: "tiktok",
      name: "TikTok",
      icon: Music,
      color: "from-gray-900 to-black",
      baseUrl: "tiktok.com/@",
      placeholder: "your_username",
    },
    {
      id: "behance",
      name: "Behance",
      icon: Paintbrush,
      color: "from-blue-400 to-purple-500",
      baseUrl: "behance.net/",
      placeholder: "yourportfolio",
    },
    {
      id: "github",
      name: "GitHub",
      icon: Code,
      color: "from-gray-700 to-gray-900",
      baseUrl: "github.com/",
      placeholder: "username",
    },
  ];

  // Currency options
  const currencies = [
    {
      code: "USD",
      symbol: "$",
      name: "US Dollar",
      icon: DollarSign,
      flag: "🇺🇸",
    },
    { code: "EUR", symbol: "€", name: "Euro", icon: Euro, flag: "🇪🇺" },
    {
      code: "GBP",
      symbol: "£",
      name: "British Pound",
      icon: PoundSterling,
      flag: "🇬🇧",
    },
    {
      code: "JPY",
      symbol: "¥",
      name: "Japanese Yen",
      icon: CircleDollarSign,
      flag: "🇯🇵",
    },
    {
      code: "INR",
      symbol: "₹",
      name: "Indian Rupee",
      icon: IndianRupee,
      flag: "🇮🇳",
    },
    {
      code: "CAD",
      symbol: "C$",
      name: "Canadian Dollar",
      icon: DollarSign,
      flag: "🇨🇦",
    },
    {
      code: "AUD",
      symbol: "A$",
      name: "Australian Dollar",
      icon: DollarSign,
      flag: "🇦🇺",
    },
    {
      code: "BRL",
      symbol: "R$",
      name: "Brazilian Real",
      icon: DollarSign,
      flag: "🇧🇷",
    },
  ];

  // Simulate username availability check
  const checkUsername = (username) => {
    if (username.length < 3) return;

    setUsernameStatus("checking");
    setTimeout(() => {
      // Simulate taken usernames
      const takenUsernames = ["alex", "admin", "creator", "test", "user"];
      if (takenUsernames.includes(username.toLowerCase())) {
        setUsernameStatus("taken");
      } else {
        setUsernameStatus("available");
      }
    }, 1000);
  };

  const handleSocialAuth = (provider) => {
    setIsLoading(true);
    // Simulate social auth
    setTimeout(() => {
      setIsLoading(false);
      setCurrentView("onboarding");
    }, 2000);
  };

  const handleEmailAuth = () => {
    if (!validateAuthForm()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (authMode === "signup") {
        setCurrentView("onboarding");
      } else {
        // Existing user - go to dashboard
        setCurrentView("complete");
      }
    }, 1500);
  };

  const validateAuthForm = () => {
    const newErrors = {};

    if (!authForm.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(authForm.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!authForm.password) {
      newErrors.password = "Password is required";
    } else if (authForm.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (authMode === "signup") {
      if (!authForm.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (authForm.password !== authForm.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateOnboardingStep = () => {
    const newErrors = {};

    switch (onboardingStep) {
      case 1:
        if (!onboardingForm.username) {
          newErrors.username = "Username is required";
        } else if (onboardingForm.username.length < 3) {
          newErrors.username = "Username must be at least 3 characters";
        } else if (!/^[a-zA-Z0-9_]+$/.test(onboardingForm.username)) {
          newErrors.username = "Only letters, numbers, and underscores allowed";
        } else if (usernameStatus === "taken") {
          newErrors.username = "This username is already taken";
        }
        break;

      case 2:
        if (!onboardingForm.businessName.trim()) {
          newErrors.businessName = "Business name is required";
        }
        break;

      case 3:
        if (!onboardingForm.socialPlatform) {
          newErrors.socialPlatform = "Please select a platform";
        }
        if (!onboardingForm.socialHandle.trim()) {
          newErrors.socialHandle = "Handle/username is required";
        }
        break;

      case 4:
        if (!onboardingForm.currency) {
          newErrors.currency = "Please select a currency";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextOnboardingStep = () => {
    if (validateOnboardingStep()) {
      if (onboardingStep < 4) {
        setOnboardingStep(onboardingStep + 1);
        setErrors({});
      } else {
        // Complete onboarding
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setCurrentView("complete");
        }, 2000);
      }
    }
  };

  const prevOnboardingStep = () => {
    if (onboardingStep > 1) {
      setOnboardingStep(onboardingStep - 1);
      setErrors({});
    }
  };

  // Authentication Page
  const AuthenticationPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            CreatorHub
          </h1>
          <p className="text-gray-600 text-lg">
            {authMode === "signin"
              ? "Welcome back! Ready to create?"
              : "Join thousands of creators building their empire"}
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
          {/* Mode Toggle */}
          <div className="flex bg-gray-100 rounded-2xl p-1 mb-8">
            <button
              onClick={() => {
                setAuthMode("signin");
                setErrors({});
              }}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                authMode === "signin"
                  ? "bg-white text-gray-900 shadow-sm transform scale-105"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setAuthMode("signup");
                setErrors({});
              }}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                authMode === "signup"
                  ? "bg-white text-gray-900 shadow-sm transform scale-105"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Social Auth Buttons */}
          <div className="space-y-4 mb-8">
            <button
              onClick={() => handleSocialAuth("google")}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-4 px-6 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <span className="font-semibold text-gray-700 group-hover:text-gray-900">
                Continue with Google
              </span>
            </button>

            <button
              onClick={() => handleSocialAuth("facebook")}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-4 px-6 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <Facebook className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-700 group-hover:text-gray-900">
                Continue with Facebook
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-medium">
                Or with email
              </span>
            </div>
          </div>

          {/* Email Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  value={authForm.email}
                  onChange={(e) =>
                    setAuthForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-4 focus:ring-purple-500/20 transition-all ${
                    errors.email
                      ? "border-red-300 focus:border-red-400"
                      : "border-gray-200 focus:border-purple-500"
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && (
                <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={authForm.password}
                  onChange={(e) =>
                    setAuthForm((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className={`w-full pl-12 pr-14 py-4 border-2 rounded-xl focus:ring-4 focus:ring-purple-500/20 transition-all ${
                    errors.password
                      ? "border-red-300 focus:border-red-400"
                      : "border-gray-200 focus:border-purple-500"
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.password}
                </div>
              )}
            </div>

            {authMode === "signup" && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={authForm.confirmPassword}
                    onChange={(e) =>
                      setAuthForm((prev) => ({
                        ...prev,
                        confirmPassword: e.target.value,
                      }))
                    }
                    className={`w-full pl-12 pr-14 py-4 border-2 rounded-xl focus:ring-4 focus:ring-purple-500/20 transition-all ${
                      errors.confirmPassword
                        ? "border-red-300 focus:border-red-400"
                        : "border-gray-200 focus:border-purple-500"
                    }`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.confirmPassword}
                  </div>
                )}
              </div>
            )}

            <button
              onClick={handleEmailAuth}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105"
            >
              {isLoading ? (
                <Loader className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {authMode === "signin" ? "Sign In" : "Create Account"}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              {authMode === "signin" ? (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={() => setAuthMode("signup")}
                    className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                  >
                    Sign up here
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setAuthMode("signin")}
                    className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                  >
                    Sign in here
                  </button>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Terms */}
        <div className="text-center mt-6 text-xs text-gray-500">
          By continuing, you agree to our{" "}
          <a href="#" className="text-purple-600 hover:underline font-medium">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-purple-600 hover:underline font-medium">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );

  // Onboarding Flow
  const OnboardingFlow = () => {
    const totalSteps = 4;
    const progressPercent = (onboardingStep / totalSteps) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {/* Progress Header */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Set up your creator profile
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Step {onboardingStep} of {totalSteps} • Just a few more details to
              get started
            </p>

            {/* Enhanced Progress Bar */}
            <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${progressPercent}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Step Content Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-10">
            {/* Step 1: Username */}
            {onboardingStep === 1 && (
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Choose your username
                  </h2>
                  <p className="text-gray-600">
                    This will be your unique handle on CreatorHub
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Username
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">
                      @
                    </span>
                    <input
                      type="text"
                      value={onboardingForm.username}
                      onChange={(e) => {
                        const value = e.target.value
                          .toLowerCase()
                          .replace(/[^a-z0-9_]/g, "");
                        setOnboardingForm((prev) => ({
                          ...prev,
                          username: value,
                        }));
                        setUsernameStatus("");
                        if (value.length >= 3) {
                          checkUsername(value);
                        }
                      }}
                      className={`w-full pl-10 pr-12 py-4 border-2 rounded-xl focus:ring-4 focus:ring-purple-500/20 transition-all text-lg ${
                        errors.username
                          ? "border-red-300 focus:border-red-400"
                          : usernameStatus === "available"
                          ? "border-green-300 focus:border-green-400"
                          : usernameStatus === "taken"
                          ? "border-red-300 focus:border-red-400"
                          : "border-gray-200 focus:border-purple-500"
                      }`}
                      placeholder="your_username"
                      maxLength={20}
                    />

                    {/* Status Indicator */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      {usernameStatus === "checking" && (
                        <Loader className="w-5 h-5 animate-spin text-blue-500" />
                      )}
                      {usernameStatus === "available" && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                      {usernameStatus === "taken" && (
                        <X className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                  </div>

                  {/* Status Messages */}
                  {errors.username && (
                    <div className="flex items-center gap-2 mt-3 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.username}
                    </div>
                  )}
                  {usernameStatus === "available" && (
                    <div className="flex items-center gap-2 mt-3 text-green-600 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      Great! This username is available
                    </div>
                  )}
                  {usernameStatus === "taken" && (
                    <div className="flex items-center gap-2 mt-3 text-red-600 text-sm">
                      <X className="w-4 h-4" />
                      This username is already taken
                    </div>
                  )}

                  <p className="text-gray-500 text-sm mt-2">
                    {onboardingForm.username.length}/20 characters • Only
                    letters, numbers, and underscores
                  </p>
                </div>

                {/* Preview Card */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                  <h3 className="font-semibold text-purple-900 mb-3">
                    Your profile URL will be:
                  </h3>
                  <div className="flex items-center gap-2 bg-white rounded-lg p-3">
                    <Globe className="w-5 h-5 text-purple-600" />
                    <span className="text-purple-700 font-mono">
                      creatorhub.com/@{onboardingForm.username || "username"}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Business Name */}
            {onboardingStep === 2 && (
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    What's your business name?
                  </h2>
                  <p className="text-gray-600">
                    This will be displayed on your profile and store
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Business/Creator Name
                  </label>
                  <input
                    type="text"
                    value={onboardingForm.businessName}
                    onChange={(e) =>
                      setOnboardingForm((prev) => ({
                        ...prev,
                        businessName: e.target.value,
                      }))
                    }
                    className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-4 focus:ring-green-500/20 transition-all text-lg ${
                      errors.businessName
                        ? "border-red-300 focus:border-red-400"
                        : "border-gray-200 focus:border-green-500"
                    }`}
                    placeholder="Enter your business or creator name"
                  />
                  {errors.businessName && (
                    <div className="flex items-center gap-2 mt-3 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.businessName}
                    </div>
                  )}
                </div>

                {/* Examples */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                  <h3 className="font-semibold text-green-900 mb-4">
                    💡 Examples:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-green-800">
                    <div className="flex items-center gap-2">
                      <Paintbrush className="w-4 h-4" />
                      <span className="text-sm">Alex Rivera Studio</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4" />
                      <span className="text-sm">Creative Design Co.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      <span className="text-sm">Tech Solutions Pro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Headphones className="w-4 h-4" />
                      <span className="text-sm">Your Name</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Social Media */}
            {onboardingStep === 3 && (
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Link className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Connect your social media
                  </h2>
                  <p className="text-gray-600">
                    Link your main social platform to help people find and
                    follow you
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Choose Platform
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {socialPlatforms.map((platform) => {
                      const IconComponent = platform.icon;
                      return (
                        <button
                          key={platform.id}
                          onClick={() =>
                            setOnboardingForm((prev) => ({
                              ...prev,
                              socialPlatform: platform.id,
                              socialHandle: "",
                            }))
                          }
                          className={`group flex flex-col items-center gap-3 p-4 border-2 rounded-2xl transition-all duration-300 hover:scale-105 ${
                            onboardingForm.socialPlatform === platform.id
                              ? "border-purple-300 bg-purple-50 shadow-lg shadow-purple-500/20"
                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <span className="font-medium text-gray-900 text-sm text-center leading-tight">
                            {platform.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.socialPlatform && (
                    <div className="flex items-center gap-2 mb-4 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.socialPlatform}
                    </div>
                  )}
                </div>

                {onboardingForm.socialPlatform && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Your Handle/Username
                    </label>
                    <div className="flex rounded-xl overflow-hidden border-2 border-gray-200 focus-within:border-pink-500 transition-all">
                      <div className="flex items-center px-4 py-4 bg-gray-100 border-r border-gray-200">
                        <span className="text-gray-600 font-medium text-sm">
                          {
                            socialPlatforms.find(
                              (p) => p.id === onboardingForm.socialPlatform
                            )?.baseUrl
                          }
                        </span>
                      </div>
                      <input
                        type="text"
                        value={onboardingForm.socialHandle}
                        onChange={(e) =>
                          setOnboardingForm((prev) => ({
                            ...prev,
                            socialHandle: e.target.value,
                          }))
                        }
                        className={`flex-1 px-4 py-4 focus:outline-none text-lg ${
                          errors.socialHandle ? "bg-red-50" : "bg-white"
                        }`}
                        placeholder={
                          socialPlatforms.find(
                            (p) => p.id === onboardingForm.socialPlatform
                          )?.placeholder
                        }
                      />
                    </div>
                    {errors.socialHandle && (
                      <div className="flex items-center gap-2 mt-3 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.socialHandle}
                      </div>
                    )}

                    {/* Preview */}
                    {onboardingForm.socialHandle && (
                      <div className="mt-4 p-4 bg-pink-50 rounded-xl border border-pink-100">
                        <div className="flex items-center gap-2 text-pink-800">
                          <ExternalLink className="w-4 h-4" />
                          <span className="font-medium">Preview:</span>
                          <span className="font-mono">
                            {
                              socialPlatforms.find(
                                (p) => p.id === onboardingForm.socialPlatform
                              )?.baseUrl
                            }
                            {onboardingForm.socialHandle}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Currency */}
            {onboardingStep === 4 && (
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Choose your currency
                  </h2>
                  <p className="text-gray-600">
                    Select the currency for pricing your products and receiving
                    payments
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Preferred Currency
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currencies.map((currency) => {
                      const IconComponent = currency.icon;
                      return (
                        <button
                          key={currency.code}
                          onClick={() =>
                            setOnboardingForm((prev) => ({
                              ...prev,
                              currency: currency.code,
                            }))
                          }
                          className={`flex items-center gap-4 p-5 border-2 rounded-2xl transition-all duration-300 hover:scale-105 ${
                            onboardingForm.currency === currency.code
                              ? "border-yellow-300 bg-yellow-50 shadow-lg shadow-yellow-500/20"
                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{currency.flag}</span>
                            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <div className="flex-1 text-left">
                            <div className="font-semibold text-gray-900">
                              {currency.name}
                            </div>
                            <div className="text-gray-600 text-sm">
                              {currency.code} • {currency.symbol}
                            </div>
                          </div>
                          {onboardingForm.currency === currency.code && (
                            <CheckCircle className="w-6 h-6 text-yellow-600" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {errors.currency && (
                    <div className="flex items-center gap-2 mt-4 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.currency}
                    </div>
                  )}
                </div>

                {/* Info Box */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-100">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white font-bold text-sm">💡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow-900 mb-2">
                        Good to know:
                      </h3>
                      <p className="text-yellow-800 text-sm leading-relaxed">
                        You can change your currency anytime in settings.
                        Existing products will keep their current pricing until
                        you update them manually.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-gray-200">
              <button
                onClick={prevOnboardingStep}
                disabled={onboardingStep === 1}
                className="flex items-center gap-3 px-6 py-3 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-gray-100 rounded-xl"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back</span>
              </button>

              <button
                onClick={nextOnboardingStep}
                disabled={
                  isLoading ||
                  (onboardingStep === 1 && usernameStatus !== "available")
                }
                className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105"
              >
                {isLoading ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span>
                      {onboardingStep === 4 ? "Complete Setup" : "Continue"}
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Step Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <button
                key={index}
                onClick={() =>
                  onboardingStep > index + 1 && setOnboardingStep(index + 1)
                }
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  index + 1 < onboardingStep
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer hover:scale-125"
                    : index + 1 === onboardingStep
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125 shadow-lg shadow-purple-500/50"
                    : "bg-gray-300 cursor-default"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Completion Page
  const CompletionPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-green-500/30">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to CreatorHub! 🎉
        </h1>
        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
          Your account is all set up! You're ready to start building your
          creator empire and connecting with your audience.
        </p>

        {/* Profile Summary */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 mb-10">
          <h3 className="font-bold text-gray-900 mb-6 text-xl">
            Your Profile Summary
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-purple-600" />
                <span className="text-gray-600 font-medium">Username:</span>
              </div>
              <span className="font-bold text-gray-900">
                @{onboardingForm.username}
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-green-600" />
                <span className="text-gray-600 font-medium">Business:</span>
              </div>
              <span className="font-bold text-gray-900">
                {onboardingForm.businessName}
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Link className="w-5 h-5 text-pink-600" />
                <span className="text-gray-600 font-medium">Social:</span>
              </div>
              <div className="flex items-center gap-2">
                {(() => {
                  const platform = socialPlatforms.find(
                    (p) => p.id === onboardingForm.socialPlatform
                  );
                  const IconComponent = platform?.icon;
                  return (
                    <>
                      {IconComponent && (
                        <IconComponent className="w-4 h-4 text-gray-600" />
                      )}
                      <span className="font-bold text-gray-900">
                        {platform?.name}
                      </span>
                    </>
                  );
                })()}
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-yellow-600" />
                <span className="text-gray-600 font-medium">Currency:</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">
                  {
                    currencies.find((c) => c.code === onboardingForm.currency)
                      ?.flag
                  }
                </span>
                <span className="font-bold text-gray-900">
                  {
                    currencies.find((c) => c.code === onboardingForm.currency)
                      ?.name
                  }
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <button
          onClick={() => console.log("Navigate to dashboard", onboardingForm)}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/40 hover:scale-105"
        >
          <span>Enter Your Creator Studio</span>
          <ArrowRight className="w-6 h-6" />
        </button>

        {/* Additional Info */}
        <p className="text-gray-500 text-sm mt-6">
          You can update any of these settings later in your profile
        </p>
      </div>
    </div>
  );

  // Main render logic
  switch (currentView) {
    case "onboarding":
      return <OnboardingFlow />;
    case "complete":
      return <CompletionPage />;
    default:
      return <AuthenticationPage />;
  }
};

export default Auth;
