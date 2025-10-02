# Quick Start Guide 🚀

## Step 1: Get Your API Key

1. Go to https://rawg.io/apidocs
2. Click "Get API Key" or "Sign Up"
3. Create a free account
4. Copy your API key from your profile

## Step 2: Configure Environment

1. Open the file `.env.local` in the root directory
2. Replace `your_api_key_here` with your actual API key:
   ```
   NEXT_PUBLIC_RAWG_API_KEY=abc123your-actual-key-here
   ```
3. Save the file

## Step 3: Install & Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Step 4: Explore!

Open http://localhost:3000 in your browser and start exploring games!

## Features to Try:

✅ Browse trending games on the homepage
✅ Click on any game to see full details
✅ Use the search bar to find specific games
✅ Filter by genre using the sidebar (desktop)
✅ Filter by platform
✅ Check out game ratings, screenshots, and descriptions

## Troubleshooting

**Problem: Images not loading**

- Make sure your API key is correctly set in `.env.local`
- Restart the dev server after changing environment variables

**Problem: "Failed to fetch games" error**

- Verify your API key is valid
- Check your internet connection
- RAWG API might be rate-limited (20k requests/month on free tier)

**Problem: Build errors**

- Run `npm install` to ensure all dependencies are installed
- Delete `.next` folder and try again
- Make sure you're using Node.js 18 or higher

## Need Help?

Check the main README.md for more detailed documentation!
