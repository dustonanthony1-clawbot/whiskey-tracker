-- Add contributor columns to existing whiskeys table
ALTER TABLE whiskeys ADD COLUMN IF NOT EXISTS contributor_name TEXT;
ALTER TABLE whiskeys ADD COLUMN IF NOT EXISTS contributor_email TEXT;