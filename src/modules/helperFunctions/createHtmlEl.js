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
const createLink = (txt, linkClass) => {
  const createdEl = document.createElement("a");
  createdEl.textContent = txt;
  createdEl.setAttribute("href", "#");
  linkClass ? createdEl.classList.add(linkClass) : "";
  //   createdEl.classList.add(imgClass);
  return createdEl;
};

const createButton = (txt, btnClass) => {
  const createdEl = document.createElement("button");
  createdEl.textContent = txt;
  // createdEl.setAttribute("href", "#");
  btnClass ? createdEl.classList.add(btnClass) : "";
  //   createdEl.classList.add(imgClass);
  return createdEl;
};

const createInput = (inputId, nameAttr, type) => {
  const createdEl = document.createElement("input");
  // createdEl.textContent = txt;
  createdEl.setAttribute("type", type);
  createdEl.setAttribute("name", nameAttr);
  createdEl.id = inputId;
  // inputId ? createdEl.classList.add(inputId) : "";
  //   createdEl.classList.add(imgClass);
  return createdEl;
};

const createLabel = (txt, forAttr) => {
  const createdEl = document.createElement("label");
  createdEl.textContent = txt;
  createdEl.setAttribute("for", forAttr);
  return createdEl;
};

const createForm = (formClassName) => {
  const createdEl = document.createElement("form");
  createdEl.setAttribute("action", "#");
  createdEl.classList.add(formClassName);
  return createdEl;
};

const createSelectUsingArray = (name, id, arr = []) => {
  // const selectLabel = createLabel("Project", "projectList");
  const selectEL = document.createElement("select");
  selectEL.name = name;
  selectEL.id = id;
  arr.forEach((item) => {
    const optionEl = document.createElement("option");
    optionEl.value = item._id;
    optionEl.textContent = item._name;
    selectEL.append(optionEl);
  });
  return selectEL;
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
  createForm,
  createSelectUsingArray,
};
