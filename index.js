const express = require("express");
const app = express();
const port = 3000;

// Project Resource
let projects = [
  {
    id: 1,
    name: "Andy's Booklist Project",
    owner: "Andy",
    link: "https://github.com/andy/booklist",
    language: "java",
  },
  {
    id: 2,
    name: "Lisa's Project",
    owner: "Lisa",
    link: "https://github.com/list/booklist",
    language: "C#",
  },
];

// GET http://localhost:3000/api/projects?lang=java
app.get("/api/projects", (req, res) => {
  let lang = req.query.lang;
  let filteredProjects = projects.filter(function (project) {
    return project.language === lang;
  });
  res.json(filteredProjects);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});