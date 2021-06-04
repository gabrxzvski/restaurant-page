const DOM = (() => {
    const content = document.getElementById('content');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.className = "nav-list";
    const navItem1 = document.createElement('li');
    navItem1.className = "nav-item1";
    const navItem1a = document.createElement('a');
    navItem1a.href = "#";
    navItem1a.textContent = "Home";
    const navItem2 = document.createElement('li');
    navItem2.className = "nav-item2";
    const navItem2a = document.createElement('a');
    navItem2a.href = "#";
    navItem2a.textContent = "Menu";
    const navItem3 = document.createElement('li');
    navItem3.className = "nav-item3";
    const navItem3a = document.createElement('a');
    navItem3a.href = "#";
    navItem3a.textContent = "Contact";

    return {
        content,
        nav,
        ul,
        navItem1,
        navItem1a,
        navItem2,
        navItem2a,
        navItem3,
        navItem3a
    }
    
})();

const renderNavbar = () => {
    DOM.content.appendChild(DOM.nav);
    DOM.nav.appendChild(DOM.ul);
    DOM.ul.appendChild(DOM.navItem1);
    DOM.ul.appendChild(DOM.navItem2);
    DOM.ul.appendChild(DOM.navItem3);
    DOM.navItem1.appendChild(DOM.navItem1a);
    DOM.navItem2.appendChild(DOM.navItem2a);
    DOM.navItem3.appendChild(DOM.navItem3a);
};

export default renderNavbar;