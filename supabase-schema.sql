-- ============================================
-- SUPABASE SQL SCHEMA - Whiskey Tracker
-- ============================================
-- Run this in your Supabase SQL Editor
-- https://hzkhvnqhepxadwxdtnih.supabase.co/project/default/sql
-- ============================================

-- Create table for shared whiskeys database
CREATE TABLE IF NOT EXISTS whiskeys (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  distillery TEXT,
  type TEXT DEFAULT 'Bourbon',
  age INTEGER,
  abv DECIMAL(4,1),
  proof DECIMAL(5,1),
  price TEXT,
  photo_url TEXT,
  tasting_notes TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE whiskeys ENABLE ROW LEVEL SECURITY;

-- Everyone can read whiskeys (anyone with the app can search)
CREATE POLICY "Anyone can read whiskeys" ON whiskeys
  FOR SELECT USING (true);

-- Everyone can insert new whiskeys (customers can add to database)
CREATE POLICY "Anyone can insert whiskeys" ON whiskeys
  FOR INSERT WITH CHECK (true);

-- Only authenticated users can update/delete (optional - prevents tampering)
-- For now, let's allow updates too since this is a public crowd-sourced DB
CREATE POLICY "Anyone can update whiskeys" ON whiskeys
  FOR UPDATE USING (true);

-- Create index for faster searches
CREATE INDEX IF NOT EXISTS idx_whiskeys_name ON whiskeys (name);
CREATE INDEX IF NOT EXISTS idx_whiskeys_distillery ON whiskeys (distillery);
CREATE INDEX IF NOT EXISTS idx_whiskeys_type ON whiskeys (type);

-- ============================================
-- VERIFICATION
-- ============================================
-- After running this, you should see 'whiskeys' table in Table Editor
-- Test the connection by checking the API works:
-- GET https://hzkhvnqhepxadwxdtnih.supabase.co/rest/v1/whiskeys?select=*
-- ============================================
