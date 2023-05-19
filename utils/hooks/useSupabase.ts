import { Database } from "@/supabase/types/database_types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const useSupabase = () => useSupabaseClient<Database>();
