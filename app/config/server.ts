import md5 from "spark-md5";
import { DEFAULT_MODELS } from "../constant";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CODE?: string;
      BASE_URL?: string;
      PROXY_URL?: string;
      VERCEL?: string;
      HIDE_USER_API_KEY?: string; // disable user's api key input
      DISABLE_GPT4?: string; // allow user to use gpt-4 or not
      BUILD_MODE?: "standalone" | "export";
      BUILD_APP?: string; // is building desktop app
      ENABLE_BALANCE_QUERY?: string; // allow user to query balance or not
      DISABLE_FAST_LINK?: string; // disallow parse settings from url or not
      CUSTOM_MODELS?: string; // to control custom models
    }
  }
}

const ACCESS_CODES = (function getAccessCodes(): Set<string> {
  // Always return an empty set
  return new Set();
})();

export const getServerSideConfig = () => {
  if (typeof process === "undefined") {
    throw Error(
      "[Server Config] you are importing a nodejs-only module outside of nodejs",
    );
  }

  let disableGPT4 = !!process.env.DISABLE_GPT4;
  let customModels = process.env.CUSTOM_MODELS ?? "";

  if (disableGPT4) {
    if (customModels) customModels += ",";
    customModels += DEFAULT_MODELS.filter((m) => m.name.startsWith("gpt-4"))
      .map((m) => "-" + m.name)
      .join(",");
  }

  return {
    apiKey: process.env.OPENAI_API_KEY,
    code: process.env.CODE,
    codes: ACCESS_CODES,
    needCode: false, // Always return false for needCode
    baseUrl: process.env.BASE_URL,
    proxyUrl: process.env.PROXY_URL,
    openaiOrgId: process.env.OPENAI_ORG_ID,
    isVercel: !!process.env.VERCEL,
    hideUserApiKey: !!process.env.HIDE_USER_API_KEY,
    disableGPT4,
    hideBalanceQuery: !process.env.ENABLE_BALANCE_QUERY,
    disableFastLink: !!process.env.DISABLE_FAST_LINK,
    customModels,
  };
};
