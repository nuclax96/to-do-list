import { createDiv } from "./helperFunctions/createHtmlEl";
const contentContainer = document.querySelector("#content");

const initalHtmlLoad = function () {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  contentContainer.append(header, nav, main, footer);
};

const createModal = function () {
  const modal = createDiv("modal");
  const mainContainer = document.querySelector("main");
  modal.classList.add("hidden");
  mainContainer.append(modal);
};

const loadTasks = function () {};

export { initalHtmlLoad, createModal };
