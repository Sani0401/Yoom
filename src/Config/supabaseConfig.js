import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://oylhixxuytwmjfavdfoq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95bGhpeHh1eXR3bWpmYXZkZm9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyNTU3MDAsImV4cCI6MjAzOTgzMTcwMH0.L17Uh-i4PCQ7TnZAEZlHAX7mxQYnZhnaEBqKdEvwVD0')
export default supabase;