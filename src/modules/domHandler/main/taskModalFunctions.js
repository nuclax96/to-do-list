const taskModalFunctions = (() => {
  const getAddTaskValues = () => {
    const taskName = document.querySelector("#taskName").value;
    const taskCreateDate = document.querySelector("#taskCreateDate").value;
    const taskDueDate = document.querySelector("#taskDueDate").value;

    return { taskName, taskCreateDate, taskDueDate };
  };

  const clearTaskModalValues = () => {
    document.querySelector("#taskName").value = "";
    document.querySelector("#taskCreateDate").value = "";
    document.querySelector("#taskDueDate").value = "";
  };

  const hideModal = () => {
    document.querySelector(".modal").classList.add("hidden");
  };
  const showModal = () => {
    document.querySelector(".modal").classList.remove("hidden");
  };
  return { getAddTaskValues, clearTaskModalValues, hideModal, showModal };
})();

export default taskModalFunctions;
