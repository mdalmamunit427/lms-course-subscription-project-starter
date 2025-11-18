Here is your **Markdown-formatted Product Specification Document**, clean and production-ready.
You can copy-paste it directly into `/docs/spec.md`.

---

# **📄 Product Specification Document**

### **Full-Stack Digital Products / Course Subscription Platform**

---

## **1. Overview**

This platform enables creators to sell digital courses through a **$99 subscription** that unlocks all content instantly.
Users authenticate using **Clerk**, and their profile is saved in **MongoDB**. The system includes course access control, dashboards, admin tools, and automated tests using **TestSprite**.

---

## **2. Core Purpose**

Create a full-stack Next.js platform that supports:

* User authentication + database syncing
* Subscription purchase
* Access to premium courses
* User dashboard
* Admin dashboard
* End-to-end automated testing using TestSprite

The application must be secure, scalable, and simple to maintain.

---

## **3. Target Users**

### **Regular User**

* Sign up/log in with Clerk
* See public homepage
* Purchase a $99 subscription
* Unlock all premium content instantly
* Access user dashboard

### **Admin**

* Manage courses
* View subscriber list
* Edit platform content
* Access admin-only dashboard

---

## **4. Core Features**

### **4.1 Authentication (Clerk)**

* Secure login/signup
* Backend ensures user exists in MongoDB
* User model:

```ts
{
  clerkUserId: string,
  email: string,
  name: string,
  isSubscribed: boolean,
  subscriptionExpires: Date | null,
  role: "user" | "admin"
}
```

---

### **4.2 Subscription Purchase**

* Single subscription product: **$99**
* After Stripe checkout success:

  * `isSubscribed = true`
  * Set `subscriptionExpires` accordingly

---

### **4.3 Course Access Rules**

* Public pages require no login
* Premium course content requires:

  ```ts
  isSubscribed === true
  ```
* Unauthorized users are redirected to `/pricing`

---

### **4.4 User Dashboard**

Includes:

* Subscription status
* List of accessible courses
* Recent activity

---

### **4.5 Admin Dashboard**

Admins can:

* Create courses
* Update courses
* Delete courses
* View all subscribers
* View revenue summaries

---

## **5. API Endpoints**

### **5.1 `POST /api/users/create`**

Creates user after Clerk login.

### **5.2 `POST /api/checkout`**

Creates Stripe checkout session.

### **5.3 `POST /api/webhooks/stripe`**

Handles subscription activation.

### **5.4 `GET /api/courses`**

Fetch public course list.

### **5.5 `GET /api/courses/:id`**

Requires subscription.

### **5.6 Admin Routes**

* `POST /api/admin/courses`
* `PATCH /api/admin/courses/:id`
* `DELETE /api/admin/courses/:id`

---

## **6. Business Rules**

1. Users must exist in MongoDB after login.
2. Subscriptions can only be activated by authentic Stripe webhooks.
3. Premium content requires valid subscription.
4. Admin routes require `role="admin"`.
5. Expired subscriptions must disable access automatically.

---

## **7. Expected Behavior**

### **Authentication**

* New user logs in → DB record created
* Existing user logs in → no duplicates
* Missing Clerk ID → error
* Invalid input → return 400

### **Subscription**

* Stripe success event updates user subscription
* Prevent fake subscription activation
* Validate Stripe signature

### **Access Control**

* Non-subscribed user → blocked
* Subscribed user → always allowed
* Expired subscription → denied

### **Admin**

* Only admins access admin routes
* Correct CRUD behavior

---

## **8. Edge Cases**

1. Stripe webhook fires before DB user exists
2. Duplicate subscription attempts
3. User tries accessing deleted course
4. Subscription expired but user attempts access
5. Missing or invalid Clerk session

---

## **9. Testing Requirements (For TestSprite)**

### **Unit Tests**

* User creation logic
* Subscription flag update
* Access rules
* Role-based permissions

### **Integration Tests**

* Clerk login → DB sync
* Stripe webhook → DB update
* Admin course creation

### **End-to-End Tests**

1. User logs in
2. User purchases subscription
3. Accesses premium content
4. Admin adds new course → user sees it

---

## **10. How TestSprite Will Be Used**

TestSprite should:

* Read the entire source code
* Auto-generate tests per feature
* Validate data flow
* Run tests after each milestone
* Suggest fixes for failed tests
* Generate E2E test scenarios

---

## **11. Recommended Folder Structure**

```
/app
  /(public)
  /(dashboard)
  /(admin)
  /api
/components
/lib
/models
/tests        <-- TestSprite writes tests here
/docs
  spec.md
```

---

## **12. Success Criteria**

Platform is considered complete when:

* All features operate correctly
* TestSprite-generated tests pass
* Payment + access flow is reliable
* Admin operations function smoothly
* No broken permissions or logic errors exist

---

If you want, I can also:

✅ Export this as PDF
✅ Save it as a `.md` file and bundle it into a downloadable ZIP
✅ Create a TestSprite-optimized version for even better test generation

Just tell me **“export as zip”** or **“optimize for TestSprite”**.
