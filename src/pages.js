import { renderNavbar } from "./navbar";
import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderFooter } from "./footer";
import { renderContact } from "./contact";

const addMain = () => {
  const main = document.createElement("main");
  const content = document.getElementById("content");
  main.id = "main";
  content.appendChild(main);
};

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const selectedElement = (element, color) => {
  element.style.color = color;
};

const renderContent = () => {
  renderNavbar();
  addMain();
  renderHome();
  renderFooter();

  const main = document.getElementById("main");
  const homeBtn = document.querySelector(".nav-item1");
  const homeBtnText = document.querySelector(".nav-item1 a");
  const menuBtn = document.querySelector(".nav-item2");
  const menuBtnText = document.querySelector(".nav-item2 a");
  const contactBtn = document.querySelector(".nav-item3");
  const contactBtnText = document.querySelector(".nav-item3 a");

  homeBtn.addEventListener("click", () => {
    removeAllChildNodes(main);
    renderHome();
    selectedElement(homeBtnText, "#e69b20");
    selectedElement(menuBtnText, "#c1c1c1");
    selectedElement(contactBtnText, "#c1c1c1");
  });

  menuBtn.addEventListener("click", () => {
    removeAllChildNodes(main);
    renderMenu();
    selectedElement(menuBtnText, "#e69b20");
    selectedElement(homeBtnText, "#c1c1c1");
    selectedElement(contactBtnText, "#c1c1c1");
  });

  contactBtn.addEventListener("click", () => {
    removeAllChildNodes(main);
    renderContact();
    selectedElement(contactBtnText, "#e69b20");
    selectedElement(menuBtnText, "#c1c1c1");
    selectedElement(homeBtnText, "#c1c1c1");
  });
};

export { renderContent };
