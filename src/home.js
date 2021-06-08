const renderHome = () => {
    const main = document.getElementById('main');
    const homepage = document.createElement('div');
    homepage.className = 'homepage';
    const title = document.createElement('h1');
    title.textContent = "THE COFFEE SHOP";
    const paragraph = document.createElement('p');
    paragraph.textContent = "This is the coffee shop, we sell all kinds of coffee, we started selling coffee a very long time ago and we've been keep selling it ever since, go to our Menu tab so you can see all the great variety of coffee that we have ! If you're interested, go to the Contact tab so you can find and contact us !"

    main.appendChild(homepage);
    homepage.appendChild(title);
    homepage.appendChild(paragraph);
};

export { renderHome };