/* ==========================================================================
   👋 THE ONLY FILE YOU NEED TO EDIT:  src/portfolio.js
   --------------------------------------------------------------------------
   HOW TO READ THIS FILE
   • Every place marked  "✏️ CHANGE ME"  is something you should replace.
   • "// ON/OFF"  lines are switches:  display: true = show, false = hide.
   • Keep the quotes "..." and commas , exactly as they are. Only change the text inside the quotes.
   • To ADD another item (project / achievement / school), copy one whole { ... }, paste it
     right after it, and put a comma between them.
   • To REMOVE an item, delete its whole { ... } block (and its comma).
   • Save the file → the browser refreshes automatically (npm start).
   • Colors / theme are in src/_globalColor.scss (see CHANGE_ME_GUIDE.md).
   ========================================================================== */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

/* -------------------------- 0. SPLASH SCREEN ------------------------------
   The little animation shown for 2 seconds when the site opens. */
const splashScreen = {
  enabled: true, // ON/OFF  (false = skip the animation)
  animation: splashAnimation,
  duration: 2000 // milliseconds. 2000 = 2 seconds
};

const illustration = {
  animated: true // true = moving cartoon, false = still picture
};

/* -------------------------- 1. HERO (top of page) -------------------------
   The big first screen with your name, one-liner, buttons. */
const greeting = {
  username: "Likhitha", // ✏️ CHANGE ME: shown in the top-left logo  <Likhitha/>
  title: "Hi, I'm Likhitha", // ✏️ CHANGE ME: big heading
  subTitle: emoji(
    // ✏️ CHANGE ME: 1–2 lines max. This is your quick pitch.
    "A developer in the making, exploring AI, machine learning, and web development. I love turning ideas into projects and building things that are actually useful.Currently open to internships, full-time opportunities, and freelance projects. 🚀"
  ),
  // Resume button: the PDF that downloads is  src/containers/greeting/resume.pdf
  // ✏️ CHANGE ME: replace that file with your resume (keep the same name "resume.pdf").
  // Then put any non-empty text below to show the button, or "" to hide it.
  resumeLink: "resume.pdf",
  displayGreeting: true // ON/OFF
};

/* -------------------------- 2. SOCIAL LINKS -------------------------------
   Icons appear in the hero and the contact section.
   Leave a link as "" to hide that icon. */
const socialMediaLinks = {
  github: "https://github.com/likhitha402", // ✏️ CHANGE ME
  linkedin: "https://www.linkedin.com/in/likhitha-r-m-0638151ba", // ✏️ CHANGE ME
  gmail: "rmlikhitha057@gmail.com", // ✏️ CHANGE ME (just the email, no mailto:)
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  instagram: "", // e.g. "https://www.instagram.com/yourid"
  kaggle: "",
  display: true // ON/OFF
};

/* -------------------------- 3. SUMMARY ("Who I am") -----------------------
   NEW section (like Veena's "Professional Summary").
   Each line inside  paragraphs: [ ... ]  becomes one paragraph.
   Add/remove lines freely. Wrap words in **double stars** to make them bold. */
const summarySection = {
  display: true, // ON/OFF
  title: "Who I am", // ✏️ CHANGE ME: section heading
  subtitle: "PROFESSIONAL SUMMARY", // ✏️ CHANGE ME: small grey text under heading
  paragraphs: [
    // ✏️ CHANGE ME: paragraph 1 – who you are + what you study
"I'm a final-year B.E. Computer Science student at Mysore College of Engineering and Management (VTU), passionate about Artificial Intelligence, Machine Learning, and building impactful web applications.",
    // ✏️ CHANGE ME: paragraph 2 – what you've built / your strengths
"I enjoy turning ideas into practical solutions through AI/ML applications and full-stack web development. From intelligent systems to user-friendly web experiences, I love experimenting with new technologies and building projects that solve real-world problems.",
    // ✏️ CHANGE ME: paragraph 3 – what you're looking for
"I'm open to internships, full-time software engineering opportunities, and freelance projects where I can contribute my skills, collaborate with others, and continue growing as a developer."  ]
};

/* -------------------------- 4. SKILLS -------------------------------------
   Two parts:
   (a) softwareSkills = round icons row
   (b) skillGroups    = grouped text chips, like Veena's "What I work with" */
