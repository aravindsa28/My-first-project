# Aravind S A — Premium Cinematic Developer Portfolio

A modern, responsive, animated personal portfolio website designed for **Aravind S A**, showcasing programming skills, education, and current development work.

Built with a dark cinematic visual aesthetic, modern typography, ambient gradient lighting, fluid micro-animations, and clean semantic architecture.

---

## 🌟 Visual Design System & Palette

- **Background:** Deep obsidian black (`#08090D`)
- **Secondary Background:** Navy Obsidian (`#10121A`)
- **Card Background:** Slate Glass (`#151722` with backdrop blur)
- **Primary Accent:** Electric Violet (`#8B5CF6`)
- **Secondary Accent:** Cool Blue (`#60A5FA`)
- **Main Text:** Luminescent White (`#F5F5FA`)
- **Muted Text:** Atmospheric Grey (`#A1A1B5`)
- **Typography:** Space Grotesk (headings & UI) & JetBrains Mono (code)

---

## 📁 Project Structure

```text
aravind/
├── index.html          # Main application page with semantic SEO & accessible structure
├── style.css           # Complete cinematic dark design system & animation rules
├── main.js             # Navigation spy, mobile drawer, tilt effects & contact handling
├── portfolioData.js    # Centralized configuration data for profile, skills & education
├── 404.html            # Custom dark cinematic 404 error page
└── README.md           # Setup, customization & deployment guide
```

---

## 🚀 How to Run Locally

Because the project is built with zero unnecessary dependencies, you can run and view it immediately:

### Option 1: Direct File Preview
Simply double click [index.html](file:///c:/Users/acer/Desktop/aravind/index.html) or open it with any web browser (Google Chrome, Microsoft Edge, Brave, Firefox, Safari).

### Option 2: Using VS Code Live Server
1. Open the `aravind` folder in VS Code.
2. Install the **Live Server** extension.
3. Click **"Go Live"** in the bottom status bar.

### Option 3: Using Any Local Server (e.g., Python / Node / npx if installed)
```bash
# If Python is installed:
python -m http.server 3000

# Or if Node / npx is installed:
npx serve .
```
Then visit `http://localhost:3000`.

---

## ✏️ Personalizing Your Information

All personal details, skills, social links, education info, and projects can be edited in:
- [portfolioData.js](file:///c:/Users/acer/Desktop/aravind/portfolioData.js) (centralized JS config)
- [index.html](file:///c:/Users/acer/Desktop/aravind/index.html) (HTML markup)

### 1. Update Social Profiles & Email
In [index.html](file:///c:/Users/acer/Desktop/aravind/index.html) and [portfolioData.js](file:///c:/Users/acer/Desktop/aravind/portfolioData.js):
- Replace `https://github.com` with your GitHub profile (e.g. `https://github.com/yourusername`)
- Replace `https://linkedin.com` with your LinkedIn URL (e.g. `https://linkedin.com/in/yourusername`)
- Replace `aravind@example.com` with your personal email address.

### 2. Update Education Details
In [index.html](file:///c:/Users/acer/Desktop/aravind/index.html) under the `#education` section:
- Replace `College / University Name` with your real college or institute name.
- Update your specific degree, department, or graduation year as you progress.

### 3. Adding New Skills
To add JavaScript, React, or Databases later:
Copy any skill card block in the `#skills` section of [index.html](file:///c:/Users/acer/Desktop/aravind/index.html) and customize the label and icon.

### 4. Connecting the Contact Form
- By default, submitting the form opens the visitor's mail client with a pre-filled subject and message.
- To enable direct API submissions without a backend, sign up for a free endpoint at [formspree.io](https://formspree.io) and paste your endpoint into `action="https://formspree.io/f/YOUR_FORM_ID"` on the `<form>` in [index.html](file:///c:/Users/acer/Desktop/aravind/index.html).

---

## 🌐 Deploying to the Web for Free

### Deploying to GitHub Pages
1. Initialize a git repository and push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub, go to **Settings > Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Deploying to Vercel or Netlify
1. Drag and drop the `aravind` folder into [Netlify Drop](https://app.netlify.com/drop) or import from GitHub on [Vercel](https://vercel.com).
2. It will deploy instantly with HTTPS and custom domain support.
