import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Daya Consultancy Service Pvt. Ltd.",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Dec 2022 - June 2023",
        points: [
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
            "Proficient in React.js and related libraries(React Router, etc.)",
            "Strong understanding of JavaScript, HTML5, CSS3, and front - end development principles.",
            "Experience with modern front- end tools and workflows(Webpack,Babel, npm, etc.)",
            "Familiarity with UI / UX best practices and responsive design.",
            "Knowledge of version control systems(Git) and agile development methodologies.",
            "Excellent problem - solving and analytical skills.",
            "Strong communication and collaboration abilities."
        ],
    },
    {
        title: "Full Stack Engineer",
        company_name: "Root Technologies",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "June 2023 -  September 2023",
        points: [
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",

            "Developed and maintained responsive web applications using React.js,ensuring high performance and scalability.",
            "Collaborated with cross-functional teams (designers, backend developers,and stakeholders) to gather requirements and deliver optimal solutions.",
            "Implemented UI/UX designs and ensured pixel-perfect representation on different devices and browsers.",
            "Made APIs and third-party libraries to add functionality and improve,seamless data flow  experience worked across 15+ global countries.",
            "Troubleshot and resolved bugs, performance issues, and other technical problems."
        ],
    },
    {
        title: " Drsignet Healthcare Pvt Lrd. ",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "September 2023 - Present",
        points: [
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
            "Integrate the MERN application with other healthcare systems, such as Electronic Health Records(EHR) systems, third- party APIs, or medical devices.",
            "Provide support and troubleshooting in case of emergencies or system failures, ensuring minimal downtime for critical healthcare services.",
            "Database Design and Management.",
            "Design and implement MongoDB databases to store and manage healthcare - related data efficiently.",
            "Ensure proper indexing, data integrity, and security of sensitive health information.",
            "Create and maintain documentation for code, APIs, and system architecture to facilitate easy understanding, troubleshooting, and future development.",
            "Develop server - side logic using Node.js and Express.js to handle requests,authentication, authorization, and data processing.",
            "Conduct thorough testing of the application, including unit testing,integration testing, and end - to - end testing, to ensure the reliability and accuracy of healthcare - related functionalities.",
            "Implement responsive design and ensure a positive user experience for healthcare professionals and patients."
        ],
    },
  
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/AgniTanmay',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/agni-tanmaya-behera/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Library Management System',
        description: 'Developed a web application that tracks and notifies students for issueing books from library and paying fines to libary',
        link: 'https://github.com/AgniTanmay/Library-Management-System',
    },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    // },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];