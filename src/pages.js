import { renderNavbar } from './navbar';
import { renderHome } from './home';
import { renderMenu } from './menu';
import { renderFooter } from './footer';


const addMain = () => {
    const main = document.createElement('main');
    const content = document.getElementById('content');
    main.id = "main";
    content.appendChild(main);
};

const removeAllChildNodes = parent => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

const renderContent = () => {

    renderNavbar();
    addMain();
    renderHome();
    renderFooter();

    const main = document.getElementById('main');
    const homeBtn = document.querySelector('.nav-item1');
    const menuBtn = document.querySelector('.nav-item2');

    homeBtn.addEventListener('click', () => {
        removeAllChildNodes(main);
        renderHome();
    });

    menuBtn.addEventListener('click', () => {
        removeAllChildNodes(main);
        renderMenu();
    });
};

export { renderContent };