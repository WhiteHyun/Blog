const CONFIG = {
  // profile setting (required)
  profile: {
    name: "WhiteHyun",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "iOS developer",
    bio: "끄적이며 지나온 나의 공간",
    email: "whi7ehyun@gmail.com",
    linkedin: "",
    github: "WhiteHyun",
    instagram: "Whi7eHyun",
  },
  projects: [
    {
      name: `편행`,
      href: "https://github.com/S-FAM/PyeonHaeng",
    },
    {
      name: `Flip Clock`,
      href: "https://github.com/WhiteHyun/FlipClock"
    },
  ],
  // blog setting (required)
  blog: {
    title: "Swift Footprint",
    description: "Swift 블로그",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://whitehyun.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "WhiteHyun/Blog-Comments",
      "issue-term": "og:title",
      label: "💬 Utterances",
      theme: "photon-dark",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }