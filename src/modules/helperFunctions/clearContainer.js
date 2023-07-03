const clearContainer = (className) => {
  const divContainer = document.querySelector(`.${className}`);
  while (divContainer.hasChildNodes()) {
    divContainer.removeChild(divContainer.lastChild);
  }
};

export default clearContainer;
