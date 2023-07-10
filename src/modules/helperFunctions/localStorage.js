const localStorageFunctions = (() => {
  const getItemUsingId = () => {};

  const getAllItems = (itemName = "taskArr") => {
    const taskArrLocalStorage = localStorage.getItem(itemName);
    return JSON.parse(taskArrLocalStorage);
  };

  const setLocalStorage = (itemName, obj) => {
    let currentItem = getAllItems(itemName);
    if (!currentItem) {
      currentItem = [];
    }
    currentItem.push(obj);

    localStorage.setItem(itemName, JSON.stringify(currentItem));
  };

  const deleteItemUsingId = (itemName, id) => {
    const currentItem = getAllItems(itemName);
    const updatedArr = currentItem.filter((item) => {
      if (item._id !== id) return item;
    });
    localStorage.removeItem("taskArr");
    localStorage.setItem("taskArr", JSON.stringify(updatedArr));
  };
  const clearLocalStorage = () => {};

  return {
    setLocalStorage,
    clearLocalStorage,
    getAllItems,
    getItemUsingId,
    deleteItemUsingId,
  };
})();

export default localStorageFunctions;
