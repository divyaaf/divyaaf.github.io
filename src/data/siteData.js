import tableauImage from '../assets/Tableau.jpeg';
import waveImage from '../assets/WAVE.jpeg';
import beehiveImage from '../assets/Beehive.jpeg';
import automationImage from '../assets/Automation.png';

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
  'Final-year Information Systems student with hands-on experience in application testing and system validation during an internship at Mandiri Utama Finance Experienced in manual testing, analyzing system functionality and validating data using SQL, including reviewing test results and documenting defects.';

export const experienceItems = [
  {
    title: 'Application Tester Intern, Mandiri Utama Finance',
    bullets: [
      'Executed 50+ manual test cases for Android and web applications to ensure all features work correctly and meet the application standards.',
      'Performed data validation using SQL to ensure accuracy between UI and database records.',
      'Performed API testing using Postman to validate request and response accuracy.',
      'Identified and documented 30+ defects in JIRA, accelerating the bug-fix cycle through detailed reporting and retesting',
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