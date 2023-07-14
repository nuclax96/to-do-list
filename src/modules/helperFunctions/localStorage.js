const localStorageFunctions = (() => {
  const getAllItems = (itemName = "taskArr") => {
    const taskArrLocalStorage = localStorage.getItem(itemName);
    return JSON.parse(taskArrLocalStorage);
  };
  const getItemUsingId = (itemName, id) => {
    const items = getAllItems(itemName);
    const itemArr = items.filter((item) => item._id === id);
    return itemArr;
  };

  const setLocalStorage = (itemName, obj) => {
    let currentItem = getAllItems(itemName);
    if (!currentItem) {
      currentItem = [];
    }
    currentItem.push(obj);
    console.log("Hello", currentItem);
    localStorage.setItem(itemName, JSON.stringify(currentItem));
  };

  const setLocalStorageItem = (itemName, arr) => {
    localStorage.setItem(itemName, JSON.stringify(arr));
  };

  const deleteItemUsingId = (itemName, id) => {
    const currentItem = getAllItems(itemName);
    const updatedArr = currentItem.filter((item) => {
      if (item._id !== id) return item;
    });
    localStorage.removeItem("taskArr");
    localStorage.setItem("taskArr", JSON.stringify(updatedArr));
  };
  const clearLocalStorage = (itemName) => {
    localStorage.removeItem(itemName);
  };

  const editLocalStorage = (item, property, newValue, id = "") => {
    const itemArr = getAllItems("taskArr");
    itemArr.forEach((element, index) => {
      if (element._id === id) {
        itemArr[index][property] = newValue;
      }
    });
    clearLocalStorage(item);
    setLocalStorageItem(item, itemArr);
  };

  return {
    setLocalStorage,
    setLocalStorageItem,
    clearLocalStorage,
    getAllItems,
    getItemUsingId,
    deleteItemUsingId,
    editLocalStorage,
  };
})();

export default localStorageFunctions;
