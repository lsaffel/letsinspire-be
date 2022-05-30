const express = require("express");
const app = express();
const port = 3000;

//  Resource
let projectResources = [
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
    language: "javascript",
  },
  {
    id: 5,
    name: "Linda's Project",
    owner: "Linda",
    link: "https://github.com/list/anotherJavaScriptproject",
    language: "javascript",
  },
];

// GET http://localhost:3000/api/projectResources?lang=java
app.get("/api/projectResources", (req, res) => {
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
