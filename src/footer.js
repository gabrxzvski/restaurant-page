const DOM = (() => {
    const content = document.getElementById('content');
    const footer = document.createElement('footer');
    footer.className = "footer";
    const p = document.createElement('p');
    p.textContent = "Developed by gabrxzvski";
    const aGithub = document.createElement('a');
    aGithub.href = "https://github.com/gabrxzvski";
    aGithub.target = "_blank";
    aGithub.rel = "noopener noreferrer";
    const iGithub = document.createElement('i');
    iGithub.className = "fab fa-github";

    return {
        content,
        footer,
        p,
        aGithub,
        iGithub
    }
})();

const renderFooter = () => {
    DOM.content.appendChild(DOM.footer);
    DOM.footer.appendChild(DOM.p);
    DOM.footer.appendChild(DOM.aGithub);
    DOM.aGithub.appendChild(DOM.iGithub);
};

export default renderFooter;