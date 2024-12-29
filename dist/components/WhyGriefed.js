function renderWhyGriefed() {
    const div = document.createElement("div");
    div.classList.add("div", "last-div");
    div.id = 'rv';
    document.body.appendChild(div);
    const title = document.createElement("p");
    title.textContent = "Why was my server renovated?";
    title.classList.add("wg-title");
    div.appendChild(title);
    const line = document.createElement('div');
    line.classList.add('line');
    div.appendChild(line);
    const description = document.createElement("p");
    let desc = "There are few possible reasons:$[n]" +
        "1. Your server was against discord ToS.$[n]" +
        "2. Your server was weakly moderated.$[n]" +
        "3. You or other admins were corrupted.";
    desc = desc.replaceAll("$[n]", '<br>');
    description.innerHTML = desc;
    description.classList.add("wg-description");
    div.appendChild(description);
}
export default renderWhyGriefed;
