const DOM = (() => {
    const content = document.getElementById('content');
    const main = document.createElement('main');
    main.className = 'main';
    const menu = document.createElement('div');
    menu.className = 'menu';

    const menuItem1 = document.createElement('div');
    menuItem1.className = 'menu-item1';
    const menuItem1Pic = document.createElement('img');
    menuItem1Pic.src = './images/coffee-cup.png';
    const menuItem1description = document.createElement('p');
    menuItem1description.className = 'description';
    menuItem1description.textContent = "Espresso: A short, strong drink served in an espresso cup.";
    const menuItem1price = document.createElement('p');
    menuItem1price.textContent = '20$';

    const menuItem2 = document.createElement('div');
    menuItem2.className = 'menu-item2';
    const menuItem2Pic = document.createElement('img');
    menuItem2Pic.src = './images/iced-coffee.png';
    const menuItem2description = document.createElement('p');
    menuItem2description.className = 'description';
    menuItem2description.textContent = "Cold Brew Coffee: A smooth, cold beverage prepared by brewing freshly ground coffee in cold water. In the Cold Brew process, time makes up for heat.";
    const menuItem2price = document.createElement('p');
    menuItem2price.textContent = '60$';

    const menuItem3 = document.createElement('div');
    menuItem3.className = 'menu-item3';
    const menuItem3Pic = document.createElement('img');
    menuItem3Pic.src = './images/cappuccino.png';
    const menuItem3description = document.createElement('p');
    menuItem3description.className = 'description';
    menuItem3description.textContent = "Capuccino: A coffee drink consisting of espresso and a milk foam mixture. Served in a cappuccino cup.";
    const menuItem3price = document.createElement('p');
    menuItem3price.textContent = '30$';

    const menuItem4 = document.createElement('div');
    menuItem4.className = 'menu-item4';
    const menuItem4Pic = document.createElement('img');
    menuItem4Pic.src = './images/frappe.png';
    const menuItem4description = document.createElement('p');
    menuItem4description.className = 'description';
    menuItem4description.textContent = "Frappé: Rich iced coffee made of espresso, milk and ice. Flavoured syrup can be added. Mixed in a blender and served for example in a latte glass.";
    const menuItem4price = document.createElement('p');
    menuItem4price.textContent = '80$';

    const menuItem5 = document.createElement('div');
    menuItem5.className = 'menu-item5';
    const menuItem5Pic = document.createElement('img');
    menuItem5Pic.src = './images/muffin.png';
    const menuItem5description = document.createElement('p');
    menuItem5description.className = 'description';
    menuItem5description.textContent = "Muffin: A sweet quick bread baked in a cup-shaped pan.";
    const menuItem5price = document.createElement('p');
    menuItem5price.textContent = '100$';

    const menuItem6 = document.createElement('div');
    menuItem6.className = 'menu-item6';
    const menuItem6Pic = document.createElement('img');
    menuItem6Pic.src = './images/cookies.png';
    const menuItem6description = document.createElement('p');
    menuItem6description.className = 'description';
    menuItem6description.textContent = "Cookie: Freshly baked homemade cookies that are bold and fearless.";
    const menuItem6price = document.createElement('p');
    menuItem6price.textContent = '100$';

    return {
        content,
        main,
        menu,
        menuItem1,
        menuItem1Pic,
        menuItem1description,
        menuItem1price,
        menuItem2,
        menuItem2Pic,
        menuItem2description,
        menuItem2price,
        menuItem3,
        menuItem3Pic,
        menuItem3description,
        menuItem3price,
        menuItem4,
        menuItem4Pic,
        menuItem4description,
        menuItem4price,
        menuItem5,
        menuItem5Pic,
        menuItem5description,
        menuItem5price,
        menuItem6,
        menuItem6Pic,
        menuItem6description,
        menuItem6price
    }
})();

const renderMenu = () => {
    DOM.content.appendChild(DOM.main);
    DOM.main.appendChild(DOM.menu);

    DOM.menu.appendChild(DOM.menuItem1);
    DOM.menuItem1.appendChild(DOM.menuItem1Pic);
    DOM.menuItem1.appendChild(DOM.menuItem1description);
    DOM.menuItem1.appendChild(DOM.menuItem1price);

    DOM.menu.appendChild(DOM.menuItem2);
    DOM.menuItem2.appendChild(DOM.menuItem2Pic);
    DOM.menuItem2.appendChild(DOM.menuItem2description);
    DOM.menuItem2.appendChild(DOM.menuItem2price);

    DOM.menu.appendChild(DOM.menuItem3);
    DOM.menuItem3.appendChild(DOM.menuItem3Pic);
    DOM.menuItem3.appendChild(DOM.menuItem3description);
    DOM.menuItem3.appendChild(DOM.menuItem3price);

    DOM.menu.appendChild(DOM.menuItem4);
    DOM.menuItem4.appendChild(DOM.menuItem4Pic);
    DOM.menuItem4.appendChild(DOM.menuItem4description);
    DOM.menuItem4.appendChild(DOM.menuItem4price);

    DOM.menu.appendChild(DOM.menuItem5);
    DOM.menuItem5.appendChild(DOM.menuItem5Pic);
    DOM.menuItem5.appendChild(DOM.menuItem5description);
    DOM.menuItem5.appendChild(DOM.menuItem5price);

    DOM.menu.appendChild(DOM.menuItem6);
    DOM.menuItem6.appendChild(DOM.menuItem6Pic);
    DOM.menuItem6.appendChild(DOM.menuItem6description);
    DOM.menuItem6.appendChild(DOM.menuItem6price);

};

export default renderMenu;