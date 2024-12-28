import { getData, updateData } from './DataUtils.js';
import renderErrorScreen from "./ErrorScreen.js";
import Config from "../config.js";
export function newView() {
    updateData()
        .then(() => {
        if (Config.debug) {
            console.log('Counter updated successfully.');
        }
    })
        .catch((error) => {
        console.error(error);
        renderErrorScreen();
    });
}
export function renderViews() {
    getData()
        .then((counter) => {
        // @ts-ignore
        document.getElementById('aboutme-desc').innerHTML.replace("$[viewsCount]", counter.toString());
        if (Config.debug) {
            console.log('Successfully rendered views.');
        }
    })
        .catch((error) => {
        console.error(error);
        renderErrorScreen();
    });
}
