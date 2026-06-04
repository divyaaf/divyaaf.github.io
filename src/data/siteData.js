import tableauImage from '../assets/Tableau.jpeg';
import waveImage from '../assets/WAVE.jpeg';
import beehiveImage from '../assets/Beehive.jpeg';
import automationImage from '../assets/Automation.png';
import codingcamp1Image from '../assets/CodingCamp1.png';

export const siteNavigation = [
  { path: '/', label: 'Home', exact: true },
  { path: '/about', label: 'About Me' },
  { path: '/projects', label: 'Projects' },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/divya-asri-febrianty/',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/divyaaf',
  },
];

export const summaryText =
  'Information System graduate from Bina Nusantara University. Experience in manual testing, application testing, and system validation. I have experience analyzing system functionality and identifying real issues across both web and mobile platforms to improve overall product quality. Additionally, I am seeking opportunities in the Information Systems field to leverage my skills and support continuous system development.';

export const experienceItems = [
  {
    title: 'Application Tester Intern, Mandiri Utama Finance',
    bullets: [
      'Executed 50+ manual test cases across 5+ projects within the Business System and Entrepreneur teams for both web and mobile applications, ensuring feature functionality and UAT readiness.',
      'Performed data validation using SQL to ensure accuracy between UI and database records.',
      'Utilized Postman to generate test data and simulate 30+ transaction scenarios to support testing workflows.',
      'Discovered and documented 25+ real issues in JIRA, managing the defect lifecycle through detailed reporting, retesting, and final status resolution.',
      'Collaborated with 3 cross-functional teams (developers, business analysts, and operations) to clarify BRD and communicate issues,resulting in faster defect resolution and smoother testing cycles.',
    ],
  },
  {
    title: 'Student Organization Staff, HIMSISFO',
    bullets: [
      'Supported student organization activities through event preparation and coordination with team members.',
      'Collaborated with cross-functional teams to ensure smooth communication and event implementation.',
    ],
  },
];

export const projectItems = [
    {
    title: 'Web Application Test Automation',
    image: automationImage,
    bullets: [
      'Developed automated test scripts for web applications using Katalon Studio and managed version control with Git',
      'Implemented Functional & UI Automation, including complex scenarios such as dynamic elements, modal verification, and multi-page data table operations (Search, Edit, Delete).',
    ],
    links: [
      {
        label: 'View on GitHub',
        href: 'https://github.com/divyaaf/katalon-web-automation-portfolio',
      },
    ],
  },
  {
    title: 'Expense & Budget Visulizer',
    image: codingcamp1Image,
    bullets: [
      'Developed a mobile friendly expense tracking web applicatio using HTML,CSS and Vanilla Javascript.',
      'Implemented browser Local Storage for client-side data management, featuring dynamic transaction lists, total balance calculation, and a spending distribution chart.',
      'Integrated advanced user features including a dark/light mode toggle, custom category creation, transaction sorting, and a monthly budget limit tracker.',
    ],
    links: [
      {
        label: 'View Live App',
        href: 'https://divyaaf.github.io/CodingCamp-25May26-divya/',
      },
      {
        label: 'View Certificate',
        href: 'https://drive.google.com/file/d/1mfKioCsNhOZw-6B7LWvxRe3IsKaZF5BR/view?usp=sharing',
      }
    ]
  },
  {
    title: 'Academic Information System Projects (WAVE & FIMAN)',
    image: waveImage,
    bullets: [
      'Conducted requirement analysis and created process flow documentation.',
      'Developed system models as part of coursework projects.',
    ],
    links: [
      {
        label: 'Wave',
        href: 'https://www.figma.com/design/v6EhgyHreBST5ZPkdercop/WAVE?node-id=0-1&t=hYBRr9uytlZ9COEA-1',
      },
      {
        label: 'Fiman',
        href: 'https://docs.google.com/document/d/1i2dOQ92bQjriBJn110u9CHTKU3Y-eqJWqMtrPN8C4NI/edit?usp=drive_open&ouid=104236313520444042724',
      },
    ],
  },

  {
    title: 'BEEHIVE Database Project',
    image: beehiveImage,
    description:
      'Designed relational database structures and defined table relationships.',
    links: [
      {
        label: 'Beehive',
        href: 'https://drive.google.com/file/d/1htqMK2d1pEMJxXWi1y-DIi3PgAYgkWJB/view',
      },
    ],
  },
  {
    title: 'Data Visualization Project',
    description:
      'Created interactive visualizations using Tableau (Pie Chart, Tree Map, Highlight Table).',
    image: tableauImage,
    links: [
      {
        label: 'Tableau',
        href: 'https://drive.google.com/file/d/1Pcy-qX8QF8hOKkb5MKWbiinuVePcJ-xk/view',
      },
    ],
  },
];