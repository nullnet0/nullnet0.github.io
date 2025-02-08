function renderProjects() {
    const div = document.createElement('div');
    div.classList.add('div', 'p-div');
    div.id = 'projects';
    document.body.appendChild(div);
    const title = document.createElement('p');
    title.classList.add("projects-title");
    title.textContent = 'Projects';
    title.id = 'projects';
    div.appendChild(title);
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('line');
    div.appendChild(lineDiv);
    addProject(div, "Kraken", "Kraken is an administration dashboard for minecraft servers. Currently private, not planning to release it to public.");
    addProject(div, "Discord Reaper V2", "Discord Reaper V2 is a private discord servers renovation tool.");
    addProject(div, "VoxelClient", "Voxel Client is a minecraft client currently indev, in future will be public.");
    addProject(div, "ServerTools", "Funny plugin (trust me)");
    addProject(div, "Rateusz Inc.", "https://rateusz-inc.github.io");
}
function addProject(parentDiv, title, description) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project', 'div');
    parentDiv.appendChild(projectDiv);
    const projectTitle = document.createElement('p');
    projectTitle.classList.add('p-title');
    projectTitle.textContent = title.toString();
    projectDiv.appendChild(projectTitle);
    const projectDescription = document.createElement('p');
    projectDescription.classList.add('p-description');
    projectDescription.textContent = description.toString();
    projectDiv.appendChild(projectDescription);
}
export default renderProjects;
