# 📧 Email Setup Guide - Resend

## ✅ What's Configured

All form submissions now send emails directly to **contact@feelifysolution.com**

- ✅ Contact form leads
- ✅ Partnership inquiries
- ✅ Formatted HTML emails
- ✅ Instant notifications

---

## 🚀 Setup Steps (5 minutes)

### 1️⃣ Create Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up (free tier: 3,000 emails/month)
3. Verify your email

### 2️⃣ Get Your API Key

1. Go to **API Keys** in Resend dashboard
2. Click **Create API Key**
3. Name it: `Feelify Solutions`
4. Copy the API key (starts with `re_...`)

### 3️⃣ Add API Key to Your Project

Open `.env.local` and replace the placeholder:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

### 4️⃣ Restart Dev Server

```bash
# Stop current server (Ctrl+C)
npm run dev
```

### 5️⃣ Test It!

1. Fill out your contact form
2. Check your inbox at **contact@feelifysolution.com**
3. You should receive a formatted email with the lead details!

---

## 📧 Email Format

### Lead Notification Email:
```
Subject: 🎯 New Lead: [Name]

Content:
- Name
- Email (clickable)
- Phone (clickable)
- Business Name
- Service Interest
- Message
- Timestamp (IST)
```

### Partner Inquiry Email:
```
Subject: 🤝 Partnership Inquiry: [Company]

Content:
- Name
- Company
- Partnership Type
- Email (clickable)
- Phone (clickable)
- Message
- Timestamp (IST)
```

---

## 🎨 Custom Domain (Optional)

To send emails from `noreply@feelifysolution.com` instead of `onboarding@resend.dev`:

1. Go to Resend Dashboard → **Domains**
2. Add your domain: `feelifysolution.com`
3. Add the DNS records they provide
4. Update `src/lib/email.ts`:
   ```typescript
   from: 'Feelify Solutions <noreply@feelifysolution.com>'
   ```

---

## 🔒 Security

- ✅ API key stored in `.env.local` (not committed to git)
- ✅ Server-side only (never exposed to browser)
- ✅ Rate limiting built-in by Resend

---

## 📊 Free Tier Limits

- **3,000 emails/month** (free forever)
- **100 emails/day**
- Perfect for small to medium businesses

If you need more, upgrade to paid plan ($20/month for 50,000 emails).

---

## ❓ Troubleshooting

**Emails not arriving?**
1. Check spam folder
2. Verify API key is correct
3. Check Resend dashboard logs
4. Make sure dev server restarted after adding API key

**Need help?** Let me know! 🚀
