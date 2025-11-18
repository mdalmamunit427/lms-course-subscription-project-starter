# lms-course-subscription-project-starter

A modern all-access course platform built with Next.js 16. Pay once ($99), get lifetime access to ALL courses.

## 🚀 Features

### For Students
- 💰 **$99 one-time payment** for lifetime all-access subscription
- 🎓 Unlimited access to ALL courses (current & future)
- 📺 Video course player (YouTube & Wistia support)
- 💳 Secure Stripe payment integration
- 📱 Responsive design
- 🔐 Clerk authentication
- 📊 Personal dashboard showing all courses

### For Admins
- 👥 **User Management** - Manage users and roles via Clerk metadata
- 📚 **Course Management** - Create, edit, publish, and delete courses
- 📝 **Content Editor** - Add chapters and lectures with drag-and-drop ordering
- 📊 **Analytics Dashboard** - View stats, revenue, and recent purchases
- 🔒 **Role-Based Access** - Secure admin routes with Clerk metadata

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Authentication:** Clerk
- **Database:** MongoDB (Mongoose)
- **Payments:** Stripe
- **Media:** Cloudinary (Next Cloudinary)
- **Forms:** React Hook Form
- **Styling:** Tailwind CSS v4
- **Video Players:** YouTube API, Wistia

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin routes
│   │   ├── page.tsx       # Overview
│   │   ├── users/         # User management
│   │   └── courses/       # Course management
│   ├── course/[id]/       # Course player
│   ├── dashboard/         # Student dashboard
│   └── page.tsx           # Landing page
├── components/            # React components
├── actions/               # Server actions
├── lib/                   # Database & services
└── models/                # MongoDB schemas
```

## 🔧 Setup

### 1. Environment Variables

Create `.env.local`:

```bash
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test
CLERK_SECRET_KEY=sk_test_
CLERK_WEBHOOK_SECRET=whsec_

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# MongoDB
MONGODB_URI=mongodb+srv://...

# Stripe
STRIPE_WEBHOOK_SECRET=whsec_
STRIPE_SECRET_KEY=sk_test


# Cloudinary
CLOUDINARY_CLOUD_NAME=cloud_name
CLOUDINARY_API_KEY=api_key
CLOUDINARY_API_SECRET=api_secrect
CLOUDINARY_UPLOAD_PRESET=course_thumbnails


```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 👨‍💼 Admin Access

### Setting Up Admin Role

To grant admin access to a user:

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Navigate to **Users** → Select your user
3. Edit **Public Metadata**
4. Add:
   ```json
   {
     "role": "admin"
   }
   ```
5. Save changes

Now you can access the admin dashboard at `/admin`

## 📖 Documentation

## 🎯 Routes

### Public Routes
- `/` - Landing page
- `/sign-in` - Sign in page
- `/sign-up` - Sign up page

### Protected Routes (Requires Auth)
- `/dashboard` - Student dashboard
- `/course/[id]` - Course player

### Admin Routes (Requires Admin Role)
- `/admin` - Admin overview with stats
- `/admin/users` - User management
- `/admin/courses` - Course listing
- `/admin/courses/[id]` - Edit course content

## 🔐 Security Features

- ✅ Server-side authentication checks
- ✅ Role-based access control via Clerk metadata
- ✅ Secure Stripe webhook handling
- ✅ MongoDB connection with authentication
- ✅ Protected admin routes
- ✅ CSRF protection via Next.js

## ⚡ Performance

- ✅ **Next.js 16 `'use cache'` directive** - Smart caching for all data fetching functions
- ✅ **Tagged cache invalidation** - Precise cache updates with `updateTag()`
- ✅ **Optimistic UI** - Instant feedback with `useOptimistic` hook
- ✅ **Database indexes** - Optimized MongoDB queries (10-100x faster)
- ✅ **Field projection** - Fetch only needed data with `.select()` and `.lean()`
- ✅ **Batch operations** - Eliminated N+1 queries with aggregations
- ✅ **Server Components** - Zero JavaScript by default
- ✅ **Image optimization** - Cloudinary CDN + Next.js Image

### Performance Stats
- Admin pages: **5-10x faster** (300-500ms from 2-3s)
- Course editor: **15-25x faster** (200-300ms from 3-5s)
- Dashboard: **10-20x faster** (100-200ms from 1-2s)
- Cached requests: **100x faster** (~5ms vs ~500ms)

See [PERFORMANCE_FIXES.md](PERFORMANCE_FIXES.md) for detailed breakdown.

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

### Environment Variables Required

Make sure to set all environment variables listed in the setup section.

## 📝 License

MIT

## 🤝 Contributing

Contributions welcome! Please read the documentation first.

---

**Built with ❤️ using Next.js 16 and React 19**

