import { createClient } from "@supabase/supabase-js";

const apiKey = "your supabase api key"
const anonKey = "your supabase anon key"

export const supabase = createClient(apiKey, anonKey);