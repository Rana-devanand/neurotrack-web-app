// Centralised screenshot metadata used by the ScreenshotsPage gallery.
export interface AppScreen {
  id: string;
  /** path relative to src — used with Vite's import.meta.glob or direct import */
  src: string;
  label: string;
  tag: string;
  tagColor: string;
  description: string;
  highlights: string[];
}

// Import all 7 actual app screenshots
import screen7 from "../assets/images/phone-template (7).png";
import screen5 from "../assets/images/phone-template (5).png";
import screen2 from "../assets/images/phone-template (2).png";
import screen4 from "../assets/images/phone-template (4).png";
import screen6 from "../assets/images/phone-template (6).png";
import screen1 from "../assets/images/phone-template (1).png";
import screen3 from "../assets/images/phone-template (3).png";

export const APP_SCREENS: AppScreen[] = [
  {
    id: "splash",
    src: screen7,
    label: "App Launch",
    tag: "Onboarding",
    tagColor: "#6C3BFF",
    description:
      "A bold, minimal splash screen that sets the tone — 'Passive Productivity, Powered by AI'. First impressions matter.",
    highlights: [
      "Immersive dark brand experience",
      "Brain icon + gradient ambient orbs",
      "Instant brand recall",
    ],
  },
  {
    id: "home",
    src: screen5,
    label: "Home Dashboard",
    tag: "Core",
    tagColor: "#00D4C8",
    description:
      "The command center of your day. Daily mood check-in, energy level picker, and a live AI Insights feed — all above the fold.",
    highlights: [
      "Daily mood & energy check-in",
      "Real-time AI Productivity tips",
      "Burnout risk indicator",
      "One-tap Focus Plan update",
    ],
  },
  {
    id: "app-usage",
    src: screen2,
    label: "App Usage Tracker",
    tag: "Analytics",
    tagColor: "#6C3BFF",
    description:
      "See exactly where your time goes. A ranked bar chart + ranked list of every app you touch — with precise minute-level breakdowns.",
    highlights: [
      "10h 40m total visibility",
      "Top-8 ranked apps by usage",
      "Color-coded bar chart",
      "Minute-accurate time tracking",
    ],
  },
  {
    id: "email",
    src: screen4,
    label: "Email Intelligence",
    tag: "AI Feature",
    tagColor: "#00D4C8",
    description:
      "NeuroTrack reads and prioritises your inbox so you don't have to. 47 AI-generated insights with priority tags (High / Medium / Low).",
    highlights: [
      "AI-parsed email summaries",
      "Priority tagging (High/Medium/Low)",
      "Sender-level filtering",
      "47+ insights extracted per analysis",
    ],
  },
  {
    id: "ai-chat",
    src: screen6,
    label: "AI Assistant",
    tag: "AI Feature",
    tagColor: "#6C3BFF",
    description:
      "Your private AI productivity coach. Context-aware responses based on your real screen time, emails, focus score, and day pattern.",
    highlights: [
      "Context-aware AI responses",
      "Aware of your focus score & screen time",
      "Personalized action plans",
      "Conversational, natural UI",
    ],
  },
  {
    id: "report",
    src: screen1,
    label: "Productivity Report",
    tag: "Insights",
    tagColor: "#00D4C8",
    description:
      "A weekly deep-dive into your performance. Focus trends, app category breakdown, total active time, and your streak — in one view.",
    highlights: [
      "Weekly performance score",
      "Daily focus trend chart",
      "App category donut chart",
      "Total active time + streak tracker",
    ],
  },
  {
    id: "profile",
    src: screen3,
    label: "Profile & Settings",
    tag: "Account",
    tagColor: "#6C3BFF",
    description:
      "Manage your subscription, AI activity stats, notifications, and privacy settings — all in a clean, scannable profile screen.",
    highlights: [
      "PRO subscription status",
      "AI activity summary (emails analyzed)",
      "Privacy & AI Settings control",
      "App appearance customisation",
    ],
  },
];
