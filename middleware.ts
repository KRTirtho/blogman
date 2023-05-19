import { NextRequest, NextResponse } from "next/server";
import { supabaseMiddleware } from "./collection/supabase";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = supabaseMiddleware(req, res);

  await supabase.auth.getSession();
  return res;
}
