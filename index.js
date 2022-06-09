const express = require("express");
const app = express();
const port = 3000;

// *** This is the original main branch ***

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
    resourceTitle: "Machine Learning Web Application",
    language: "python",
    link: "https://www.youtube.com/watch?v=xl0N7tHiwlw",
  },
];

// GET http://localhost:3000/api/projectResources?lang=javascript
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
