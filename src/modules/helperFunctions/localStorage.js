const localStorageFunctions = (() => {
  const getItemUsingId = function (itemName, itemId) {};

  const getAllItems = function (itemName) {
    const taskArrLocalStorage = localStorage.getItem("taskArr");
    return JSON.parse(taskArrLocalStorage);
  };

  const setLocalStorage = function (itemName, obj) {
    let currentItem = getAllItems(itemName);
    if (!currentItem) {
      currentItem = [];
    }
    currentItem.push(obj);

    localStorage.setItem("taskArr", JSON.stringify(currentItem));
  };

  const deleteItemUsingId = function (itemName, id) {
    const currentItem = getAllItems(itemName);
    const updatedArr = currentItem.filter((item) => {
      if (item._id !== id) return item;
    });
    localStorage.removeItem("taskArr");
    localStorage.setItem("taskArr", JSON.stringify(updatedArr));
  };
  const clearLocalStorage = function () {};

  return {
    setLocalStorage,
    clearLocalStorage,
    getAllItems,
    getItemUsingId,
    deleteItemUsingId,
  };
})();

export default localStorageFunctions;
