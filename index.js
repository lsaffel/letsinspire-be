const express = require("express");
const app = express();
const port = 3000;

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
