# 🧭 Your Portfolio — Change-Me Guide

## 1. Run it on your laptop (first time only)
1. Install Node.js (LTS) from nodejs.org
2. Open this folder in a terminal, then run:
   ```
   npm install
   npm start
   ```
3. Your site opens at http://localhost:3000 and refreshes every time you save.

## 2. What to edit (almost everything is ONE file)
Open `src/portfolio.js`. Search for `✏️ CHANGE ME` — each one is a spot to replace.

| Page section        | Name in portfolio.js | What to change |
|---------------------|----------------------|----------------|
| Top / hero          | `greeting`           | name, heading, 1–2 line pitch |
| Social icons        | `socialMediaLinks`   | GitHub, LinkedIn, email (blank = hidden) |
| Summary (Who I am)  | `summarySection`     | paragraphs (**bold** with double stars) |
| Skills              | `skillsSection`      | icon row + grouped chips |
| Education           | `educationInfo`      | college, degree, years/CGPA |
| Projects            | `bigProjects`        | one block per project |
| Experience          | `workExperiences`    | set `display: true` + fill in |
| Achievements        | `achievementSection` | emoji cards |
| Contact             | `contactInfo`        | email, phone |

Every section has `display: true/false` to show or hide it.

## 3. Common tasks
- **Add a project:** copy one `{ ... }` block in `bigProjects.projects`, paste after a comma.
- **Add a screenshot to a project:** put the file in `src/assets/images/` and add
  `image: require("./assets/images/myshot.png"),` to that project.
- **Replace the resume:** overwrite `src/containers/greeting/resume.pdf` (keep the name).
- **Change colors:** `src/_globalColor.scss` (`$buttonColor`, `$skillsColor`, `$darkBackground`).
- **Page tab title / icon:** `public/index.html` and `public/favicon.ico`.
- **Dark / light mode:** automatic; the toggle is in the top bar.

## 4. Put it online (GitHub Pages)
1. Create a GitHub repo named `portfolio`.
2. In `package.json`, change `"homepage"` to `https://YOUR-GITHUB-USERNAME.github.io/portfolio`.
3. Run:
   ```
   git init && git add . && git commit -m "portfolio"
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   npm run deploy
   ```
4. In the repo: Settings → Pages → branch `master` (folder `/root`). Live in ~2 minutes.

## 5. If something breaks
- Red error after saving → you probably deleted a quote `"` or comma `,`. Undo and retry.
- Blank page → open browser console (F12) and read the first red line.
- Warnings about "image missing" in Education are harmless (logos are optional).
