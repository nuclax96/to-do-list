import { insertProjectLinks } from "../domHandler/nav/populateNav";
export const createProject = function (arr) {
  const obj = {
    projectId: "pj123",
    projectName: "Test Project",
  };
  arr.push(obj);
  insertProjectLinks(arr);
};
