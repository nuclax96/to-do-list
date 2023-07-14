import { insertProjectLinks } from "../domHandler/nav/populateNav";
import projectModalFunctions from "../domHandler/nav/projectModalFunctions";
import localStorageFunctions from "../helperFunctions/localStorage";
import Project from "../model/project";

const projectDataHandler = (() => {
  const addProject = () => {
    const inputValue = projectModalFunctions.getAddProjectValues();
    const projectObj = new Project(inputValue.projectName);
    return projectObj;
  };

  const displayProject = () => {
    const projectArr = localStorageFunctions.getAllItems("projectArr");
    if (projectArr) {
      insertProjectLinks(projectArr);
    } else {
      insertProjectLinks([]);
    }
  };

  const deleteProject = (id) => {
    localStorageFunctions.deleteItemUsingId("projectArr", id);
  };

  return { addProject, displayProject, deleteProject };
})();

export default projectDataHandler;
