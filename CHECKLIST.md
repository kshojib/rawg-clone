# 📋 Setup Checklist

Use this checklist to ensure everything is configured correctly:

## ✅ Before You Start

- [ ] Node.js 18+ is installed (`node --version`)
- [ ] npm is installed (`npm --version`)
- [ ] You have a code editor (VS Code recommended)

## ✅ API Key Setup

- [ ] Visited https://rawg.io/apidocs
- [ ] Created a free account
- [ ] Copied your API key
- [ ] Opened `.env.local` file
- [ ] Replaced `your_api_key_here` with actual key
- [ ] Saved the file

## ✅ Installation

- [ ] Opened terminal in project directory
- [ ] Ran `npm install`
- [ ] All packages installed without errors
- [ ] No security vulnerabilities

## ✅ Run the Project

- [ ] Ran `npm run dev`
- [ ] Server started successfully
- [ ] Noted the port number (likely 3000 or 3001)
- [ ] Opened browser to http://localhost:3000 (or correct port)

## ✅ Verify Features Work

- [ ] Homepage loads with game cards
- [ ] Images are visible
- [ ] Search bar works
- [ ] Can search for a game (try "Witcher")
- [ ] Can click on a game card
- [ ] Game detail page loads
- [ ] Screenshots are visible
- [ ] Can navigate back to homepage
- [ ] Sidebar filters are visible (desktop)
- [ ] Can click on a genre filter
- [ ] Page is responsive on mobile

## ✅ Optional Customization

- [ ] Read through `README.md`
- [ ] Explored the code structure
- [ ] Customized colors in `app/globals.css`
- [ ] Added your own personal touches

## 🎉 All Done!

If all checkboxes are checked, you're ready to go!

## ❌ Troubleshooting

If something doesn't work:

1. **API Key Issues**

   - Double-check the key in `.env.local`
   - Ensure no extra spaces before/after the key
   - Restart dev server after changing `.env.local`

2. **Install Issues**

   - Delete `node_modules` folder
   - Delete `package-lock.json`
   - Run `npm install` again

3. **Build Errors**

   - Delete `.next` folder
   - Restart dev server
   - Check Node.js version (must be 18+)

4. **Images Not Loading**

   - Verify API key is working
   - Check browser console for errors
   - Try a different game (some might not have images)

5. **Port Already in Use**
   - The app will automatically use next available port
   - Look for "using available port XXXX instead" message
   - Use that port number

## 📚 Next Steps

- Customize the design
- Add new features
- Deploy to Vercel
- Share with friends!

---

**Need help?** Check `QUICKSTART.md` and `README.md` for detailed instructions!
