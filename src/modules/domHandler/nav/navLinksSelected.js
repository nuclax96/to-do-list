const addClassToNavLink = (target, className) => {
  target.classList.add(className);
};

const clearClassNavLink = (nodeList, className) => {
  nodeList.forEach((node) => {
    node.classList.remove(className);
  });
};

export { addClassToNavLink, clearClassNavLink };
