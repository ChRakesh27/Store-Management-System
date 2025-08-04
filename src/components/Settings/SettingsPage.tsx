import {
  AlertTriangle,
  Bell,
  Camera,
  Check,
  ChevronRight,
  CreditCard,
  Crown,
  Download,
  Eye,
  EyeOff,
  Globe,
  Key,
  Link,
  Mail,
  MapPin,
  Monitor,
  Moon,
  MoreVertical,
  Phone,
  Save,
  Settings,
  Share2,
  Shield,
  Smartphone,
  Sun,
  Upload,
  User,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: true,
    newOrders: true,
    courseUpdates: true,
    eventReminders: true,
  });
  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    showEarnings: false,
    showFollowers: true,
    allowMessages: true,
  });
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  const settingsTabs = [
    {
      id: "profile",
      name: "Profile",
      icon: User,
      color: "from-purple-500 to-pink-500",
      description: "Manage your profile information",
    },
    {
      id: "account",
      name: "Account",
      icon: Settings,
      color: "from-blue-500 to-purple-500",
      description: "Account preferences and settings",
    },
    {
      id: "notifications",
      name: "Notifications",
      icon: Bell,
      color: "from-green-500 to-emerald-500",
      description: "Configure notification preferences",
    },
    {
      id: "privacy",
      name: "Privacy",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      description: "Privacy and visibility settings",
    },
    {
      id: "billing",
      name: "Billing",
      icon: CreditCard,
      color: "from-teal-500 to-cyan-500",
      description: "Payment methods and billing",
    },
    {
      id: "security",
      name: "Security",
      icon: Key,
      color: "from-red-500 to-pink-500",
      description: "Security and authentication",
    },
    {
      id: "integrations",
      name: "Integrations",
      icon: Zap,
      color: "from-indigo-500 to-purple-500",
      description: "Connect external services",
    },
  ];

  const ToggleSwitch = ({ checked, onChange, size = "default" }) => {
    const sizeClasses = size === "small" ? "w-8 h-4" : "w-11 h-6";
    const thumbClasses = size === "small" ? "w-3 h-3" : "w-5 h-5";

    return (
      <button
        onClick={() => onChange(!checked)}
        className={`${sizeClasses} ${
          checked ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
      >
        <span
          className={`${thumbClasses} ${
            checked
              ? size === "small"
                ? "translate-x-4"
                : "translate-x-5"
              : "translate-x-0.5"
          } inline-block transform rounded-full bg-white shadow-lg transition-transform`}
        />
      </button>
    );
  };

  const ProfileSettings = () => (
    <div className="space-y-8">
      {/* Profile Picture */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Profile Picture
        </h3>
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
              AC
            </div>
            <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors shadow-lg">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 mb-2">
              Update your profile picture
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Choose a photo that represents you well. This will be visible
              across your creator profile.
            </p>
            <div className="flex gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Upload New
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Information */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Basic Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Alex Rivera"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Username
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                @
              </span>
              <input
                type="text"
                defaultValue="alexcreates"
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              rows="4"
              defaultValue="Digital artist & educator helping creatives build their online presence. Teaching design, business, and creativity to 50k+ students worldwide."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Contact Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="email"
                defaultValue="alex@alexcreates.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone
            </label>
            <div className="relative">
              <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location
            </label>
            <div className="relative">
              <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                defaultValue="San Francisco, CA"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Website
            </label>
            <div className="relative">
              <Link className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="url"
                defaultValue="https://alexcreates.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AccountSettings = () => (
    <div className="space-y-8">
      {/* Theme Preferences */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Appearance</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              Theme
            </label>
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  id: "light",
                  name: "Light",
                  icon: Sun,
                  desc: "Clean and bright",
                },
                {
                  id: "dark",
                  name: "Dark",
                  icon: Moon,
                  desc: "Easy on the eyes",
                },
                {
                  id: "auto",
                  name: "Auto",
                  icon: Monitor,
                  desc: "Matches system",
                },
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setTheme(option.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    theme === option.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <option.icon
                    className={`w-6 h-6 mx-auto mb-2 ${
                      theme === option.id ? "text-blue-600" : "text-gray-400"
                    }`}
                  />
                  <div className="text-sm font-medium text-gray-900">
                    {option.name}
                  </div>
                  <div className="text-xs text-gray-500">{option.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full md:w-64 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="ja">日本語</option>
            </select>
          </div>
        </div>
      </div>

      {/* Account Status */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Account Status</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Creator Pro</div>
                <div className="text-sm text-gray-600">
                  Access to all premium features
                </div>
              </div>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Manage Plan
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-gray-900">2.5K</div>
              <div className="text-sm text-gray-600">Total Students</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-gray-900">$125K</div>
              <div className="text-sm text-gray-600">Total Earnings</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-gray-900">4.9</div>
              <div className="text-sm text-gray-600">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-2xl p-8 border border-red-200">
        <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          Danger Zone
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
            <div>
              <div className="font-semibold text-red-900">
                Deactivate Account
              </div>
              <div className="text-sm text-red-700">
                Temporarily disable your creator profile
              </div>
            </div>
            <button className="border border-red-300 text-red-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors">
              Deactivate
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
            <div>
              <div className="font-semibold text-red-900">Delete Account</div>
              <div className="text-sm text-red-700">
                Permanently delete your account and all data
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const NotificationSettings = () => (
    <div className="space-y-8">
      {/* Email Notifications */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Email Notifications
        </h3>
        <div className="space-y-6">
          {[
            {
              key: "newOrders",
              label: "New Orders",
              desc: "When someone purchases your products",
            },
            {
              key: "courseUpdates",
              label: "Course Updates",
              desc: "Student progress and completions",
            },
            {
              key: "eventReminders",
              label: "Event Reminders",
              desc: "Upcoming events and deadlines",
            },
            {
              key: "marketing",
              label: "Marketing Emails",
              desc: "Tips, updates, and new features",
            },
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0"
            >
              <div>
                <div className="font-medium text-gray-900">{item.label}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
              <ToggleSwitch
                checked={notifications[item.key]}
                onChange={(checked) =>
                  setNotifications((prev) => ({ ...prev, [item.key]: checked }))
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Push Notifications */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Push Notifications
        </h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-gray-400" />
              <div>
                <div className="font-medium text-gray-900">Mobile Push</div>
                <div className="text-sm text-gray-600">
                  Notifications on your mobile device
                </div>
              </div>
            </div>
            <ToggleSwitch
              checked={notifications.push}
              onChange={(checked) =>
                setNotifications((prev) => ({ ...prev, push: checked }))
              }
            />
          </div>

          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Monitor className="w-5 h-5 text-gray-400" />
              <div>
                <div className="font-medium text-gray-900">Desktop Push</div>
                <div className="text-sm text-gray-600">
                  Browser notifications on desktop
                </div>
              </div>
            </div>
            <ToggleSwitch
              checked={notifications.push}
              onChange={(checked) =>
                setNotifications((prev) => ({ ...prev, push: checked }))
              }
            />
          </div>
        </div>
      </div>

      {/* SMS Notifications */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          SMS Notifications
        </h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between py-4">
            <div>
              <div className="font-medium text-gray-900">Text Messages</div>
              <div className="text-sm text-gray-600">
                Important updates via SMS
              </div>
            </div>
            <ToggleSwitch
              checked={notifications.sms}
              onChange={(checked) =>
                setNotifications((prev) => ({ ...prev, sms: checked }))
              }
            />
          </div>

          {notifications.sms && (
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800 mb-3">
                Enter your phone number to receive SMS notifications:
              </p>
              <div className="relative">
                <Phone className="w-5 h-5 text-blue-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const PrivacySettings = () => (
    <div className="space-y-8">
      {/* Profile Visibility */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Profile Visibility
        </h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              Who can see your profile?
            </label>
            <div className="space-y-3">
              {[
                {
                  value: "public",
                  label: "Public",
                  desc: "Anyone can view your profile",
                },
                {
                  value: "students",
                  label: "Students Only",
                  desc: "Only your students can view your profile",
                },
                {
                  value: "private",
                  label: "Private",
                  desc: "Only you can view your profile",
                },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="profileVisibility"
                    value={option.value}
                    checked={privacy.profileVisibility === option.value}
                    onChange={(e) =>
                      setPrivacy((prev) => ({
                        ...prev,
                        profileVisibility: e.target.value,
                      }))
                    }
                    className="w-4 h-4 text-blue-600"
                  />
                  <div>
                    <div className="font-medium text-gray-900">
                      {option.label}
                    </div>
                    <div className="text-sm text-gray-600">{option.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Data Sharing */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Data Sharing</h3>
        <div className="space-y-6">
          {[
            {
              key: "showEarnings",
              label: "Show Earnings",
              desc: "Display your total earnings publicly",
            },
            {
              key: "showFollowers",
              label: "Show Followers",
              desc: "Display your follower count",
            },
            {
              key: "allowMessages",
              label: "Allow Messages",
              desc: "Let others send you direct messages",
            },
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0"
            >
              <div>
                <div className="font-medium text-gray-900">{item.label}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
              <ToggleSwitch
                checked={privacy[item.key]}
                onChange={(checked) =>
                  setPrivacy((prev) => ({ ...prev, [item.key]: checked }))
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Data Download */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Data Management
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-medium text-gray-900">
                  Download Your Data
                </div>
                <div className="text-sm text-gray-600">
                  Get a copy of all your data
                </div>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Download
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
            <div className="flex items-center gap-3">
              <Share2 className="w-5 h-5 text-green-600" />
              <div>
                <div className="font-medium text-gray-900">Export Content</div>
                <div className="text-sm text-gray-600">
                  Export your courses and content
                </div>
              </div>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const BillingSettings = () => (
    <div className="space-y-8">
      {/* Current Plan */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Current Plan</h3>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">
                  Creator Pro
                </div>
                <div className="text-sm text-gray-600">
                  All features included
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">$29</div>
              <div className="text-sm text-gray-600">per month</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">Unlimited</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">5%</div>
              <div className="text-sm text-gray-600">Transaction Fee</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">Advanced</div>
              <div className="text-sm text-gray-600">Analytics</div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Upgrade Plan
            </button>
            <button className="border border-purple-300 text-purple-700 px-6 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors">
              Change Plan
            </button>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Payment Methods</h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Add Method
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded flex items-center justify-center text-white text-xs font-bold">
                VISA
              </div>
              <div>
                <div className="font-medium text-gray-900">
                  •••• •••• •••• 4242
                </div>
                <div className="text-sm text-gray-600">Expires 12/26</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                Default
              </span>
              <button className="text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center text-white text-xs font-bold">
                MC
              </div>
              <div>
                <div className="font-medium text-gray-900">
                  •••• •••• •••• 8888
                </div>
                <div className="text-sm text-gray-600">Expires 08/25</div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Billing History
        </h3>
        <div className="space-y-4">
          {[
            {
              date: "2025-08-01",
              amount: "$29.00",
              status: "Paid",
              description: "Creator Pro Monthly",
            },
            {
              date: "2025-07-01",
              amount: "$29.00",
              status: "Paid",
              description: "Creator Pro Monthly",
            },
            {
              date: "2025-06-01",
              amount: "$29.00",
              status: "Paid",
              description: "Creator Pro Monthly",
            },
          ].map((invoice, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    {invoice.description}
                  </div>
                  <div className="text-sm text-gray-600">{invoice.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-900">
                  {invoice.amount}
                </span>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SecuritySettings = () => (
    <div className="space-y-8">
      {/* Password Settings */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Password & Authentication
        </h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                placeholder="Enter current password"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                New Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="New password"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Confirm password"
              />
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Update Password
          </button>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Two-Factor Authentication
        </h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">
                  Two-Factor Authentication
                </div>
                <div className="text-sm text-gray-600">
                  Add an extra layer of security
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                Enabled
              </span>
              <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                Configure
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Smartphone className="w-5 h-5 text-blue-600" />
                <div className="font-medium text-gray-900">
                  SMS Authentication
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Receive codes via text message
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Setup SMS
              </button>
            </div>

            <div className="p-4 border border-gray-200 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Key className="w-5 h-5 text-purple-600" />
                <div className="font-medium text-gray-900">
                  Authenticator App
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Use Google Authenticator or similar
              </p>
              <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                Setup App
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Login Sessions */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Active Sessions
        </h3>
        <div className="space-y-4">
          {[
            {
              device: "MacBook Pro",
              location: "San Francisco, CA",
              current: true,
              time: "Now",
            },
            {
              device: "iPhone 15",
              location: "San Francisco, CA",
              current: false,
              time: "2 hours ago",
            },
            {
              device: "Chrome Browser",
              location: "San Francisco, CA",
              current: false,
              time: "1 day ago",
            },
          ].map((session, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 flex items-center gap-2">
                    {session.device}
                    {session.current && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">
                    {session.location} • {session.time}
                  </div>
                </div>
              </div>
              {!session.current && (
                <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                  Revoke
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const IntegrationsSettings = () => (
    <div className="space-y-8">
      {/* Connected Apps */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Connected Applications
        </h3>
        <div className="space-y-4">
          {[
            {
              name: "Google Analytics",
              desc: "Track your website performance",
              connected: true,
              color: "orange",
            },
            {
              name: "Mailchimp",
              desc: "Email marketing automation",
              connected: true,
              color: "yellow",
            },
            {
              name: "Stripe",
              desc: "Payment processing",
              connected: true,
              color: "purple",
            },
            {
              name: "Zapier",
              desc: "Workflow automation",
              connected: false,
              color: "orange",
            },
            {
              name: "Slack",
              desc: "Team communication",
              connected: false,
              color: "purple",
            },
          ].map((app, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br from-${app.color}-400 to-${app.color}-500 rounded-xl flex items-center justify-center`}
                >
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{app.name}</div>
                  <div className="text-sm text-gray-600">{app.desc}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {app.connected ? (
                  <>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      Connected
                    </span>
                    <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                      Disconnect
                    </button>
                  </>
                ) : (
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Connect
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* API Settings */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">API Access</h3>
        <div className="space-y-6">
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <Key className="w-5 h-5 text-blue-600" />
              <div className="font-medium text-gray-900">
                API Key Management
              </div>
            </div>
            <p className="text-sm text-blue-800 mb-4">
              Generate API keys to integrate your creator platform with external
              applications.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Generate New Key
            </button>
          </div>

          <div className="space-y-3">
            {[
              {
                name: "Production Key",
                created: "2025-07-15",
                lastUsed: "2 hours ago",
              },
              {
                name: "Development Key",
                created: "2025-07-01",
                lastUsed: "1 week ago",
              },
            ].map((key, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-xl"
              >
                <div>
                  <div className="font-medium text-gray-900">{key.name}</div>
                  <div className="text-sm text-gray-600">
                    Created {key.created} • Last used {key.lastUsed}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-gray-500 hover:text-gray-700 text-sm font-medium">
                    View
                  </button>
                  <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                    Revoke
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Webhooks */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Webhooks</h3>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Add Webhook
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
            <div>
              <div className="font-medium text-gray-900">
                Order Notifications
              </div>
              <div className="text-sm text-gray-600">
                https://api.example.com/webhooks/orders
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                Active
              </span>
              <button className="text-gray-500 hover:text-gray-700">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="text-center py-8 text-gray-500">
            <Globe className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No additional webhooks configured</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSettings />;
      case "account":
        return <AccountSettings />;
      case "notifications":
        return <NotificationSettings />;
      case "privacy":
        return <PrivacySettings />;
      case "billing":
        return <BillingSettings />;
      case "security":
        return <SecuritySettings />;
      case "integrations":
        return <IntegrationsSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
              <p className="text-gray-600 mt-1">
                Manage your account preferences and configurations
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 p-2">
              <nav className="space-y-1">
                {settingsTabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        activeTab === tab.id
                          ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          activeTab === tab.id
                            ? "bg-white/20 backdrop-blur-sm"
                            : "bg-gray-100"
                        }`}
                      >
                        <IconComponent
                          className={`w-5 h-5 ${
                            activeTab === tab.id
                              ? "text-white"
                              : "text-gray-600"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <div
                          className={`font-semibold ${
                            activeTab === tab.id
                              ? "text-white"
                              : "text-gray-900"
                          }`}
                        >
                          {tab.name}
                        </div>
                        <div
                          className={`text-sm ${
                            activeTab === tab.id
                              ? "text-white/80"
                              : "text-gray-500"
                          }`}
                        >
                          {tab.description}
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 ${
                          activeTab === tab.id
                            ? "text-white/60"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
