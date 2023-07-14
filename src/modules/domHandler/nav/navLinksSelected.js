const addClassToNavLink = (target, className) => {
  target.classList.add(className);
};

const clearClassNavLink = (nodeList, className) => {
  console.log(nodeList);
  nodeList.forEach((node) => {
    node.classList.remove(className);
  });
};

export { addClassToNavLink, clearClassNavLink };
