function renderNav() {
    const navDiv = document.createElement("div");
    navDiv.className = "nav";
    document.body.appendChild(navDiv);
    const p_title = document.createElement("p");
    p_title.className = "nav-title";
    p_title.textContent = "SophieTheShork";
    navDiv.appendChild(p_title);
    const p_option_aboutme = document.createElement("p");
    p_option_aboutme.className = "nav-option";
    p_option_aboutme.textContent = "About Me";
    p_option_aboutme.addEventListener("click", () => {
        window.location.href = "#aboutme";
    });
    navDiv.appendChild(p_option_aboutme);
    const p_option_projects = document.createElement("p");
    p_option_projects.className = "nav-option";
    p_option_projects.textContent = "Projects";
    p_option_projects.addEventListener("click", () => {
        window.location.href = "#projects";
    });
    navDiv.appendChild(p_option_projects);
    const p_option_contact = document.createElement("p");
    p_option_contact.className = "nav-option";
    p_option_contact.textContent = "Contact Me";
    p_option_contact.addEventListener("click", () => {
        window.location.href = "#contact";
    });
    navDiv.appendChild(p_option_contact);
}
export default renderNav;
