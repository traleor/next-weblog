if (!process.env.CMS_API_URL || !process.env.CMS_API_KEY) {
  throw new Error("CMS_API_URL and CMS_API_KEY must be set");
}

// warn if NEXT_PUBLIC_BASE_URL is not set
if (!process.env.NEXT_PUBLIC_BASE_URL) {
  console.warn(
    "NEXT_PUBLIC_BASE_URL is not set, using https://next-pro-weblog.vercel.app"
  );
}

export const AppConfig = {
  CMS_API_URL: process.env.CMS_API_URL,
  CMS_API_KEY: process.env.CMS_API_KEY,
  NEXT_PUBLIC_BASE_URL:
    process.env.NEXT_PUBLIC_BASE_URL || "https://next-pro-weblog.vercel.app",
};

// log info about the app config
console.log("AppConfig", JSON.stringify(AppConfig, null, 4));
