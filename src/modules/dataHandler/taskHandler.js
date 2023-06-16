import { fillTaskContainer } from "../domHandler/main/populateMain";

export const createTask = function () {
  const tempArr = [];
  const obj1 = {
    taskId: "abc123",
    taskName: "Test Task",
    dueDate: "duedate",
    priority: 1,
    completed: false,
    createdDate: "createDate",
    projectReferenceID: "pj123",
  };

  const obj2 = {
    taskId: "abc234",
    taskName: "Test Task",
    dueDate: "duedate",
    priority: 3,
    completed: false,
    createdDate: "createDate",
    projectReferenceID: "pj123",
  };

  tempArr.push(obj1);
  tempArr.push(obj2);
  fillTaskContainer(tempArr);
};
