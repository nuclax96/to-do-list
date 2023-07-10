const projectModalFunctions = (() => {
  const getAddProjectValues = () => {
    const projectName = document.querySelector("#projectName").value;
    return { projectName };
  };

  const clearProjectModalValues = () => {
    document.querySelector("#projectName").value = "";
  };

  const hideModal = () => {
    document.querySelector(".modal").classList.add("hidden");
  };
  const showModal = () => {
    document.querySelector(".modal").classList.remove("hidden");
  };
  return { getAddProjectValues, clearProjectModalValues, hideModal, showModal };
})();

export default projectModalFunctions;
