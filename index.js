const express = require("express");
const app = express();
const port = 3000;

// note - this is a rough draft and will be added to, adjusted and tested

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
    link: "https://github.com/list/superproject",
    language: "python",
  },
  {
    id: 3,
    name: "Daniel's Project",
    owner: "Daniel",
    link: "https://github.com/list/anotherjavaproject",
    language: "java",
  },
  {
    id: 4,
    name: "Paul's Project",
    owner: "Paul",
    link: "https://github.com/list/mygreatjavascriptproject",
    language: "JavaScript",
  },
  {
    id: 5,
    name: "Linda's Project",
    owner: "Linda",
    link: "https://github.com/list/anotherJavaScriptproject",
    language: "JavaScript",
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
