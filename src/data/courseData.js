import images from '../assets/index'

export const courseData = [

    {
        className: 'glydeBox',
        site: '',
        title: 'CS288',
        logos:[images.bash, images.c],
        points:[
            'Intensive programming in Linux', 
            "Learned ANSI C and bash to build multiple programs and projects throughout the semester", 
            "Worked with multiprocessing using OpenMP",
            "Utilized the LAMP stack to create a basic webpage as well as python for data scraping"
        ],
    },
    {
        className: 'measurableBox',
        site: '',
        title: 'CS301/CS482',
        logos:[images.python],
        points:[
            'Data Science', 
            "Learned and utilized (Scikit-Learn) multiple different machine learning models such as",
            ["Linear Regression", "Logistic Regression", "K Nearest Neighbor", "Boosting (AdaBoost/XGBoost)", "Bagging (RF)"],
            "Built multuple neural networks / convolutional neural networks (TensorFlow / Keras)",
            "Familiar with the inner workings behind many algorithms such as Stochastic Gradient Descent and Neural Network Backpropagation algorithms"
        ],
    },
    {
        className: 'mirrorBox',
        site: '',
        title: 'CS490',
        logos:[images.react, images.psql, images.python],
        points:[
            'Software engineering', 
            "Utilized react, flask, postgres and socket.io to create multiple applications", 
            "Learned about important software engineering concepts like CI/CD, git, linting, Unit Tests, Agile method, etc.", 
            "Built multiple projects using these techniques to reinforce these concepts"
        ],
    },
    {
        className: 'dataTransferBox',
        site: '',
        title: 'CS356',
        logos:[ images.python],
        points:[
            'Computer Networks', 
            "Learned about the TCP/IP model", 
            "Used python to create client and server applications to reinforce these concepts",
        ],
    },
    {
        className: 'acmBox',
        site: '',
        title: 'CS631',
        logos:[images.sql,],
        points:[
            'Database design and management', 
            "Created and utilized ER diagrams to build robust database applications", 
            "Created complicated queries using relational algebra as well as SQL",
        ],
    },
    {
        className: 'mirrorBox',
        site: '',
        title: 'CS610',
        logos:[],
        points:[
            'Data Structures and Algorithms', 
            "Worked with multiple datastructures including but not limiteed to",
            ["Heaps", "Linked Lists", "Trees", "Hashmaps"],
            "Learned how to analyze and prove asympotitic time and space complexity", 
            "Learned how to analyze recurrence relations"
        ],
    },
]
