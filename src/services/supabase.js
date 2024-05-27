import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://tnhyxxmblvfhhjyhjczi.supabase.co'
//const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuaHl4eG1ibHZmaGhqeWhqY3ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0MjgyODUsImV4cCI6MjAzMjAwNDI4NX0.28DfZT-7v3RIutaX0WY17ifenPFbE_zNtTTI9yFnBZI'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase