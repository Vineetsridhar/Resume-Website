import images from '../assets/index'

export const projectData = [
    {
        className:"glydeBox",
        site: "https://glyde.app/",
        image: images.glyde,
        title: "Glyde",
        tip:"Click to see our site",
        logos: [images.javascript, images.react, images.aws, images.mongo],
        points: ["Mobile and web application which automates the ordering and payment process within various food establishments",
                "Partnered with multiple companies such as Olo and Brink and has been implemented at over 5 restaurants",
                "Working with 6 team members to grow the company as well as managing 4 developers in building the application itself",
                "Experience using AWS Elastic Beanstalk with Node JS server and MongoDB database.",
                "Implemented an authentication middleware using JWT",
            ]
    },
    {
        className:"dataTransferBox",
        site: "https://github.com/SamC12345/MagicMirror",
        image: images.hacknjit,
        title: "Magic Mirror",
        logos: [images.python],
        points: ["A mirror with a display and camera which uses Artificial Intelligence to track moods.  ",
                "Records emotion on the user’s face as well as performing a sentiment analysis of users’ responses to a verbal conversation had between them and the mirror. ",
                "Was also able to use OpenCV and Azure Speech SDK to implement live object tracking so that users can directly interact with the mirror by moving their hands or with voice controls ",
                "This information could prove to be useful for therapists who want to keep tracks of moods of their patients.  ",
            ]
    },
    {
        className:"rmpBox",
        site: "https://github.com/Vineetsridhar/RMPExtension",
        image: images.logo,
        title: "Schedule Builder Ext",
        logos: [images.javascript],
        points: ["Chrome extension which displays professor ratings directly on the NJIT Schedule builder.  ",
                "Has almost 300 downloads on the Chrome Web Store with a 5-star review",
                "Created a GraphQL API to query professor ratings from PostgreSQL database",
                "Used Docker to containerize the Node server, and used Docker-Compose to run the DB and Server on GCP ",
                "Created a simple caching mechanism, so that the RateMyProfessor site is not constantly being scraped",
                "Useful for NJIT students who now have easy access to ratings when making their schedules"
            ]
    },
    {
        className:"measurableBox",
        site: "https://github.com/Vineetsridhar/measurable",
        image: images.ruler,
        title: "Measurable",
        logos: [images.java, images.android],
        points: ["Mobile application which leverages the phone’s built in sensors to determine height and distance from objects in the real world ",
                "Using trigonometric functions, users can use the camera to mark the bottom and top of an object, and the application will be able to calculate its height and distance from the user",
                "Could facilitate people like handymen who need estimates of dimensions when giving quotes to clients ",
        ]
    },

]
