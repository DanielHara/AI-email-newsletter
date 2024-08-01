# AI-email-newsletter
Use AI to create a newsletter

Side project to use AI to create a newsletter, built with TypeScript and React, running on node

To run the "hello world" script to send a simple email:

I'm using https://resend.com. So, create a .env file:
```
RESEND_API_KEY=<RESEND_API_KEY>
```

And then:
```
npm install && npx tsx send.tsx
```

You get:

<img width="810" alt="Screenshot 2024-08-01 at 13 56 21" src="https://github.com/user-attachments/assets/701f8c34-b684-466c-87c3-4b7a795b90c5">

Still in progress...

Some of the features could be:
1. Insert a "subscribe to a curated AI generated newsletter". They could select the themes they most prefer (sports, music, travel, ...)
2. Make a big data about how which users click on which links, and refine try to personalize the emails sent base on their taste.
3. With the data, eventually tweak the generative AI engine into generating content for their taste, or eventually building my own model.
4. Do it only for educational content, with the goal of users to educate themselves, and not to maximize time spent on an app.
