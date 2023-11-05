import AfriShopOn from "../../assets/projects/afrishopon_web.png";
import FeedMaster from "../../assets/projects/feedmaster.png";
import BibleApp from "../../assets/projects/bible_app.png";
import EmergencyApp from "../../assets/projects/emergency_web.png";

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
        image: AfriShopOn,
        // github: 'https://github.com/bchiang7/halcyon-site',
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
        body: 'This project was part of my final year project. Basically, it\'s a web portal used by emergency service personnel to manage reported emergencies in Eswatini. It is build with ReactJs and Firebase is used as the backend. Firebase manages authentication, data storage and realtime notifications. Note: The UI was designed for desktop devices, therefore non-responsive. In overall, the final year project, develops a mobile application used for reporting emergencies. The web portal, therefore, is used for managing all the reported emergencies. The app has several features like receiving public notice messages, eg, notify citizens if an accident has occurred on the major highways.',
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
        body: 'This a ReactJs based application for accessing the Siswati Bible online. It has other translations like; KJV, ASV, BBE and others. It uses Django as the backend. The UI is very minimalistic and responsive. Redux is also used for keeping state. This is test project for checking the viability of using Django with ReactJS. The setup was quite challenging but it eventually worked.',
        tech: [
            'Django',
            'ReactJS',
            'Redux',
            'Webpack',
            'MUI 5'
        ]
    }
];

export default function ProjectsSection() {
    return (
        <div className="mt-10">

            <p className="p-4 pl-0 text-xl sm:text-3xl font-bold capitalize">
                Playground Projects
            </p>

            <Featured featuredProjects={featureProjects}/>

        </div>
    );
}
