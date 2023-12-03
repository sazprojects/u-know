import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bycxmewfyvxcdrycweft.supabase.co";
const supabaseKey = env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
