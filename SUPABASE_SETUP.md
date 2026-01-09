# Supabase Setup Guide for Feelify Solutions

## 📋 Step-by-Step Instructions

### 1. Create Supabase Tables

Go to your Supabase Dashboard → SQL Editor and run these queries:

#### Create Leads Table
```sql
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  business_name TEXT,
  service TEXT,
  message TEXT,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### Create Partner Inquiries Table
```sql
CREATE TABLE partner_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  partnership_type TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 2. Get Your Supabase Credentials

1. Go to **Project Settings** → **API**
2. Copy your **Project URL** (looks like: `https://xxxxx.supabase.co`)
3. Copy your **anon/public key** (starts with `eyJ...`)

### 3. Add Credentials to Your Project

Open `.env.local` and replace the placeholders:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 4. Enable Row Level Security (Optional but Recommended)

In Supabase SQL Editor:

```sql
-- Allow public inserts to leads table
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON leads
  FOR INSERT
  WITH CHECK (true);

-- Allow public inserts to partner_inquiries table
ALTER TABLE partner_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON partner_inquiries
  FOR INSERT
  WITH CHECK (true);
```

### 5. Test Your Setup

1. Restart your dev server: `npm run dev`
2. Fill out the contact form on your website
3. Check Supabase Dashboard → Table Editor → `leads` to see the data

## ✅ You're Done!

Your forms will now save data directly to Supabase. No complex setup, no connection issues!

## 🔒 Security Notes

- The `anon` key is safe to expose in frontend (it's public)
- Row Level Security policies control what users can do
- Never expose your `service_role` key in frontend code
