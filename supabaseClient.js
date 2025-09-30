// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// Frontend-safe ANON key
const supabaseUrl = 'https://womqqsyjlbrqasiozyix.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvbXFxc3lqbGJycWFzaW96eWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNzcxMDQsImV4cCI6MjA3NDY1MzEwNH0.3FqHGG4HaFfEGXrHIFshuKCoF3vUvWe_sJsVzx61ADY'

export const supabase = createClient(supabaseUrl, supabaseKey)
