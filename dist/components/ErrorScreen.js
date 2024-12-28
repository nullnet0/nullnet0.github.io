function renderErrorScreen() {
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(75,75,75,0.58)';
    overlay.style.zIndex = '999';
    var loadingBox = document.createElement('div');
    loadingBox.classList.add('loading-box');
    loadingBox.id = 'loading-box-1';
    loadingBox.style.position = 'relative';
    loadingBox.style.margin = 'auto';
    loadingBox.style.top = '50%';
    loadingBox.style.transform = 'translateY(-50%)';
    loadingBox.style.zIndex = '1000';
    var terminalLoader = document.createElement('div');
    terminalLoader.classList.add('error-loader');
    var terminalHeader = document.createElement('div');
    terminalHeader.classList.add('terminal-header');
    var terminalTitle = document.createElement('div');
    terminalTitle.classList.add('terminal-title');
    terminalTitle.innerText = 'Status';
    var terminalControls = document.createElement('div');
    terminalControls.classList.add('terminal-controls');
    var closeControl = document.createElement('div');
    closeControl.classList.add('control', 'close');
    var minimizeControl = document.createElement('div');
    minimizeControl.classList.add('control', 'minimize');
    var maximizeControl = document.createElement('div');
    maximizeControl.classList.add('control', 'maximize');
    terminalControls.appendChild(closeControl);
    terminalControls.appendChild(minimizeControl);
    terminalControls.appendChild(maximizeControl);
    terminalHeader.appendChild(terminalTitle);
    terminalHeader.appendChild(terminalControls);
    var textDiv = document.createElement('div');
    textDiv.classList.add('text-error');
    textDiv.innerText = 'An error occurred. Contact me on discord and say what you did before the error happened.';
    terminalLoader.appendChild(terminalHeader);
    terminalLoader.appendChild(textDiv);
    loadingBox.appendChild(terminalLoader);
    overlay.appendChild(loadingBox);
    document.body.appendChild(overlay);
    document.title = "NotPiotrekDev [!] Error";
}
export default renderErrorScreen;
