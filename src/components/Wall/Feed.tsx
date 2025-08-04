import {
  ArrowUp,
  Award,
  BarChart3,
  Bookmark,
  Calendar,
  Camera,
  CheckCircle,
  ChevronRight,
  Copy,
  Crown,
  Diamond,
  Eye,
  Flame,
  Folder,
  Heart,
  Lightbulb,
  Linkedin,
  MessageCircle,
  Play,
  Plus,
  Rocket,
  Send,
  Share2,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  ThumbsUp,
  TrendingUp,
  Twitter,
  User,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const Feed = () => {
  const [activeTab, setActiveTab] = useState("feed");
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [savedPosts, setSavedPosts] = useState(new Set());
  const [expandedComments, setExpandedComments] = useState(new Set());
  const [shareModal, setShareModal] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [activeStory, setActiveStory] = useState(null);

  // Mock creators data
  const creators = [
    {
      id: 1,
      name: "Alex Rivera",
      username: "alexcreates",
      avatar: null,
      isVerified: true,
      isFollowing: true,
      followers: 45200,
      specialty: "Digital Art",
      tier: "diamond",
      monthlyRevenue: 12500,
      hasStory: true,
      storyViewed: false,
    },
    {
      id: 2,
      name: "Sarah Chen",
      username: "sarahdesigns",
      avatar: null,
      isVerified: true,
      isFollowing: false,
      followers: 32800,
      specialty: "UI/UX Design",
      tier: "gold",
      monthlyRevenue: 8900,
      hasStory: true,
      storyViewed: true,
    },
    {
      id: 3,
      name: "Marcus Johnson",
      username: "marcuscode",
      avatar: null,
      isVerified: false,
      isFollowing: true,
      followers: 18500,
      specialty: "Web Development",
      tier: "silver",
      monthlyRevenue: 5200,
      hasStory: true,
      storyViewed: false,
    },
    {
      id: 4,
      name: "Emma Wilson",
      username: "emmawrites",
      avatar: null,
      isVerified: true,
      isFollowing: false,
      followers: 67300,
      specialty: "Content Writing",
      tier: "diamond",
      monthlyRevenue: 15600,
      hasStory: false,
      storyViewed: false,
    },
  ];

  // Mock stories data
  const stories = [
    {
      id: 1,
      creator: creators[0],
      type: "behind_scenes",
      title: "Creating Digital Magic",
      timestamp: "2h ago",
      viewed: false,
    },
    {
      id: 2,
      creator: creators[1],
      type: "product_preview",
      title: "New UI Kit Sneak Peek",
      timestamp: "4h ago",
      viewed: true,
    },
    {
      id: 3,
      creator: creators[2],
      type: "live_coding",
      title: "React Tips & Tricks",
      timestamp: "6h ago",
      viewed: false,
    },
  ];

  // Mock comments data
  const comments = {
    1: [
      {
        id: 1,
        user: { name: "John Doe", username: "johndoe", avatar: null },
        text: "This looks amazing! Can't wait to try it out 🔥",
        timestamp: "1h ago",
        likes: 12,
        replies: [
          {
            id: 2,
            user: {
              name: "Alex Rivera",
              username: "alexcreates",
              avatar: null,
            },
            text: "Thanks John! Hope you love it ❤️",
            timestamp: "45m ago",
            likes: 8,
          },
        ],
      },
      {
        id: 3,
        user: { name: "Sarah M", username: "sarahm", avatar: null },
        text: "Your brushes have completely transformed my workflow. Thank you!",
        timestamp: "2h ago",
        likes: 24,
        replies: [],
      },
    ],
    2: [
      {
        id: 4,
        user: { name: "Mike Chen", username: "mikedesign", avatar: null },
        text: "Love the color palette! What inspired this choice?",
        timestamp: "3h ago",
        likes: 18,
        replies: [],
      },
    ],
  };

  // Mock posts data with comments
  const [posts, setPosts] = useState([
    {
      id: 1,
      creator: creators[0],
      type: "product_launch",
      timestamp: "2 hours ago",
      content: {
        text: "🎉 Just launched my Digital Art Starter Kit! Complete bundle with 200+ brushes, textures, and templates. Limited time offer - 40% off for early supporters!",
        images: [null],
        product: {
          title: "Digital Art Starter Kit",
          price: 49,
          originalPrice: 79,
          rating: 4.8,
          sales: 1245,
          revenue: 61000,
        },
      },
      engagement: {
        likes: 342,
        comments: 28,
        shares: 15,
        saves: 67,
      },
      priority: "high",
      comments: comments[1] || [],
    },
    {
      id: 2,
      creator: creators[1],
      type: "update",
      timestamp: "4 hours ago",
      content: {
        text: "Behind the scenes of my latest UI design project. Sometimes the best designs come from the simplest ideas. What's your design philosophy?",
        images: [null, null, null],
        video: null,
      },
      engagement: {
        likes: 189,
        comments: 12,
        shares: 8,
        saves: 23,
      },
      priority: "medium",
      comments: comments[2] || [],
    },
    {
      id: 3,
      creator: creators[2],
      type: "event_announcement",
      timestamp: "6 hours ago",
      content: {
        text: "🚀 LIVE CODING SESSION THIS FRIDAY! Building a React app from scratch. Covering hooks, state management, and best practices.",
        images: [null],
        event: {
          title: "React Masterclass",
          date: "2025-08-05",
          time: "3:00 PM PST",
          price: 0,
          attendees: 156,
        },
      },
      engagement: {
        likes: 267,
        comments: 45,
        shares: 32,
        saves: 89,
      },
      priority: "high",
      comments: [],
    },
    {
      id: 4,
      creator: creators[3],
      type: "achievement",
      timestamp: "8 hours ago",
      content: {
        text: "🎊 Just hit 1,000 students in my copywriting course! Thank you all for trusting me with your learning journey.",
        images: [null],
        achievement: {
          milestone: "1,000 Students",
          course: "Master Copywriting Course",
        },
      },
      engagement: {
        likes: 445,
        comments: 67,
        shares: 28,
        saves: 134,
      },
      priority: "medium",
      comments: [],
    },
  ]);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const getTierConfig = (tier) => {
    switch (tier) {
      case "diamond":
        return {
          color: "from-purple-500 to-pink-500",
          icon: Diamond,
          border: "border-purple-300",
        };
      case "gold":
        return {
          color: "from-yellow-400 to-orange-500",
          icon: Crown,
          border: "border-yellow-300",
        };
      case "silver":
        return {
          color: "from-gray-400 to-gray-600",
          icon: Award,
          border: "border-gray-300",
        };
      default:
        return {
          color: "from-blue-400 to-blue-600",
          icon: User,
          border: "border-blue-300",
        };
    }
  };

  const handleLike = (postId) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
        setPosts((current) =>
          current.map((post) =>
            post.id === postId
              ? {
                  ...post,
                  engagement: {
                    ...post.engagement,
                    likes: post.engagement.likes - 1,
                  },
                }
              : post
          )
        );
      } else {
        newSet.add(postId);
        setPosts((current) =>
          current.map((post) =>
            post.id === postId
              ? {
                  ...post,
                  engagement: {
                    ...post.engagement,
                    likes: post.engagement.likes + 1,
                  },
                }
              : post
          )
        );
      }
      return newSet;
    });
  };

  const handleSave = (postId) => {
    setSavedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleShare = (postId) => {
    setShareModal(postId);
  };

  const handleComment = (postId) => {
    setExpandedComments((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleAddComment = (postId) => {
    if (newComment.trim()) {
      setPosts((current) =>
        current.map((post) =>
          post.id === postId
            ? {
                ...post,
                comments: [
                  ...post.comments,
                  {
                    id: Date.now(),
                    user: { name: "You", username: "you", avatar: null },
                    text: newComment,
                    timestamp: "Just now",
                    likes: 0,
                    replies: [],
                  },
                ],
                engagement: {
                  ...post.engagement,
                  comments: post.engagement.comments + 1,
                },
              }
            : post
        )
      );
      setNewComment("");
    }
  };

  const getPostTypeConfig = (type) => {
    switch (type) {
      case "product_launch":
        return {
          icon: Rocket,
          color: "text-purple-600",
          bg: "bg-purple-50",
          border: "border-purple-200",
          label: "Product Launch",
        };
      case "event_announcement":
        return {
          icon: Zap,
          color: "text-blue-600",
          bg: "bg-blue-50",
          border: "border-blue-200",
          label: "Event",
        };
      case "course_update":
        return {
          icon: Lightbulb,
          color: "text-green-600",
          bg: "bg-green-50",
          border: "border-green-200",
          label: "Course Update",
        };
      case "achievement":
        return {
          icon: Target,
          color: "text-orange-600",
          bg: "bg-orange-50",
          border: "border-orange-200",
          label: "Milestone",
        };
      case "tutorial":
        return {
          icon: Play,
          color: "text-red-600",
          bg: "bg-red-50",
          border: "border-red-200",
          label: "Tutorial",
        };
      default:
        return {
          icon: Camera,
          color: "text-gray-600",
          bg: "bg-gray-50",
          border: "border-gray-200",
          label: "Update",
        };
    }
  };

  const ShareModal = ({ postId, onClose }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Share Post</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center gap-4 p-4 hover:bg-blue-50 rounded-2xl transition-colors group">
            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
              <Twitter className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                Share on Twitter
              </h4>
              <p className="text-sm text-gray-600">Share with your followers</p>
            </div>
          </button>

          <button className="w-full flex items-center gap-4 p-4 hover:bg-blue-50 rounded-2xl transition-colors group">
            <div className="w-12 h-12 bg-blue-700 rounded-2xl flex items-center justify-center">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                Share on LinkedIn
              </h4>
              <p className="text-sm text-gray-600">Share with professionals</p>
            </div>
          </button>

          <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-colors group">
            <div className="w-12 h-12 bg-gray-600 rounded-2xl flex items-center justify-center">
              <Copy className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-semibold text-gray-900 group-hover:text-gray-600">
                Copy Link
              </h4>
              <p className="text-sm text-gray-600">Copy link to clipboard</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  const CommentSection = ({ post }) => (
    <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-gray-900">
          Comments ({post.engagement.comments})
        </h4>
        <button
          onClick={() => handleComment(post.id)}
          className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
        >
          {expandedComments.has(post.id) ? "Hide" : "Show all"}
        </button>
      </div>

      {post.comments
        .slice(0, expandedComments.has(post.id) ? post.comments.length : 2)
        .map((comment) => (
          <div key={comment.id} className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {getInitials(comment.user.name)}
                </span>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h5 className="font-semibold text-gray-900 text-sm">
                      {comment.user.name}
                    </h5>
                    <span className="text-xs text-gray-500">
                      @{comment.user.username}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">
                      {comment.timestamp}
                    </span>
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {comment.text}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-2 ml-4">
                  <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500 transition-colors">
                    <ThumbsUp className="w-3 h-3" />
                    {comment.likes}
                  </button>
                  <button className="text-xs text-gray-500 hover:text-blue-500 transition-colors">
                    Reply
                  </button>
                </div>

                {comment.replies &&
                  comment.replies.map((reply) => (
                    <div
                      key={reply.id}
                      className="flex items-start gap-3 mt-3 ml-6"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">
                          {getInitials(reply.user.name)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="bg-white rounded-xl p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <h6 className="font-semibold text-gray-900 text-xs">
                              {reply.user.name}
                            </h6>
                            <span className="text-xs text-gray-500">
                              {reply.timestamp}
                            </span>
                          </div>
                          <p className="text-gray-800 text-xs leading-relaxed">
                            {reply.text}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 mt-1 ml-3">
                          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500 transition-colors">
                            <ThumbsUp className="w-3 h-3" />
                            {reply.likes}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}

      <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-sm">YO</span>
        </div>
        <div className="flex-1 flex items-center gap-2">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 bg-white border border-gray-200 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            onKeyPress={(e) => e.key === "Enter" && handleAddComment(post.id)}
          />
          <button
            onClick={() => handleAddComment(post.id)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-xl hover:scale-105 transition-transform"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const StoriesSection = () => (
    <div className="bg-white rounded-3xl border-2 border-gray-200 p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
          <Eye className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">Creator Stories</h3>
      </div>

      <div className="flex items-center gap-6 overflow-x-auto pb-2">
        {/* Add your story */}
        <div className="flex flex-col items-center gap-3 min-w-fit cursor-pointer group">
          <div className="w-20 h-20 border-3 border-dashed border-gray-300 rounded-3xl flex items-center justify-center group-hover:border-purple-400 transition-colors">
            <Plus className="w-8 h-8 text-gray-400 group-hover:text-purple-500" />
          </div>
          <span className="text-sm text-gray-600 font-medium">Add Story</span>
        </div>

        {/* Creator stories */}
        {stories.map((story) => {
          const tierConfig = getTierConfig(story.creator.tier);
          return (
            <div
              key={story.id}
              className="flex flex-col items-center gap-3 min-w-fit cursor-pointer group"
            >
              <div
                className={`w-22 h-22 p-1 rounded-3xl ${
                  story.viewed
                    ? "bg-gray-200"
                    : `bg-gradient-to-br ${tierConfig.color}`
                }`}
              >
                <div className="w-full h-full rounded-3xl bg-white p-1">
                  <div
                    className={`w-full h-full rounded-2xl bg-gradient-to-br ${tierConfig.color} flex items-center justify-center group-hover:scale-105 transition-transform relative overflow-hidden`}
                  >
                    <span className="text-white font-bold text-lg">
                      {getInitials(story.creator.name)}
                    </span>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-900">
                  {story.creator.username}
                </p>
                <p className="text-xs text-gray-500">{story.timestamp}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const CreatorCard = ({ creator, compact = false }) => {
    const tierConfig = getTierConfig(creator.tier);
    const TierIcon = tierConfig.icon;

    return (
      <div
        className={`group bg-white rounded-2xl border-2 ${
          tierConfig.border
        } hover:shadow-xl transition-all duration-300 ${
          compact ? "p-4" : "p-6"
        } relative overflow-hidden`}
      >
        <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
          <div
            className={`w-full h-full bg-gradient-to-br ${tierConfig.color} rounded-bl-full`}
          ></div>
        </div>

        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-${compact ? "12" : "16"} h-${
                  compact ? "12" : "16"
                } bg-gradient-to-br ${
                  tierConfig.color
                } rounded-2xl flex items-center justify-center relative`}
              >
                <span className="text-white font-bold text-lg">
                  {getInitials(creator.name)}
                </span>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <TierIcon
                    className={`w-3 h-3 ${
                      tierConfig.color.includes("purple")
                        ? "text-purple-600"
                        : tierConfig.color.includes("yellow")
                        ? "text-orange-500"
                        : "text-gray-600"
                    }`}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3
                    className={`font-bold text-gray-900 ${
                      compact ? "text-sm" : "text-lg"
                    }`}
                  >
                    {creator.name}
                  </h3>
                  {creator.isVerified && (
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                  )}
                </div>
                <p
                  className={`text-gray-600 ${compact ? "text-xs" : "text-sm"}`}
                >
                  @{creator.username}
                </p>
                <p
                  className={`text-gray-500 ${
                    compact ? "text-xs" : "text-sm"
                  } font-medium`}
                >
                  {creator.specialty}
                </p>
              </div>
            </div>

            {!compact && (
              <div className="text-right">
                <p className="text-sm text-gray-500">Monthly Revenue</p>
                <p className="text-lg font-bold text-green-600">
                  ${formatNumber(creator.monthlyRevenue)}
                </p>
              </div>
            )}
          </div>

          <div className={`grid grid-cols-${compact ? "2" : "3"} gap-4 mb-4`}>
            <div className="text-center">
              <div
                className={`${
                  compact ? "text-lg" : "text-2xl"
                } font-bold text-gray-900`}
              >
                {formatNumber(creator.followers)}
              </div>
              <div
                className={`${compact ? "text-xs" : "text-sm"} text-gray-600`}
              >
                Followers
              </div>
            </div>
            {!compact && (
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {creator.tier}
                </div>
                <div className="text-sm text-gray-600 capitalize">Tier</div>
              </div>
            )}
            <div className="text-center">
              <div
                className={`${
                  compact ? "text-lg" : "text-2xl"
                } font-bold text-purple-600`}
              >
                4.9
              </div>
              <div
                className={`${compact ? "text-xs" : "text-sm"} text-gray-600`}
              >
                Rating
              </div>
            </div>
          </div>

          <button
            className={`w-full ${
              creator.isFollowing
                ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                : `bg-gradient-to-r ${tierConfig.color} text-white hover:opacity-90`
            } ${
              compact ? "py-2 text-sm" : "py-3"
            } rounded-xl font-semibold transition-all duration-300 group-hover:scale-[1.02]`}
          >
            {creator.isFollowing ? "Following" : "Follow Creator"}
          </button>
        </div>
      </div>
    );
  };

  const ActivityCard = ({ post }) => {
    const typeConfig = getPostTypeConfig(post.type);
    const TypeIcon = typeConfig.icon;
    const showComments = expandedComments.has(post.id);

    return (
      <div
        className={`bg-white rounded-3xl border-2 ${typeConfig.border} hover:shadow-2xl transition-all duration-500 overflow-hidden group relative`}
      >
        {/* Priority indicator */}
        {post.priority === "high" && (
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Flame className="w-3 h-3" />
              HOT
            </div>
          </div>
        )}

        {/* Header */}
        <div className={`${typeConfig.bg} p-6 border-b-2 ${typeConfig.border}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CreatorCard creator={post.creator} compact={true} />
            </div>

            <div className="flex items-center gap-3">
              <div
                className={`${typeConfig.bg} px-4 py-2 rounded-full border ${typeConfig.border}`}
              >
                <div className="flex items-center gap-2">
                  <TypeIcon className={`w-4 h-4 ${typeConfig.color}`} />
                  <span className={`text-sm font-semibold ${typeConfig.color}`}>
                    {typeConfig.label}
                  </span>
                </div>
              </div>
              <span className="text-sm text-gray-500">{post.timestamp}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-900 leading-relaxed mb-6 text-lg">
            {post.content.text}
          </p>

          {/* Media Grid */}
          {post.content.images && (
            <div
              className={`grid gap-3 mb-6 ${
                post.content.images.length === 1
                  ? "grid-cols-1"
                  : post.content.images.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-2"
              }`}
            >
              {post.content.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                >
                  <Camera className="w-12 h-12 text-gray-400" />
                </div>
              ))}
            </div>
          )}

          {/* Product Showcase */}
          {post.content.product && (
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-2xl p-6 border-2 border-purple-200 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <ShoppingCart className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {post.content.product.title}
                  </h4>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${post.content.product.price}
                      </span>
                      {post.content.product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          ${post.content.product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">
                        {post.content.product.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{formatNumber(post.content.product.sales)} sold</span>
                    <span>•</span>
                    <span className="text-green-600 font-semibold">
                      ${formatNumber(post.content.product.revenue)} revenue
                    </span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
                  View Product
                </button>
              </div>
            </div>
          )}

          {/* Event Showcase */}
          {post.content.event && (
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 rounded-2xl p-6 border-2 border-blue-200 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {post.content.event.title}
                  </h4>
                  <div className="flex items-center gap-4 text-gray-600 mb-2">
                    <span className="font-semibold">
                      {post.content.event.date}
                    </span>
                    <span>•</span>
                    <span>{post.content.event.time}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-gray-900">
                      {post.content.event.price === 0
                        ? "FREE"
                        : `$${post.content.event.price}`}
                    </span>
                    <span className="text-sm text-gray-600">
                      {post.content.event.attendees} registered
                    </span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
                  Join Event
                </button>
              </div>
            </div>
          )}

          {/* Achievement Badge */}
          {post.content.achievement && (
            <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-orange-200 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    🎉 Achievement Unlocked!
                  </h4>
                  <p className="text-2xl font-bold text-orange-600">
                    {post.content.achievement.milestone}
                  </p>
                  <p className="text-gray-600">
                    {post.content.achievement.course}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Engagement Bar */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button
                onClick={() => handleLike(post.id)}
                className="flex items-center gap-2 group"
              >
                <div
                  className={`p-2 rounded-xl transition-all duration-200 ${
                    likedPosts.has(post.id)
                      ? "bg-red-100 text-red-500"
                      : "bg-white text-gray-600 group-hover:bg-red-50 group-hover:text-red-500"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      likedPosts.has(post.id) ? "fill-current" : ""
                    }`}
                  />
                </div>
                <span
                  className={`font-semibold ${
                    likedPosts.has(post.id) ? "text-red-500" : "text-gray-600"
                  }`}
                >
                  {formatNumber(post.engagement.likes)}
                </span>
              </button>

              <button
                onClick={() => handleComment(post.id)}
                className="flex items-center gap-2 group"
              >
                <div className="p-2 rounded-xl bg-white text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-500 transition-all duration-200">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="font-semibold text-gray-600 group-hover:text-blue-500">
                  {formatNumber(post.engagement.comments)}
                </span>
              </button>

              <button
                onClick={() => handleShare(post.id)}
                className="flex items-center gap-2 group"
              >
                <div className="p-2 rounded-xl bg-white text-gray-600 group-hover:bg-green-50 group-hover:text-green-500 transition-all duration-200">
                  <Share2 className="w-5 h-5" />
                </div>
                <span className="font-semibold text-gray-600 group-hover:text-green-500">
                  {formatNumber(post.engagement.shares)}
                </span>
              </button>
            </div>

            <button onClick={() => handleSave(post.id)} className="group">
              <div
                className={`p-2 rounded-xl transition-all duration-200 ${
                  savedPosts.has(post.id)
                    ? "bg-blue-100 text-blue-500"
                    : "bg-white text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-500"
                }`}
              >
                <Bookmark
                  className={`w-5 h-5 ${
                    savedPosts.has(post.id) ? "fill-current" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="border-t border-gray-200">
            <CommentSection post={post} />
          </div>
        )}
      </div>
    );
  };

  const TrendingSection = () => (
    <div className="bg-white rounded-2xl border-2 border-orange-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">What's Trending</h3>
      </div>
      <div className="space-y-4">
        {[
          { tag: "DigitalArt", posts: "1.2K", growth: "+23%" },
          { tag: "CreatorEconomy", posts: "856", growth: "+18%" },
          { tag: "OnlineCourses", posts: "634", growth: "+15%" },
          { tag: "Freelancing", posts: "423", growth: "+12%" },
          { tag: "WebDesign", posts: "267", growth: "+8%" },
        ].map((trend, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer group"
          >
            <div>
              <p className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                #{trend.tag}
              </p>
              <p className="text-sm text-gray-600">{trend.posts} posts</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-green-600">
                {trend.growth}
              </span>
              <ArrowUp className="w-4 h-4 text-green-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const StatsPanel = () => (
    <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-2xl p-6 text-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold">Community Stats</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <div className="text-2xl font-bold mb-1">2,847</div>
          <div className="text-sm opacity-80">Active Creators</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <div className="text-2xl font-bold mb-1">$2.8M</div>
          <div className="text-sm opacity-80">Total Sales</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <div className="text-2xl font-bold mb-1">12.4K</div>
          <div className="text-sm opacity-80">Products</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <div className="text-2xl font-bold text-green-300 mb-1">+23.5%</div>
          <div className="text-sm opacity-80">Growth</div>
        </div>
      </div>

      <button className="w-full mt-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]">
        View Analytics
      </button>
    </div>
  );

  const SavedPostsPanel = () => (
    <div className="bg-white rounded-2xl border-2 border-blue-200 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
          <Bookmark className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">Saved Posts</h3>
      </div>
      <div className="text-center py-4">
        <Folder className="w-12 h-12 text-gray-400 mx-auto mb-3" />
        <p className="text-sm text-gray-600 mb-2">
          {savedPosts.size > 0
            ? `${savedPosts.size} saved posts`
            : "No saved posts yet"}
        </p>
        {savedPosts.size > 0 && (
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All Saved
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Share Modal */}
      {shareModal && (
        <ShareModal postId={shareModal} onClose={() => setShareModal(null)} />
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {activeTab === "feed" && (
              <>
                <StoriesSection />
                {posts.map((post) => (
                  <ActivityCard key={post.id} post={post} />
                ))}
              </>
            )}

            {activeTab === "discover" && (
              <>
                {/* Featured Creators Grid */}
                <div className="bg-white rounded-3xl border-2 border-purple-200 p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                      <Crown className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Top Creators
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {creators.map((creator) => (
                      <CreatorCard key={creator.id} creator={creator} />
                    ))}
                  </div>
                </div>

                {/* Top Products */}
                <div className="bg-white rounded-3xl border-2 border-green-200 p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Trending Products
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {posts
                      .filter((p) => p.content.product)
                      .map((post) => (
                        <div
                          key={post.id}
                          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                        >
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                              <ShoppingCart className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                                {post.content.product.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                by @{post.creator.username}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-gray-900">
                              ${post.content.product.price}
                            </span>
                            <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-semibold text-gray-700">
                                {post.content.product.rating}
                              </span>
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t border-green-200">
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <span>
                                {formatNumber(post.content.product.sales)} sold
                              </span>
                              <span className="text-green-600 font-semibold">
                                ${formatNumber(post.content.product.revenue)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <SavedPostsPanel />
            <TrendingSection />
            <StatsPanel />

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-xl transition-all duration-300 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Plus className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    Create Post
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-purple-600 transition-colors" />
                </button>

                <button className="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-xl transition-all duration-300 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    Launch Product
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-green-600 transition-colors" />
                </button>

                <button className="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl transition-all duration-300 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Create Event
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-blue-600 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
