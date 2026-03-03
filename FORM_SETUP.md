# Contact Form Setup Instructions

The contact form on the Contact Us page uses **Formspree** to handle form submissions. Follow these steps to set it up:

## Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account (no credit card required)
3. The free plan includes 50 submissions per month

## Step 2: Create a New Form

1. After logging in, click "New Form"
2. Enter a form name (e.g., "PyData Indore Contact Form")
3. Set the email address where you want to receive submissions: `indore@pydata.org`
4. Click "Create Form"

## Step 3: Get Your Form ID

1. After creating the form, you'll see a form endpoint URL like:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```
2. Copy the `YOUR_FORM_ID` part (the random string after `/f/`)

## Step 4: Update the Contact Form

1. Open `contact.html`
2. Find the form element (around line 88):
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID
4. Save the file

## Step 5: Test the Form

1. Deploy your site or test locally
2. Fill out and submit the contact form
3. Check your email (`indore@pydata.org`) for the submission
4. You should also receive a confirmation email from Formspree

## Alternative: EmailJS (Client-Side)

If you prefer not to use Formspree, you can use EmailJS instead:

1. Sign up at [https://www.emailjs.com](https://www.emailjs.com)
2. Create an email service
3. Update the JavaScript in `Assets/JavaScript/main.js` to use EmailJS API
4. No backend required - emails are sent directly from the browser

## Form Features

The form includes:
- ✅ Client-side validation
- ✅ Loading states during submission
- ✅ Success/error messages
- ✅ Spam protection (honeypot field)
- ✅ Auto-reply to sender email
- ✅ Custom email subject line

## Troubleshooting

- **Form not submitting**: Check that you've replaced `YOUR_FORM_ID` with your actual Formspree ID
- **Not receiving emails**: Check spam folder, verify email in Formspree settings
- **CORS errors**: Formspree handles CORS automatically, but check browser console for errors

## Formspree Free Plan Limits

- 50 submissions per month
- Basic spam protection
- Email notifications
- Form analytics

For higher limits, consider upgrading to a paid plan.

