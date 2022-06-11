const express = require("express");
const app = express();
// use port 3000 for localhost or port 8080 for Google Cloud deployment
// const port = 8080;   // use for Google Cloud deployment
const port = 3000; // use for localhost

// This version contains the GCP cloud deployment of the back end

//  Resource
let projectResources = [
  // ----------------------- javascript language resources ------------------------

  {
    id: 1,
    resourceSubsection: "finTech",
    resourceType: "article",
    resourceTitle: "Banking Application",
    language: "javascript",
    link: "https://www.blog.duomly.com/node-js-course-with-building-a-fintech-banking-app-lesson-1-start-the-project/",
  },
  {
    id: 2,
    resourceSubsection: "finTech",
    resourceType: "article",
    resourceTitle: "Stock Chart Application",
    language: "javascript",
    link: "https://medium.com/how-to-react/create-a-stock-chart-in-react-js-677be5f2f356",
  },
  {
    id: 3,
    resourceSubsection: "finTech",
    resourceType: "article",
    resourceTitle: "Budget Application",
    language: "javascript",
    link: "https://codequs.com/p/HkcSFfseV",
  },
  {
    id: 4,
    resourceSubsection: "healthCare",
    resourceType: "youtube",
    resourceTitle: "Meditation Application",
    language: "javascript",
    link: "https://www.youtube.com/watch?v=oMBXdZzYqEk",
  },
  {
    id: 5,
    resourceSubsection: "healthCare",
    resourceType: "article",
    resourceTitle: "Doctor Appointment Booking Application",
    language: "javascript",
    link: "https://javascript.plainenglish.io/how-to-build-a-doctor-booking-app-for-healthcare-appointments-with-react-native-c3ddf4bb40af",
  },
  {
    id: 6,
    resourceSubsection: "healthCare",
    resourceType: "article",
    resourceTitle: "Fitness Tracker Application",
    language: "javascript",
    link: "https://blog.logrocket.com/create-a-fitness-tracker-with-react-and-firebase/",
  },
  {
    id: 7,
    resourceSubsection: "education",
    resourceType: "article",
    resourceTitle: "Note Taking Application",
    language: "javascript",
    link: "https://betterprogramming.pub/build-a-real-time-note-taking-app-in-javascript-bc6e8d149d51",
  },
  {
    id: 8,
    resourceSubsection: "education",
    resourceType: "article",
    resourceTitle: "Whiteboard Application",
    language: "javascript",
    link: "https://medium.com/@aydankirk92/building-a-real-time-multi-user-collaborative-whiteboard-using-fabric-js-part-i-23405823ee03",
  },
  {
    id: 9,
    resourceSubsection: "education",
    resourceType: "article",
    resourceTitle: "Flashcard Application",
    language: "javascript",
    link: "https://medium.com/@jesussantizo120/next-js-project-flash-cards-da08745512d8",
  },
  {
    id: 10,
    resourceSubsection: "eCommerce",
    resourceType: "youtube",
    resourceTitle: "Shopping Cart Application",
    language: "javascript",
    link: "https://www.youtube.com/watch?v=90PgFUPIybY",
  },
  {
    id: 11,
    resourceSubsection: "eCommerce",
    resourceType: "youtube",
    resourceTitle: "Real Estate Web Page",
    language: "javascript",
    link: "https://www.youtube.com/watch?v=UtaGNP7k4kA&list=PLajjpPyc2dmbt0KebBvT9VQV8y2R_IO7j&index=1",
  },
  {
    id: 12,
    resourceSubsection: "eCommerce",
    resourceType: "youtube",
    resourceTitle: "React Native NFT Marketplace App",
    language: "javascript",
    link: "https://www.youtube.com/watch?v=_ivIUCSOZ78",
  },
  {
    id: 13,
    resourceSubsection: "youtubeVideo",
    resourceType: "youtubeVideo",
    resourceTitle: "Virtual Keyboard Application",
    language: "javascript",
    link: "https://www.youtube.com/watch?v=oMBXdZzYqEk",
  },
  {
    id: 14,
    resourceSubsection: "youtubeVideo",
    resourceType: "youtube",
    resourceTitle: "NodeJS Rest API",
    language: "javascript",
    link: "https://www.youtube.com/watch?v=l8WPWK9mS5M",
  },
  {
    id: 15,
    resourceSubsection: "youtubeVideo",
    resourceType: "youtube",
    resourceTitle: "Responsive Portfolio Website",
    language: "javascript",
    link: "https://www.youtube.com/watch?v=3HNyXCPDQ7Q",
  },
  {
    id: 16,
    resourceSubsection: "techDocumentation",
    resourceType: "technicalDocumentation",
    resourceTitle: "MDN Web Docs - Javascript",
    language: "javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/javascript",
  },
  {
    id: 17,
    resourceSubsection: "techDocumentation",
    resourceType: "technicalDocumentation",
    resourceTitle: "React Framework Docs",
    language: "javascript",
    link: "https://reactjs.org/docs/getting-started.html",
  },
  {
    id: 18,
    resourceSubsection: "techDocumentation",
    resourceType: "technicalDocumentation",
    resourceTitle: "Node Framework Docs",
    language: "javascript",
    link: "https://nodejs.org/en/docs/",
  },
  {
    id: 19,
    resourceSubsection: "forum",
    resourceType: "forum",
    resourceTitle: "StackOverflow - Javascript",
    language: "javascript",
    link: "https://stackoverflow.com/questions/tagged/javascript",
  },
  {
    id: 20,
    resourceSubsection: "forum",
    resourceType: "forum",
    resourceTitle: "Javascript Subreddit",
    language: "javascript",
    link: "https://www.reddit.com/r/javascript/",
  },

  // ----------------------- python language resources -------------------------
  {
    id: 21,
    resourceSubsection: "finTech",
    resourceType: "youtube",
    resourceTitle: "Algorithmic Trading Course",
    language: "python",
    link: "https://www.youtube.com/watch?v=xfzGZB4HhEE",
  },
  {
    id: 22,
    resourceSubsection: "finTech",
    resourceType: "youtube",
    resourceTitle: "Analyzing Financial Statements",
    language: "python",
    link: "https://www.youtube.com/watch?v=ZAAuGEVJsH8",
  },
  {
    id: 23,
    resourceSubsection: "finTech",
    resourceType: "youtube",
    resourceTitle: "Stock Market Web Application",
    language: "python",
    link: "https://www.youtube.com/watch?v=eNDADqa9858",
  },
  {
    id: 24,
    resourceSubsection: "healthCare",
    resourceType: "youtube",
    resourceTitle: "Pose Estimation and Gym Tracker",
    language: "python",
    link: "https://www.youtube.com/watch?v=06TE_U21FK4",
  },
  {
    id: 25,
    resourceSubsection: "healthCare",
    resourceType: "youtube",
    resourceTitle: "Doctor Appointment Application",
    language: "python",
    link: "https://www.youtube.com/watch?v=3_3q_dE4_qs",
  },
  {
    id: 26,
    resourceSubsection: "healthCare",
    resourceType: "article",
    resourceTitle: "Calorie Calculator Application",
    language: "python",
    link: "https://data-flair.training/blogs/python-project-calorie-calculator-django/",
  },
  {
    id: 27,
    resourceSubsection: "education",
    resourceType: "youtube",
    resourceTitle: "Learning Management Application",
    language: "python",
    link: "https://www.youtube.com/watch?v=JIFqqdRxmVo&list=PLWKjhJtqVAblFnET3DbnAik--u4CBz62G&index=1",
  },
  {
    id: 28,
    resourceSubsection: "education",
    resourceType: "youtube",
    resourceTitle: "Entrance Exam Application",
    language: "python",
    link: "https://www.youtube.com/watch?v=UZQqaZgegL4&list=PLTUSGW0o2A2HDYJ5SWLa86OvriGtnw8My&index=2",
  },
  {
    id: 29,
    resourceSubsection: "education",
    resourceType: "article",
    resourceTitle: "Library Management Application",
    language: "python",
    link: "https://data-flair.training/blogs/library-management-system-python-project/",
  },
  {
    id: 30,
    resourceSubsection: "eCommerce",
    resourceType: "youtube",
    resourceTitle: "E-Commerce Application",
    language: "python",
    link: "https://www.youtube.com/watch?v=YZvRrldjf1Y&list=PLWKjhJtqVAblFnET3DbnAik--u4CBz62G&index=3",
  },
  {
    id: 31,
    resourceSubsection: "eCommerce",
    resourceType: "youtube",
    resourceTitle: "Grocery Store Application",
    language: "python",
    link: "https://www.youtube.com/watch?v=0ZaC6JaNpic&list=PLeo1K3hjS3uu1hh_qzBt6e379cofVD9Sb",
  },
  {
    id: 32,
    resourceSubsection: "eCommerce",
    resourceType: "youtube",
    resourceTitle: "Amazon Price Tracker Application",
    language: "python",
    link: "https://www.youtube.com/watch?v=Bg9r_yLk7VY",
  },
  {
    id: 33,
    resourceSubsection: "youtubeVideo",
    resourceType: "youtube",
    resourceTitle: "Machine Learning Web Application",
    language: "python",
    link: "https://www.youtube.com/watch?v=xl0N7tHiwlw",
  },
  {
    id: 34,
    resourceSubsection: "youtubeVideo",
    resourceType: "youtube",
    resourceTitle: "Django REST API",
    language: "python",
    link: "https://www.youtube.com/watch?v=c708Nf0cHrs",
  },
  {
    id: 35,
    resourceSubsection: "youtubeVideo",
    resourceType: "youtube",
    resourceTitle: "Advanced Computer Vision",
    language: "python",
    link: "https://www.youtube.com/watch?v=01sAkU_NvOY",
  },
  {
    id: 36,
    resourceSubsection: "techDocumentation",
    resourceType: "youtube",
    resourceTitle: "Python Docs",
    language: "python",
    link: "https://docs.python.org/3/",
  },
  {
    id: 37,
    resourceSubsection: "techDocumentation",
    resourceType: "technicalDocumentation",
    resourceTitle: "Flask Framework Docs",
    language: "python",
    link: "https://flask.palletsprojects.com/en/2.1.x/",
  },
  {
    id: 38,
    resourceSubsection: "techDocumentation",
    resourceType: "technicalDocumentation",
    resourceTitle: "Django Framework Docs",
    language: "python",
    link: "https://docs.djangoproject.com/en/4.0/",
  },
  {
    id: 39,
    resourceSubsection: "forum",
    resourceType: "forum",
    resourceTitle: "StackOverflow - Python",
    language: "python",
    link: "https://stackoverflow.com/questions/tagged/python",
  },
  {
    id: 40,
    resourceSubsection: "forum",
    resourceType: "forum",
    resourceTitle: "Python Subreddit",
    language: "python",
    link: "https://www.reddit.com/r/python/",
  },
];

// GET http://localhost:3000/api/projectResources?lang=javascript
// or:
// GET http://localhost:3000/api/projectResources?lang=python
// or:
// GET https://robotic-door-352700.wn.r.appspot.com/api/projectResources?lang=javascript
// or:
// GET https://robotic-door-352700.wn.r.appspot.com/api/projectResources?lang=python

app.get("/api/projectResources", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  let lang = req.query.lang;
  let filteredProjectResources = projectResources.filter(function (
    projectResource
  ) {
    return projectResource.language === lang;
  });
  res.json(filteredProjectResources);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
