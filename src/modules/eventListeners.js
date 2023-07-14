import {
  projectControllerFunction,
  taskControllerFunctions,
} from "./controller";

const taskEventsListener = (() => {
  const taskModalListeners = () => {
    const submitTaskBtn = document.querySelector(".btnSubmitTask");
    const closeTaskModalBtn = document.querySelector(".closeModal");
    submitTaskBtn.addEventListener("click", (e) => {
      e.preventDefault();
      taskControllerFunctions.addTask();
    });
    closeTaskModalBtn.addEventListener(
      "click",
      taskControllerFunctions.closeTaskModal
    );
  };
  const taskListeners = () => {
    const addTaskBtn = document.querySelector(".addTaskBtn");
    const deleteTasksBtn = document.querySelectorAll(".taskDeleteBtn");
    const taskStatusBtn = document.querySelectorAll(".taskStatusBtn");
    addTaskBtn.addEventListener("click", taskControllerFunctions.openTaskModal);
    taskStatusBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        taskControllerFunctions.taskStatus(e);
      });
    });
    deleteTasksBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        taskControllerFunctions.deleteTask(e);
      });
    });
  };
  // const newTaskEventListener = (id) => {
  //   const newTaskDiv = document.querySelector(`[data-id=${id}]`);
  //   const imgDeleteBtn = newTaskDiv.querySelector(".taskDeleteBtn");
  //   const taskStatusBtn = document.querySelectorAll(".taskStatusBtn");
  //   taskStatusBtn.forEach((btn) => {
  //     btn.addEventListener("click", (e) => {
  //       taskControllerFunctions.taskStatus(e);
  //     });
  //   });
  //   imgDeleteBtn.addEventListener("click", (e) => {
  //     taskControllerFunctions.deleteTask(e);
  //   });
  // };
  const newTaskEventListener = () => {
    const deleteTasksBtn = document.querySelectorAll(".taskDeleteBtn");
    const taskStatusBtn = document.querySelectorAll(".taskStatusBtn");
    taskStatusBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        taskControllerFunctions.taskStatus(e);
      });
    });
    deleteTasksBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        taskControllerFunctions.deleteTask(e);
      });
    });
  };

  const navTaskListener = () => {
    const taskNavElList = document.querySelectorAll(".taskNavLink");
    taskNavElList.forEach((item) => {
      item.addEventListener("click", (e) => {
        taskControllerFunctions.showTaskNavLink(e);
      });
    });
  };
  return {
    taskListeners,
    newTaskEventListener,
    taskModalListeners,
    navTaskListener,
  };
})();

const projectEventListeners = (() => {
  const addProjectBtn = () => {
    const btnAddProject = document.querySelector(".addProjectBtn");
    btnAddProject.addEventListener(
      "click",
      projectControllerFunction.showProjectModal
    );
  };

  const projectModalListeners = () => {
    const submitProjectBtn = document.querySelector(".btnSubmitProject");
    const closeProjectModalBtn = document.querySelector(".closeModal");
    submitProjectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      projectControllerFunction.addProject();
    });
    closeProjectModalBtn.addEventListener(
      "click",
      projectControllerFunction.closeProjectModal
    );
  };

  const projectNavListeners = () => {
    const navProjectLinks = document.querySelectorAll(".projectLink");
    const taskStatusBtn = document.querySelectorAll(".taskStatusBtn");
    const deleteProjectImg = document.querySelectorAll(".deleteProject");

    taskStatusBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        taskControllerFunctions.taskStatus(e);
      });
    });
    navProjectLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        projectControllerFunction.showProjectTasks(e);
      });
    });

    deleteProjectImg.forEach((link) => {
      link.addEventListener("click", (e) => {
        projectControllerFunction.deleteProject(e.target.dataset.id);
      });
    });
  };

  return { addProjectBtn, projectModalListeners, projectNavListeners };
})();

export { taskEventsListener, projectEventListeners };
