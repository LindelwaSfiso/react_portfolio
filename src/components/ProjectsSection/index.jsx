const AfriShopOn = "/projects/afrishopon_web.png";
const FeedMaster = "/projects/feedmaster.png";
const BibleApp = "/projects/feature_graphic_bible.png";
const EmergencyApp = "/projects/emergency_web.png";
const TinyawoFoundation = "/projects/TinyawoFoundation.png";
const TheraChat = "/projects/TheraChat_eswatini.png";

import Featured from "./FeaturedProject";

const featureProjects = [
    {
        image: FeedMaster,
        title: "IOT: Canteen Management Sys.",
        body: 'Designed a Single Page Application (SPA) dashboard with Django + ReactJS. This is a canteen management system, which kees track of the coupons handed out by the canteen to employees in the company. This is an IoT system, since I also deployed an RFID scanner.',
        tech: [
            "Django Python",
            "ReactJS",
            "MySQL",
            "MUI 5",
            "Redux",
            "Webpack",
            "Git"
        ],
    },
    {
        image: TinyawoFoundation,
        title: "Tinyawo Foundation Eswatini: NGO",
        body: "Crafted with WordPress and integrated AI functionalities for an engaging user experience. " +
            "The Eswatini Tinyawo Foundation’s website is a digital platform that reflects the NGO’s commitment to social welfare. It serves as a hub for information, donations, and community engagement, focusing on providing essentials like toiletries and food parcels, as well as developmental programs for all ages. " +
            "Features:\n" +
            "\n" +
            "1. WordPress Excellence: Built on WordPress to ensure ease of content management and scalability.\n" +
            "2. AI Integration: Incorporated AI tools to personalize user interactions and streamline donation processes.\n" +
            "3. Community Outreach: A portal for volunteers and donors to connect with the foundation’s initiatives.",
        tech: [
            "WordPress",
            "WooCommerce",
            "Elementor",
            "FlutterFlow",
            "Git"
        ],
    },
    {
        image: TheraChat,
        title: "TheraChat: Mental health App",
        body: "TheraChat is an innovative platform designed to bridge the gap between mental health professionals and individuals seeking support in Eswatini. It offers a confidential and convenient way to assess mental wellness services from the comfort of one’s home." +
            "Features: " +
            "1. User-Friendly Interface: Developed with NextJs for a responsive and intuitive user experience.\n" +
            "2. Backend Excellence: Utilized Appwrite for robust backend operations, ensuring data security and efficient service delivery.\n" +
            "3. Real-Time Assistance: Immediate access to mental health assessments and professional guidance.",
        tech: [
            "NextJs",
            "ReactJS",
            "TailwindCSS",
            "AppWrite",
            "Webpack",
            "Git"
        ],
    },
    {
        image: AfriShopOn,
        external: 'https://afrishopon.co.za/',
        title: "Ecommerce: AfriShopOn PTY (LTD)",
        body: "AfriShopOn is an e-commerce startup that provides customers with an affordable, simple and convenient online shopping experience. And provides retailers with access to the online market, and it’s plenty opportunities. The startup provides an online platform (website) for customers to select from a wide range of goods and services, and have the opportunity to checkout with MTN MoMo, we also do deliveries. Retailers are able to add and manage their products on the platform, and pay a commission fee to AfriShopOn. This project consists of the website and a complimentary Android application. The application communicates via a set of Rest API to get data from the server. Python is used mainly on the backend, with Bootstrap/Material Wb Components being used on the frontend. Note: The live application is currently under maintenance, therefore, the screenshots below only show the test environment.",
        tech: [
            "Django Python",
            "Bootstrap 5 & JQuery",
            "MySQL",
            "Material UI 5 (MUI 5)",
            "Hosted on Pythonanywhere",
        ],
    },
    {
        image: EmergencyApp,
        title: 'Eswatini Emergency Reporting System',
        github: 'https://github.com/LindelwaSfiso/emergency-reporting-system',
        external: 'https://eswatiniemergencyservices.netlify.app/',
        body: "A web portal that serves as a centralized platform for emergency service personnel in Eswatini to oversee incidents that have been reported. Developed using ReactJs, it leverages Firebase for backend functionalities, including user authentication, data storage, and the delivery of real-time notifications. While the user interface is tailored for desktop usage and is not responsive, the system is part of a larger initiative that includes a mobile application designed for the public to report emergencies. This comprehensive system not only facilitates the management of these reports but also features the capability to broadcast important public notices, such as traffic alerts about accidents on major highways. Part of my final year project.",
        tech: [
            'Firebase',
            'ReactJS',
            'Material UI 5 (MUI 5)',
            'Hosted on Netlify',
        ]
    },
    {
        image: BibleApp,
        title: 'Siswati Bible Online + App',
        github: 'https://github.com/LindelwaSfiso/libhayibheli-lelingwele',
        external: 'https://libhayibheli.pythonanywhere.com/',
        body: 'This a ReactJs based application for accessing the Siswati Bible online. It has other translations like; KJV, ASV, BBE and others. It uses Django as the backend. The UI is very minimalistic and responsive. Redux is also used for keeping state. This is test project for checking the viability of using Django with ReactJS. The setup was quite challenging but it eventually worked. '+
        "Also made a mobile application version of the app using native Android tools, written mainly in Kotlin.",
        tech: [
            'Django',
            'ReactJS',
            "Kotlin/Android/Java",
        ]
    }
];

export default function ProjectsSection() {
    return (
        <div className="mt-8 md:mt-16">

            <p className="p-4 pl-0 text-xl sm:text-3xl font-bold capitalize">
                Playground Projects
            </p>

            <Featured featuredProjects={featureProjects}/>

        </div>
    );
}
