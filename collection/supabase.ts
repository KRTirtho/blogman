import { Database } from "@/supabase/types/database_types";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";

export const supabaseRSC = () =>
  createServerComponentSupabaseClient<Database>({ cookies, headers });
