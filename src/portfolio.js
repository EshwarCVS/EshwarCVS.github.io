/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Eshwar Chandra Vidhyasagar Thedla",
  title: "Hi all, I'm Eshwar",
  subTitle: emoji(
    "Hello! I’m Eshwar, a Software Developer II at United Wholesale Mortgage, where I specialize in building scalable microservices and enhancing user experience. With expertise in C#, Kafka, Azure CosmosDB, and Redis, I create high-performance solutions that streamline data flows and improve reliability."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1KoSpTt4_62aTJN3Mm1q2bzAqTD2gz8eP/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/EshwarCVS",
  linkedin: "https://www.linkedin.com/in/eshwarchandravidhyasagar/",
  gmail: "thedlaeshwar@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/9686522/eschvisa",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Build the backend for web and applications")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fa-brands fa-java"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fa-brands fa-wordpress"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "North Carolina State University",
      logo: require("./assets/images/ncsuLogo.jpeg"),
      subHeader: "Master of Computer Science",
      duration: "January 2021 - May 2022",
      desc: "Coursework: Database Management Concepts and Systems; Artificial Intelligence; Automated Learning and Data Analysis; Design and Analysis of Algorithms; Computer Networks; Service-Oriented Computing",
      descBullets: [
      ]
    },
    {
      schoolName: "Osmania University",
      logo: require("./assets/images/osmaniaLogo.jpeg"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2015 - May 2019",
      desc: "Relevant Coursework: Data Structures; Object Oriented Programming; Databases Management Systems; Operating Systems; Data Communication; Design and Analysis of Algorithms; Computer Architecture; Software Engineering; Web Programming and Services; Compiler Construction; Data Mining; Artificial Intelligence; Computer Networks; Distributed System; Image Processing; Cloud ComputingRelevant Coursework: Data Structures; Object Oriented Programming; Databases Management Systems; Operating Systems; Data Communication; Design and Analysis of Algorithms; Computer Architecture; Software Engineering; Web Programming and Services; Compiler Construction; Data Mining; Artificial Intelligence; Computer Networks; Distributed System; Image Processing; Cloud Computing",
      descBullets: ["Activities and societies: CSI student chapter"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Design",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer - 2",
      company: "United Wholesale Mortgage",
      companylogo: require("./assets/images/uwmLogo.png"),
      date: "February 2024 – Present",
      desc: "Developed scalable C# microservices for high-volume applications, including a PDF generation service with Aspose, CosmosDB, and Redis (Cache-Aside pattern), supporting 1K daily requests and improving document accuracy in line with MISMO standards. Designed Kafka-integrated microservices handling 1.2M peak requests, ensuring seamless API compatibility and automated email workflows. Enhanced security by integrating ADFS for secure document routing and MSAL for token management, optimizing data integrity and client access. Streamlined credit inquiry processes with Kafka queues, achieving 100% data integrity and reducing costs by 20%. Led test automation using xUnit, Stryker.Net, and Testcontainers, ensuring code reliability and efficient validation."
    },
    {
      role: "Software Dev Engineer",
      company: "Amazon",
      companylogo: require("./assets/images/amazonLogo.png"),
      date: "June 2022 – February 2024",
      desc: "Enhanced the “Buy Now” checkout experience with JSP and Java, boosting conversion rates by 25% for millions globally. Ensured system uptime and reliability during peak traffic, including Prime Day, achieving 99% uptime while managing 112K sales per minute with 12% reduced latency. Led API migration for checkout and third-party integrations, cutting API-related issues by 30% and enhancing security across the EU with Multi-Factor Authentication, reducing unauthorized access by 80%. Improved reliability by expanding testing coverage by 30% with Transport Layer Security certification across platforms. Provided on-call support to resolve over 100 defects, streamlining the checkout process and reducing user clicks by 20%, significantly enhancing the user experience."
    },
    {
      role: "Software Engineer",
      company: "Deloitte",
      companylogo: require("./assets/images/deloitteLogo.png"),
      date: "July 2019 – December 2020",
      desc: "Automated data loading and tax workflows with Python and Alteryx, boosting SQL Server dashboard performance by 97%, cutting tax analysis time by 98.5%, and delivering strategic insights to global developers."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some major contributions done",
  projects: [
    {
      image: require("./assets/images/expertizaLogo.png"),
      projectName: "Expertiza",
      projectDesc: "Expertiza is a web application through which students can submit and peer-review learning objects (articles, code, web sites, etc). The Expertiza project is supported by the National Science Foundation.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://wiki.expertiza.ncsu.edu/index.php/Expertiza_documentation"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/shellcastLogo.png"),
      projectName: "Shellcast",
      projectDesc: "ShellCast is a forecast tool that helps shellfish growers anticipate temporary harvest area closures due to excess rainfall and make data-driven management decisions. Forecast information on temporary closures is helpful because closures impact business: shellfish growers cannot harvest shellfish when a temporary closure is in effect.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ncsu-shellcast.appspot.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "E-week star award",
      subtitle:
        "Issued by NEN, Wadhwani foundation · Feb 2018",
      image: require("./assets/images/EweekLogo.png"),
      imageAlt: "E-week star award",
      footerLink: [
        {
          name: "E-week star award",
          url: ""
        }
      ]
    },
    {
      title: "SPOT Award",
      subtitle:
        "SPOT Award for first project at Deloitte",
      image: require("./assets/images/SPOTAward.jpeg"),
      imageAlt: "SPOT Award Deloitte",
      footerLink: [
        {
          name: "SPOT Award",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Subtitle",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "URL",
      title: "TITLE",
      description:
        "DESCRIPTION"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-9195274186",
  email_address: "thedlaeshwar@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  isHireable,
  resumeSection
};
