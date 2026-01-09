# 📊 Fetching Data from Supabase

## Quick Reference Guide

I've created `src/lib/queries.ts` with ready-to-use functions for fetching data from Supabase.

---

## 🔥 Most Common Use Cases

### 1. **Fetch All Leads**
```typescript
import { getAllLeads } from '@/lib/queries';

const leads = await getAllLeads();
console.log(leads);
```

### 2. **Fetch Recent Leads (Last 10)**
```typescript
import { getRecentLeads } from '@/lib/queries';

const recentLeads = await getRecentLeads();
```

### 3. **Search Leads by Name or Email**
```typescript
import { searchLeads } from '@/lib/queries';

const results = await searchLeads('john');
```

### 4. **Count Total Leads**
```typescript
import { getLeadsCount } from '@/lib/queries';

const count = await getLeadsCount();
console.log(`Total leads: ${count}`);
```

### 5. **Fetch Leads from Last 7 Days**
```typescript
import { getRecentLeadsThisWeek } from '@/lib/queries';

const weeklyLeads = await getRecentLeadsThisWeek();
```

---

## 🎯 Using in Components

### Server Component (Recommended)
```typescript
// app/admin/page.tsx
import { getAllLeads } from '@/lib/queries';

export default async function AdminPage() {
  const leads = await getAllLeads();
  
  return (
    <div>
      <h1>Leads ({leads.length})</h1>
      {leads.map(lead => (
        <div key={lead.id}>
          <p>{lead.name} - {lead.email}</p>
        </div>
      ))}
    </div>
  );
}
```

### Client Component
```typescript
'use client';

import { useEffect, useState } from 'react';
import { getAllLeads } from '@/lib/queries';

export default function LeadsClient() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    async function fetchLeads() {
      const data = await getAllLeads();
      setLeads(data);
    }
    fetchLeads();
  }, []);

  return <div>{/* Render leads */}</div>;
}
```

---

## 🔴 Real-Time Updates

Listen for new leads in real-time:

```typescript
'use client';

import { useEffect } from 'react';
import { subscribeToNewLeads } from '@/lib/queries';

export default function RealTimeLeads() {
  useEffect(() => {
    const subscription = subscribeToNewLeads((payload) => {
      console.log('New lead received!', payload.new);
      // Update your UI here
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return <div>Listening for new leads...</div>;
}
```

---

## 📍 Example: Admin Dashboard

I've created a complete example at:
**`/admin`** - Visit `http://localhost:3000/admin` to see all your leads!

---

## 🔒 Security Note

**Important:** The admin dashboard is currently public. To protect it:

1. Add authentication (NextAuth.js, Clerk, etc.)
2. Use Supabase Row Level Security (RLS)
3. Create a protected route

Example RLS policy:
```sql
-- Only allow authenticated users to read leads
CREATE POLICY "Authenticated users can read leads"
ON leads FOR SELECT
TO authenticated
USING (true);
```

---

## 🎨 Available Query Functions

All functions are in `src/lib/queries.ts`:

- ✅ `getAllLeads()` - Get all leads
- ✅ `getRecentLeads()` - Get last 10 leads
- ✅ `getLeadByEmail(email)` - Find lead by email
- ✅ `getLeadsByService(service)` - Filter by service
- ✅ `getAllPartnerInquiries()` - Get partner inquiries
- ✅ `getLeadsCount()` - Count total leads
- ✅ `searchLeads(term)` - Search by name/email
- ✅ `getRecentLeadsThisWeek()` - Last 7 days
- ✅ `subscribeToNewLeads(callback)` - Real-time updates

---

Need help with a specific use case? Let me know! 🚀
