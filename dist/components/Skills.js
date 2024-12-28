async function renderSkills() {
    const div = document.createElement('div');
    div.classList.add('skills');
    div.id = 'skills';
    document.body.appendChild(div);
    const title = document.createElement('p');
    title.classList.add('skills-title');
    title.textContent = 'Skills';
    div.appendChild(title);
    const subDiv = document.createElement('div');
    subDiv.classList.add('skills-subdiv');
    div.appendChild(subDiv);
    const jsSkill = document.createElement('div');
}
export default renderSkills;
