import { Database } from "@/supabase/types/database_types";
import {
  createMiddlewareSupabaseClient,
  createServerComponentSupabaseClient,
} from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export const supabaseRSC = () =>
  createServerComponentSupabaseClient<Database>({ cookies, headers });

export const supabaseMiddleware = (req: NextRequest, res: NextResponse) =>
  createMiddlewareSupabaseClient<Database>({ req, res });


