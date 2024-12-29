function renderCopyright() {
    const div = document.createElement('div');
    div.classList.add('copyright');
    document.body.appendChild(div);
    const copyright = document.createElement('p');
    copyright.classList.add('copyright-text');
    copyright.textContent = "SophieTheShork © 2024-2025";
    div.appendChild(copyright);
}
export default renderCopyright;
