const projectModalFunctions = ((e) => {
  const getAddProjectValues = function () {
    const projectName = document.querySelector("#projectName").value;
    const projectCreateDate =
      document.querySelector("#projectCreateDate").value;
    const projectDueDate = document.querySelector("#projectDueDate").value;

    return { projectName, projectCreateDate, projectDueDate };
  };

  const clearProjectModalValues = function () {
    document.querySelector("#projectName").value = "";
    document.querySelector("#projectCreateDate").value = "";
    document.querySelector("#projectDueDate").value = "";
  };

  const hideModal = function () {
    document.querySelector(".modal").classList.add("hidden");
  };
  const showModal = function () {
    document.querySelector(".modal").classList.remove("hidden");
  };
  return { getAddProjectValues, clearProjectModalValues, hideModal, showModal };
})();

export default projectModalFunctions;
