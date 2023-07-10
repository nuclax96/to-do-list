import {
  createButton,
  createDiv,
  createForm,
  createInput,
  createLabel,
  createParagraph,
} from "../../helperFunctions/createHtmlEl";

const createProjectModal = () => {
  const modal = document.querySelector(".modal");
  const modalContainer = createDiv("modalContainer");
  const projectContainer = createForm("projectModalContainer");
  projectContainer.method = "GET";
  const projectHeadingContainer = createDiv("projectModalHeadingContainer");
  const closeModalBtn = createButton("X", "closeModal");
  const projectModalHeading = createParagraph("Add Project", "modalHeading");
  projectHeadingContainer.append(projectModalHeading, closeModalBtn);
  const projectNameInput = createInput("projectName", "projectName", "text");
  const projectNameLabel = createLabel("Project Name", "ProjectName");
  //   const taskCreateDateInput = createInput(
  //     "taskCreateDate",
  //     "taskCreateDate",
  //     "date"
  //   );
  //   const taskCreateDateLabel = createLabel("Create Date", "taskCreateDate");
  //   const taskDueDateInput = createInput("taskDueDate", "taskDueDate", "date");
  //   const taskDueDateLabel = createLabel("Due Date", "taskDueDate");
  // const submitBtn = createButton("Submit", "btnSubmitTask");
  const submitBtn = createInput("Submit", "btnSubmitProject", "submit");
  submitBtn.classList.add("btnSubmitProject");
  submitBtn.value = "Submit";
  modalContainer.append(projectHeadingContainer, projectContainer);
  projectNameInput.required = true;
  //   taskCreateDateInput.required = true;
  //   taskDueDateInput.required = true;
  projectContainer.append(
    projectNameLabel,
    projectNameInput,
    // taskCreateDateLabel,
    // taskCreateDateInput,
    // taskDueDateLabel,
    // taskDueDateInput,
    submitBtn
  );
  modal.append(modalContainer);
};

export default createProjectModal;
