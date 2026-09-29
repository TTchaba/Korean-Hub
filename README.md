# Korean Hub

Marketing site + native registration form for Korean Hub (online Korean lessons).
Built with Next.js 14 (App Router), React, TypeScript, Tailwind, Framer Motion and Firebase Firestore.

**Version 1 has no payment.** A student picks Individual or Group, submits a registration
*request*, and Korean Hub contacts them manually to confirm the schedule.

## 1. Install & run locally

```bash
npm install
cp .env.example .env.local   # then fill in the Firebase values (section 2)
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm run typecheck`, `npm run lint`.
The site renders without Firebase credentials; only *submitting* a form needs them.

## 2. Firebase / Firestore

1. Create a project at https://console.firebase.google.com and enable **Firestore Database**.
2. Project settings → Service accounts → **Generate new private key**.
3. Put the values in `.env.local`: `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`,
   `FIREBASE_PRIVATE_KEY` (keep the quotes and the `\n` sequences).
4. Deploy the locked-down rules in `firestore.rules` (Firestore → Rules, or `firebase deploy --only firestore:rules`).
   The browser never talks to Firestore; the server writes through the Admin SDK.

Collections: `registrations` and `contactSubmissions`.

`registrations` document:

| field | notes |
|---|---|
| fullName, email, phone, koreanLevel | from the form |
| lessonType, lessonTitle | lesson id + title (title looked up server-side) |
| goals, additionalInfo | optional |
| status | `new` → `contacted` → `confirmed` (change by hand in the Firebase console) |
| createdAt, updatedAt | Firestore server timestamps |

No payment fields exist anywhere.

## 3. Editing business content

Everything lives in **`src/config/koreanHub.ts`**:

- Teacher: `teachers[0]` (add more entries later; the site currently uses the first)
- Lessons & **prices**: `lessons` (`price: 0` displays as `[PRICE]`; prices are informational only)
- Contact details: `contact` · Social links: `socialMedia`
- FAQ / testimonials / homepage copy: `faq`, `testimonials`, `homepage`
- SEO: `seo`
- Google Form fallback: `booking.useGoogleForm` and `booking.googleFormUrl`.
  Leave `useGoogleForm: false` for the native form. When `true` **and** a URL is set, `/book` redirects to the Google Form.

Replace `public/images/teacher-placeholder.svg` with a real photo and update `teachers[0].photo`.

## 4. Deploy (Vercel)

1. Push to Git and import the repo in Vercel.
2. Add the four environment variables from `.env.example` (set `NEXT_PUBLIC_SITE_URL` to the live URL).
3. Deploy.

## Routes

`/` · `/lessons` · `/teacher` · `/for-students` · `/contact` · `/book`
API: `POST /api/registrations`, `POST /api/contact`

## Adding payment later (Version 2)

Not implemented. The registration service and `status` field are deliberately separate from anything
billing-related, so a payment layer can be added without reshaping the form or the data model.
