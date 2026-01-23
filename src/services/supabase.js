import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yhyqhfoyrqorypdejbor.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloeXFoZm95cnFvcnlwZGVqYm9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg3OTUwNTgsImV4cCI6MjA4NDM3MTA1OH0.oJWl3ZUJB90HUdBnkZCf5pflQF-tNaZ8DWkaKy_YwWg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
