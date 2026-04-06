-- ============================================
-- SUPABASE SQL SCHEMA - User Auth & Cloud Sync
-- ============================================
-- Run this in your Supabase SQL Editor
-- https://hzkhvnqhepxadwxdtnih.supabase.co/project/default/sql
-- ============================================

-- Create table for user collections (synced from app)
CREATE TABLE IF NOT EXISTS user_collections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  collection_data JSONB NOT NULL DEFAULT '[]',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Enable Row Level Security
ALTER TABLE user_collections ENABLE ROW LEVEL SECURITY;

-- Users can only access their own collection
CREATE POLICY "Users can manage their own collection" ON user_collections
  FOR ALL USING (auth.uid() = user_id);

-- Create index for faster user lookups
CREATE INDEX IF NOT EXISTS idx_user_collections_user_id ON user_collections (user_id);

-- ============================================
-- VERIFICATION
-- ============================================
-- After running this, you should see 'user_collections' table in Table Editor
-- ============================================
