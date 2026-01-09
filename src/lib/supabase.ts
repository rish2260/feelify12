import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://snknjyzrdjuodnmasuny.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNua25qeXpyZGp1b2RubWFzdW55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5NTkyMTUsImV4cCI6MjA4MzUzNTIxNX0.Vq7wRsevIWY_obBLkyDcUCEQssxSs2xQnAJkQNP3h0M";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
