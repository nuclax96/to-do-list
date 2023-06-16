import { createDiv, createHeading } from "../../helperFunctions/createHtmlEl";
const fillHeader = function () {
  const header = document.querySelector("header");
  const headingDiv = createDiv("logoContainerHeader");
  const logoHeading = createHeading("h3", "Just To Do It", "headingLogo");
  console.log(logoHeading);
  header.append(headingDiv);
  headingDiv.append(logoHeading);
};

export default fillHeader;
