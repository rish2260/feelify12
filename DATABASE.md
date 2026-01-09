# Feelify Solutions - External Database Integration

## 🗄️ Database Strategy

This project uses **external database integration only** via API endpoints.

### Supported Databases
- MongoDB (Atlas)
- MySQL (Cloud-hosted)
- Any REST API-based database service

### Integration Points

All form submissions are handled via Server Actions in `src/app/actions.ts`.

**To connect your database:**

1. Set up your external database (MongoDB Atlas, MySQL, etc.)
2. Create API endpoints for:
   - `/api/leads` - Contact form submissions
   - `/api/partners` - Partnership inquiries
3. Update `src/app/actions.ts` with your API endpoints

### Data Models

**Lead Submission:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "businessName": "string",
  "service": "string",
  "message": "string",
  "source": "website",
  "timestamp": "ISO 8601"
}
```

**Partner Inquiry:**
```json
{
  "name": "string",
  "company": "string",
  "partnershipType": "string",
  "email": "string",
  "phone": "string",
  "message": "string",
  "timestamp": "ISO 8601"
}
```

### Security
- All API calls use HTTPS
- No database credentials in frontend
- Server-side validation
- User consent on forms

---

## 🚀 Quick Start

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Connect your external database API in `src/app/actions.ts`
