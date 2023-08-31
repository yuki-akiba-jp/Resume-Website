// import { projectsData } from "./projects.js";
console.log(projectsData);

const projectsContainer = document.getElementById("projects");

projectsData.forEach((project) => {
  const projectDiv = document.createElement("div");
  projectDiv.className = "project";

  const projectThumbnail = document.createElement("img");
  projectThumbnail.src = project.thumbnail;

  const projectContent = document.createElement("div");
  projectContent.className = "project-content";

  const projectTitle = document.createElement("h3");
  projectTitle.className = "project-title";
  projectTitle.textContent = project.title;

  const projectSummary = document.createElement("p");
  projectSummary.className = "project-summary";
  projectSummary.textContent = project.summary;

  const projectSource = document.createElement("a");
  projectSource.className = "project-source";
  projectSource.href = project.source;
  projectSource.textContent = "View on GitHub";
  projectSource.target = "_blank";

  projectContent.appendChild(projectTitle);
  projectContent.appendChild(projectSummary);
  projectContent.appendChild(projectSource);

  projectDiv.appendChild(projectThumbnail);
  projectDiv.appendChild(projectContent);

  projectsContainer.appendChild(projectDiv);
});
