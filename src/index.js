import renderNavbar from './navbar';
import {renderHome} from './home';
import renderMenu from './menu';
import renderFooter from './footer';


renderNavbar();
renderHome();
renderFooter();

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const test = () => {
const content = document.getElementById('content');
const homeBtn = document.querySelector('.nav-item1');
const menuBtn = document.querySelector('.nav-item2');

homeBtn.addEventListener('click', () => {
    removeAllChildNodes(content);
    renderNavbar();
    renderHome();
    renderFooter();
})

menuBtn.addEventListener('click', () => {
    removeAllChildNodes(content);
    renderNavbar();
    renderMenu();
    renderFooter();
})
};


test();