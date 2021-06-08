const renderFooter = () => {

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

    content.appendChild(footer);
    footer.appendChild(p);
    footer.appendChild(aGithub);
    aGithub.appendChild(iGithub);
};

export { renderFooter };