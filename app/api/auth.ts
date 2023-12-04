import { NextRequest } from "next/server";
import { getServerSideConfig } from "../config/server";

function parseApiKey(bearToken: string) {
  const token = bearToken.trim().replaceAll("Bearer ", "").trim();

  return {
    apiKey: token,
  };
}

export function auth(req: NextRequest) {
  return {
    error: false,
  };
};
}
