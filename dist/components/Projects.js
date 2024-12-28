function renderProjects() {
    const div = document.createElement('div');
    div.classList.add('projects-div');
    div.id = 'projects';
    document.body.appendChild(div);
    const title = document.createElement('p');
    title.classList.add("projects-title");
    title.textContent = 'Projects';
}
export default renderProjects;
