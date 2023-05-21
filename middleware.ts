import { NextRequest, NextResponse } from "next/server";
import { supabaseMiddleware } from "./collection/supabase";

/**
 * Routes that are allowed to be accessed by anonymous users
 */
const whitelistAnonPaths = ["/login"];

/**
 * Public routes that are not allowed to be accessed by logged in users
 */
const blacklistLoggedInPaths = ["/login"];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = supabaseMiddleware(req, res);

  await supabase.auth.getSession();

  return res;
}
