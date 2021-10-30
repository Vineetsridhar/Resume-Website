import images from '../assets/index'

export const projectData = [
    {
        className:"glydeBox",
        site: "https://glyde.app/",
        image: images.glyde,
        title: "Glyde",
        tip:"Click to see our site",
        logos: [images.javascript, images.react, images.aws, images.mongo],
        points: ["Built an application to facilitate the ordering and payment process within any food establishment",
                "Collaborated with a diverse team of 5 engineers to develop a mobile application using React Native frontend and a NodeJS backend deployed on AWS Elastic Beanstalk using MongoDB as the datastore",
                "Led a team of 5 developers to build mobile and web applications used by restaurants, customers, and Glyde employees to manage the Glyde ecosystem",
                "Raised $350k in funding from Village Global and AngelList to launch at over a dozen restaurants",
            ]
    },
    {
        className:"rmpBox",
        site: "https://devpost.com/software/terra-pay",
        image: images.terra,
        title: "Terra Pay",
        logos: [images.javascript, images.react],
        points: [
            "An application to bring decentralized finance to the masses",
            "Utilized the Terra Blockchain to securely transfer funds, Stripe as a mock fiat on-ramp and algorithms such as Diffie-Hellman for P2P key exchange",
            "Won Organizer's choice and best financial hack at the Drexel University hackathon (Spring 2021)"
        ]
    },
    {
        className:"rmpBox",
        site: "https://github.com/Vineetsridhar/RMPExtension",
        image: images.logo,
        title: "Schedule Builder Ext",
        logos: [images.javascript],
        points: ["Developed a Chrome extension to display professor ratings on the official NJIT Schedule builder",
                "Ensures students can have the best experience by comparing professor details without having to leave the page.",
                "Created a GraphQL API to query professor ratings from PostgreSQL database",
                "Utilized Docker to containerize the Node server, and Docker-Compose to run the database and Server on Google Cloud Platform (GCP) Compute Engine",
                "Received over 300 downloads on the Chrome Web Store as well as a 5-star rating"
            ]
    },
    {
        className:"dataTransferBox",
        site: "https://github.com/Vineetsridhar/Impression",
        image: images.impression,
        title: "Impression",
        logos: [images.react, images.python],
        points: ["Collaborated with partners to build an application that allows students and recruiters to seamlessly share important information using QR codes.",
                "Built the application using a React Native frontend and Python backend deployed on Heroku.",
                "Implemented CI/CD using CircleCI and attained 90% coverage using the coverage and unittest modules",
            ]
    }

]
