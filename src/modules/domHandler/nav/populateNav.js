import {
  createDiv,
  createLink,
  createHeading,
  createButton,
} from "../../helperFunctions/createHtmlEl";

const insertProjectLinks = (projectsArr) => {
  const projectContatiner = document.querySelector(".projectsContainer");
  console.log(projectsArr);
  if (!projectsArr) return;

  projectsArr.forEach((item) => {
    const projectLink = createLink(item._name, "linkNav");
    projectLink.dataset.id = item._id;
    projectContatiner.append(projectLink);
  });
};

const fillProjectsContainer = () => {
  const navContainer = document.querySelector("nav");
  const projectNavContainer = createDiv("projectNavContainer");
  const headingContainer = createDiv("projectHeadingContainer");
  const projectsContainer = createDiv("projectsContainer");
  const addProjectBtn = createButton("Add Project", "addProjectBtn");
  const headingProject = createHeading("h3", `Projects`, "projectNavHeading");

  projectNavContainer.textContent = "";
  navContainer.append(projectNavContainer);
  projectNavContainer.append(headingContainer, projectsContainer);

  headingContainer.append(headingProject, addProjectBtn);
};

const fillNav = () => {
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