const skillsSection = {
  title: "What I do", // ✏️ CHANGE ME
  subTitle: "ML / AI ENTHUSIAST & FULL-STACK LEARNER", // ✏️ CHANGE ME
  // Bullet lines under the icons. Add/remove lines. Emoji are fine.
  skills: [
    emoji("⚡ Build deep-learning models for image classification with Python, TensorFlow and Keras"),
    emoji("⚡ Develop web apps with Python, Flask, HTML, CSS and JavaScript"),
    emoji("⚡ Work in teams at hackathons to ship working prototypes fast")
  ],
  // (a) ICON ROW. fontAwesomeClassname = icon name from https://fontawesome.com/icons
  // (brand icons start with "fab fa-", normal ones with "fas fa-"). skillName = hover text.
  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "C / C++", fontAwesomeClassname: "fas fa-code"},
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"}
  ],
  // (b) GROUPS. title = group name, items = chips. Add/remove groups or items.
  skillGroups: [
    {title: "Programming Languages", items: ["Python", "C", "C++", "Java"]}, // ✏️ CHANGE ME
    {title: "Web & Backend", items: ["HTML", "Flask"]}, // ✏️ CHANGE ME
    {title: "Databases", items: ["SQL"]}, // ✏️ CHANGE ME
    {title: "ML / AI", items: ["TensorFlow", "Keras", "CNN", "Transfer Learning"]} // ✏️ CHANGE ME
  ],
  display: true // ON/OFF
};

/* -------------------------- 5. EDUCATION ----------------------------------
   One { } block per school/college. Newest first.
   logo is OPTIONAL: to add one, put the image in src/assets/images/ and add the line
        logo: require("./assets/images/yourLogo.png"),
   descBullets = optional bullet points (delete the whole line to remove). */
const educationInfo = {
  display: true, // ON/OFF
  schools: [
    {
      schoolName: "Mysore College of Engineering and Management (VTU)", // ✏️ CHANGE ME
      subHeader: "Bachelor of Engineering in Computer Science", // ✏️ CHANGE ME (degree)
      duration: "2024 – 2027 · CGPA 8.3 / 10", // ✏️ CHANGE ME (years + CGPA)
      desc: "Focus on machine learning, cloud computing,artficial intelligence and software engineering.", // ✏️ CHANGE ME
      descBullets: [
        "Final-year project: AI-based medical diagnosis system", // ✏️ CHANGE ME
        "Participated in multiple hackathons"
      ]
      
    },
    {
      schoolName: "Manasarowar Pushkarini Vidyasharama", // ✏️ CHANGE ME
      subHeader: " Pre-University Course", // ✏️ CHANGE ME (degree)
      duration: " Percentage  82.8%", // ✏️ CHANGE ME (years + CGPA)
      
    }
    
    
    // ✏️ TO ADD PUC / 12th: copy the block above, paste here after a comma, and edit.
  ]
};

/* Skill-progress bars (off, because the new grouped skills replace them). */
const techStack = {
  viewSkillBars: false, // ON/OFF
  experience: [{Stack: "Programming", progressPercentage: "80%"}],
  displayCodersrank: false
};

/* -------------------------- 6. EXPERIENCE ---------------------------------
   Internships / jobs / freelance. Currently OFF because no entry is filled in.
   ✏️ TO USE: set display to true, then edit the sample block below.
   companylogo is OPTIONAL (add: companylogo: require("./assets/images/x.png"),). */
const workExperiences = {
  display: false, // ON/OFF  ← change to true once you add your real experience
  experience: [
    {
      role: "Intern", // ✏️ CHANGE ME
      company: "Company Name", // ✏️ CHANGE ME
      date: "Jun 2025 – Aug 2025", // ✏️ CHANGE ME
      desc: "One line about what you did.", // ✏️ CHANGE ME
      descBullets: ["What you built or improved", "Tools you used"] // ✏️ CHANGE ME
    }
  ]
};

/* GitHub pinned-repos section (needs a token; kept OFF so the site works instantly). */
const openSource = {
  showGithubProfile: "false",
  display: false // ON/OFF
};

/* -------------------------- 7. PROJECTS -----------------------------------
   One { } per project. Fields:
     emoji       – small icon on the card (optional)
     featured    – true shows a ★ Featured badge (use for your best 1 project)
     projectName – title
     projectDesc – 1–3 sentence description
     tech        – tech chips
     bullets     – optional bullet points (delete the line to hide)
     image       – OPTIONAL screenshot: require("./assets/images/shot.png")
     footerLink  – buttons: {name: "Live Demo", url: "https://..."}  (url "" = no click) */
