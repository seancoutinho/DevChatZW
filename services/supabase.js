const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://clpcgwljkmrcqvmaixnj.supabase.co/'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNscGNnd2xqa21yY3F2bWFpeG5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTgwNDEsImV4cCI6MjA0MjE3NDA0MX0.HSmQzs0oPGnh - fSlJPUMc5X3H1da3_K6zs3 - d9me4dI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
