import {
  Brain,
  Timer,
  BarChart3,
  Shield,
  Sparkles,
  Moon,
  Bell,
  Eye,
  Briefcase,
  GraduationCap,
  Dumbbell,
  HeartPulse,
  Cpu,
  Layers,
  TrendingUp,
  Target,
  Star,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// FEATURES
// ─────────────────────────────────────────────────────────────────────────────
export interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
  accent: string;
}

export const FEATURES: Feature[] = [
  {
    icon: Brain,
    title: "Neural Focus Engine",
    desc: "AI analyzes your cognitive patterns in real-time and creates personalized focus sessions that match your brain's natural rhythm.",
    accent: "#6C3BFF",
  },
  {
    icon: Timer,
    title: "Smart Pomodoro+",
    desc: "Adaptive work-break cycles that dynamically adjust based on your energy levels, task complexity, and historical performance data.",
    accent: "#00D4C8",
  },
  {
    icon: BarChart3,
    title: "Productivity Analytics",
    desc: "Deep-dive dashboards reveal your peak performance windows, distraction triggers, and long-term productivity trends.",
    accent: "#6C3BFF",
  },
  {
    icon: Shield,
    title: "Distraction Blocker",
    desc: "Intelligent app & website blocking powered by context-awareness — automatically activates only when you're in deep work mode.",
    accent: "#00D4C8",
  },
  {
    icon: Sparkles,
    title: "AI Habit Coaching",
    desc: "Your personal AI coach analyzes behavior patterns and delivers personalized nudges to build habits that stick.",
    accent: "#6C3BFF",
  },
  {
    icon: Moon,
    title: "Sleep & Recovery Mode",
    desc: "Tracks sleep quality correlation with focus scores. Recommends optimal wind-down routines and wake-up windows.",
    accent: "#00D4C8",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    desc: "Context-aware notification scheduling that interrupts only at natural break points, not mid-flow.",
    accent: "#6C3BFF",
  },
  {
    icon: Eye,
    title: "Focus Heatmap",
    desc: "Visualize your daily productivity journey with beautiful heatmaps. Spot your golden hours at a glance.",
    accent: "#00D4C8",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// USE CASES
// ─────────────────────────────────────────────────────────────────────────────
export interface UseCase {
  id: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  desc: string;
  points: string[];
  stat: string;
  statLabel: string;
}

export const USE_CASES: UseCase[] = [
  {
    id: "professionals",
    label: "Professionals",
    icon: Briefcase,
    headline: "Dominate Your Workday",
    desc: "NeuroTrack is your unfair advantage at work. Identify your peak focus windows, eliminate context-switching, and ship high-quality work consistently.",
    points: [
      "Deep work mode for distraction-free sprints",
      "Meeting prep reminders & energy forecasting",
      "Email & task batching recommendations",
      "Weekly executive performance reports",
    ],
    stat: "3.4×",
    statLabel: "more deep work hours",
  },
  {
    id: "students",
    label: "Students",
    icon: GraduationCap,
    headline: "Study Smarter, Not Longer",
    desc: "Unlock your academic potential with science-backed study sessions, retention trackers, and exam-ready scheduling powered by AI.",
    points: [
      "Spaced repetition study planner",
      "Subject-wise focus time breakdown",
      "Exam countdown with adaptive prep plans",
      "Procrastination pattern detection",
    ],
    stat: "68%",
    statLabel: "better retention reported",
  },
  {
    id: "athletes",
    label: "Athletes",
    icon: Dumbbell,
    headline: "Train Your Mind Like Your Body",
    desc: "Elite performance isn't just physical. NeuroTrack helps you build mental endurance, sharper reaction patterns, and disciplined routines.",
    points: [
      "Pre-game mental warm-up routines",
      "Recovery & mental readiness scoring",
      "Goal visualization & progress journaling",
      "Discipline streak tracking & gamification",
    ],
    stat: "92%",
    statLabel: "users hit goals on time",
  },
  {
    id: "wellness",
    label: "Wellness",
    icon: HeartPulse,
    headline: "Balance Productivity with Wellbeing",
    desc: "NeuroTrack understands that a healthy mind drives everything. It gently reminds you to breathe, move, and rest.",
    points: [
      "Mindfulness & breathing exercises",
      "Burnout risk detection & prevention",
      "Mood tracking with AI pattern analysis",
      "Work-life balance weekly scoring",
    ],
    stat: "84%",
    statLabel: "reduction in burnout symptoms",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HOW IT WORKS
// ─────────────────────────────────────────────────────────────────────────────
export interface Step {
  step: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const HOW_IT_WORKS: Step[] = [
  {
    step: "01",
    icon: Cpu,
    title: "Onboarding Intelligence",
    desc: "Answer a 2-minute questionnaire. Our AI builds your unique cognitive profile — your chronotype, work style, and focus patterns.",
  },
  {
    step: "02",
    icon: Layers,
    title: "Real-time Tracking",
    desc: "NeuroTrack passively monitors your app usage, task completion, and break behavior to build a live picture of your focus health.",
  },
  {
    step: "03",
    icon: Brain,
    title: "AI Generates Insights",
    desc: "The Neural Engine processes your data every 6 hours, surfacing personalized recommendations, alerts, and adaptive session plans.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "You Level Up",
    desc: "Act on insights, build new habits, and watch your focus scores climb. Each week is smarter than the last.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export const STATS: Stat[] = [
  { value: "250K+", label: "Active Users", icon: Target },
  { value: "4.9★", label: "App Store Rating", icon: Star },
  { value: "3.4×", label: "Productivity Boost", icon: TrendingUp },
  { value: "98%", label: "User Satisfaction", icon: CheckCircle2 },
];

// ─────────────────────────────────────────────────────────────────────────────
// PRICING
// ─────────────────────────────────────────────────────────────────────────────
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const PRICING: PricingPlan[] = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    desc: "7-Day Free Trial",
    features: [
      "Dashboard Access",
      "Calendar Sync",
      "7-Day AI Features Trial",
      "Email Analysis (Trial)",
      "Deadline Detection (Trial)",
    ],
    cta: "Download Free",
    highlighted: false,
  },
  {
    name: "Testing Plan",
    price: "₹50",
    period: "/ week",
    desc: "1 Week Trial Testing",
    features: [
      "1 Week Trial Testing",
      "All Pro Features",
      "Beta Testing Access",
    ],
    cta: "Start Testing",
    highlighted: true,
  },
  {
    name: "Monthly",
    price: "₹99",
    period: "/ mo",
    desc: "Coming Soon",
    features: [
      "All Free Features",
      "Unlimited AI Insights",
      "Deadline Detection",
      "Burnout Alerts",
      "Weekly Reports",
      "Priority Support",
    ],
    cta: "Join Waitlist",
    highlighted: false,
  },
  {
    name: "Yearly",
    price: "₹1178",
    period: "/ yr",
    desc: "Coming Soon (Save ₹10/mo)",
    features: [
      "All Monthly Features",
      "Advanced Trends",
      "Custom AI Models",
      "Early Access Features",
      "Dedicated Support",
      "Team Collaboration",
    ],
    cta: "Join Waitlist",
    highlighted: false,
  },
];
