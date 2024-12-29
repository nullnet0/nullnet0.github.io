import { getData } from "../utils/DataUtils.js";
async function renderAboutMe() {
    const div = document.createElement('div');
    div.classList.add('div', 'fade-box');
    div.id = 'aboutme';
    document.body.appendChild(div);
    const title = document.createElement('p');
    title.classList.add('aboutme-title');
    let descr = "Hi! I'm $[name]";
    descr = descr.replaceAll(`$[name]`, `<span class="name">Sophie</span>`);
    title.innerHTML = descr;
    div.appendChild(title);
    const line = document.createElement('div');
    line.classList.add('line');
    div.appendChild(line);
    const desc = document.createElement('p');
    desc.classList.add('aboutme-desc');
    desc.id = "aboutme-desc";
    let description = "• $[time_1] of programming experience.$[n]" +
        "• Living in Poland.$[n]" +
        "• Currently developing mods/plugins for Minecraft.$[n]" +
        "• Taken by $[uwu] :3";
    description = description.replaceAll("$[viewsCount]", `<b style="color: hotpink">` + await getData() + `</b>`);
    description = description.replaceAll("$[time_1]", `<span class="name">2 years</span>`);
    description = description.replaceAll("$[uwu]", `<span class="name">A</span>`);
    description = description.replaceAll(`$[n]`, `<br>`);
    description = description.replaceAll(`$[b]`, `<b>`);
    description = description.replaceAll(`$[bb]`, `</b>`);
    description = description.replaceAll(`$[js]`, `<img src="../../img/javascript.png" alt="JS_Logo" width="32" height="32" style="border-radius: 5px; margin-right: 5px">`);
    description = description.replaceAll(`$[html]`, `<img src="../../img/html.png" alt="HTML_Logo" width="32" height="32" style="margin-right: 5px;">`);
    description = description.replaceAll(`$[css]`, `<img src="../../img/css.png" alt="CSS_Logo" width="32" height="32" style="margin-right: 5px;">`);
    description = description.replaceAll(`$[php]`, `<img src="../../img/php.png" alt="PHP_Logo" width="32" height="32" style="margin-right: 5px;">`);
    description = description.replaceAll(`$[java]`, `<img src="../../img/java.png" alt="JAVA_Logo" width="32" height="40" style="margin-right: 5px;">`);
    description = description.replaceAll(`$[mysql]`, `<img src="../../img/mysql.png" alt="MYSQL_Logo" width="40" height="32" style="margin-right: 5px;">`);
    description = description.replaceAll(`$[ts]`, `<img src="../../img/typescript.png" alt="TYPESCRIPT_Logo" width="32" height="32" style="margin-right: 5px;">`);
    description = description.replaceAll(`$[lua]`, `<img src="../../img/lua.png" alt="LUA_Logo" width="32" height="32" style="margin-right: 5px;">`);
    description = description.replaceAll(`$[python]`, `<img src="../../img/python.png" alt="PYTHON_Logo" width="32" height="32" style="margin-right: 5px;">`);
    description = description.replaceAll(`$[pan]`, `<img src="../../img/pansexual.png" alt="PANSEXUAL_Logo" width="42" height="38" style="margin-right: 5px;">`);
    description = description.replaceAll(`$[trans]`, `<img src="../../img/transgender.png" alt="TRANSGENDER_Logo" width="36" height="24" style="margin-right: 5px; margin-bottom: 6px">`);
    desc.innerHTML = description;
    div.appendChild(desc);
}
export default renderAboutMe;
