const createDiv = (divClass) => {
  const createdDiv = document.createElement("div");
  createdDiv.classList.add(divClass);
  return createdDiv;
};

const insertIntoContainer = (container, child) => {
  console.log(child);
  container.appendChild(child);
};

const createHeading = (size, text, headingClass) => {
  const createdEl = document.createElement(size);
  createdEl.textContent = text;
  createdEl.classList.add(headingClass);
  return createdEl;
};
const createImage = (src, imgClass) => {
  const createdEl = document.createElement("img");
  createdEl.setAttribute("src", src);
  createdEl.classList.add(imgClass);
  return createdEl;
};
const createParagraph = (txt, paraClass) => {
  const createdEl = document.createElement("p");
  createdEl.textContent = txt;
  paraClass ? createdEl.classList.add(paraClass) : "";
  //   createdEl.classList.add(imgClass);
  return createdEl;
};
const createLink = function (txt, linkClass) {
  const createdEl = document.createElement("a");
  createdEl.textContent = txt;
  createdEl.setAttribute("href", "#");
  linkClass ? createdEl.classList.add(linkClass) : "";
  //   createdEl.classList.add(imgClass);
  return createdEl;
};

const createButton = function (txt, btnClass) {
  const createdEl = document.createElement("button");
  createdEl.textContent = txt;
  // createdEl.setAttribute("href", "#");
  btnClass ? createdEl.classList.add(btnClass) : "";
  //   createdEl.classList.add(imgClass);
  return createdEl;
};

const createInput = function (inputId, nameAttr, type) {
  const createdEl = document.createElement("input");
  // createdEl.textContent = txt;
  createdEl.setAttribute("type", type);
  createdEl.setAttribute("name", nameAttr);
  createdEl.id = inputId;
  // inputId ? createdEl.classList.add(inputId) : "";
  //   createdEl.classList.add(imgClass);
  return createdEl;
};

const createLabel = function (txt, forAttr) {
  const createdEl = document.createElement("label");
  createdEl.textContent = txt;

  createdEl.setAttribute("for", forAttr);
  // btnClass ? createdEl.classList.add(inputClass) : "";
  //   createdEl.classList.add(imgClass);
  return createdEl;
};

export {
  createDiv,
  insertIntoContainer,
  createHeading,
  createImage,
  createParagraph,
  createLink,
  createButton,
  createInput,
  createLabel,
};