const bigProjects = {
  title: "Projects", // ✏️ CHANGE ME
  subtitle: "THINGS I'VE BUILT", // ✏️ CHANGE ME
  display: true, // ON/OFF
  projects: [
    {
      emoji: "🩺",
      featured: true,
      projectName: "AI-Based Medical Diagnosis System", // ✏️ CHANGE ME
      projectDesc:
        "Team deep-learning project for multi-disease medical image classification with explainable predictions.", // ✏️ CHANGE ME
      tech: ["Python", "TensorFlow", "Keras", "Grad-CAM"], // ✏️ CHANGE ME
      bullets: [
        "Applied transfer learning with MobileNet, ResNet50, VGG16 and DenseNet121",
        "Improved image quality using CLAHE preprocessing",
        "Added Grad-CAM heatmaps to explain model decisions, plus an ensemble method"
      ],
     // footerLink: [{name: "View Code", url: "https://github.com/YOUR-USERNAME/REPO"}] // ✏️ CHANGE ME
    },
    //{
    //  emoji: "🧵",
     // projectName: "FitMe — Tailoring Marketplace",
     // projectDesc:
    //    "Web app connecting customers with local tailors, with an AI fabric estimator, virtual trial and tailor matching.",
     // tech: ["Web App", "AI", "Vercel"],
     // footerLink: [{name: "Live Demo", url: "https://fit-me-1wqp.vercel.app"}]
   // },
    //{
     // emoji: "🌐",
      //projectName: "DomainLocator",
      //projectDesc:
      //  "Tool that finds a website's geographic location and scans for vulnerabilities, inspired by whois / nslookup / traceroute. Won 3rd place at a hackathon.", // ✏️ CHECK which hackathon
    //  tech: ["Python"],
     // footerLink: [{name: "View Code", url: ""}] // ✏️ CHANGE ME
   // },
    {
      emoji: "🛡️",
      projectName: "CogniSafe",
      projectDesc:
        "Behavioural fraud detection that risk-scores banking sessions from keystrokes, mouse movement and idle time, then triggers OTP verification.",
      tech: ["React", "JavaScript", "Node.js", "Flask"],
     // footerLink: [{name: "View Code", url: ""}] // ✏️ CHANGE ME
    },
    {
      emoji: "🚗",
      projectName: "CarPredict",
      projectDesc:
        "Car price prediction platform with a working ML model, login / signup, and pages to browse, compare and save cars.",
      tech: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
     // footerLink: [{name: "View Code", url: ""}] // ✏️ CHANGE ME
    }
  ]
};

/* -------------------------- 8. ACHIEVEMENTS -------------------------------
   One { } per card. Use emoji (easiest) OR an image.
     emoji   – big icon on the card
     title   – bold line      subtitle – description line
     image   – OPTIONAL instead of emoji: require("./assets/images/cert.png")
     footerLink – buttons, e.g. {name: "Certificate", url: "https://..."}  ([] = none) */
const achievementSection = {
  title: emoji("Achievements 🏆"), // ✏️ CHANGE ME
  subtitle: "Milestones, certifications and recognition", // ✏️ CHANGE ME
  display: true, // ON/OFF
  achievementsCards: [
    {
      emoji: "🥉",
      title: "3rd Place — Agent Hack", // ✏️ CHECK / CHANGE ME
      subtitle: "UiPath Agentic AI hackathon.",
      footerLink: []
    },
    {
      emoji: "💻",
      title: "3rd Place — HackVerse 2025",
      subtitle: "Participated and built a working prototype with a team.", // ✏️ CHANGE ME
      footerLink: []
    },
    {
      emoji: "🎓",
      title: "Infosys Springboard Certifications", // ✏️ CHANGE ME (course names)
      subtitle: "Completed industry-recognised certification courses.",
      footerLink: [{name: "Certificate", url: process.env.PUBLIC_URL + "/certificate.pdf"}
       , {name: "Certificate", url: process.env.PUBLIC_URL + "/certificate1.pdf"}
       ,{name: "Certificate", url: process.env.PUBLIC_URL + "/certificate2.pdf"}
        ,{name: "Certificate", url: process.env.PUBLIC_URL + "/certificate4.pdf"}
         ,{name: "Certificate", url: process.env.PUBLIC_URL + "/certificate5.pdf"}
          ,{name: "Certificate", url: process.env.PUBLIC_URL + "/certificate6.pdf"}
      ] // ✏️ CHANGE ME
    }
  ]
};

/* -------------------------- 9. HIDDEN SECTIONS ----------------------------
   Not in the reference portfolios, so they are OFF. Flip display to true to bring back. */
const blogSection = {title: "Blogs", subtitle: "", displayMediumBlogs: "false", blogs: [], display: false};
const talkSection = {title: "Talks", subtitle: "", talks: [], display: false};
const podcastSection = {title: "Podcast", subtitle: "", podcast: [], display: false};
const twitterDetails = {userName: "twitter", display: false};
const resumeSection = {title: "Resume", subtitle: "Feel free to download my resume", display: false};

/* -------------------------- 10. CONTACT -----------------------------------
   Bottom section (like Veena's "Say Hello"). */
const contactInfo = {
  title: emoji("Say Hello ☎️"), // ✏️ CHANGE ME
  subtitle: "Open to internships, full-time roles and collaborations. I usually reply within 24 hours.", // ✏️ CHANGE ME
  number: "+91-9164497946", // ✏️ CHANGE ME: phone like "+91-XXXXXXXXXX", or "" to hide
  email_address: "rmlikhitha057@gmail.com" // ✏️ CHANGE ME
};

// Shows "Open for opportunities" status. true / false
const isHireable = true;

export {
  illustration, greeting, socialMediaLinks, splashScreen, summarySection, skillsSection,
  educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection,
  blogSection, talkSection, podcastSection, contactInfo, twitterDetails, isHireable, resumeSection
};
