import { createClient } from "@supabase/supabase-js";

const apiKey = "https://gvnnvcctigihmvozjbtd.supabase.co"
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2bm52Y2N0aWdpaG12b3pqYnRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3Mjc2NzMsImV4cCI6MjA0OTMwMzY3M30.B9Mz5i7dSJEnLKS95E-lTQOY8b0efEWOqHlb08o1n6g"

export const supabase = createClient(apiKey, anonKey);