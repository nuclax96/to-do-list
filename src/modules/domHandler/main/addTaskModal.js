import {
  createButton,
  createDiv,
  createForm,
  createHeading,
  createInput,
  createLabel,
  createParagraph,
} from "../../helperFunctions/createHtmlEl";

const createTaskContainer = function () {
  const modal = document.querySelector(".modal");
  const taskContainer = createForm("taskModalContainer");
  taskContainer.method = "GET";
  const modalContainer = createDiv("modalContainer");
  const taskHeadingContainer = createDiv("taskModalHeadingContainer");
  const closeModalBtn = createButton("X", "closeModal");
  const taskModalHeading = createParagraph("Add Task", "modalHeading");
  taskHeadingContainer.append(taskModalHeading, closeModalBtn);
  const taskNameInput = createInput("taskName", "taskName", "text");
  const taskNameLabel = createLabel("Task Name", "taskName");
  const taskCreateDateInput = createInput(
    "taskCreateDate",
    "taskCreateDate",
    "date"
  );
  const taskCreateDateLabel = createLabel("Create Date", "taskCreateDate");
  const taskDueDateInput = createInput("taskDueDate", "taskDueDate", "date");
  const taskDueDateLabel = createLabel("Due Date", "taskDueDate");
  // const submitBtn = createButton("Submit", "btnSubmitTask");
  const submitBtn = createInput("Submit", "btnSubmitTask", "submit");
  submitBtn.classList.add("btnSubmitTask");
  submitBtn.value = "Submit";
  modalContainer.append(taskHeadingContainer, taskContainer);
  taskNameInput.required = true;
  taskCreateDateInput.required = true;
  taskDueDateInput.required = true;
  taskContainer.append(
    taskNameLabel,
    taskNameInput,
    taskCreateDateLabel,
    taskCreateDateInput,
    taskDueDateLabel,
    taskDueDateInput,
    submitBtn
  );
  modal.append(modalContainer);
};

export default createTaskContainer;
