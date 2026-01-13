export type InstructionStep = {
  number: number;
  title: string;
  items: string[];
  codeBlock?: string;
  warning?: string;
};

export type InstructionSection = {
  title: string;
  content?: string;
  steps?: InstructionStep[];
  summary?: {
    title: string;
    items: Array<{ text: string; type: "positive" | "negative" }>;
  };
};

const InstructionsData: InstructionSection[] = [
  {
    title: "How Unfollowed Works",
    content:
      "Unfollowed helps you see who doesn't follow you back on Instagram using your **official Instagram account data**. You never sign in with Instagram — Unfollowed only reads files you download yourself.",
  },
  {
    title: "Step 1: Download Your Instagram Data",
    steps: [
      {
        number: 1,
        title: "Log in to Instagram",
        items: [
          "Use a desktop or mobile browser.",
          "Make sure you're logged into the correct account.",
        ],
      },
      {
        number: 2,
        title: "Open Instagram's Download Tool",
        items: [
          "Navigate to:",
          "**More → Your Activity → Download Your Information**",
        ],
      },
      {
        number: 3,
        title: "Go to Accounts Center",
        items: ["Select:", "**Download or Transfer Information → Select Account**"],
      },
      {
        number: 4,
        title: "Choose the Required Data",
        items: ["Select:", "**Some of Your Information → Followers & Following**"],
      },
      {
        number: 5,
        title: "Set Download Options",
        items: [
          "Destination: **Download to device**",
          "Date range: **All time**",
        ],
        warning:
          "Instagram only includes follower data from the selected date range. If you don't choose **all time**, Unfollowed cannot produce accurate results.",
      },
      {
        number: 6,
        title: "Request & Download",
        items: [
          "Submit the request.",
          "Once Instagram finishes preparing your data, download and unzip the folder.",
        ],
      },
    ],
  },
  {
    title: "Step 2: Upload Files to Unfollowed",
    steps: [
      {
        number: 1,
        title: "Open the extracted folder",
        items: [
          "From your downloaded Instagram data, navigate to:",
        ],
        codeBlock: "connections/",
      },
      {
        number: 2,
        title: "Find the required files",
        items: [
          "`followers_1.html`",
          "`following.html`",
        ],
      },
      {
        number: 3,
        title: "Upload to Unfollowed",
        items: [
          "Upload both files into the Unfollowed app.",
          "Unfollowed will instantly show accounts that don't follow you back.",
        ],
      },
    ],
  },
  {
    title: "Privacy & Security",
    content:
      "- Unfollowed never asks for your Instagram login.\n- No data is sent to Instagram or third-party services.\n- Files are processed only to compare followers vs. following.",
  },
  {
    title: "What Unfollowed Needs (Summary)",
    summary: {
      title: "What Unfollowed Needs (Summary)",
      items: [
        { text: "Your Instagram export", type: "positive" },
        { text: "`followers_1.html`", type: "positive" },
        { text: "`following.html`", type: "positive" },
        { text: "No passwords", type: "negative" },
        { text: "No API access", type: "negative" },
        { text: "No tracking", type: "negative" },
      ],
    },
  },
];

export default InstructionsData;
