import {
  createDiv,
  createLink,
  createHeading,
  createButton,
} from "../../helperFunctions/createHtmlEl";

const insertProjectLinks = function (projectsArr) {
  const projectContatiner = document.querySelector(".projectsContainer");
  projectsArr.forEach((item) => {
    const projectLink = createLink(item.projectName, "linkNav");
    projectContatiner.append(projectLink);
  });
};

const fillProjectsContainer = function () {
  const navContainer = document.querySelector("nav");
  const projectNavContainer = createDiv("projectNavContainer");
  const headingContainer = createDiv("projectHeadingContainer");
  const projectsContainer = createDiv("projectsContainer");
  const addProjectBtn = createButton("Add Project", "addProjectBtn");
  const headingProject = createHeading(
    "h3",
    `Projects (${1})`,
    "projectNavHeading"
  );

  navContainer.append(projectNavContainer);
  projectNavContainer.append(headingContainer, projectsContainer);

  headingContainer.append(headingProject, addProjectBtn);
};

const fillNav = function () {
  const navContainer = document.querySelector("nav");
  const navTaskContainer = createDiv("taskNavContainer");
  const linkAll = createLink("All", "linkNav");
  const linkToday = createLink("Today", "linkNav");
  const linkWeek = createLink("Week", "linkNav");
  const linkImportant = createLink("Important", "linkNav");
  const linkCompleted = createLink("Completed", "linkNav");
  navContainer.append(navTaskContainer);
  navTaskContainer.append(
    linkAll,
    linkToday,
    linkWeek,
    linkImportant,
    linkCompleted
  );
};

export { fillNav, fillProjectsContainer, insertProjectLinks };
