import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://imoyztcjssgbwpnmrpbk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imltb3l6dGNqc3NnYndwbm1ycGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwNzQ0NTAsImV4cCI6MjAyMzY1MDQ1MH0.GESi93b_7y883y7-jTQiaQfJ542OWCAoLDGt8Q92Pdc";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
