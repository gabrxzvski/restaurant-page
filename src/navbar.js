const renderNavbar = () => {

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

    content.appendChild(nav);
    nav.appendChild(ul);
    ul.appendChild(navItem1);
    ul.appendChild(navItem2);
    ul.appendChild(navItem3);
    navItem1.appendChild(navItem1a);
    navItem2.appendChild(navItem2a);
    navItem3.appendChild(navItem3a);
};

export { renderNavbar };