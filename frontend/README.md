# Prabhas Portfolio (MERN + Tailwind)

A modern, dark-themed, fully responsive portfolio website built with the MERN stack and Tailwind CSS.

## 🚀 Features
- Stunning dark UI with Tailwind CSS
- Animated transitions (Framer Motion)
- Responsive design for all devices
- Home, About, Projects, Education, Skills, Contact sections
- Contact form with backend email sending (Nodemailer)
- Data fetched from backend (Projects, Education, Skills)
- Easy to customize and extend

## 🛠️ Getting Started

### 1. **Clone the Repository**
```
git clone <your-repo-url>
cd portfolio
```

### 2. **Backend Setup**
```
cd backend
npm install
```
- Create a `.env` file in `backend`:
  ```env
  MONGO_URI=your_mongodb_connection_string
  EMAIL_USER=your_email@gmail.com
  EMAIL_PASS=your_email_password_or_app_password
  ```
- Start the backend:
  ```bash
  npm run dev
  # Runs on http://localhost:5000
  ```

### 3. **Frontend Setup**
```
cd ../frontend
npm install
```
- Start the frontend:
  ```bash
  npm start
  # Runs on http://localhost:3000
  ```

## 🌐 Deployment

### **Deploy Backend**
- Use [Render](https://render.com/), [Railway](https://railway.app/), or [Heroku](https://heroku.com/).
- Set environment variables (`MONGO_URI`, `EMAIL_USER`, `EMAIL_PASS`) in your deployment dashboard.

### **Deploy Frontend**
- Build the frontend:
  ```bash
  npm run build
  ```
- Deploy the `build` folder to [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or [GitHub Pages](https://pages.github.com/).
- Set the backend API URL in your frontend (if needed) for production.

## ✨ Extra Features & Ideas
- **Theme Switcher:** Add light/dark mode toggle (Tailwind's `dark:` classes are ready!)
- **Blog Section:** Add a blog page for articles or updates.
- **Testimonials:** Add a testimonials section for social proof.
- **Admin Panel:** Add authentication and a dashboard to manage projects/skills from the UI.
- **Animations:** Enhance with more Framer Motion or Lottie animations.
- **SEO:** Add meta tags and Open Graph for better search engine visibility.
- **Analytics:** Integrate Google Analytics or Plausible.

## 📝 Customization
- Update your info in the backend data routes or connect to a real database.
- Replace social/profile links in `Home.js` and `Navbar.js`.
- Add your resume PDF to `public/` as `PRABHAS-RESUME.pdf`.

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License
[MIT](LICENSE)
