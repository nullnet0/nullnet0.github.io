import Config from "./config.js";
import renderErrorScreen from "./utils/ErrorScreen.js";
import renderNav from './components/NavBar.js';
import renderAboutMe from "./components/AboutMe.js";
import renderProjects from "./components/Projects.js";
import renderWhyGriefed from "./components/WhyGriefed.js";
export default function render() {
    try {
        if (Config.websiteStatus === 0) {
            if (Config.debug) {
                console.log("Started rendering components");
            }
            renderNav();
            if (Config.debug) {
                console.log("Rendered Nav");
            }
            renderAboutMe();
            if (Config.debug) {
                console.log("Rendered AboutMe");
            }
            renderProjects();
            if (Config.debug) {
                console.log("Rendered Projects");
            }
            renderWhyGriefed();
            if (Config.debug) {
                console.log("Rendered WhyGriefed");
            }
            // newView();
            // renderViews();
            // @ts-ignore
            document.getElementById("loading-box-1").style.display = "none";
        }
    }
    catch (e) {
        // @ts-ignore
        document.getElementById("loading-box-1").style.display = "block";
        console.error(e);
        renderErrorScreen();
    }
}
