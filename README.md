# For Mariya ❤️ — Birthday Surprise Website

A small interactive birthday story built with React, JavaScript, Vite, CSS animations, and Lucide icons.

## What's included
- Floating hearts and glowing welcome screen
- Animated roses and flowers
- CSS birthday cake with candle-blowing interaction
- Click-to-open love letter
- Final surprise and replay button
- Responsive mobile layout

## Run it on your computer

1. Install Node.js (LTS): https://nodejs.org/
2. Extract this folder.
3. Open a terminal in this folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL Vite prints, usually `http://localhost:5173`.

## Personalize the message

Open `src/App.jsx` and edit the text inside the `LoveLetter` component and final surprise. The website currently uses “Mariya” as the name.

## Publish free with Netlify (easy option)

1. Create a free account at https://www.netlify.com/
2. In the project folder, run `npm install` and then `npm run build`.
3. This creates a `dist` folder.
4. In Netlify, open the manual deploy / drag-and-drop page and upload the `dist` folder.
5. Netlify gives you a public website URL. Open that URL on your phone to test it, then send it to Mariya.

If Netlify's interface changes, use its official docs: https://docs.netlify.com/
Alternative: deploy the repository to Vercel at https://vercel.com/; select the Vite project and use `npm run build` with output directory `dist`.

## Notes
- The app does not collect or store any personal information.
- Google Fonts load from the internet; if they are unavailable, fallback fonts are used.
- The music icon is intentionally not a music player. Add audio only if you have permission to use the track and want music on the page.
