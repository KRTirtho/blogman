import { Database } from "./database_types";

export type SupaProfile = Database["public"]["Tables"]["Profile"]["Row"];
export type SupaPost = Database["public"]["Tables"]["Post"]["Row"];
export type SupaTag = Database["public"]["Tables"]["Tag"]["Row"];
